l.r(e), l.d(e, { default: () => C }), l(35282);
var t = l(54381),
    i = l(473749),
    a = l(120356),
    d = l.n(a),
    r = l(442837),
    o = l(481060),
    s = l(703656),
    c = l(602733),
    u = l(55563),
    p = l(411935),
    g = l(417317),
    I = l(705338),
    x = l(436585),
    m = l(720983),
    v = l(323540),
    f = l(171524),
    h = l(140594);
function j(n) {
    var e, l;
    let { storefront: a, guildId: d, selectedPageIndex: r, selectedSku: o } = n;
    return (
        i.useEffect(() => {
            null != o
                ? (0, x.g)({
                      skuId: o.id,
                      applicationId: a.applicationId,
                      guildId: d,
                      isStorefront: !0,
                      onClose: () => {
                          "POP" !== (0, s.s1)().action &&
                              (0, I.Z)({
                                  guildId: d,
                                  pageIndex: r,
                              });
                      },
                  })
                : null == o && (0, x.U)();
        }, [d, r, o, a.applicationId]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: h.container,
                    children: [
                        (0, t.jsx)(m.Z, {
                            guildId: d,
                            storefront: a,
                            selectedPageIndex: r,
                        }),
                        (0, t.jsx)(v.$, {
                            applicationId: a.applicationId,
                            guildId: d,
                            page: a.pages[r],
                        }),
                    ],
                }),
                (0, t.jsx)(f.n, {
                    applicationId: a.applicationId,
                    backgroundImageAssetId:
                        null == (l = a.pages[r]) || null == (e = l.leaderboard) ? void 0 : e.backgroundImageAssetId,
                }),
            ],
        })
    );
}
function C(n) {
    let { match: e } = n,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: s } = e.params,
        I = (0, g.Z)({ guildId: l }),
        x = (0, r.e7)([u.Z], () => u.Z.get(s), [s]);
    (0, c.p2)();
    let m = i.useMemo(() => {
        if (null == a) return 0;
        let n = parseInt(a, 10);
        return isNaN(n) || (null != I && null != I.storefront && n >= I.storefront.pages.length) ? 0 : n;
    }, [a, I]);
    return (i.useEffect(() => {
        null != l && (0, p.m0)(l, m, null != s ? s : null);
    }, [l, m, s]),
    ((null == I ? void 0 : I.storefront) != null || (null == I ? void 0 : I.error)) &&
        !(null == I ? void 0 : I.loading) &&
        null != l &&
        (null == I ? void 0 : I.storefront) != null)
        ? (0, t.jsx)(j, {
              storefront: I.storefront,
              guildId: l,
              selectedPageIndex: m,
              selectedSku: x,
          })
        : (0, t.jsx)("div", {
              className: d()(h.spinner, h.container),
              children: (0, t.jsx)(o.$jN, {}),
          });
}
