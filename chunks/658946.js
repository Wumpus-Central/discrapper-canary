n.d(t, { U: () => A, Y: () => h });
var l = n(342442),
    i = n(620632),
    r = n(73153),
    u = n(626584),
    a = n(107563),
    s = n(287809);
let o = Object.freeze({ PROFILE_READ_STATE: (e) => `/users/@me/profile-read-states/${e}` });
var d = n(419731),
    f = n(851767),
    c = n(695904);
let m = new u.A("ProfileReadStateActionCreators"),
    p = new Map();
function h(e, t) {
    if (null == t || null == a.A.getWishlist(t) || a.A.isFetching(t) || null != a.A.getError(t)) return !1;
    let n = f.A.getWishlistSettings(e, t),
        l = n?.updated_at;
    return (null == l || a.A.getUpdatedAt(t) === l) && (0, d.uM)(n, f.A.getProfileReadState(e));
}
async function A(e) {
    let t = s.default.getCurrentUser()?.id;
    if (null == t || e === s.default.getCurrentUser()?.id || null == (0, c.aS)()) return;
    let n = `${t}:${e}`,
        u = p.get(n);
    if (null != u) return u;
    if (!h(e, f.A.getFirstWishlistId(e))) return;
    let a = (async function (e, t) {
        try {
            let n = await i.Bo.put({
                url: o.PROFILE_READ_STATE(e),
                body: { sections: [l.o.WISHLIST] },
                rejectWithError: !0,
            });
            if (s.default.getCurrentUser()?.id !== t) return;
            await r.h.dispatch({ type: "PROFILE_READ_STATE_ACK", ownerId: e, ackedAt: (0, d.CJ)(n.body) ?? {} });
        } catch (e) {
            m.warn("Failed to ack profile wishlist", e);
        }
    })(e, t);
    p.set(n, a);
    try {
        await a;
    } finally {
        p.delete(n);
    }
}
