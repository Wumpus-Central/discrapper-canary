"use strict";
n.d(t, { A: () => p });
var i = n(439372),
    r = n(952818),
    a = n(287809),
    s = n(977997),
    l = n(572164),
    o = n(539572),
    d = n(915725),
    c = n(974293),
    u = n(240899),
    _ = n(458977),
    E = n(526233),
    A = n(270962);
let h = n(786661).E.applicationIds["0"];
var I = n(876474);
class f extends i.A {
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
                    isEnabled: () => (0, c.$i)("Clip signal handler registration") && d.Ay.getEnableAutoclipping(),
                    importHandler: () => n.e("553725").then(n.bind(n, 691148)),
                },
                {
                    type: "voiceChannel",
                    name: "distributed-clipping",
                    isEnabled: () =>
                        d.Ay.getEnableAutoclipping() &&
                        _.A.getConfig({ location: "Clip signal handler registration" }).enableDistributedClips,
                    importHandler: () => n.e("878045").then(n.bind(n, 359788)),
                },
                {
                    type: "application",
                    name: "steam-timeline",
                    isEnabled: () =>
                        d.Ay.getEnableAutoclipping() &&
                        A.A.getConfig({ location: "Clip signal handler registration" }).enableSteamTimeline,
                    importHandler: () => n.e("533196").then(n.bind(n, 551367)),
                },
                {
                    type: "application",
                    name: "league-of-legends",
                    applicationId: I.m,
                    isEnabled: () =>
                        d.Ay.getEnableAutoclipping() &&
                        E.A.getConfig({ location: "Clip signal handler registration" }).enableLeagueEvents,
                    importHandler: () => n.e("618549").then(n.bind(n, 877588)),
                },
                {
                    type: "application",
                    name: "cs2-gsi",
                    applicationId: h,
                    isEnabled: () =>
                        d.Ay.getEnableAutoclipping() &&
                        u.A.getConfig({ location: "Clip signal handler registration" }).enableCs2Gsi,
                    importHandler: () => Promise.all([n.e("864931"), n.e("860838")]).then(n.bind(n, 525509)),
                },
            ]))
                switch (e.type) {
                    case "voiceChannel":
                        this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled);
                        break;
                    case "application":
                        this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
                }
    }
    registerApplication(e, t, n, i) {
        this.registrations.set(e, { type: "application", name: e, applicationId: t, isEnabled: i, importHandler: n });
    }
    registerVoiceChannel(e, t, n) {
        this.registrations.set(e, { type: "voiceChannel", name: e, isEnabled: n, importHandler: t });
    }
    isUserInVoiceChannel() {
        let e = a.default.getCurrentUser();
        if (null == e) return !1;
        let t = s.A.getVoiceStateForUser(e.id);
        return t?.channelId != null;
    }
    async updateActiveHandlers() {
        if ((this.ensureInitialized(), !(0, l.T)())) return void this.stopAllHandlers();
        let e = this.terminatedCount;
        for (let [t, n] of this.registrations) {
            let i = () => {
                    if (!(0, l.T)() || (null != n.isEnabled && !n.isEnabled())) return !1;
                    switch (n.type) {
                        case "application": {
                            let e = new Set(r.Ay.getRunningGames().map((e) => e.id));
                            if (null == n.applicationId) return e.size > 0;
                            return e.has(n.applicationId);
                        }
                        case "voiceChannel":
                            return this.isUserInVoiceChannel();
                        default:
                            return !1;
                    }
                },
                a = () => this.activeHandlers.has(t),
                s = i(),
                o = a();
            if (s && !o) {
                let r = (await n.importHandler()).default;
                if (this.terminatedCount !== e) return;
                i() && !a() && this.startHandler(t, n, r);
            } else !s && o && this.stopHandler(t);
        }
    }
    startHandler(e, t, n) {
        let i = n(o.Ts);
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
let p = new f();
