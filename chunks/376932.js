i.d(t, { A: () => I });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(834730),
    d = i(815021),
    o = i(311907),
    c = i(554146),
    u = i(932001),
    g = i(770983),
    m = i(927813),
    h = i(622543),
    x = i(49999),
    p = i(985018),
    A = i(294085);
let f = 90 * m.A.Millis.DAY,
    j = 90 * m.A.Millis.DAY;
function I(e) {
    let { user: t, wishlist: i, hasFetchedWishlist: s = !1, analyticsLocations: m, className: I } = e,
        v = (i?.items.length ?? 0) > 0,
        [S, E] = l.useState(!1);
    !s || v || S || E(!0);
    let y = (0, o.bG)([h.A], () =>
            null != i ? new Date(h.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [w, b] = (0, u.Wl)(
            c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: y + j, cooldownDurationMs: f },
            void 0,
            !0,
        ),
        N = w === c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!v || N || S)
        ? (0, n.jsxs)("div", {
              className: a()(A.kL, I),
              children: [
                  (0, n.jsxs)("div", {
                      className: A.wx,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: p.intl.string(p.t["+GB8Kt"]),
                          }),
                          v &&
                              (0, n.jsx)(d.J, {
                                  size: "xs",
                                  onClick: () => {
                                      E(!1), b(x.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(g.A, {
                      userId: t.id,
                      wishlist: i,
                      className: a()(A.Vg, A.e6),
                      analyticsLocations: m,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 8,
                  }),
              ],
          })
        : null;
}
