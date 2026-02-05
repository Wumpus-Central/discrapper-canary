n.d(t, { A: () => T }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(311907),
    l = n(205693),
    a = n(73153),
    s = n(652896),
    r = n(961350),
    o = n(383501),
    c = n(162605),
    d = n(814278),
    u = n(440976),
    h = n(787392),
    m = n(652215);
let A = new Map(),
    p = new Map(),
    g = !1,
    f = null;
function _() {
    return c.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.Iy)(t),
            i = !0 === A.get(n),
            l = p.get(t) !== i;
        return p.set(t, i), !!l || e;
    }, !1);
}
function E() {
    let e = o.A.getUserIds() ?? new Set(),
        t = r.default.getId(),
        n = !0;
    for (let i of e)
        if (t !== i && !0 !== A.get(i)) {
            n = !1;
            break;
        }
    let i = n !== g;
    return (g = n), i;
}
function C(e) {
    let { userId: t } = e;
    if (r.default.getId() === t) return !1;
    let n = (function (e) {
            let t = o.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = h.A.isKeyVerified(e, n) || u.A.isKeyVerified(e, n),
                l = (0, d.m8)(e, [o.A, c.A]),
                a = i && !l,
                s = a !== A.get(e);
            return A.set(e, a), s;
        })(t),
        i = _(),
        l = E();
    return n || i || l;
}
function x() {
    A.clear(), p.clear(), (g = !1);
}
class S extends i.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(r.default, o.A, c.A, u.A, h.A);
    }
    isCallVerified() {
        return g;
    }
    isStreamVerified(e) {
        return p.get(e);
    }
    isUserVerified(e) {
        return A.get(e);
    }
}
let T = new S(a.h, {
    CONNECTION_OPEN: x,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === f) return !1;
        (f = t), x();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: i } = e;
        if (n !== m.S7L.DISCONNECTED) return !1;
        switch (i) {
            case l.x.STREAM:
                if (null == t) return !1;
                return p.delete(t), E();
            case l.x.DEFAULT:
                x();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = r.default.getId(),
            i = t.reduce((e, t) => (n === t ? e : !!C({ userId: t }) || e), !1),
            l = _(),
            a = E();
        return i || l || a;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: C,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: C,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: C,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: C,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: C,
});
