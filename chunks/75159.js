(i.r(e), i.d(e, { default: () => T }), i(321073));
var l = i(19575),
    a = i(31048);
function n(t, e) {
    return t.startTimeS - e.startTimeS;
}
class s {
    startTimeS;
    lastKillTimeS;
    participants = new Set();
    participantsByTeam = { BLUE: new Set(), RED: new Set() };
    deadParticipants = new Set();
    deathsByTeam = { BLUE: 0, RED: 0 };
    kills = 0;
    constructor(t) {
        ((this.startTimeS = t), (this.lastKillTimeS = t));
    }
    isExpiredAt(t) {
        return t - this.lastKillTimeS > 12;
    }
    exceedsMaxDurationAt(t) {
        return t - this.startTimeS > 50;
    }
    sharesParticipantsWith(t) {
        for (let e of t.keys()) if (this.participants.has(e) && !this.deadParticipants.has(e)) return !0;
        return !1;
    }
    recordKill(t, e, i) {
        for (let [t, i] of e)
            this.deadParticipants.has(t) || (this.participants.add(t), this.participantsByTeam[i].add(t));
        (this.deadParticipants.add(t.victimName),
            (this.deathsByTeam[i] += 1),
            (this.kills += 1),
            (this.lastKillTimeS = t.eventTimeS));
    }
    mergeWith(t) {
        for (let e of t.participants) this.participants.add(e);
        for (let e of t.participantsByTeam.BLUE) this.participantsByTeam.BLUE.add(e);
        for (let e of t.participantsByTeam.RED) this.participantsByTeam.RED.add(e);
        for (let e of t.deadParticipants) this.deadParticipants.add(e);
        ((this.deathsByTeam.BLUE += t.deathsByTeam.BLUE),
            (this.deathsByTeam.RED += t.deathsByTeam.RED),
            (this.kills += t.kills),
            (this.startTimeS = Math.min(this.startTimeS, t.startTimeS)),
            (this.lastKillTimeS = Math.max(this.lastKillTimeS, t.lastKillTimeS)));
    }
    finalize(t) {
        let e =
            this.kills >= 3 &&
            this.participants.size >= 6 &&
            this.participantsByTeam.BLUE.size >= 2 &&
            this.participantsByTeam.RED.size >= 2;
        return {
            startTimeS: this.startTimeS,
            lastKillTimeS: this.lastKillTimeS,
            endTimeS: this.lastKillTimeS + 1,
            kills: this.kills,
            deathsByTeam: { BLUE: this.deathsByTeam.BLUE, RED: this.deathsByTeam.RED },
            participants: new Set(this.participants),
            participantsByTeam: {
                BLUE: new Set(this.participantsByTeam.BLUE),
                RED: new Set(this.participantsByTeam.RED),
            },
            qualified: e,
            endedBy: t,
        };
    }
}
class r {
    activeFights = [];
    onChampionKill(t, e) {
        let i = (function (t, e) {
                let i = new Map(),
                    l = e.get(t.killerName);
                null != l && i.set(t.killerName, l);
                let a = e.get(t.victimName);
                for (let l of (null != a && i.set(t.victimName, a), t.assisters)) {
                    let t = e.get(l);
                    null != t && i.set(l, t);
                }
                return i;
            })(t, e),
            l = i.get(t.victimName);
        null == l || this.claimFightForKill(t.eventTimeS, i).recordKill(t, i, l);
    }
    onAce(t) {
        return this.closeAll("ace");
    }
    onTick(t) {
        let e = [],
            i = [];
        for (let l of this.activeFights)
            l.isExpiredAt(t)
                ? e.push(l.finalize("timeout"))
                : l.exceedsMaxDurationAt(t)
                  ? e.push(l.finalize("max_duration"))
                  : i.push(l);
        return ((this.activeFights = i), e.sort(n));
    }
    onGameEnd() {
        return this.closeAll("game_end");
    }
    reset() {
        this.activeFights = [];
    }
    closeAll(t) {
        if (0 === this.activeFights.length) return [];
        let e = this.activeFights.map((e) => e.finalize(t));
        return ((this.activeFights = []), e.sort(n));
    }
    claimFightForKill(t, e) {
        let i = null,
            l = new Set();
        for (let a of this.activeFights)
            !(a.isExpiredAt(t) || a.exceedsMaxDurationAt(t)) &&
                a.sharesParticipantsWith(e) &&
                (null == i ? (i = a) : (i.mergeWith(a), l.add(a)));
        return (
            null == i
                ? ((i = new s(t)), this.activeFights.push(i))
                : l.size > 0 && (this.activeFights = this.activeFights.filter((t) => !l.has(t))),
            i
        );
    }
}
var m = i(696016),
    o = i(801344),
    h = i(375708);
