t.r(n), t.d(n, { default: () => j }), t(35282);
var l = t(951288),
    i = t(647438),
    a = t(120356),
    r = t.n(a),
    d = t(442837),
    o = t(481060),
    s = t(602733),
    c = t(55563),
    u = t(411935),
    p = t(417317),
    g = t(705338),
    I = t(436585),
    x = t(720983),
    m = t(323540),
    v = t(171524),
    f = t(140594);
function h(e) {
    var n, t;
    let { storefront: a, guildId: r, selectedPageIndex: d, selectedSku: o } = e,
        s = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                s.current = !0;
            };
            return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e);
        }, []),
        i.useEffect(() => {
            null != o
                ? (0, I.g)({
                      skuId: o.id,
                      applicationId: a.applicationId,
                      guildId: r,
                      isStorefront: !0,
                      onClose: () => {
                          s.current ||
                              (0, g.Z)({
                                  guildId: r,
                                  pageIndex: d,
                              });
                      },
                  })
                : null == o && (0, I.U)(),
                (s.current = !1);
        }, [r, d, o, a.applicationId]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: f.container,
                    children: [
                        (0, l.jsx)(x.Z, {
                            guildId: r,
                            storefront: a,
                            selectedPageIndex: d,
                        }),
                        (0, l.jsx)(m.$, {
                            applicationId: a.applicationId,
                            guildId: r,
                            page: a.pages[d],
                        }),
                    ],
                }),
                (0, l.jsx)(v.n, {
                    applicationId: a.applicationId,
                    backgroundImageAssetId:
                        null == (t = a.pages[d]) || null == (n = t.leaderboard) ? void 0 : n.backgroundImageAssetId,
                }),
            ],
        })
    );
}
function j(e) {
    let { match: n } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: g } = n.params,
        I = (0, p.Z)({ guildId: t }),
        x = (0, d.e7)([c.Z], () => c.Z.get(g), [g]);
    (0, s.p2)();
    let m = i.useMemo(() => {
        if (null == a) return 0;
        let e = parseInt(a, 10);
        return isNaN(e) || (null != I && null != I.storefront && e >= I.storefront.pages.length) ? 0 : e;
    }, [a, I]);
    return (i.useEffect(() => {
        null != t && (0, u.m0)(t, m, null != g ? g : null);
    }, [t, m, g]),
    ((null == I ? void 0 : I.storefront) != null || (null == I ? void 0 : I.error)) &&
        !(null == I ? void 0 : I.loading) &&
        null != t &&
        (null == I ? void 0 : I.storefront) != null)
        ? (0, l.jsx)(h, {
              storefront: I.storefront,
              guildId: t,
              selectedPageIndex: m,
              selectedSku: x,
          })
        : (0, l.jsx)("div", {
              className: r()(f.spinner, f.container),
              children: (0, l.jsx)(o.$jN, {}),
          });
}
