n.d(t, { A: () => M });
var i = n(17928),
    l = n(205693),
    r = n(73153),
    s = n(194862),
    a = n(259464),
    o = n(288737),
    u = n(562153),
    d = n(734057),
    c = n(763827),
    h = n(287809),
    f = n(977997),
    g = n(607567),
    C = n(652215),
    A = n(806931);
let p = new s.A(),
    m = new s.A(),
    E = new Set();
function I(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        l = (0, g.RQ)(i, t ?? C.ME, e.id);
    p.set(e.id, l);
    let r = {
        type: A.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: u.Ay.getName(t, n, e),
        userAvatarDecoration: (0, a.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    m.set(e.id, r);
}
function S(e) {
    let t = p.delete(e),
        n = m.delete(e),
        i = E.delete(e);
    return t || n || i;
}
function _() {
    let e = c.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        E.forEach((i) => {
            if (null != f.A.getVoiceStateForChannel(e, i)) return void E.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), E.delete(i), I(l, t, e));
        }),
        n
    );
}
function N() {
    (p.clear(), m.clear(), E.clear());
}
class T extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        (this.waitFor(f.A, h.default, d.A, c.A), this.syncWith([h.default], _));
    }
    get desyncedVoiceStatesCount() {
        return p.size();
    }
    getDesyncedUserIds() {
        return p.keys();
    }
    getDesyncedVoiceStates() {
        return p.values();
    }
    getDesyncedParticipants() {
        return m.values();
    }
}
let M = new T(r.h, {
    CONNECTION_OPEN: function () {
        N();
    },
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== l.x.DEFAULT || t !== C.S7L.DISCONNECTED) return !1;
        N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = c.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: l } = t;
                return (l === n && !!S(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: r } = e;
        return (
            r === l.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != f.A.getVoiceStateForChannel(i, t)) return e;
                let l = h.default.getUser(t);
                return null == l ? (E.add(t), e) : (I(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === l.x.DEFAULT && S(t);
    },
});
