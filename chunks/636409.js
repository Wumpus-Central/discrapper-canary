n.r(t), n.d(t, { default: () => m });
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    d = n(442837),
    o = n(481060),
    c = n(411935),
    s = n(210218),
    u = n(720983),
    g = n(323540),
    f = n(171524),
    p = n(596446);
function m(e) {
    var t, n, l;
    let { guildId: m, initialPageIndex: I = 0 } = e,
        b = (0, d.e7)([s.Z], () => s.Z.getStorefrontData(m)),
        v = (0, d.e7)([s.Z], () => s.Z.getStorefrontState(m)),
        _ =
            ((null == b ? void 0 : b.storefront) != null || (null == b ? void 0 : b.error)) &&
            !(null == b ? void 0 : b.loading);
    if (
        (r.useEffect(() => {
            null == b && (0, c.Y)(m);
        }, [m, b]),
        r.useEffect(() => {
            (0, c.K)(m, I);
        }, [m, I]),
        !_ || (null == b ? void 0 : b.storefront) == null)
    )
        return (0, a.jsx)("div", {
            className: i()(p.spinner, p.container),
            children: (0, a.jsx)(o.$jN, {}),
        });
    let h = null != (l = null == v ? void 0 : v.activePage) ? l : I;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: p.container,
                children: [
                    (0, a.jsx)(u.Z, {
                        guildId: m,
                        storefront: b.storefront,
                        selectedPageIndex: h,
                    }),
                    (0, a.jsx)(g.$, {
                        applicationId: b.storefront.applicationId,
                        guildId: m,
                        page: b.storefront.pages[h],
                    }),
                ],
            }),
            (0, a.jsx)(f.n, {
                applicationId: b.storefront.applicationId,
                backgroundImageAssetId:
                    null == (n = b.storefront.pages[h]) || null == (t = n.leaderboard)
                        ? void 0
                        : t.backgroundImageAssetId,
            }),
        ],
    });
}
