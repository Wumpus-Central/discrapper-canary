n.d(t, { A: () => v });
var i = n(17928),
    l = n(459838),
    r = n(228366),
    s = n(194862),
    a = n(259464),
    o = n(288737),
    u = n(562153),
    d = n(734057),
    c = n(763827),
    h = n(287809),
    g = n(977997),
    f = n(607567),
    A = n(652215),
    p = n(806931);
let E = new s.A(),
    m = new s.A(),
    I = new Set();
function S(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        l = (0, f.RQ)(i, t ?? A.ME, e.id);
    E.set(e.id, l);
    let r = {
        type: p.lp.USER,
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
function C(e) {
    let t = E.delete(e),
        n = m.delete(e),
        i = I.delete(e);
    return t || n || i;
}
function _() {
    let e = c.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        I.forEach((i) => {
            if (null != g.A.getVoiceStateForChannel(e, i)) return void I.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), I.delete(i), S(l, t, e));
        }),
        n
    );
}
function N() {
    E.clear(), m.clear(), I.clear();
}
class T extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(g.A, h.default, d.A, c.A), this.syncWith([h.default], _);
    }
    get desyncedVoiceStatesCount() {
        return E.size();
    }
    getDesyncedUserIds() {
        return E.keys();
    }
    getDesyncedVoiceStates() {
        return E.values();
    }
    getDesyncedParticipants() {
        return m.values();
    }
}
let v = new T(r.h, {
    CONNECTION_OPEN: function () {
        N();
    },
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== l.x.DEFAULT || t !== A.S7L.DISCONNECTED) return !1;
        N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = c.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: l } = t;
                return (l === n && !!C(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: r } = e;
        return (
            r === l.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != g.A.getVoiceStateForChannel(i, t)) return e;
                let l = h.default.getUser(t);
                return null == l ? (I.add(t), e) : (S(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === l.x.DEFAULT && C(t);
    },
});
