n.d(t, { A: () => v });
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
    A = n(652215),
    p = n(806931);
let m = new s.A(),
    E = new s.A(),
    I = new Set();
function S(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        l = (0, g.RQ)(i, t ?? A.ME, e.id);
    m.set(e.id, l);
    let r = {
        type: p.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        playingSoundboard: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: u.Ay.getName(t, n, e),
        userAvatarDecoration: (0, a.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    E.set(e.id, r);
}
function C(e) {
    let t = m.delete(e),
        n = E.delete(e),
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
            if (null != f.A.getVoiceStateForChannel(e, i)) return void I.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), I.delete(i), S(l, t, e));
        }),
        n
    );
}
function N() {
    (m.clear(), E.clear(), I.clear());
}
class T extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        (this.waitFor(f.A, h.default, d.A, c.A), this.syncWith([h.default], _));
    }
    get desyncedVoiceStatesCount() {
        return m.size();
    }
    getDesyncedUserIds() {
        return m.keys();
    }
    getDesyncedVoiceStates() {
        return m.values();
    }
    getDesyncedParticipants() {
        return E.values();
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
                if (null != f.A.getVoiceStateForChannel(i, t)) return e;
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
