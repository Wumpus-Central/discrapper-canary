l.r(n), l.d(n, { default: () => _ }), l(35282);
var t = l(951288),
    i = l(647438),
    a = l(120356),
    r = l.n(a),
    d = l(442837),
    o = l(481060),
    s = l(703656),
    c = l(55563),
    u = l(411935),
    p = l(210218),
    g = l(242723),
    I = l(436585),
    v = l(720983),
    x = l(323540),
    m = l(171524),
    f = l(981631),
    h = l(140594);
function C(e) {
    var n, l;
    let { storefront: a, guildId: r, selectedPageIndex: d, selectedSku: o } = e,
        c = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                c.current = !0;
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
                          c.current || (0, s.uL)(f.Z5c.CHANNELS_GAME_SHOP(r, d));
                      },
                  })
                : null == o && (0, I.U)(),
                (c.current = !1);
        }, [r, d, o, a.applicationId]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: h.container,
                    children: [
                        (0, t.jsx)(v.Z, {
                            guildId: r,
                            storefront: a,
                            selectedPageIndex: d,
                        }),
                        (0, t.jsx)(x.$, {
                            applicationId: a.applicationId,
                            guildId: r,
                            page: a.pages[d],
                        }),
                    ],
                }),
                (0, t.jsx)(m.n, {
                    applicationId: a.applicationId,
                    backgroundImageAssetId:
                        null == (l = a.pages[d]) || null == (n = l.leaderboard) ? void 0 : n.backgroundImageAssetId,
                }),
            ],
        })
    );
}
function _(e) {
    let { match: n } = e,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: s } = n.params,
        I = (0, d.e7)([p.Z], () => (null != l ? p.Z.getStorefrontData(l) : void 0)),
        v = (0, d.e7)([c.Z], () => c.Z.get(s), [s]);
    (0, g.p)();
    let x = i.useMemo(() => {
        if (null == a) return 0;
        let e = parseInt(a, 10);
        return isNaN(e) || (null != I && null != I.storefront && e >= I.storefront.pages.length) ? 0 : e;
    }, [a, I]);
    return (i.useEffect(() => {
        null != l && (0, u.m0)(l, x, null != s ? s : null);
    }, [l, x, s]),
    i.useEffect(() => {
        var e;
        null != l && (null == (e = p.Z.getStorefrontData(l)) ? void 0 : e.loading) !== !0 && (0, u.YL)(l);
    }, [l]),
    ((null == I ? void 0 : I.storefront) != null || (null == I ? void 0 : I.error)) &&
        !(null == I ? void 0 : I.loading) &&
        null != l &&
        (null == I ? void 0 : I.storefront) != null)
        ? (0, t.jsx)(C, {
              storefront: I.storefront,
              guildId: l,
              selectedPageIndex: x,
              selectedSku: v,
          })
        : (0, t.jsx)("div", {
              className: r()(h.spinner, h.container),
              children: (0, t.jsx)(o.$jN, {}),
          });
}
