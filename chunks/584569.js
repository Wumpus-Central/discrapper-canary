n.d(t, { A: () => M });
var i = n(17928),
    l = n(205693),
    s = n(228366),
    r = n(194862),
    a = n(259464),
    u = n(288737),
    o = n(562153),
    d = n(734057),
    c = n(763827),
    h = n(287809),
    A = n(977997),
    f = n(607567),
    g = n(652215),
    E = n(806931);
let I = new r.A(),
    S = new r.A(),
    _ = new Set();
function T(e, t, n) {
    let i = new u.A({ userId: e.id, channelId: n }),
        l = (0, f.RQ)(i, t ?? g.ME, e.id);
    I.set(e.id, l);
    let s = {
        type: E.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: o.Ay.getName(t, n, e),
        userAvatarDecoration: (0, a.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    S.set(e.id, s);
}
function C(e) {
    let t = I.delete(e),
        n = S.delete(e),
        i = _.delete(e);
    return t || n || i;
}
function m() {
    let e = c.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        _.forEach((i) => {
            if (null != A.A.getVoiceStateForChannel(e, i)) return void _.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), _.delete(i), T(l, t, e));
        }),
        n
    );
}
function p() {
    I.clear(), S.clear(), _.clear();
}
class N extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(A.A, h.default, d.A, c.A), this.syncWith([h.default], m);
    }
    get desyncedVoiceStatesCount() {
        return I.size();
    }
    getDesyncedUserIds() {
        return I.keys();
    }
    getDesyncedVoiceStates() {
        return I.values();
    }
    getDesyncedParticipants() {
        return S.values();
    }
}
let M = new N(s.h, {
    CONNECTION_OPEN: function () {
        p();
    },
    VOICE_CHANNEL_SELECT: p,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== l.x.DEFAULT || t !== g.S7L.DISCONNECTED) return !1;
        p();
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
        let { userIds: t, guildId: n, channelId: i, context: s } = e;
        return (
            s === l.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != A.A.getVoiceStateForChannel(i, t)) return e;
                let l = h.default.getUser(t);
                return null == l ? (_.add(t), e) : (T(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === l.x.DEFAULT && C(t);
    },
});
