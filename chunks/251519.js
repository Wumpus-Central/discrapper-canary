"use strict";
n.d(t, { A: () => L });
var r = n(284009),
    i = n.n(r),
    a = n(451988),
    s = n(157559),
    o = n(827343),
    l = n(439372),
    u = n(626584),
    c = n(961350),
    d = n(430452),
    _ = n(383501),
    f = n(528767),
    p = n(977997),
    h = n(403362),
    m = n(108713),
    g = n(124697),
    E = n(643501),
    A = n(30529),
    I = n(18125),
    T = n(544105),
    y = n(731854),
    S = n(985018);
let v = new u.A("GameConsoleManager"),
    C = 3e3,
    b = 6e4,
    N = 18e4;
async function R(e) {
    let t = _.A.getChannelId();
    i()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.A.isSelfMute() && (await o.A.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== d.A.isSelfDeaf() && o.A.toggleSelfDeaf({ syncRemote: !1 });
}
function O(e) {
    let t = E.default.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = T.hv.has(e.clientInfo.os),
            r = null != p.A.getVoiceStateForSession(c.default.getId(), e.sessionId),
            i = null == t || (0, A.X)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class D extends l.A {
    rollbackCommandTimeout = new a.Ep();
    awaitRemoteTimeout = new a.Ep();
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
        let t = O(e);
        if (null == t) return null;
        this.awaitRemoteTimeout.stop(), (0, m.m9)(t.sessionId);
        let n = p.A.getVoiceStateForSession(c.default.getId(), t.sessionId);
        null != n && R(n);
    };
    handleAudioStateToggle = (e) => {
        let { syncRemote: t, context: n } = e;
        if (!t || n !== y.x.DEFAULT) return;
        let r = d.A.isSelfDeaf(),
            i = d.A.isSelfMute(),
            a = c.default.getId(),
            s = E.default.getRemoteSessionId();
        if (null == s) return;
        let o = p.A.getVoiceStateForSession(a, s);
        null == o ||
            ((o.selfDeaf !== r || o.selfMute !== i) &&
                ((0, m.JS)(s, { selfDeaf: r, selfMute: i }),
                this.rollbackCommandTimeout.start(C, () => {
                    R(o);
                })));
    };
    handleVoiceStateUpdates = (e) => {
        let t = e.voiceStates,
            n = E.default.getRemoteSessionId();
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
        null != r && (this.rollbackCommandTimeout.stop(), R(r));
    };
    handleSessionsChanged = () => {
        let e = E.default.getRemoteSessionId();
        null != e && null == f.A.getSessionById(e) && (0, m.ZG)(),
            null == e && this.maybeConnect(Object.values(f.A.getSessions()));
    };
    handleWaitForRemoteSession = () => {
        this.awaitRemoteTimeout.start(b, () => {
            (0, m.ZG)(), s.A.show({ title: S.intl.string(S.t.wGMxr3), body: S.intl.string(S.t.i5k8b5) });
        });
    };
    handleConsoleCommandUpdate = (e) => {
        let { id: t, result: n, error: r } = e;
        if (("failed" !== n && "n/a" !== n) || null == r) return;
        v.info("Console command Error result:", n, r);
        let i = E.default.getAwaitingRemoteSessionInfo();
        if (i?.commandId !== t) return;
        let a = E.default.getDevice(i.type, i.deviceId ?? ""),
            s = (0, I.A)(
                a ?? { id: "id", platform: S.intl.string(S.t["UQMV/E"]), name: S.intl.string(S.t["UQMV/E"]) },
                n,
                r,
            );
        null != s &&
            g.A.showSelfDismissableAlert({
                title: s.title,
                body: s.body,
                errorCodeMessage: s.errorCodeMessage,
                reconnectPlatformType: s.isAccountLinkError ? i.type : void 0,
            }),
            T.v_.has(r.code) && this.awaitRemoteTimeout.isStarted()
                ? this.awaitRemoteTimeout.start(N, () => (0, m.ZG)(), !0)
                : "failed" === n && (0, m.ZG)();
    };
    handleRemoteSessionDisconnect = () => {
        this.awaitRemoteTimeout.stop();
    };
}
let L = new D();
