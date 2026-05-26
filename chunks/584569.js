"use strict";
n.d(t, { A: () => C });
var i = n(17928),
    r = n(459838),
    s = n(228366),
    a = n(194862),
    o = n(259464),
    l = n(288737),
    u = n(562153),
    c = n(734057),
    d = n(763827),
    _ = n(287809),
    f = n(977997),
    h = n(607567),
    p = n(652215),
    E = n(806931);
let m = new a.A(),
    g = new a.A(),
    A = new Set();
function I(e, t, n) {
    let i = new l.A({ userId: e.id, channelId: n }),
        r = (0, h.RQ)(i, t ?? p.ME, e.id);
    m.set(e.id, r);
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
        userNick: u.Ay.getName(t, n, e),
        userAvatarDecoration: (0, o.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    g.set(e.id, s);
}
function T(e) {
    let t = m.delete(e),
        n = g.delete(e),
        i = A.delete(e);
    return t || n || i;
}
function S() {
    let e = d.A.getChannelId();
    if (null == e) return !1;
    let t = c.A.getChannel(e)?.getGuildId(),
        n = !1;
    return (
        A.forEach((i) => {
            if (null != f.A.getVoiceStateForChannel(e, i)) return void A.delete(i);
            let r = _.default.getUser(i);
            null != r && ((n = !0), A.delete(i), I(r, t, e));
        }),
        n
    );
}
function N() {
    m.clear(), g.clear(), A.clear();
}
class y extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(f.A, _.default, c.A, d.A), this.syncWith([_.default], S);
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
        return g.values();
    }
}
let C = new y(s.h, {
    CONNECTION_OPEN: function () {
        N();
    },
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== r.x.DEFAULT || t !== p.S7L.DISCONNECTED) return !1;
        N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = d.A.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: i, channelId: r } = t;
                return (r === n && !!T(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: s } = e;
        return (
            s === r.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != f.A.getVoiceStateForChannel(i, t)) return e;
                let r = _.default.getUser(t);
                return null == r ? (A.add(t), e) : (I(r, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === r.x.DEFAULT && T(t);
    },
});
