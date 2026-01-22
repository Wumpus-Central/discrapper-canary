n.d(t, {
    A: () => D,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(451988),
    s = n(157559),
    o = n(827343),
    l = n(439372),
    c = n(626584),
    u = n(961350),
    d = n(430452),
    f = n(383501),
    p = n(528767),
    _ = n(977997),
    h = n(403362),
    m = n(108713),
    g = n(124697),
    E = n(643501),
    b = n(30529),
    y = n(18125),
    O = n(544105),
    A = n(731854),
    v = n(985018);

function S(e, t, n) {
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
let I = new c.A("GameConsoleManager"),
    T = 3e3,
    C = 6e4,
    N = 18e4;
async function R(e) {
    let t = f.A.getChannelId();
    i()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.A.isSelfMute() &&
            (await o.A.toggleSelfMute({
                syncRemote: !1,
            })),
        e.selfDeaf !== d.A.isSelfDeaf() &&
            o.A.toggleSelfDeaf({
                syncRemote: !1,
            });
}

function w(e) {
    let t = E.default.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = O.hv.has(e.clientInfo.os),
            r = null != _.A.getVoiceStateForSession(u.default.getId(), e.sessionId),
            i = null == t || (0, b.X)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class P extends l.A {
    constructor(...e) {
        super(...e),
            S(this, "rollbackCommandTimeout", new a.Ep()),
            S(this, "awaitRemoteTimeout", new a.Ep()),
            S(this, "actions", {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect(),
            }),
            S(this, "maybeConnect", (e) => {
                let t = w(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, m.m9)(t.sessionId);
                let n = _.A.getVoiceStateForSession(u.default.getId(), t.sessionId);
                null != n && R(n);
            }),
            S(this, "handleAudioStateToggle", (e) => {
                let { syncRemote: t, context: n } = e;
                if (!t || n !== A.x.DEFAULT) return;
                let r = d.A.isSelfDeaf(),
                    i = d.A.isSelfMute(),
                    a = u.default.getId(),
                    s = E.default.getRemoteSessionId();
                if (null == s) return;
                let o = _.A.getVoiceStateForSession(a, s);
                null == o ||
                    ((o.selfDeaf !== r || o.selfMute !== i) &&
                        ((0, m.JS)(s, {
                            selfDeaf: r,
                            selfMute: i,
                        }),
                        this.rollbackCommandTimeout.start(T, () => {
                            R(o);
                        })));
            }),
            S(this, "handleVoiceStateUpdates", (e) => {
                let t = e.voiceStates,
                    n = E.default.getRemoteSessionId();
                if (null == n) {
                    let e = t
                        .map((e) => {
                            let { sessionId: t } = e;
                            return null != t ? p.A.getSessionById(t) : null;
                        })
                        .filter(h.Vq);
                    return this.maybeConnect(e);
                }
                let r = t.find((e) => {
                    let { sessionId: t } = e;
                    return t === n;
                });
                null != r && (this.rollbackCommandTimeout.stop(), R(r));
            }),
            S(this, "handleSessionsChanged", () => {
                let e = E.default.getRemoteSessionId();
                null != e && null == p.A.getSessionById(e) && (0, m.ZG)(),
                    null == e && this.maybeConnect(Object.values(p.A.getSessions()));
            }),
            S(this, "handleWaitForRemoteSession", () => {
                this.awaitRemoteTimeout.start(C, () => {
                    (0, m.ZG)(),
                        s.A.show({
                            title: v.intl.string(v.t.wGMxr3),
                            body: v.intl.string(v.t.i5k8b5),
                        });
                });
            }),
            S(this, "handleConsoleCommandUpdate", (e) => {
                var t;
                let { id: n, result: r, error: i } = e;
                if (("failed" !== r && "n/a" !== r) || null == i) return;
                I.info("Console command Error result:", r, i);
                let a = E.default.getAwaitingRemoteSessionInfo();
                if ((null == a ? void 0 : a.commandId) !== n) return;
                let s = E.default.getDevice(a.type, null != (t = a.deviceId) ? t : ""),
                    o = (0, y.A)(
                        null != s
                            ? s
                            : {
                                  id: "id",
                                  platform: v.intl.string(v.t["UQMV/E"]),
                                  name: v.intl.string(v.t["UQMV/E"]),
                              },
                        r,
                        i,
                    );
                null != o &&
                    g.A.showSelfDismissableAlert({
                        title: o.title,
                        body: o.body,
                        errorCodeMessage: o.errorCodeMessage,
                        reconnectPlatformType: o.isAccountLinkError ? a.type : void 0,
                    }),
                    O.v_.has(i.code) && this.awaitRemoteTimeout.isStarted()
                        ? this.awaitRemoteTimeout.start(N, () => (0, m.ZG)(), !0)
                        : "failed" === r && (0, m.ZG)();
            }),
            S(this, "handleRemoteSessionDisconnect", () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
let D = new P();
