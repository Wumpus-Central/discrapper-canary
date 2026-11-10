l.d(t, { U: () => g, Y: () => h });
var n = l(342442),
    i = l(620632),
    a = l(73153),
    r = l(626584),
    s = l(107563),
    u = l(287809);
let o = Object.freeze({ PROFILE_READ_STATE: (e) => `/users/@me/profile-read-states/${e}` });
var d = l(419731),
    c = l(851767),
    f = l(695904);
let m = new r.A("ProfileReadStateActionCreators"),
    A = new Map();
function h(e, t) {
    if (null == t || null == s.A.getWishlist(t) || s.A.isFetching(t) || null != s.A.getError(t)) return !1;
    let l = c.A.getWishlistSettings(e, t),
        n = l?.updated_at;
    return (null == n || s.A.getUpdatedAt(t) === n) && (0, d.uM)(l, c.A.getProfileReadState(e));
}
async function g(e) {
    let t = u.default.getCurrentUser()?.id;
    if (null == t || e === u.default.getCurrentUser()?.id || null == (0, f.aS)()) return;
    let l = `${t}:${e}`,
        r = A.get(l);
    if (null != r) return r;
    if (!h(e, c.A.getFirstWishlistId(e))) return;
    let s = (async function (e, t) {
        try {
            let l = await i.Bo.put({
                url: o.PROFILE_READ_STATE(e),
                body: { sections: [n.o.WISHLIST] },
                rejectWithError: !0,
            });
            if (u.default.getCurrentUser()?.id !== t) return;
            await a.h.dispatch({ type: "PROFILE_READ_STATE_ACK", ownerId: e, ackedAt: (0, d.CJ)(l.body) ?? {} });
        } catch (e) {
            m.warn("Failed to ack profile wishlist", e);
        }
    })(e, t);
    A.set(l, s);
    try {
        await s;
    } finally {
        A.delete(l);
    }
}
