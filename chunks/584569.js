"use strict";
n.d(t, { A: () => R });
var i = n(17928),
    r = n(459838),
    a = n(228366),
    s = n(194862),
    l = n(259464),
    o = n(288737),
    d = n(562153),
    c = n(734057),
    u = n(763827),
    _ = n(287809),
    E = n(977997),
    A = n(607567),
    h = n(652215),
    I = n(806931);
let f = new s.A(),
    p = new s.A(),
    T = new Set();
function m(e, t, n) {
    let i = new o.A({ userId: e.id, channelId: n }),
        r = (0, A.RQ)(i, t ?? h.ME, e.id);
    f.set(e.id, r);
    let a = {
        type: I.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(t, n, e),
        userAvatarDecoration: (0, l.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    p.set(e.id, a);
}
function g(e) {
    let t = f.delete(e),
        n = p.delete(e),
        i = T.delete(e);
    return t || n || i;
}
function S() {
    let e = u.A.getChannelId();
    if (null == e) return !1;
    let t = c.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        T.forEach((i) => {
            if (null != E.A.getVoiceStateForChannel(e, i)) return void T.delete(i);
            let r = _.default.getUser(i);
            null != r && ((n = !0), T.delete(i), m(r, t, e));
        }),
        n
    );
}
function N() {
    f.clear(), p.clear(), T.clear();
}
class C extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(E.A, _.default, c.A, u.A), this.syncWith([_.default], S);
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
        return p.values();
    }
}
let R = new C(a.h, {
    CONNECTION_OPEN: function () {
        N();
    },
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== r.x.DEFAULT || t !== h.S7L.DISCONNECTED) return !1;
        N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = u.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: r } = t;
                return (r === n && !!g(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: a } = e;
        return (
            a === r.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != E.A.getVoiceStateForChannel(i, t)) return e;
                let r = _.default.getUser(t);
                return null == r ? (T.add(t), e) : (m(r, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === r.x.DEFAULT && g(t);
    },
});
