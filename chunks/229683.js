"use strict";
n.d(t, { A: () => O });
var i = n(284009),
    r = n.n(i),
    s = n(451988),
    a = n(157559),
    o = n(827343),
    l = n(439372),
    u = n(626584),
    c = n(495544),
    d = n(235058),
    _ = n(763827),
    f = n(528767),
    h = n(977997),
    p = n(403362),
    E = n(469802),
    m = n(124697),
    g = n(643501),
    A = n(30529),
    I = n(975571),
    T = n(544105),
    S = n(375708),
    N = n(731854);
let y = new u.A("GameConsoleManager");
async function C(e) {
    let t = _.A.getChannelId();
    r()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.Ay.isSelfMute() && (await o.A.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== d.Ay.isSelfDeaf() && o.A.toggleSelfDeaf({ syncRemote: !1 });
}
class v extends l.A {
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
                        i = null != h.A.getVoiceStateForSession(c.default.getId(), e.sessionId),
                        r = null == t || (0, A.X)(t.type) === e.clientInfo.os;
                    return n && r && i;
                }));
        if (null == n) return null;
        this.awaitRemoteTimeout.stop(), (0, E.m9)(n.sessionId);
        let i = h.A.getVoiceStateForSession(c.default.getId(), n.sessionId);
        null != i && C(i);
    };
    handleAudioStateToggle = (e) => {
        let { syncRemote: t, context: n } = e;
        if (!t || n !== N.x.DEFAULT) return;
        let i = d.Ay.isSelfDeaf(),
            r = d.Ay.isSelfMute(),
            s = c.default.getId(),
            a = g.default.getRemoteSessionId();
        if (null == a) return;
        let o = h.A.getVoiceStateForSession(s, a);
        null == o ||
            ((o.selfDeaf !== i || o.selfMute !== r) &&
                ((0, E.JS)(a, { selfDeaf: i, selfMute: r }),
                this.rollbackCommandTimeout.start(3e3, () => {
                    C(o);
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
                .filter(p.Vq);
            return this.maybeConnect(e);
        }
        let i = t.find((e) => {
            let { sessionId: t } = e;
            return t === n;
        });
        null != i && (this.rollbackCommandTimeout.stop(), C(i));
    };
    handleSessionsChanged = () => {
        let e = g.default.getRemoteSessionId();
        null != e && null == f.A.getSessionById(e) && (0, E.ZG)(),
            null == e && this.maybeConnect(Object.values(f.A.getSessions()));
    };
    handleWaitForRemoteSession = () => {
        this.awaitRemoteTimeout.start(6e4, () => {
            (0, E.ZG)(), a.A.show({ title: S.intl.string(S.t.wGMxr3), body: S.intl.string(S.t.i5k8b5) });
        });
    };
    handleConsoleCommandUpdate = (e) => {
        var t;
        let n,
            { id: i, result: r, error: s } = e;
        if (("failed" !== r && "n/a" !== r) || null == s) return;
        y.info("Console command Error result:", r, s);
        let a = g.default.getAwaitingRemoteSessionInfo();
        if (a?.commandId !== i) return;
        let o =
            ((t = g.default.getDevice(a.type, a.deviceId ?? "") ?? {
                id: "id",
                platform: S.intl.string(S.t["UQMV/E"]),
                name: S.intl.string(S.t["UQMV/E"]),
            }),
            (n = null),
            "failed" === r
                ? (n = (function (e, t) {
                      let { platform: n, name: i } = e;
                      switch (t) {
                          case T.K8.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
                              return {
                                  title: S.intl.string(S.t["GSZ+HI"]),
                                  body: S.intl.formatToPlainString(S.t["cYX/3E"], { deviceType: n }),
                              };
                          case T.K8.CONSOLE_DEVICE_INVALID_POWER_MODE:
                              return {
                                  title: S.intl.formatToPlainString(S.t.akd6Sx, { deviceType: n }),
                                  body: S.intl.formatToPlainString(S.t.RyOvpJ, { deviceName: i }),
                              };
                          case T.K8.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
                              return {
                                  title: S.intl.formatToPlainString(S.t.M6Vzat, { deviceType: n }),
                                  body: S.intl.formatToPlainString(S.t.InKtnC, { deviceName: i }),
                              };
                          case T.K8.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
                              return {
                                  title: S.intl.string(S.t.QL1y93),
                                  body: S.intl.formatToPlainString(S.t.D18eZu, { deviceType: n }),
                                  isAccountLinkError: !0,
                              };
                          default:
                              return {
                                  title: S.intl.string(S.t.QL1y93),
                                  body: S.intl.formatToPlainString(S.t["6ZyNH/"], { deviceName: i }),
                              };
                      }
                  })(t, s.code))
                : "n/a" === r &&
                  (n = (function (e, t) {
                      let { platform: n, name: i } = e;
                      return t === T.K8.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
                          ? {
                                title: S.intl.formatToPlainString(S.t.KchfhO, { deviceType: n }),
                                body: S.intl.formatToPlainString(S.t["21ndz7"], { deviceName: i }),
                            }
                          : null;
                  })(t, s.code)),
            null != n &&
                (n.errorCodeMessage = S.intl.format(S.t["1Bi9Cf"], {
                    supportURL: I.A.getSubmitRequestURL(),
                    errorCode: s.code,
                })),
            n);
        null != o &&
            m.A.showSelfDismissableAlert({
                title: o.title,
                body: o.body,
                errorCodeMessage: o.errorCodeMessage,
                reconnectPlatformType: o.isAccountLinkError ? a.type : void 0,
            }),
            T.v_.has(s.code) && this.awaitRemoteTimeout.isStarted()
                ? this.awaitRemoteTimeout.start(18e4, () => (0, E.ZG)(), !0)
                : "failed" === r && (0, E.ZG)();
    };
    handleRemoteSessionDisconnect = () => {
        this.awaitRemoteTimeout.stop();
    };
}
let O = new v();
