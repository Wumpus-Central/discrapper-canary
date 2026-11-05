l.d(t, { U: () => p, Y: () => h });
var i = l(342442),
    a = l(620632),
    s = l(73153),
    n = l(626584),
    r = l(107563),
    d = l(287809);
let u = Object.freeze({ PROFILE_READ_STATE: (e) => `/users/@me/profile-read-states/${e}` });
var o = l(419731),
    c = l(851767),
    f = l(695904);
let A = new n.A("ProfileReadStateActionCreators"),
    m = new Map();
function h(e, t) {
    if (null == t || null == r.A.getWishlist(t) || r.A.isFetching(t) || null != r.A.getError(t)) return !1;
    let l = c.A.getWishlistSettings(e, t),
        i = l?.updated_at;
    return (null == i || r.A.getUpdatedAt(t) === i) && (0, o.uM)(l, c.A.getProfileReadState(e));
}
async function p(e) {
    let t = d.default.getCurrentUser()?.id;
    if (null == t || e === d.default.getCurrentUser()?.id || null == (0, f.aS)()) return;
    let l = `${t}:${e}`,
        n = m.get(l);
    if (null != n) return n;
    if (!h(e, c.A.getFirstWishlistId(e))) return;
    let r = (async function (e, t) {
        try {
            let l = await a.Bo.put({
                url: u.PROFILE_READ_STATE(e),
                body: { sections: [i.o.WISHLIST] },
                rejectWithError: !0,
            });
            if (d.default.getCurrentUser()?.id !== t) return;
            await s.h.dispatch({ type: "PROFILE_READ_STATE_ACK", ownerId: e, ackedAt: (0, o.CJ)(l.body) ?? {} });
        } catch (e) {
            A.warn("Failed to ack profile wishlist", e);
        }
    })(e, t);
    m.set(l, r);
    try {
        await r;
    } finally {
        m.delete(l);
    }
}
