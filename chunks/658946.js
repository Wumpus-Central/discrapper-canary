n.d(t, { U: () => A, Y: () => m });
var l = n(342442),
    i = n(620632),
    r = n(73153),
    u = n(626584),
    a = n(107563),
    o = n(287809);
let s = Object.freeze({ PROFILE_READ_STATE: (e) => `/users/@me/profile-read-states/${e}` });
var f = n(419731),
    d = n(851767),
    c = n(695904);
let p = new u.A("ProfileReadStateActionCreators"),
    h = new Map();
function m(e, t) {
    if (null == t || null == a.A.getWishlist(t) || a.A.isFetching(t) || null != a.A.getError(t)) return !1;
    let n = d.A.getWishlistSettings(e, t),
        l = n?.updated_at;
    return (null == l || a.A.getUpdatedAt(t) === l) && (0, f.uM)(n, d.A.getProfileReadState(e));
}
async function A(e) {
    let t = o.default.getCurrentUser()?.id;
    if (null == t || e === o.default.getCurrentUser()?.id || null == (0, c.aS)()) return;
    let n = `${t}:${e}`,
        u = h.get(n);
    if (null != u) return u;
    if (!m(e, d.A.getFirstWishlistId(e))) return;
    let a = (async function (e, t) {
        try {
            let n = await i.Bo.put({
                url: s.PROFILE_READ_STATE(e),
                body: { sections: [l.o.WISHLIST] },
                rejectWithError: !0,
            });
            if (o.default.getCurrentUser()?.id !== t) return;
            await r.h.dispatch({ type: "PROFILE_READ_STATE_ACK", ownerId: e, ackedAt: (0, f.CJ)(n.body) ?? {} });
        } catch (e) {
            p.warn("Failed to ack profile wishlist", e);
        }
    })(e, t);
    h.set(n, a);
    try {
        await a;
    } finally {
        h.delete(n);
    }
}
