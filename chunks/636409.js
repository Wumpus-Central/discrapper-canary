n.r(t), n.d(t, { default: () => x }), n(35282);
var a = n(951288),
    l = n(647438),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    d = n(481060),
    c = n(703656),
    s = n(55563),
    u = n(411935),
    g = n(210218),
    p = n(436585),
    f = n(720983),
    m = n(323540),
    b = n(171524),
    v = n(981631),
    I = n(140594);
function h(e) {
    var t, n;
    let { storefront: r, guildId: i, selectedPageIndex: o, selectedSku: d } = e,
        s = l.useRef(!1);
    return (
        l.useEffect(() => {
            let e = () => {
                s.current = !0;
            };
            return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e);
        }, []),
        l.useEffect(() => {
            null != d
                ? (0, p.g)({
                      skuId: d.id,
                      applicationId: r.applicationId,
                      onClose: () => {
                          s.current || (0, c.uL)(v.Z5c.CHANNELS_GAME_SHOP(i, o));
                      },
                  })
                : null == d && (0, p.U)(),
                (s.current = !1);
        }, [i, o, d, r.applicationId]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: I.container,
                    children: [
                        (0, a.jsx)(f.Z, {
                            guildId: i,
                            storefront: r,
                            selectedPageIndex: o,
                        }),
                        (0, a.jsx)(m.$, {
                            applicationId: r.applicationId,
                            guildId: i,
                            page: r.pages[o],
                        }),
                    ],
                }),
                (0, a.jsx)(b.n, {
                    applicationId: r.applicationId,
                    backgroundImageAssetId:
                        null == (n = r.pages[o]) || null == (t = n.leaderboard) ? void 0 : t.backgroundImageAssetId,
                }),
            ],
        })
    );
}
function x(e) {
    let { match: t } = e,
        { guildId: n, gameShopPageIndex: r, gameShopSkuId: c } = t.params,
        p = (0, o.e7)([g.Z], () => (null != n ? g.Z.getStorefrontData(n) : void 0)),
        f = l.useMemo(() => {
            if (null == r) return 0;
            let e = parseInt(r, 10);
            return isNaN(e) || (null != p && null != p.storefront && e >= p.storefront.pages.length) ? 0 : e;
        }, [r, p]),
        m = (0, o.e7)([s.Z], () => (null != c ? s.Z.get(c) : null), [c]);
    l.useEffect(() => {
        null != n && (0, u.m)(n, f, null != c ? c : null);
    }, [n, f, c]);
    let b =
        ((null == p ? void 0 : p.storefront) != null || (null == p ? void 0 : p.error)) &&
        !(null == p ? void 0 : p.loading);
    return (l.useEffect(() => {
        null != n && null == p && (0, u.Y)(n);
    }, [n, p]),
    b && null != n && (null == p ? void 0 : p.storefront) != null)
        ? (0, a.jsx)(h, {
              storefront: p.storefront,
              guildId: n,
              selectedPageIndex: f,
              selectedSku: m,
          })
        : (0, a.jsx)("div", {
              className: i()(I.spinner, I.container),
              children: (0, a.jsx)(d.$jN, {}),
          });
}
