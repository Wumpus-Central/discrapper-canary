n.d(t, { A: () => D }), n(896048);
var r,
    i = n(311907),
    a = n(205693),
    s = n(73153),
    o = n(194862),
    l = n(357046),
    c = n(288737),
    u = n(562153),
    d = n(734057),
    f = n(383501),
    p = n(287809),
    _ = n(977997),
    h = n(607567),
    m = n(652215),
    g = n(806931);
function E(e, t, n) {
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
let b = new o.A(),
    y = new o.A(),
    O = new Set();
function A(e, t, n) {
    let r = new c.A({
            userId: e.id,
            channelId: n,
        }),
        i = (0, h.RQ)(r, null != t ? t : m.ME, e.id);
    b.set(e.id, i);
    let a = {
        type: g.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        latched: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: u.Ay.getName(t, n, e),
        userAvatarDecoration: (0, l.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    y.set(e.id, a);
}
function v(e) {
    let t = b.delete(e),
        n = y.delete(e),
        r = O.delete(e);
    return t || n || r;
}
function S() {
    var e;
    let t = f.A.getChannelId();
    if (null == t) return !1;
    let n = null == (e = d.A.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return (
        O.forEach((e) => {
            if (null != _.A.getVoiceStateForChannel(t, e)) return void O.delete(e);
            let i = p.default.getUser(e);
            null != i && ((r = !0), O.delete(e), A(i, n, t));
        }),
        r
    );
}
function I() {
    b.clear(), y.clear(), O.clear();
}
function T() {
    I();
}
function C(e) {
    let { state: t, context: n } = e;
    if (n !== a.x.DEFAULT || t !== m.S7L.DISCONNECTED) return !1;
    I();
}
function N(e) {
    let { voiceStates: t } = e,
        n = f.A.getChannelId();
    return (
        null != n &&
        t.reduce((e, t) => {
            let { userId: r, channelId: i } = t;
            return (i === n && !!v(r)) || e;
        }, !1)
    );
}
function R(e) {
    let { userIds: t, guildId: n, channelId: r, context: i } = e;
    return (
        i === a.x.DEFAULT &&
        t.reduce((e, t) => {
            if (null != _.A.getVoiceStateForChannel(r, t)) return e;
            let i = p.default.getUser(t);
            return null == i ? (O.add(t), e) : (A(i, n, r), !0);
        }, !1)
    );
}
function w(e) {
    let { userId: t, context: n } = e;
    return n === a.x.DEFAULT && v(t);
}
class P extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(_.A, p.default, d.A, f.A), this.syncWith([p.default], S);
    }
    get desyncedVoiceStatesCount() {
        return b.size();
    }
    getDesyncedUserIds() {
        return b.keys();
    }
    getDesyncedVoiceStates() {
        return b.values();
    }
    getDesyncedParticipants() {
        return y.values();
    }
}
E(P, "displayName", "RTCConnectionDesyncStore");
let D = new P(s.h, {
    CONNECTION_OPEN: T,
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: C,
    VOICE_STATE_UPDATES: N,
    RTC_CONNECTION_CLIENT_CONNECT: R,
    RTC_CONNECTION_CLIENT_DISCONNECT: w,
});
