n.d(t, { A: () => a });
var i = n(17928),
    l = n(228366);
let s = {};
class r extends i.Ay.PersistedStore {
    static displayName = "ProfileReadStateStore";
    static persistKey = "ProfileReadStateStore";
    initialize(e) {
        s = { ...(e?.entries ?? {}) };
    }
    getState() {
        return { entries: { ...s } };
    }
    getEntry(e) {
        return s[e] ?? null;
    }
}
let a = new r(l.h, {
    PROFILE_READ_STATE_ACK_WISHLIST: function (e) {
        let t,
            { userId: n, wishlistUpdatedAt: i } = e,
            l = s[n],
            r = l?.ackedWishlistUpdatedAt != null && l.ackedWishlistUpdatedAt >= i;
        null == (t = s[n]) &&
            (function () {
                let e = Object.keys(s);
                if (e.length < 500) return;
                let t = e.sort((e, t) => s[e].lastViewedAt - s[t].lastViewedAt).slice(e.length - 499),
                    n = {};
                for (let e of t) n[e] = s[e];
                s = n;
            })(),
            (s = { ...s, [n]: { ...t, ...(r ? {} : { ackedWishlistUpdatedAt: i }), lastViewedAt: Date.now() } });
    },
});
