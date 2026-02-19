n.d(e, { A: () => N });
var i = n(311907),
    l = n(205693),
    r = n(73153),
    a = n(194862),
    s = n(357046),
    o = n(288737),
    d = n(562153),
    u = n(734057),
    c = n(383501),
    A = n(287809),
    m = n(977997),
    p = n(607567),
    h = n(652215),
    g = n(806931);
let f = new a.A(),
    C = new a.A(),
    S = new Set();
function E(t, e, n) {
    let i = new o.A({ userId: t.id, channelId: n }),
        l = (0, p.RQ)(i, e ?? h.ME, t.id);
    f.set(t.id, l);
    let r = {
        type: g.lp.USER,
        user: t,
        id: t.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(e, n, t),
        userAvatarDecoration: (0, s.U)(t, e),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    C.set(t.id, r);
}
function T(t) {
    let e = f.delete(t),
        n = C.delete(t),
        i = S.delete(t);
    return e || n || i;
}
function v() {
    let t = c.A.getChannelId();
    if (null == t) return !1;
    let e = u.A.getChannel(t)?.getGuildId(),
        n = !1;
    return (
        S.forEach((i) => {
            if (null != m.A.getVoiceStateForChannel(t, i)) return void S.delete(i);
            let l = A.default.getUser(i);
            null != l && ((n = !0), S.delete(i), E(l, e, t));
        }),
        n
    );
}
function y() {
    f.clear(), C.clear(), S.clear();
}
class x extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(m.A, A.default, u.A, c.A), this.syncWith([A.default], v);
    }
    get desyncedVoiceStatesCount() {
        return f.size();
    }
    getDesyncedUserIds() {
        return f.keys();
    }
    getDesyncedVoiceStates() {
        return f.values();
    }
    getDesyncedParticipants() {
        return C.values();
    }
}
let N = new x(r.h, {
    CONNECTION_OPEN: function () {
        y();
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function (t) {
        let { state: e, context: n } = t;
        if (n !== l.x.DEFAULT || e !== h.S7L.DISCONNECTED) return !1;
        y();
    },
    VOICE_STATE_UPDATES: function (t) {
        let { voiceStates: e } = t,
            n = c.A.getChannelId();
        return (
            null != n &&
            e.reduce((t, e) => {
                let { userId: i, channelId: l } = e;
                return (l === n && !!T(i)) || t;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (t) {
        let { userIds: e, guildId: n, channelId: i, context: r } = t;
        return (
            r === l.x.DEFAULT &&
            e.reduce((t, e) => {
                if (null != m.A.getVoiceStateForChannel(i, e)) return t;
                let l = A.default.getUser(e);
                return null == l ? (S.add(e), t) : (E(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (t) {
        let { userId: e, context: n } = t;
        return n === l.x.DEFAULT && T(e);
    },
});
