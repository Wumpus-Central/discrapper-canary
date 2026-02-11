"use strict";
n.d(t, { A: () => w });
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
    h = n(977997),
    p = n(403362),
    g = n(108713),
    E = n(124697),
    A = n(643501),
    I = n(30529),
    T = n(18125),
    y = n(544105),
    S = n(731854),
    v = n(985018);
let C = new u.A("GameConsoleManager"),
    b = 3e3,
    N = 6e4,
    R = 18e4;
async function O(e) {
    let t = _.A.getChannelId();
    i()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.Ay.isSelfMute() && (await o.A.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== d.Ay.isSelfDeaf() && o.A.toggleSelfDeaf({ syncRemote: !1 });
}
function D(e) {
    let t = A.default.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = y.hv.has(e.clientInfo.os),
            r = null != h.A.getVoiceStateForSession(c.default.getId(), e.sessionId),
            i = null == t || (0, I.X)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class L extends l.A {
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
        let t = D(e);
        if (null == t) return null;
        this.awaitRemoteTimeout.stop(), (0, g.m9)(t.sessionId);
        let n = h.A.getVoiceStateForSession(c.default.getId(), t.sessionId);
        null != n && O(n);
    };
    handleAudioStateToggle = (e) => {
        let { syncRemote: t, context: n } = e;
        if (!t || n !== S.x.DEFAULT) return;
        let r = d.Ay.isSelfDeaf(),
            i = d.Ay.isSelfMute(),
            a = c.default.getId(),
            s = A.default.getRemoteSessionId();
        if (null == s) return;
        let o = h.A.getVoiceStateForSession(a, s);
        null == o ||
            ((o.selfDeaf !== r || o.selfMute !== i) &&
                ((0, g.JS)(s, { selfDeaf: r, selfMute: i }),
                this.rollbackCommandTimeout.start(b, () => {
                    O(o);
                })));
    };
    handleVoiceStateUpdates = (e) => {
        let t = e.voiceStates,
            n = A.default.getRemoteSessionId();
        if (null == n) {
            let e = t
                .map((e) => {
                    let { sessionId: t } = e;
                    return null != t ? f.A.getSessionById(t) : null;
                })
                .filter(p.Vq);
            return this.maybeConnect(e);
        }
        let r = t.find((e) => {
            let { sessionId: t } = e;
            return t === n;
        });
        null != r && (this.rollbackCommandTimeout.stop(), O(r));
    };
    handleSessionsChanged = () => {
        let e = A.default.getRemoteSessionId();
        null != e && null == f.A.getSessionById(e) && (0, g.ZG)(),
            null == e && this.maybeConnect(Object.values(f.A.getSessions()));
    };
    handleWaitForRemoteSession = () => {
        this.awaitRemoteTimeout.start(N, () => {
            (0, g.ZG)(), s.A.show({ title: v.intl.string(v.t.wGMxr3), body: v.intl.string(v.t.i5k8b5) });
        });
    };
    handleConsoleCommandUpdate = (e) => {
        let { id: t, result: n, error: r } = e;
        if (("failed" !== n && "n/a" !== n) || null == r) return;
        C.info("Console command Error result:", n, r);
        let i = A.default.getAwaitingRemoteSessionInfo();
        if (i?.commandId !== t) return;
        let a = A.default.getDevice(i.type, i.deviceId ?? ""),
            s = (0, T.A)(
                a ?? { id: "id", platform: v.intl.string(v.t["UQMV/E"]), name: v.intl.string(v.t["UQMV/E"]) },
                n,
                r,
            );
        null != s &&
            E.A.showSelfDismissableAlert({
                title: s.title,
                body: s.body,
                errorCodeMessage: s.errorCodeMessage,
                reconnectPlatformType: s.isAccountLinkError ? i.type : void 0,
            }),
            y.v_.has(r.code) && this.awaitRemoteTimeout.isStarted()
                ? this.awaitRemoteTimeout.start(R, () => (0, g.ZG)(), !0)
                : "failed" === n && (0, g.ZG)();
    };
    handleRemoteSessionDisconnect = () => {
        this.awaitRemoteTimeout.stop();
    };
}
let w = new L();
