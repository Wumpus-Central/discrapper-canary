n.d(t, { A: () => I });
var i = n(17928),
    a = n(205693),
    r = n(228366),
    l = n(194862),
    s = n(259464),
    o = n(288737),
    c = n(562153),
    d = n(734057),
    u = n(763827),
    _ = n(287809),
    E = n(977997),
    f = n(607567),
    A = n(652215),
    S = n(806931);
let g = new l.A(),
    m = new l.A(),
    h = new Set();
function p(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        a = (0, f.RQ)(i, t ?? A.ME, e.id);
    g.set(e.id, a);
    let r = {
        type: S.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: c.Ay.getName(t, n, e),
        userAvatarDecoration: (0, s.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    m.set(e.id, r);
}
function C(e) {
    let t = g.delete(e),
        n = m.delete(e),
        i = h.delete(e);
    return t || n || i;
}
function N() {
    let e = u.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        h.forEach((i) => {
            if (null != E.A.getVoiceStateForChannel(e, i)) return void h.delete(i);
            let a = _.default.getUser(i);
            null != a && ((n = !0), h.delete(i), p(a, t, e));
        }),
        n
    );
}
function b() {
    g.clear(), m.clear(), h.clear();
}
class T extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(E.A, _.default, d.A, u.A), this.syncWith([_.default], N);
    }
    get desyncedVoiceStatesCount() {
        return g.size();
    }
    getDesyncedUserIds() {
        return g.keys();
    }
    getDesyncedVoiceStates() {
        return g.values();
    }
    getDesyncedParticipants() {
        return m.values();
    }
}
let I = new T(r.h, {
    CONNECTION_OPEN: function () {
        b();
    },
    VOICE_CHANNEL_SELECT: b,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== a.x.DEFAULT || t !== A.S7L.DISCONNECTED) return !1;
        b();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = u.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: a } = t;
                return (a === n && !!C(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: r } = e;
        return (
            r === a.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != E.A.getVoiceStateForChannel(i, t)) return e;
                let a = _.default.getUser(t);
                return null == a ? (h.add(t), e) : (p(a, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === a.x.DEFAULT && C(t);
    },
});
