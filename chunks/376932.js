i.d(t, { A: () => I });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(158954),
    d = i(311907),
    o = i(554146),
    c = i(932001),
    u = i(770983),
    g = i(927813),
    m = i(622543),
    h = i(49999),
    x = i(985018),
    A = i(970901);
let p = 90 * g.A.Millis.DAY,
    f = 90 * g.A.Millis.DAY;
function I(e) {
    let { user: t, wishlist: i, hasFetchedWishlist: s = !1, analyticsLocations: g, className: I } = e,
        j = (i?.items.length ?? 0) > 0,
        [v, S] = l.useState(!1);
    !s || j || v || S(!0);
    let E = (0, d.bG)([m.A], () =>
            null != i ? new Date(m.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [b, T] = (0, c.Wl)(
            o.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: E + f, cooldownDurationMs: p },
            void 0,
            !0,
        ),
        y = b === o.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!j || y || v)
        ? (0, n.jsxs)("div", {
              className: a()(A.kL, I),
              children: [
                  (0, n.jsxs)("div", {
                      className: A.wx,
                      children: [
                          (0, n.jsx)(r.EYj, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: x.intl.string(x.t["+GB8Kt"]),
                          }),
                          j &&
                              (0, n.jsx)(r.JnF, {
                                  size: "xs",
                                  onClick: () => {
                                      S(!1), T(h.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(u.A, {
                      userId: t.id,
                      wishlist: i,
                      className: a()(A.Vg, A.e6),
                      analyticsLocations: g,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 8,
                  }),
              ],
          })
        : null;
}