async function c(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.Ay.fetchRiotGamesLiveClientData(t, e);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
function d(t) {
    return "ORDER" === t ? "BLUE" : "CHAOS" === t ? "RED" : null;
}
function p(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = o.j3[t],
        l = e.triggerOverride ?? i.triggerClipCandidate;
    return {
        type: m.Gy.GAME_EVENT,
        eventType: i.eventType,
        eventName: t,
        score: e.scoreOverride ?? i.scoreBoost,
        importance: +!!l,
        title: e.title,
        description: e.description,
        hiddenFromTimeline: e.hiddenFromTimeline,
        clipWindow: e.clipWindow,
        additionalData: e.additionalData,
    };
}
class u {
    activePlayerRiotId = null;
    activePlayerName = null;
    nextEventId = 0;
    eventWindow = [];
    EVENT_WINDOW_SIZE = 100;
    previousPlayerState = null;
    gameTime = 0;
    isFirstPoll = !0;
    isInGame = !1;
    isDead = !1;
    currentHealthFraction = 1;
    consecutiveFailures = 0;
    teamFightTracker = new r();
    playerTeamByName = new Map();
    activePlayerTeam = null;
    lastEventGameTimeS = null;
    lastEventWallMs = 0;
    emitSignal;
    constructor(t) {
        this.emitSignal = t;
    }
    async poll() {
        let t = await this.fetchActivePlayerData();
        if (null == t && !this.isInGame) return !0;
        (null != t && (this.handleInGame(t), await this.pollPlayerState(t)), await this.pollEvents());
        let e = this.estimateGameTimeS();
        if (null != e) for (let t of this.teamFightTracker.onTick(e)) this.emitTeamFightResult(t);
        return (null == t && this.handlePollFailure(), !0);
    }
    estimateGameTimeS() {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventGameTimeS + (Date.now() - this.lastEventWallMs) / 1e3;
    }
    gameTimeToClipTs(t) {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventWallMs - (this.lastEventGameTimeS - t) * 1e3 - (0, a.p)();
    }
    async fetchActivePlayerData() {
        try {
            let t = await c("activeplayer");
            if (null == t.riotId) return null;
            return t;
        } catch (t) {
            return null;
        }
    }
    handleInGame(t) {
        ((this.consecutiveFailures = 0),
            null == this.activePlayerRiotId &&
                ((this.activePlayerRiotId = t.riotId ?? null), (this.activePlayerName = t.riotIdGameName ?? "")),
            this.isInGame ||
                ((this.isInGame = !0),
                m.nx.info(
                    `[LoL] connected to Live Client API \u{2014} game started (player=${this.activePlayerName ?? "?"})`,
                ),
                this.emitLifecycleEvent(o.n_.GameStart, h.intl.string(h.t["94Kji7"]), h.intl.string(h.t.fyCsox))),
            (this.currentHealthFraction = (function (t) {
                let { currentHealth: e, maxHealth: i } = t.championStats;
                return i <= 0 ? 1 : Math.max(0, Math.min(1, e / i));
            })(t)));
    }
    handlePollFailure() {
        if (
            this.isInGame &&
            ((this.consecutiveFailures += 1),
            m.nx.info(`[LoL] active-player poll failed (${this.consecutiveFailures}/10)`),
            this.consecutiveFailures >= 10)
        ) {
            for (let t of (m.nx.info("[LoL] game ended (no API response)"), this.teamFightTracker.onGameEnd()))
                this.emitTeamFightResult(t);
            (this.emitLifecycleEvent(o.n_.GameEnd, h.intl.string(h.t.hlOYoA), h.intl.string(h.t.NxavgD)),
                this.resetGameState());
        }
    }
    async pollPlayerState(t) {
        let e;
        if (null == this.activePlayerRiotId) return;
        try {
            e = await c("playerlist");
        } catch (t) {
            return;
        }
        if (!Array.isArray(e)) return;
        let i = e.find((t) => t.riotId === this.activePlayerRiotId || t.riotIdGameName === this.activePlayerName);
        if (null == i) return;
        (this.updateTeamRoster(e, i), this.updateDeadState(i.isDead));
        let l = new Map();
        for (let t of i.items) l.set(t.itemID, t);
        let a = { level: t.level ?? 1, currentGold: t.currentGold ?? 0, items: l };
        ((this.gameTime += 1),
            null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, a),
            (this.previousPlayerState = a));
    }
    updateTeamRoster(t, e) {
        for (let e of t) {
            let t = d(e.team);
            null != t &&
                null != e.riotIdGameName &&
                "" !== e.riotIdGameName &&
                this.playerTeamByName.set(e.riotIdGameName, t);
        }
        this.activePlayerTeam = d(e.team);
    }
    updateDeadState(t) {
        t !== this.isDead &&
            ((this.isDead = t),
            t || this.emitLifecycleEvent(o.n_.Respawn, h.intl.string(h.t.ebbBDl), h.intl.string(h.t.CCiFY7)));
    }
    emitLifecycleEvent(t, e, i) {
        (m.nx.info(`[LoL] lifecycle marker: ${t}`),
            this.emitSignal({
                type: m.Gy.GAME_EVENT,
                eventType: m.rb.UNCLASSIFIED,
                eventName: t,
                title: e,
                description: i,
                score: 0,
                importance: 0,
            }));
    }
    async pollEvents() {
        try {
            let t = await c("eventdata", { eventID: this.nextEventId });
            if (t.Events?.length > 0) {
                m.nx.info(`[LoL] eventdata received: ${t.Events.map((t) => t.EventName).join(", ")}`);
                let e = null;
                for (let i of t.Events)
                    "number" == typeof i.EventTime && (null == e || i.EventTime > e) && (e = i.EventTime);
                if (
                    (null != e &&
                        (null == this.lastEventGameTimeS || e > this.lastEventGameTimeS) &&
                        ((this.lastEventGameTimeS = e), (this.lastEventWallMs = Date.now())),
                    this.isFirstPoll)
                )
                    (m.nx.info(`[LoL] first poll \u{2014} skipping ${t.Events.length} historical events`),
                        (this.isFirstPoll = !1));
                else
                    for (let e of t.Events) {
                        let t;
                        if ("ChampionKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            ((t = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: e.KillerName,
                                victimName: e.VictimName,
                                playerIsKiller: i,
                                playerIsAssister: l,
                                victimIsActivePlayer: e.VictimName === this.activePlayerName,
                            }),
                                "number" == typeof e.EventTime &&
                                    Number.isFinite(e.EventTime) &&
                                    this.teamFightTracker.onChampionKill(
                                        {
                                            eventTimeS: e.EventTime,
                                            killerName: e.KillerName ?? "",
                                            victimName: e.VictimName ?? "",
                                            assisters: e.Assisters ?? [],
                                        },
                                        this.playerTeamByName,
                                    ));
                        } else if ("Ace" === e.EventName)
                            for (let t of this.teamFightTracker.onAce(e.EventTime)) this.emitTeamFightResult(t);
                        else if ("Multikill" === e.EventName)
                            t = {
                                type: "Multikill",
                                timestamp: this.gameTime,
                                killStreak: e.KillStreak || 1,
                                killerName: e.KillerName ?? "",
                                killerIsActivePlayer: e.KillerName === this.activePlayerName,
                            };
                        else if ("TurretKilled" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = { type: "TurretKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("InhibKilled" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = { type: "InhibitorKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("DragonKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = {
                                type: "DragonKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                killerName: e.KillerName ?? "",
                                drakeName: e.DragonType,
                                stolen: (e.Stolen ?? "") === "True",
                            };
                        } else if ("BaronKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = {
                                type: "BaronKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                stolen: (e.Stolen ?? "") === "True",
                                killerName: e.KillerName ?? "",
                            };
                        } else if ("GameEnd" === e.EventName) {
                            for (let t of this.teamFightTracker.onGameEnd()) this.emitTeamFightResult(t);
                            t = { type: "GameEnd", timestamp: this.gameTime, win: (e.Result ?? "") === "Win" };
                        }
                        null != t && this.addEventToWindow(t);
                    }
                let i = t.Events[t.Events.length - 1];
                this.nextEventId = i.EventID + 1;
            }
        } catch (t) {}
    }
    addEventToWindow(t) {
        (this.eventWindow.push(t), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift());
        let e = (function (t) {
            switch (t.type) {
                case "ChampionKill":
                    if (t.playerIsKiller)
                        return p(o.n_.ChampionKill, {
                            title: h.intl.string(h.t.ky6syM),
                            description: h.intl.formatToPlainString(h.t["2sxvfW"], { name: t.victimName }),
                        });
                    if (t.playerIsAssister)
                        return p(o.n_.ChampionAssist, {
                            title: h.intl.string(h.t["3CK6jo"]),
                            description: h.intl.formatToPlainString(h.t.NyJvKf, { name: t.victimName }),
                        });
                    if (t.victimIsActivePlayer)
                        return p(o.n_.ChampionDeath, {
                            title: h.intl.string(h.t["C/WqTT"]),
                            description: h.intl.formatToPlainString(h.t["wZ/IFO"], { name: t.killerName }),
                        });
                    return null;
                case "Multikill":
                    if (t.killerIsActivePlayer) {
                        let e = Math.max(2, Math.min(5, t.killStreak)),
                            i = o.Br[e],
                            { title: l, description: a } = (() => {
                                switch (e) {
                                    case 2:
                                        return {
                                            title: h.intl.string(h.t["+K7bbR"]),
                                            description: h.intl.string(h.t["+zq0aZ"]),
                                        };
                                    case 3:
                                        return {
                                            title: h.intl.string(h.t.fzI1wr),
                                            description: h.intl.string(h.t.brXPUX),
                                        };
                                    case 4:
                                        return {
                                            title: h.intl.string(h.t.ntn0Eu),
                                            description: h.intl.string(h.t.GcWpwl),
                                        };
                                    case 5:
                                        return {
                                            title: h.intl.string(h.t.JMxzCr),
                                            description: h.intl.string(h.t["9yXGOS"]),
                                        };
                                    default:
                                        return { title: void 0, description: void 0 };
                                }
                            })();
                        return p(i, { title: l, description: a });
                    }
                    return null;
                case "LevelUp":
                    return p(o.n_.LevelUp, {
                        title: h.intl.string(h.t["cp+kpc"]),
                        description: h.intl.formatToPlainString(h.t["le5/P1"], { level: t.newLevel }),
                    });
                case "ItemPurchase":
                    return p(o.n_.ItemPurchase, {
                        title: h.intl.string(h.t["89CDAj"]),
                        description: h.intl.formatToPlainString(h.t.cpRNkD, { itemName: t.itemName }),
                        hiddenFromTimeline: !0,
                    });
                case "TurretKill":
                    if (t.playerHelpedKill)
                        return p(o.n_.TurretKill, {
                            title: h.intl.string(h.t["SoivN/"]),
                            description: h.intl.string(h.t.eZ1OSn),
                        });
                    return null;
                case "InhibitorKill":
                    if (t.playerHelpedKill)
                        return p(o.n_.InhibitorKill, {
                            title: h.intl.string(h.t["0Ttct6"]),
                            description: h.intl.string(h.t.Pewjjq),
                        });
                    return null;
                case "DragonKill":
                    if (t.playerHelpedKill) {
                        if (t.stolen)
                            return p(o.n_.DragonSteal, {
                                title: h.intl.formatToPlainString(h.t.DUQK8U, { drakeName: t.drakeName }),
                                description: h.intl.formatToPlainString(h.t["8qsedd"], { killerName: t.killerName }),
                            });
                        return p(o.n_.DragonKill, {
                            title: h.intl.formatToPlainString(h.t["AjNN1/"], { drakeName: t.drakeName }),
                            description: h.intl.formatToPlainString(h.t.HlopAO, { killerName: t.killerName }),
                        });
                    }
                    return null;
                case "BaronKill":
                    if (t.playerHelpedKill) {
                        if (t.stolen)
                            return p(o.n_.BaronSteal, {
                                title: h.intl.string(h.t["+WhzbK"]),
                                description: h.intl.formatToPlainString(h.t.FUBbYu, { killerName: t.killerName }),
                            });
                        return p(o.n_.BaronKill, {
                            title: h.intl.string(h.t.KohKss),
                            description: h.intl.formatToPlainString(h.t["4yYLUi"], { killerName: t.killerName }),
                        });
                    }
                    return null;
                case "GameEnd":
                    if (t.win)
                        return p(o.n_.Victory, {
                            title: h.intl.string(h.t.vS7yZW),
                            description: h.intl.string(h.t.qkARs9),
                        });
                    return p(o.n_.Defeat, {
                        title: h.intl.string(h.t["+sdglm"]),
                        description: h.intl.string(h.t.xdsqBt),
                    });
                default:
                    return null;
            }
        })(t);
        null != e &&
            (e.type === m.Gy.GAME_EVENT &&
                (e.eventName === o.n_.ChampionKill && (e.additionalData = { [o.kt]: this.currentHealthFraction }),
                m.nx.info(`[LoL] emit event: ${e.eventName} score=${e.score?.toFixed(2)} importance=${e.importance}`)),
            this.emitSignal(e));
    }
    activePlayerInFight(t) {
        return null != this.activePlayerName && t.has(this.activePlayerName);
    }
    emitTeamFightResult(t) {
        if (!t.qualified || null == this.activePlayerTeam || !this.activePlayerInFight(t.participants)) return;
        let e = "BLUE" === this.activePlayerTeam ? "RED" : "BLUE",
            i = t.deathsByTeam[e],
            l = t.deathsByTeam[this.activePlayerTeam],
            a = (0, o.VX)(t, this.activePlayerTeam),
            n = i >= l && a >= 0,
            s = n ? a + o.zd : a,
            r = (0, o.VD)(s);
        m.nx.info(
            `[LoL] team fight ended (${t.endedBy}): ally ${i} - ${l} enemy, participants=${t.participants.size} (${t.participantsByTeam[this.activePlayerTeam].size}v${t.participantsByTeam[e].size}), score=${s} (event ${r.toFixed(3)}), lasted ${(t.endTimeS - t.startTimeS).toFixed(1)}s, winning=${n}`,
        );
        let c = this.gameTimeToClipTs(t.endTimeS),
            d = this.gameTimeToClipTs(t.startTimeS),
            u = null != d && null != c ? { startMs: d - 5e3, endMs: c + 3e3 } : void 0,
            v = { [o.nn]: s, ...(null != d ? { [o.zS]: d } : {}), ...(null != c ? { [o.QL]: c } : {}) },
            T = n
                ? p(o.n_.TeamFightWin, {
                      title: h.intl.string(h.t["+1CM/5"]),
                      description: h.intl.formatToPlainString(h.t["2bu+0V"], { allyKills: i, enemyKills: l }),
                      clipWindow: u,
                      scoreOverride: r,
                      additionalData: v,
                  })
                : p(o.n_.TeamFight, {
                      title: h.intl.string(h.t.zi28x1),
                      description: h.intl.formatToPlainString(h.t.HTJgep, { allyKills: i, enemyKills: l }),
                      clipWindow: u,
                      scoreOverride: r,
                      additionalData: v,
                  });
        null == c ? this.emitSignal(T) : this.emitSignal(T, c);
    }
    detectStateChanges(t, e) {
        if (e.level > t.level) {
            let t = { type: "LevelUp", timestamp: this.gameTime, newLevel: e.level };
            this.addEventToWindow(t);
        }
        if (e.currentGold < t.currentGold) {
            for (let [, i] of e.items)
                if (null == t.items.get(i.itemID)) {
                    let t = {
                        type: "ItemPurchase",
                        timestamp: this.gameTime,
                        itemId: i.itemID,
                        itemName: i.displayName,
                        itemCount: i.count,
                    };
                    this.addEventToWindow(t);
                }
        }
    }
    resetGameState() {
        ((this.activePlayerRiotId = null),
            (this.activePlayerName = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0),
            (this.isInGame = !1),
            (this.isDead = !1),
            (this.currentHealthFraction = 1),
            (this.consecutiveFailures = 0),
            this.teamFightTracker.reset(),
            this.playerTeamByName.clear(),
            (this.activePlayerTeam = null),
            (this.lastEventGameTimeS = null),
            (this.lastEventWallMs = 0));
    }
    reset() {
        this.resetGameState();
    }
    getEventWindow() {
        return this.eventWindow;
    }
}
i(876474);
class v {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(t) {
        this.eventPoller = new u(t);
    }
    start() {
        this.isPolling ||
            ((this.isPolling = !0),
            (this.pollIntervalId = setInterval(() => {
                this.poll();
            }, 1e3)));
    }
    stop() {
        this.isPolling &&
            ((this.isPolling = !1),
            null != this.pollIntervalId && (clearInterval(this.pollIntervalId), (this.pollIntervalId = null)),
            this.eventPoller.reset());
    }
    getState() {
        return { isPolling: this.isPolling };
    }
    async poll() {
        await this.eventPoller.poll();
    }
}
let T = (t) => new v(t);
