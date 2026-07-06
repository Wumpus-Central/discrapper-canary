"use strict";
n.d(t, { A: () => N }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(17928),
    r = n(459838),
    s = n(228366),
    a = n(652896),
    o = n(280450),
    l = n(763827),
    u = n(116956),
    c = n(814278),
    d = n(440976),
    _ = n(787392),
    h = n(652215);
let f = new Map(),
    E = new Map(),
    p = !1,
    m = null;
function g() {
    return u.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, a.Iy)(t),
            i = !0 === f.get(n),
            r = E.get(t) !== i;
        return E.set(t, i), !!r || e;
    }, !1);
}
function A() {
    let e = l.A.getUserIds() ?? new Set(),
        t = o.default.getId(),
        n = !0;
    for (let i of e)
        if (t !== i && !0 !== f.get(i)) {
            n = !1;
            break;
        }
    let i = n !== p;
    return (p = n), i;
}
function I(e) {
    let { userId: t } = e;
    if (o.default.getId() === t) return !1;
    let n = (function (e) {
            let t = l.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = _.A.isKeyVerified(e, n) || d.A.isKeyVerified(e, n),
                r = (0, c.m8)(e, [l.A, u.A]),
                s = i && !r,
                a = s !== f.get(e);
            return f.set(e, s), a;
        })(t),
        i = g(),
        r = A();
    return n || i || r;
}
function T() {
    f.clear(), E.clear(), (p = !1);
}
class S extends i.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(o.default, l.A, u.A, d.A, _.A);
    }
    isCallVerified() {
        return p;
    }
    isStreamVerified(e) {
        return E.get(e);
    }
    isUserVerified(e) {
        return f.get(e);
    }
}
let N = new S(s.h, {
    CONNECTION_OPEN: T,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === m) return !1;
        (m = t), T();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: i } = e;
        if (n !== h.S7L.DISCONNECTED) return !1;
        switch (i) {
            case r.x.STREAM:
                if (null == t) return !1;
                return E.delete(t), A();
            case r.x.DEFAULT:
                T();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = o.default.getId(),
            i = t.reduce((e, t) => (n === t ? e : !!I({ userId: t }) || e), !1),
            r = g(),
            s = A();
        return i || r || s;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: I,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: I,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: I,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: I,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: I,
});
