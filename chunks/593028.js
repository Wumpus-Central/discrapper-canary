n.d(t, { A: () => C });
var i = n(812729),
    l = n.n(i),
    r = n(311907),
    s = n(73153),
    a = n(961350),
    o = n(309010),
    E = n(430363),
    c = n(659416),
    _ = n(4149),
    d = n(652215);
let u = {},
    A = {},
    T = {},
    I = new Set();
function N() {
    return a.default.getId();
}
function R(e, t, n, i) {
    let l = !1;
    return (
        null != e[i] && (delete e[i], (l = !0)),
        null != t[i] && (delete t[i], (l = !0)),
        null != n[i] && (delete n[i], (l = !0)),
        l
    );
}
function S() {
    let e = Object.keys(u).length > 0,
        t = Object.keys(A).length > 0,
        n = Object.keys(T).length > 0;
    return (u = {}), (A = {}), (T = {}), e || t || n;
}
class O extends r.Ay.Store {
    initialize() {
        this.waitFor(a.default, o.A);
    }
    static displayName = "VoiceDaresStore";
    getPendingOfferForCurrentUser() {
        let e = N();
        if (null == e) return null;
        for (let t of Object.values(u)) if (t.targetId === e) return t;
        return null;
    }
    getActiveDareStateForUser(e) {
        return A[e] ?? null;
    }
    getActiveStatesForCurrentChannel() {
        let e = o.A.getVoiceChannelId();
        return null == e ? [] : Object.values(A).filter((t) => t.channelId === e);
    }
    getCommandForCurrentUser() {
        let e = N();
        if (null == e) return null;
        for (let t of Object.values(T)) if (t.targetId === e) return t;
        return null;
    }
}
let C = new O(s.h, {
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        if (!(0, E.PA)("VoiceDaresStore").enabled) return S();
        let n = !1,
            i = { ...u },
            r = { ...A },
            s = { ...T };
        for (let e of t) {
            let t = e.user?.id;
            if (null == t) continue;
            let a = (function (e) {
                let t = e.activities?.find((e) => e.type === d.$pd.CUSTOM_STATUS);
                return null == t ? null : (0, _.aF)(t);
            })(e);
            if (
                null == a ||
                !(function (e, t) {
                    let n = N();
                    switch (t.messageKind) {
                        case c.cn.OFFER:
                            return t.senderId === e && t.targetId === n;
                        case c.cn.STATE:
                            return t.targetId === e;
                        case c.cn.COMMAND:
                            return t.senderId === e && t.targetId === n;
                    }
                })(t, a)
            ) {
                R(i, r, s, t) && (n = !0);
                continue;
            }
            switch ((R(i, r, s, t) && (n = !0), a.messageKind)) {
                case c.cn.OFFER:
                    if (I.has(a.dareId)) continue;
                    l()(i[t], a) || ((i[t] = a), (n = !0));
                    break;
                case c.cn.STATE:
                    l()(r[t], a) || ((r[t] = a), (n = !0));
                    break;
                case c.cn.COMMAND:
                    l()(s[t], a) || ((s[t] = a), (n = !0));
            }
        }
        return n && ((u = i), (A = r), (T = s)), n;
    },
    VOICE_DARES_LOCAL_ACCEPT_OFFER: function (e) {
        let { voiceDare: t } = e;
        I.add(t.dareId);
        let n = t.senderId;
        if (null == u[n] || u[n].dareId !== t.dareId) return !1;
        let i = { ...u };
        return delete i[n], (u = i), !0;
    },
    VOICE_DARES_LOCAL_DECLINE_OFFER: function (e) {
        let { voiceDare: t } = e;
        I.add(t.dareId);
        let n = t.senderId;
        if (null == u[n] || u[n].dareId !== t.dareId) return !1;
        let i = { ...u };
        return delete i[n], (u = i), !0;
    },
    LOGOUT: function () {
        return (I = new Set()), S();
    },
});
