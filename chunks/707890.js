n.d(t, { A: () => S }),
    n(896048),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var l,
    r,
    i = n(311907),
    a = n(205693),
    s = n(73153),
    o = n(652896),
    c = n(961350),
    u = n(383501),
    d = n(162605),
    f = n(814278),
    p = n(440976),
    b = n(787392),
    g = n(652215);
let m = new Map(),
    h = new Map(),
    A = !1,
    y = null;
function _() {
    return d.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, o.Iy)(t),
            l = !0 === m.get(n),
            r = h.get(t) !== l;
        return h.set(t, l), !!r || e;
    }, !1);
}
function E() {
    var e;
    let t = null != (e = u.A.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        l = !0;
    for (let e of t)
        if (n !== e && !0 !== m.get(e)) {
            l = !1;
            break;
        }
    let r = l !== A;
    return (A = l), r;
}
function v(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = u.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                l = b.A.isKeyVerified(e, n) || p.A.isKeyVerified(e, n),
                r = (0, f.m8)(e, [u.A, d.A]),
                i = l && !r,
                a = i !== m.get(e);
            return m.set(e, i), a;
        })(t),
        l = _(),
        r = E();
    return n || l || r;
}
function O() {
    m.clear(), h.clear(), (A = !1);
}
class x extends (l = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, d.A, p.A, b.A);
    }
    isCallVerified() {
        return A;
    }
    isStreamVerified(e) {
        return h.get(e);
    }
    isUserVerified(e) {
        return m.get(e);
    }
}
(r = "displayName") in x
    ? Object.defineProperty(x, r, {
          value: "SecureFramesVerifiedStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (x[r] = "SecureFramesVerifiedStore");
let S = new x(s.h, {
    CONNECTION_OPEN: O,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === y) return !1;
        (y = t), O();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: l } = e;
        if (n !== g.S7L.DISCONNECTED) return !1;
        switch (l) {
            case a.x.STREAM:
                if (null == t) return !1;
                return h.delete(t), E();
            case a.x.DEFAULT:
                O();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            l = t.reduce((e, t) => (n === t ? e : !!v({ userId: t }) || e), !1),
            r = _(),
            i = E();
        return l || r || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v,
});
