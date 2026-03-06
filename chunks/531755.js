n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(554146),
    d = n(932001),
    u = n(622543),
    g = n(178213),
    m = n(927813),
    x = n(228053),
    f = n(49999),
    p = n(985018),
    h = n(308581);
let _ = 90 * m.A.Millis.DAY,
    A = 90 * m.A.Millis.DAY;
function I(e) {
    let { user: t, wishlist: n, hasFetchedWishlist: a = !1, analyticsLocations: m, className: I } = e,
        j = (0, g.G)("social_layer_wishlist_recommendations_on_profile"),
        v = (n?.items.length ?? 0) > 0,
        [E, T] = l.useState(!1);
    !a || v || E || T(!0);
    let b = (0, o.bG)([u.A], () =>
            null != n ? new Date(u.A.getWishlistSettings(t.id, n.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [N, S] = (0, d.Wl)(
            c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: b + A, cooldownDurationMs: _ },
            void 0,
            !0,
        ),
        y = N === c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return a && (!v || y || E)
        ? (0, i.jsxs)("div", {
              className: s()(h.kL, I),
              children: [
                  (0, i.jsxs)("div", {
                      className: h.wx,
                      children: [
                          (0, i.jsx)(r.EYj, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: p.intl.string(p.t["+GB8Kt"]),
                          }),
                          v &&
                              (0, i.jsx)(r.JnF, {
                                  size: "sm",
                                  onClick: () => {
                                      T(!1), S(f.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, i.jsx)(x.A, {
                      wishlist: n,
                      className: s()(h.Vg, { [h.e6]: j }),
                      analyticsLocations: m,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 6,
                  }),
              ],
          })
        : null;
}
