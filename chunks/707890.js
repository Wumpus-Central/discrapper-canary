"use strict";
n.d(t, { A: () => N }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(17928),
    r = n(459838),
    a = n(228366),
    s = n(652896),
    l = n(280450),
    o = n(763827),
    d = n(116956),
    c = n(814278),
    u = n(440976),
    _ = n(787392),
    E = n(652215);
let A = new Map(),
    h = new Map(),
    I = !1,
    f = null;
function p() {
    return d.A.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.Iy)(t),
            i = !0 === A.get(n),
            r = h.get(t) !== i;
        return h.set(t, i), !!r || e;
    }, !1);
}
function T() {
    let e = o.A.getUserIds() ?? new Set(),
        t = l.default.getId(),
        n = !0;
    for (let i of e)
        if (t !== i && !0 !== A.get(i)) {
            n = !1;
            break;
        }
    let i = n !== I;
    return (I = n), i;
}
function m(e) {
    let { userId: t } = e;
    if (l.default.getId() === t) return !1;
    let n = (function (e) {
            let t = o.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = _.A.isKeyVerified(e, n) || u.A.isKeyVerified(e, n),
                r = (0, c.m8)(e, [o.A, d.A]),
                a = i && !r,
                s = a !== A.get(e);
            return A.set(e, a), s;
        })(t),
        i = p(),
        r = T();
    return n || i || r;
}
function g() {
    A.clear(), h.clear(), (I = !1);
}
class S extends i.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(l.default, o.A, d.A, u.A, _.A);
    }
    isCallVerified() {
        return I;
    }
    isStreamVerified(e) {
        return h.get(e);
    }
    isUserVerified(e) {
        return A.get(e);
    }
}
let N = new S(a.h, {
    CONNECTION_OPEN: g,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === f) return !1;
        (f = t), g();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: i } = e;
        if (n !== E.S7L.DISCONNECTED) return !1;
        switch (i) {
            case r.x.STREAM:
                if (null == t) return !1;
                return h.delete(t), T();
            case r.x.DEFAULT:
                g();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = l.default.getId(),
            i = t.reduce((e, t) => (n === t ? e : !!m({ userId: t }) || e), !1),
            r = p(),
            a = T();
        return i || r || a;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: m,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: m,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: m,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: m,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: m,
});
