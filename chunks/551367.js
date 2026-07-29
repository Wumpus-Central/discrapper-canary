r.r(t), r.d(t, { default: () => k });
var a = r(626584),
    i = r(719129),
    n = r(572009),
    s = r(287809),
    o = r(723702),
    l = r(19575);
let c = new a.A("SteamEventsManager"),
    d = { pollingIntervalMs: 1e4, enabled: !0 };
class m {
    config;
    pollingInterval = null;
    trackedProcesses = new Map();
    isInitialized = !1;
    timelineEventCallbacks = new Set();
    constructor(e = {}) {
        this.config = { ...d, ...e };
    }
    initialize() {
        if (this.isInitialized || !this.config.enabled || !(0, o.isWindows)()) return;
        let e = s.default.getCurrentUser();
        (0, n.I9)(e) && (c.info("Initializing Steam Events Manager"), this.startPolling(), (this.isInitialized = !0));
    }
    destroy() {
        this.isInitialized &&
            (c.info("Destroying Steam Game Events Manager"),
            this.stopPolling(),
            this.trackedProcesses.clear(),
            (this.isInitialized = !1));
    }
    startPolling() {
        null == this.pollingInterval &&
            (this.checkForSteamProcess(),
            (this.pollingInterval = setInterval(() => {
                this.checkForSteamProcess();
            }, this.config.pollingIntervalMs)));
    }
    stopPolling() {
        null != this.pollingInterval && (clearInterval(this.pollingInterval), (this.pollingInterval = null));
    }
    async checkForSteamProcess() {
        try {
            let e = await i.r6();
            null != e && e > 0 ? this.handleSteamProcessDiscovered(e) : this.handleNoSteamProcessFound();
        } catch (e) {
            c.error("Error checking for Steam game events process", e);
        }
    }
    handleSteamProcessDiscovered(e) {
        this.trackedProcesses.has(e) ||
            (c.info("Steam game events process discovered", { pid: e }),
            this.trackedProcesses.set(e, Date.now()),
            this.watchSteamProcess(e));
    }
    handleNoSteamProcessFound() {
        this.trackedProcesses.size > 0 && (c.info("Steam game events process exited"), this.trackedProcesses.clear());
    }
    async watchSteamProcess(e) {
        try {
            let t = await i.GH(e);
            if (null != t) {
                c.warn("Steam game events watcher failed to attach", { pid: e, error: t }),
                    this.trackedProcesses.delete(e);
                return;
            }
            c.info("Steam game events watcher attached successfully", { pid: e }), this.setupGameEventsListener(e);
        } catch (t) {
            c.error("Steam game events watcher error", { pid: e, error: t }), this.trackedProcesses.delete(e);
        }
    }
    setupGameEventsListener(e) {
        let t = l.Ay.getDiscordUtils();
        null == t.startGameEvents
            ? c.warn("Steam game events native API not available")
            : t.startGameEvents(
                  e,
                  (e) => this.handleGameEvent(e),
                  (e) => this.handleHelloMessage(e),
              );
    }
    handleGameEvent(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (t) {
            c.warn("Failed to parse Steam game event", { eventJson: e, error: t });
            return;
        }
        "string" != typeof t.type || "object" != typeof t.payload
            ? c.warn("Invalid Steam game event format", { steamGameEvent: t })
            : "steam_timeline" === t.type
              ? this.handleSteamTimeline(t.payload)
              : c.warn(`Unknown Steam game event type: ${t.type}`);
    }
    handleSteamTimeline(e) {
        for (let t of (c.info("Steam timeline event received", { timelineEntry: e }), this.timelineEventCallbacks))
            try {
                t(e);
            } catch (e) {
                c.warn("Steam timeline event callback failed", { error: e });
            }
    }
    handleHelloMessage(e) {
        c.info("Steam game events hello message received", e);
    }
    getTrackedProcesses() {
        return Array.from(this.trackedProcesses).map((e) => {
            let [t, r] = e;
            return { pid: t, discovered: r };
        });
    }
    isTrackingProcess(e) {
        return this.trackedProcesses.has(e);
    }
    updateConfig(e) {
        let t = this.config.enabled;
        (this.config = { ...this.config, ...e }),
            !t && this.config.enabled ? this.initialize() : t && !this.config.enabled && this.destroy();
    }
    addTimelineEventCallback(e) {
        this.timelineEventCallbacks.add(e);
    }
    removeTimelineEventCallback(e) {
        this.timelineEventCallbacks.delete(e);
    }
}
let g = new m();
var h = r(372684);
let p = { scoreBoost: 0.2, eventType: h.rb.KILL, triggerClipCandidate: !1 };
({
    ...{
        killstreak: { scoreBoost: 0.7, eventType: h.rb.MULTIKILL, triggerClipCandidate: !0 },
        death: { scoreBoost: 0.1, eventType: h.rb.DEATH, triggerClipCandidate: !0 },
        roshan_death: { scoreBoost: 0.2, eventType: h.rb.UNCLASSIFIED, triggerClipCandidate: !0 },
        assist: { scoreBoost: 0.08, eventType: h.rb.ASSIST, triggerClipCandidate: !0 },
        buy_back: { scoreBoost: 0.3, eventType: h.rb.ITEM, triggerClipCandidate: !0 },
        tower_kill: { scoreBoost: 0.3, eventType: h.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        tormentor: { scoreBoost: 0.3, eventType: h.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        barracks_kill: { scoreBoost: 0.5, eventType: h.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        roshan_kill: { scoreBoost: 0.6, eventType: h.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        mega_creeps: { scoreBoost: 0.5, eventType: h.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        horn: { scoreBoost: 0.05, eventType: h.rb.ITEM, triggerClipCandidate: !1 },
        hero_pick: { scoreBoost: 0.02, eventType: h.rb.ITEM, triggerClipCandidate: !1 },
        enter_custom_game: { scoreBoost: 0.02, eventType: h.rb.ITEM, triggerClipCandidate: !1 },
        enter_demo: { scoreBoost: 0.02, eventType: h.rb.ITEM, triggerClipCandidate: !1 },
    },
    ...Object.fromEntries(
        [
            "abaddon",
            "abyssal_underlord",
            "alchemist",
            "ancient_apparition",
            "antimage",
            "arc_warden",
            "arc_warden_tempest_double",
            "axe",
            "bane",
            "batrider",
            "beastmaster",
            "bloodseeker",
            "bounty_hunter",
            "brewmaster",
            "brewmaster_earth",
            "brewmaster_fire",
            "brewmaster_storm",
            "brewmaster_void",
            "bristleback",
            "broodmother",
            "centaur",
            "chaos_knight",
            "chen",
            "clinkz",
            "crystal_maiden",
            "dark_seer",
            "dark_willow",
            "dawnbreaker",
            "dazzle",
            "death_prophet",
            "disruptor",
            "doom_bringer",
            "dragon_knight",
            "drow_ranger",
            "earth_spirit",
            "earthshaker",
            "elder_titan",
            "ember_spirit",
            "enchantress",
            "enigma",
            "faceless_void",
            "furion",
            "grimstroke",
            "gyrocopter",
            "hoodwink",
            "huskar",
            "invoker",
            "jakiro",
            "juggernaut",
            "keeper_of_the_light",
            "kez",
            "kunkka",
            "largo",
            "legion_commander",
            "leshrac",
            "lich",
            "life_stealer",
            "lina",
            "lion",
            "lone_druid",
            "luna",
            "lycan",
            "magnataur",
            "marci",
            "mars",
            "medusa",
            "meepo",
            "mirana",
            "monkey_king",
            "morphling",
            "muerta",
            "naga_siren",
            "necrolyte",
            "nevermore",
            "night_stalker",
            "nyx_assassin",
            "obsidian_destroyer",
            "ogre_magi",
            "omniknight",
            "oracle",
            "pangolier",
            "phantom_assassin",
            "phantom_lancer",
            "phoenix",
            "primal_beast",
            "puck",
            "pudge",
            "pugna",
            "queenofpain",
            "rattletrap",
            "razor",
            "riki",
            "ringmaster",
            "rubick",
            "sand_king",
            "shadow_demon",
            "shadow_shaman",
            "shredder",
            "silencer",
            "skeleton_king",
            "skywrath_mage",
            "slardar",
            "slark",
            "snapfire",
            "sniper",
            "spectre",
            "spirit_bear",
            "spirit_breaker",
            "storm_spirit",
            "sven",
            "techies",
            "templar_assassin",
            "terrorblade",
            "tidehunter",
            "tinker",
            "tiny",
            "treant",
            "troll_warlord",
            "tusk",
            "undying",
            "ursa",
            "vengefulspirit",
            "venomancer",
            "viper",
            "visage",
            "void_spirit",
            "warlock",
            "weaver",
            "windrunner",
            "winter_wyvern",
            "wisp",
            "witch_doctor",
            "zuus",
        ].map((e) => [e, p]),
    ),
});
let v = new a.A("SteamSignalHandler");
function k(e) {
    let t = !1;
    function r(r) {
        if (!t || 570 !== r.gameId) return;
        v.info("Steam timeline event arrived at handler", {
            gameId: r.gameId,
            gameIdType: typeof r.gameId,
            icon: r.icon,
            iconType: typeof r.icon,
            iconLength: r.icon?.length,
            title: r.title,
            isUserMarker: r.isUserMarker,
            timestamp: r.timestamp,
        });
        let a = 1 === r.isUserMarker;
        if (!a)
            return void v.info("Unrecognized Steam timeline event; ignoring", {
                gameId: r.gameId,
                icon: r.icon,
                title: r.title,
                reason: `icon "${r.icon}" not in DOTA2 icon table`,
            });
        let i = void 0 ?? h.rb.UNCLASSIFIED,
            n = (function (e) {
                if (1 === e.isUserMarker) return 1;
                switch (e.possibleClipPriority) {
                    case 3:
                        return 1;
                    case 2:
                        return 0.5;
                    default:
                        return 0;
                }
            })(r),
            s = {
                type: h.Gy.GAME_EVENT,
                eventType: i,
                title: r.title,
                description: r.description,
                eventIconTag: r.icon,
                eventName: void 0 ?? r.icon,
                score: void 0 ?? +!!a,
                importance: n,
            };
        v.info("Converting Steam timeline event to clip signal", {
            gameId: r.gameId?.toString(),
            icon: r.icon,
            eventName: s.eventName,
            eventType: i,
            scoreBoost: void 0,
            importance: n,
            isUserMarker: a,
            timestamp: r.timestamp,
        }),
            e(s, r.timestamp);
    }
    return {
        start() {
            t || ((0, o.isWindows)() && ((t = !0), g.initialize(), g.addTimelineEventCallback(r)));
        },
        stop() {
            t && (v.info("Stopping Steam signal handler"), (t = !1), g.removeTimelineEventCallback(r));
        },
        getState() {
            let e = (0, o.isWindows)();
            return { isActive: t, processesTracked: g.getTrackedProcesses().length, isAvailableForUser: e };
        },
    };
}
