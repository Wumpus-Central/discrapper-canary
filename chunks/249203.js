l.d(e, { A: () => u });
var i = l(17928),
    n = l(228366);
let r = {};
class s extends i.Ay.PersistedStore {
    static displayName = "ProfileReadStateStore";
    static persistKey = "ProfileReadStateStore";
    initialize(t) {
        r = { ...(t?.entries ?? {}) };
    }
    getState() {
        return { entries: { ...r } };
    }
    getEntry(t) {
        return r[t] ?? null;
    }
}
let u = new s(n.h, {
    PROFILE_READ_STATE_ACK_WISHLIST: function (t) {
        let e,
            { userId: l, wishlistUpdatedAt: i } = t,
            n = r[l],
            s = n?.ackedWishlistUpdatedAt != null && n.ackedWishlistUpdatedAt >= i;
        null == (e = r[l]) &&
            (function () {
                let t = Object.keys(r);
                if (t.length < 500) return;
                let e = t.sort((t, e) => r[t].lastViewedAt - r[e].lastViewedAt).slice(t.length - 499),
                    l = {};
                for (let t of e) l[t] = r[t];
                r = l;
            })(),
            (r = { ...r, [l]: { ...e, ...(s ? {} : { ackedWishlistUpdatedAt: i }), lastViewedAt: Date.now() } });
    },
});
