n.d(t, { A: () => N });
var i = n(311907),
    l = n(205693),
    a = n(73153),
    s = n(194862),
    r = n(259464),
    o = n(288737),
    c = n(562153),
    d = n(734057),
    u = n(383501),
    h = n(287809),
    m = n(977997),
    A = n(607567),
    g = n(652215),
    _ = n(806931);
let p = new s.A(),
    f = new s.A(),
    E = new Set();
function C(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        l = (0, A.RQ)(i, t ?? g.ME, e.id);
    p.set(e.id, l);
    let a = {
        type: _.lp.USER,
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
        userAvatarDecoration: (0, r.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    f.set(e.id, a);
}
function x(e) {
    let t = p.delete(e),
        n = f.delete(e),
        i = E.delete(e);
    return t || n || i;
}
function S() {
    let e = u.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        E.forEach((i) => {
            if (null != m.A.getVoiceStateForChannel(e, i)) return void E.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), E.delete(i), C(l, t, e));
        }),
        n
    );
}
function I() {
    p.clear(), f.clear(), E.clear();
}
class v extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(m.A, h.default, d.A, u.A), this.syncWith([h.default], S);
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
        return f.values();
    }
}
let N = new v(a.h, {
    CONNECTION_OPEN: function () {
        I();
    },
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== l.x.DEFAULT || t !== g.S7L.DISCONNECTED) return !1;
        I();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = u.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: l } = t;
                return (l === n && !!x(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: a } = e;
        return (
            a === l.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != m.A.getVoiceStateForChannel(i, t)) return e;
                let l = h.default.getUser(t);
                return null == l ? (E.add(t), e) : (C(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === l.x.DEFAULT && x(t);
    },
});
