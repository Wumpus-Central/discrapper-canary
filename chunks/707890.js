r.d(t, { A: () => N }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(17928),
    l = r(205693),
    s = r(228366),
    u = r(652896),
    i = r(495544),
    a = r(763827),
    c = r(116956),
    o = r(814278),
    E = r(440976),
    d = r(787392),
    f = r(652215);
let A = new Map(),
    _ = new Map(),
    S = !1,
    g = null;
function T() {
    return c.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: r } = (0, u.Iy)(t),
            n = !0 === A.get(r),
            l = _.get(t) !== n;
        return _.set(t, n), !!l || e;
    }, !1);
}
function m() {
    let e = a.A.getUserIds() ?? new Set(),
        t = i.default.getId(),
        r = !0;
    for (let n of e)
        if (t !== n && !0 !== A.get(n)) {
            r = !1;
            break;
        }
    let n = r !== S;
    return (S = r), n;
}
function C(e) {
    let { userId: t } = e;
    if (i.default.getId() === t) return !1;
    let r = (function (e) {
            let t = a.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                n = d.A.isKeyVerified(e, r) || E.A.isKeyVerified(e, r),
                l = (0, o.m8)(e, [a.A, c.A]),
                s = n && !l,
                u = s !== A.get(e);
            return A.set(e, s), u;
        })(t),
        n = T(),
        l = m();
    return r || n || l;
}
function R() {
    A.clear(), _.clear(), (S = !1);
}
class y extends n.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(i.default, a.A, c.A, E.A, d.A);
    }
    isCallVerified() {
        return S;
    }
    isStreamVerified(e) {
        return _.get(e);
    }
    isUserVerified(e) {
        return A.get(e);
    }
}
let N = new y(s.h, {
    CONNECTION_OPEN: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === g) return !1;
        (g = t), R();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: r, context: n } = e;
        if (r !== f.S7L.DISCONNECTED) return !1;
        switch (n) {
            case l.x.STREAM:
                if (null == t) return !1;
                return _.delete(t), m();
            case l.x.DEFAULT:
                R();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            r = i.default.getId(),
            n = t.reduce((e, t) => (r === t ? e : !!C({ userId: t }) || e), !1),
            l = T(),
            s = m();
        return n || l || s;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: C,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: C,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: C,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: C,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: C,
});
