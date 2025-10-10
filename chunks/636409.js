n.r(t), n.d(t, { default: () => m });
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    d = n(481060),
    c = n(411935),
    s = n(210218),
    u = n(720983),
    g = n(323540),
    f = n(171524),
    p = n(140594);
function m(e) {
    var t, n, l;
    let { guildId: m, initialPageIndex: b = 0 } = e,
        v = (0, o.e7)([s.Z], () => s.Z.getStorefrontData(m)),
        I = (0, o.e7)([s.Z], () => s.Z.getStorefrontState(m)),
        _ =
            ((null == v ? void 0 : v.storefront) != null || (null == v ? void 0 : v.error)) &&
            !(null == v ? void 0 : v.loading);
    if (
        (r.useEffect(() => {
            null == v && (0, c.Y)(m);
        }, [m, v]),
        r.useEffect(() => {
            (0, c.K)(m, b);
        }, [m, b]),
        !_ || (null == v ? void 0 : v.storefront) == null)
    )
        return (0, a.jsx)("div", {
            className: i()(p.spinner, p.container),
            children: (0, a.jsx)(d.$jN, {}),
        });
    let h = null != (l = null == I ? void 0 : I.activePage) ? l : b;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: p.container,
                children: [
                    (0, a.jsx)(u.Z, {
                        guildId: m,
                        storefront: v.storefront,
                        selectedPageIndex: h,
                    }),
                    (0, a.jsx)(g.$, {
                        applicationId: v.storefront.applicationId,
                        guildId: m,
                        page: v.storefront.pages[h],
                    }),
                ],
            }),
            (0, a.jsx)(f.n, {
                applicationId: v.storefront.applicationId,
                backgroundImageAssetId:
                    null == (n = v.storefront.pages[h]) || null == (t = n.leaderboard)
                        ? void 0
                        : t.backgroundImageAssetId,
            }),
        ],
    });
}
