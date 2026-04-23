"use strict";
n.d(t, { A: () => O });
var r = n(284009),
    i = n.n(r),
    s = n(451988),
    a = n(157559),
    o = n(827343),
    l = n(439372),
    u = n(626584),
    c = n(961350),
    d = n(430452),
    _ = n(383501),
    f = n(528767),
    p = n(977997),
    h = n(403362),
    E = n(108713),
    m = n(124697),
    g = n(643501),
    A = n(30529),
    I = n(18125),
    T = n(544105),
    S = n(731854),
    y = n(985018);
let N = new u.A("GameConsoleManager");
async function v(e) {
    let t = _.A.getChannelId();
    i()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.Ay.isSelfMute() && (await o.A.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== d.Ay.isSelfDeaf() && o.A.toggleSelfDeaf({ syncRemote: !1 });
}
class C extends l.A {
    rollbackCommandTimeout = new s.Ep();
    awaitRemoteTimeout = new s.Ep();
    actions = {
        WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
        POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
        SESSIONS_REPLACE: () => this.handleSessionsChanged(),
        AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
        AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
        PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
        REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect(),
    };
    maybeConnect = (e) => {
        let t,
            n =
                ((t = g.default.getAwaitingRemoteSessionInfo()),
                e.find((e) => {
                    let n = T.hv.has(e.clientInfo.os),
                        r = null != p.A.getVoiceStateForSession(c.default.getId(), e.sessionId),
                        i = null == t || (0, A.X)(t.type) === e.clientInfo.os;
                    return n && i && r;
                }));
        if (null == n) return null;
        this.awaitRemoteTimeout.stop(), (0, E.m9)(n.sessionId);
        let r = p.A.getVoiceStateForSession(c.default.getId(), n.sessionId);
        null != r && v(r);
    };
    handleAudioStateToggle = (e) => {
        let { syncRemote: t, context: n } = e;
        if (!t || n !== S.x.DEFAULT) return;
        let r = d.Ay.isSelfDeaf(),
            i = d.Ay.isSelfMute(),
            s = c.default.getId(),
            a = g.default.getRemoteSessionId();
        if (null == a) return;
        let o = p.A.getVoiceStateForSession(s, a);
        null == o ||
            ((o.selfDeaf !== r || o.selfMute !== i) &&
                ((0, E.JS)(a, { selfDeaf: r, selfMute: i }),
                this.rollbackCommandTimeout.start(3e3, () => {
                    v(o);
                })));
    };
    handleVoiceStateUpdates = (e) => {
        let t = e.voiceStates,
            n = g.default.getRemoteSessionId();
        if (null == n) {
            let e = t
                .map((e) => {
                    let { sessionId: t } = e;
                    return null != t ? f.A.getSessionById(t) : null;
                })
                .filter(h.Vq);
            return this.maybeConnect(e);
        }
        let r = t.find((e) => {
            let { sessionId: t } = e;
            return t === n;
        });
        null != r && (this.rollbackCommandTimeout.stop(), v(r));
    };
    handleSessionsChanged = () => {
        let e = g.default.getRemoteSessionId();
        null != e && null == f.A.getSessionById(e) && (0, E.ZG)(),
            null == e && this.maybeConnect(Object.values(f.A.getSessions()));
    };
    handleWaitForRemoteSession = () => {
        this.awaitRemoteTimeout.start(6e4, () => {
            (0, E.ZG)(), a.A.show({ title: y.intl.string(y.t.wGMxr3), body: y.intl.string(y.t.i5k8b5) });
        });
    };
    handleConsoleCommandUpdate = (e) => {
        let { id: t, result: n, error: r } = e;
        if (("failed" !== n && "n/a" !== n) || null == r) return;
        N.info("Console command Error result:", n, r);
        let i = g.default.getAwaitingRemoteSessionInfo();
        if (i?.commandId !== t) return;
        let s = g.default.getDevice(i.type, i.deviceId ?? ""),
            a = (0, I.A)(
                s ?? { id: "id", platform: y.intl.string(y.t["UQMV/E"]), name: y.intl.string(y.t["UQMV/E"]) },
                n,
                r,
            );
        null != a &&
            m.A.showSelfDismissableAlert({
                title: a.title,
                body: a.body,
                errorCodeMessage: a.errorCodeMessage,
                reconnectPlatformType: a.isAccountLinkError ? i.type : void 0,
            }),
            T.v_.has(r.code) && this.awaitRemoteTimeout.isStarted()
                ? this.awaitRemoteTimeout.start(18e4, () => (0, E.ZG)(), !0)
                : "failed" === n && (0, E.ZG)();
    };
    handleRemoteSessionDisconnect = () => {
        this.awaitRemoteTimeout.stop();
    };
}
let O = new C();
