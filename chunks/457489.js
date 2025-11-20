l.r(n), l.d(n, { default: () => _ }), l(35282);
var t = l(54381),
    i = l(473749),
    a = l(120356),
    r = l.n(a),
    o = l(442837),
    d = l(481060),
    s = l(703656),
    c = l(602733),
    u = l(55563),
    p = l(411935),
    g = l(417317),
    I = l(705338),
    x = l(436585),
    m = l(720983),
    h = l(323540),
    f = l(140594);
function v(e) {
    let { storefront: n, guildId: l, selectedPageIndex: a, selectedSku: r } = e;
    return (
        i.useEffect(() => {
            null != r
                ? (0, x.g)({
                      skuId: r.id,
                      applicationId: n.applicationId,
                      guildId: l,
                      isStorefront: !0,
                      onClose: () => {
                          "POP" !== (0, s.s1)().action &&
                              (0, I.Z)({
                                  guildId: l,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == r && (0, x.U)();
        }, [l, a, r, n.applicationId]),
        (0, t.jsxs)("div", {
            className: f.container,
            children: [
                (0, t.jsx)(m.Z, {
                    guildId: l,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, t.jsx)(h.$, {
                    applicationId: n.applicationId,
                    guildId: l,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function _(e) {
    let { match: n } = e,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: s } = n.params,
        I = (0, g.Z)({ guildId: l }),
        x = (0, o.e7)([u.Z], () => u.Z.get(s), [s]);
    (0, c.p2)();
    let m = i.useMemo(() => {
        if (null == a) return 0;
        let e = parseInt(a, 10);
        return isNaN(e) || (null != I && null != I.storefront && e >= I.storefront.pages.length) ? 0 : e;
    }, [a, I]);
    return (i.useEffect(() => {
        null != l && (0, p.m0)(l, m, null != s ? s : null);
    }, [l, m, s]),
    ((null == I ? void 0 : I.storefront) != null || (null == I ? void 0 : I.error)) &&
        !(null == I ? void 0 : I.loading) &&
        null != l &&
        (null == I ? void 0 : I.storefront) != null)
        ? (0, t.jsx)(v, {
              storefront: I.storefront,
              guildId: l,
              selectedPageIndex: m,
              selectedSku: x,
          })
        : (0, t.jsx)("div", {
              className: r()(f.spinner, f.container),
              children: (0, t.jsx)(d.$jN, {}),
          });
}
