t.r(n), t.d(n, { default: () => p });
var a = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
    d = t(442837),
    o = t(481060),
    c = t(411935),
    s = t(210218),
    u = t(720983),
    g = t(323540),
    f = t(171524),
    m = t(140594);
function p(e) {
    var n, t, r;
    let { guildId: p, initialPageIndex: _ = 0 } = e,
        v = (0, d.e7)([s.Z], () => s.Z.getStorefrontData(p)),
        I = (0, d.e7)([s.Z], () => s.Z.getStorefrontState(p)),
        x =
            ((null == v ? void 0 : v.storefront) != null || (null == v ? void 0 : v.error)) &&
            !(null == v ? void 0 : v.loading);
    if (
        (l.useEffect(() => {
            null == v && (0, c.Y)(p);
        }, [p, v]),
        l.useEffect(() => {
            (0, c.K)(p, _);
        }, [p, _]),
        !x || (null == v ? void 0 : v.storefront) == null)
    )
        return (0, a.jsx)("div", {
            className: i()(m.spinner, m.container),
            children: (0, a.jsx)(o.$jN, {}),
        });
    let h = null != (r = null == I ? void 0 : I.activePage) ? r : _;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: m.container,
                children: [
                    (0, a.jsx)(u.Z, {
                        guildId: p,
                        storefront: v.storefront,
                        selectedPageIndex: h,
                    }),
                    (0, a.jsx)(g.$, {
                        applicationId: v.storefront.applicationId,
                        page: v.storefront.pages[h],
                    }),
                ],
            }),
            (0, a.jsx)(f.n, {
                applicationId: v.storefront.applicationId,
                backgroundImageAssetId:
                    null == (t = v.storefront.pages[h]) || null == (n = t.leaderboard)
                        ? void 0
                        : n.backgroundImageAssetId,
            }),
        ],
    });
}
