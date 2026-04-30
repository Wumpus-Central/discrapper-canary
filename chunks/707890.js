r.d(t, { A: () => g }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var E = r(17928),
    n = r(205693),
    i = r(228366),
    l = r(652896),
    u = r(495544),
    s = r(763827),
    _ = r(116956),
    a = r(814278),
    A = r(440976),
    S = r(787392),
    d = r(652215);
let f = new Map(),
    R = new Map(),
    c = !1,
    T = null;
function C() {
    return _.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: r } = (0, l.Iy)(t),
            E = !0 === f.get(r),
            n = R.get(t) !== E;
        return R.set(t, E), !!n || e;
    }, !1);
}
function o() {
    let e = s.A.getUserIds() ?? new Set(),
        t = u.default.getId(),
        r = !0;
    for (let E of e)
        if (t !== E && !0 !== f.get(E)) {
            r = !1;
            break;
        }
    let E = r !== c;
    return (c = r), E;
}
function N(e) {
    let { userId: t } = e;
    if (u.default.getId() === t) return !1;
    let r = (function (e) {
            let t = s.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                E = S.A.isKeyVerified(e, r) || A.A.isKeyVerified(e, r),
                n = (0, a.m8)(e, [s.A, _.A]),
                i = E && !n,
                l = i !== f.get(e);
            return f.set(e, i), l;
        })(t),
        E = C(),
        n = o();
    return r || E || n;
}
function I() {
    f.clear(), R.clear(), (c = !1);
}
class y extends E.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(u.default, s.A, _.A, A.A, S.A);
    }
    isCallVerified() {
        return c;
    }
    isStreamVerified(e) {
        return R.get(e);
    }
    isUserVerified(e) {
        return f.get(e);
    }
}
let g = new y(i.h, {
    CONNECTION_OPEN: I,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === T) return !1;
        (T = t), I();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: r, context: E } = e;
        if (r !== d.S7L.DISCONNECTED) return !1;
        switch (E) {
            case n.x.STREAM:
                if (null == t) return !1;
                return R.delete(t), o();
            case n.x.DEFAULT:
                I();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            r = u.default.getId(),
            E = t.reduce((e, t) => (r === t ? e : !!N({ userId: t }) || e), !1),
            n = C(),
            i = o();
        return E || n || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: N,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: N,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: N,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: N,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: N,
});
