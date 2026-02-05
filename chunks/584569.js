i.d(t, { A: () => y });
var n = i(311907),
    a = i(205693),
    l = i(73153),
    r = i(194862),
    s = i(357046),
    o = i(288737),
    d = i(562153),
    c = i(734057),
    u = i(383501),
    m = i(287809),
    _ = i(977997),
    A = i(607567),
    g = i(652215),
    h = i(806931);
let f = new r.A(),
    p = new r.A(),
    S = new Set();
function I(e, t, i) {
    let n = new o.A({ userId: e.id, channelId: i }),
        a = (0, A.RQ)(n, t ?? g.ME, e.id);
    f.set(e.id, a);
    let l = {
        type: h.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: n,
        voicePlatform: null,
        speaking: !1,
        latched: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(t, i, e),
        userAvatarDecoration: (0, s.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    p.set(e.id, l);
}
function x(e) {
    let t = f.delete(e),
        i = p.delete(e),
        n = S.delete(e);
    return t || i || n;
}
function v() {
    let e = u.A.getChannelId();
    if (null == e) return !1;
    let t = c.A.getChannel(e)?.getGuildId(),
        i = !1;
    return (
        S.forEach((n) => {
            if (null != _.A.getVoiceStateForChannel(e, n)) return void S.delete(n);
            let a = m.default.getUser(n);
            null != a && ((i = !0), S.delete(n), I(a, t, e));
        }),
        i
    );
}
function C() {
    f.clear(), p.clear(), S.clear();
}
class E extends n.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(_.A, m.default, c.A, u.A), this.syncWith([m.default], v);
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
let y = new E(l.h, {
    CONNECTION_OPEN: function () {
        C();
    },
    VOICE_CHANNEL_SELECT: C,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: i } = e;
        if (i !== a.x.DEFAULT || t !== g.S7L.DISCONNECTED) return !1;
        C();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            i = u.A.getChannelId();
        return (
            null != i &&
            t.reduce((e, t) => {
                let { userId: n, channelId: a } = t;
                return (a === i && !!x(n)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: i, channelId: n, context: l } = e;
        return (
            l === a.x.DEFAULT &&
            t.reduce((e, t) => {
                if (null != _.A.getVoiceStateForChannel(n, t)) return e;
                let a = m.default.getUser(t);
                return null == a ? (S.add(t), e) : (I(a, i, n), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: i } = e;
        return i === a.x.DEFAULT && x(t);
    },
});
