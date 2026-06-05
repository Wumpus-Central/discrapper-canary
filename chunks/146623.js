"use strict";
n.d(t, { A: () => f });
var i = n(439372),
    r = n(952818),
    s = n(287809),
    a = n(977997),
    o = n(572164),
    l = n(315240),
    u = n(974293),
    c = n(458977);
let d = (0, n(945810).mj)({
    kind: "user",
    name: "2026-06-magic-scoring",
    defaultConfig: { enableSteamTimeline: !1 },
    variations: { 1: { enableSteamTimeline: !0 } },
});
var _ = n(876474);
class h extends i.A {
    registrations = new Map();
    activeHandlers = new Map();
    initialized = !1;
    terminatedCount = 0;
    actions = {
        RUNNING_GAMES_CHANGE: () => this.updateActiveHandlers(),
        CLIPS_SETTINGS_UPDATE: () => this.updateActiveHandlers(),
        VOICE_CHANNEL_SELECT: () => this.updateActiveHandlers(),
        VOICE_STATE_UPDATES: () => this.updateActiveHandlers(),
    };
    ensureInitialized() {
        if (!this.initialized)
            for (let e of ((this.initialized = !0),
            [
                {
                    type: "voiceChannel",
                    name: "ml-audio-classification",
                    isEnabled: () => (0, u.$i)(),
                    importHandler: () => n.e("53725").then(n.bind(n, 691148)),
                },
                {
                    type: "voiceChannel",
                    name: "distributed-clipping",
                    isEnabled: () =>
                        c.A.getConfig({ location: "Clip signal handler registration" }).enableDistributedClips,
                    importHandler: () => n.e("78045").then(n.bind(n, 359788)),
                },
                {
                    type: "application",
                    name: "steam-timeline",
                    isEnabled: () => d.getConfig({ location: "Clip signal handler registration" }).enableSteamTimeline,
                    importHandler: () => n.e("33196").then(n.bind(n, 551367)),
                },
                {
                    type: "application",
                    name: "league-of-legends",
                    applicationId: _.m,
                    isEnabled: () => !1,
                    importHandler: () => n.e("18549").then(n.bind(n, 877588)),
                },
            ]))
                "voiceChannel" === e.type
                    ? this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled)
                    : "application" === e.type &&
                      this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
    }
    registerApplication(e, t, n, i) {
        this.registrations.set(e, { type: "application", name: e, applicationId: t, isEnabled: i, importHandler: n });
    }
    registerVoiceChannel(e, t, n) {
        this.registrations.set(e, { type: "voiceChannel", name: e, isEnabled: n, importHandler: t });
    }
    isUserInVoiceChannel() {
        let e = s.default.getCurrentUser();
        if (null == e) return !1;
        let t = a.A.getVoiceStateForUser(e.id);
        return t?.channelId != null;
    }
    async updateActiveHandlers() {
        if ((this.ensureInitialized(), !(0, o.TD)())) return void this.stopAllHandlers();
        let e = this.terminatedCount;
        for (let [t, n] of this.registrations) {
            let i = () => {
                    if (!(0, o.TD)()) return !1;
                    if (null == n.isEnabled || n.isEnabled()) {
                        if ("application" === n.type) {
                            let e = new Set(r.Ay.getRunningGames().map((e) => e.id));
                            return null == n.applicationId ? e.size > 0 : e.has(n.applicationId);
                        } else if ("voiceChannel" === n.type) return this.isUserInVoiceChannel();
                    }
                    return !1;
                },
                s = () => this.activeHandlers.has(t),
                a = i(),
                l = s();
            if (a && !l) {
                let r = (await n.importHandler()).default;
                if (this.terminatedCount !== e) return;
                i() && !s() && this.startHandler(t, n, r);
            } else !a && l && this.stopHandler(t);
        }
    }
    startHandler(e, t, n) {
        let i = n(l.Ts);
        i.start(), this.activeHandlers.set(e, { handler: i, registration: t });
    }
    stopHandler(e) {
        let t = this.activeHandlers.get(e);
        null != t && (t.handler.stop(), this.activeHandlers.delete(e));
    }
    stopAllHandlers() {
        for (let e of Array.from(this.activeHandlers.keys())) this.stopHandler(e);
    }
    getHandlerState(e) {
        let t = this.activeHandlers.get(e);
        return t?.handler.getState?.();
    }
    _initialize() {
        this.ensureInitialized();
    }
    _terminate() {
        this.terminatedCount++, this.stopAllHandlers();
    }
}
let f = new h();
