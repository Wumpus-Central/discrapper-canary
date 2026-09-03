n.d(t, { A: () => L });
var i = n(284009),
    r = n.n(i),
    a = n(451988),
    s = n(157559),
    l = n(827343),
    o = n(439372),
    d = n(626584),
    c = n(280450),
    u = n(45630),
    _ = n(763827),
    E = n(528767),
    A = n(977997),
    h = n(403362),
    I = n(469802),
    f = n(124697),
    p = n(643501),
    T = n(30529),
    m = n(975571),
    g = n(544105),
    S = n(375708),
    N = n(731854);
let C = new d.A("GameConsoleManager");
async function O(e) {
    let t = _.A.getChannelId();
    r()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== u.Ay.isSelfMute() && (await l.A.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== u.Ay.isSelfDeaf() && l.A.toggleSelfDeaf({ syncRemote: !1 });
}
class R extends o.A {
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
        let t,
            n =
                ((t = p.default.getAwaitingRemoteSessionInfo()),
                e.find((e) => {
                    let n = g.hv.has(e.clientInfo.os),
                        i = null != A.A.getVoiceStateForSession(c.default.getId(), e.sessionId),
                        r = null == t || (0, T.X)(t.type) === e.clientInfo.os;
                    return n && r && i;
                }));
        if (null == n) return null;
        this.awaitRemoteTimeout.stop(), (0, I.m9)(n.sessionId);
        let i = A.A.getVoiceStateForSession(c.default.getId(), n.sessionId);
        null != i && O(i);
    };
    handleAudioStateToggle = (e) => {
        let { syncRemote: t, context: n } = e;
        if (!t || n !== N.x.DEFAULT) return;
        let i = u.Ay.isSelfDeaf(),
            r = u.Ay.isSelfMute(),
            a = c.default.getId(),
            s = p.default.getRemoteSessionId();
        if (null == s) return;
        let l = A.A.getVoiceStateForSession(a, s);
        null == l ||
            ((l.selfDeaf !== i || l.selfMute !== r) &&
                ((0, I.JS)(s, { selfDeaf: i, selfMute: r }),
                this.rollbackCommandTimeout.start(3e3, () => {
                    O(l);
                })));
    };
    handleVoiceStateUpdates = (e) => {
        let t = e.voiceStates,
            n = p.default.getRemoteSessionId();
        if (null == n) {
            let e = t
                .map((e) => {
                    let { sessionId: t } = e;
                    return null != t ? E.A.getSessionById(t) : null;
                })
                .filter(h.Vq);
            return this.maybeConnect(e);
        }
        let i = t.find((e) => {
            let { sessionId: t } = e;
            return t === n;
        });
        null != i && (this.rollbackCommandTimeout.stop(), O(i));
    };
    handleSessionsChanged = () => {
        let e = p.default.getRemoteSessionId();
        null != e && null == E.A.getSessionById(e) && (0, I.ZG)(),
            null == e && this.maybeConnect(Object.values(E.A.getSessions()));
    };
    handleWaitForRemoteSession = () => {
        this.awaitRemoteTimeout.start(6e4, () => {
            (0, I.ZG)(), s.A.show({ title: S.intl.string(S.t.wGMxr3), body: S.intl.string(S.t.i5k8b5) });
        });
    };
    handleConsoleCommandUpdate = (e) => {
        let { id: t, result: n, error: i } = e;
        if (("failed" !== n && "n/a" !== n) || null == i) return;
        C.info("Console command Error result:", n, i);
        let r = p.default.getAwaitingRemoteSessionInfo();
        if (r?.commandId !== t) return;
        let a = (function (e, t, n) {
            let i = null;
            switch (t) {
                case "failed":
                    i = (function (e, t) {
                        let { platform: n, name: i } = e;
                        switch (t) {
                            case g.K8.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
                                return {
                                    title: S.intl.string(S.t["GSZ+HI"]),
                                    body: S.intl.formatToPlainString(S.t["cYX/3E"], { deviceType: n }),
                                };
                            case g.K8.CONSOLE_DEVICE_INVALID_POWER_MODE:
                                return {
                                    title: S.intl.formatToPlainString(S.t.akd6Sx, { deviceType: n }),
                                    body: S.intl.formatToPlainString(S.t.RyOvpJ, { deviceName: i }),
                                };
                            case g.K8.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
                                return {
                                    title: S.intl.formatToPlainString(S.t.M6Vzat, { deviceType: n }),
                                    body: S.intl.formatToPlainString(S.t.InKtnC, { deviceName: i }),
                                };
                            case g.K8.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
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
                    })(e, n.code);
                    break;
                case "n/a":
                    i = (function (e, t) {
                        let { platform: n, name: i } = e;
                        return t === g.K8.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
                            ? {
                                  title: S.intl.formatToPlainString(S.t.KchfhO, { deviceType: n }),
                                  body: S.intl.formatToPlainString(S.t["21ndz7"], { deviceName: i }),
                              }
                            : null;
                    })(e, n.code);
            }
            return (
                null != i &&
                    (i.errorCodeMessage = S.intl.format(S.t["1Bi9Cf"], {
                        supportURL: m.A.getSubmitRequestURL(),
                        errorCode: n.code,
                    })),
                i
            );
        })(
            p.default.getDevice(r.type, r.deviceId ?? "") ?? {
                id: "id",
                platform: S.intl.string(S.t["UQMV/E"]),
                name: S.intl.string(S.t["UQMV/E"]),
            },
            n,
            i,
        );
        null != a &&
            f.A.showSelfDismissableAlert({
                title: a.title,
                body: a.body,
                errorCodeMessage: a.errorCodeMessage,
                reconnectPlatformType: a.isAccountLinkError ? r.type : void 0,
            }),
            g.v_.has(i.code) && this.awaitRemoteTimeout.isStarted()
                ? this.awaitRemoteTimeout.start(18e4, () => (0, I.ZG)(), !0)
                : "failed" === n && (0, I.ZG)();
    };
    handleRemoteSessionDisconnect = () => {
        this.awaitRemoteTimeout.stop();
    };
}
let L = new R();
