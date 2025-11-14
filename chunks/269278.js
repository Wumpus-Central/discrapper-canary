n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(594190),
    a = n(594174),
    o = n(979651),
    s = n(341569),
    l = n(39604),
    c = n(626968);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class d extends r.Z {
    ensureInitialized() {
        if (!this.initialized)
            for (let e of ((this.initialized = !0), (0, c.C)()))
                "voiceChannel" === e.type
                    ? this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled)
                    : "application" === e.type &&
                      this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
    }
    registerApplication(e, t, n, r) {
        this.registrations.set(e, {
            type: "application",
            name: e,
            applicationId: t,
            isEnabled: r,
            importHandler: n,
        });
    }
    registerVoiceChannel(e, t, n) {
        this.registrations.set(e, {
            type: "voiceChannel",
            name: e,
            isEnabled: n,
            importHandler: t,
        });
    }
    isUserInVoiceChannel() {
        let e = a.default.getCurrentUser();
        if (null == e) return !1;
        let t = o.Z.getVoiceStateForUser(e.id);
        return (null == t ? void 0 : t.channelId) != null;
    }
    async updateActiveHandlers() {
        this.ensureInitialized();
        let e = (0, s.LI)(),
            t = i.ZP.getRunningGames(),
            n = this.isUserInVoiceChannel();
        if (!e) return void (await this.stopAllHandlers());
        let r = new Set(t.map((e) => e.id));
        for (let [e, t] of this.registrations) {
            let i = !1;
            null == t.isEnabled || t.isEnabled()
                ? "application" === t.type
                    ? (i = null == t.applicationId ? r.size > 0 : r.has(t.applicationId))
                    : "voiceChannel" === t.type && (i = n)
                : (i = !1);
            let a = this.activeHandlers.has(e);
            i && !a ? await this.startHandler(e, t) : !i && a && (await this.stopHandler(e));
        }
    }
    async startHandler(e, t) {
        let n = (0, (await t.importHandler()).default)(l.XK);
        n.start(),
            this.activeHandlers.set(e, {
                handler: n,
                registration: t,
            });
    }
    stopHandler(e) {
        let t = this.activeHandlers.get(e);
        null != t && (t.handler.stop(), this.activeHandlers.delete(e));
    }
    stopAllHandlers() {
        for (let e of Array.from(this.activeHandlers.keys())) this.stopHandler(e);
    }
    getHandlerState(e) {
        var t, n;
        let r = this.activeHandlers.get(e);
        return null == r || null == (t = (n = r.handler).getState) ? void 0 : t.call(n);
    }
    _initialize() {
        this.ensureInitialized();
    }
    _terminate() {
        for (let [, e] of this.activeHandlers) e.handler.stop();
        this.activeHandlers.clear();
    }
    constructor(...e) {
        super(...e),
            u(this, "registrations", new Map()),
            u(this, "activeHandlers", new Map()),
            u(this, "initialized", !1),
            u(this, "actions", {
                RUNNING_GAMES_CHANGE: () => this.updateActiveHandlers(),
                CLIPS_SETTINGS_UPDATE: () => this.updateActiveHandlers(),
                VOICE_CHANNEL_SELECT: () => this.updateActiveHandlers(),
                VOICE_STATE_UPDATES: () => this.updateActiveHandlers(),
            });
    }
}
let f = new d();
