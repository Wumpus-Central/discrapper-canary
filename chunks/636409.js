n.r(t), n.d(t, { default: () => C }), n(35282);
var a = n(951288),
    l = n(647438),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    d = n(481060),
    c = n(703656),
    s = n(621853),
    u = n(484459),
    g = n(602733),
    p = n(594174),
    f = n(55563),
    m = n(411935),
    b = n(210218),
    v = n(436585),
    I = n(720983),
    h = n(323540),
    x = n(171524),
    _ = n(981631),
    j = n(140594);
function y(e) {
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
                ? (0, v.g)({
                      skuId: d.id,
                      applicationId: r.applicationId,
                      guildId: i,
                      onClose: () => {
                          s.current || (0, c.uL)(_.Z5c.CHANNELS_GAME_SHOP(i, o));
                      },
                  })
                : null == d && (0, v.U)(),
                (s.current = !1);
        }, [i, o, d, r.applicationId]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: j.container,
                    children: [
                        (0, a.jsx)(I.Z, {
                            guildId: i,
                            storefront: r,
                            selectedPageIndex: o,
                        }),
                        (0, a.jsx)(h.$, {
                            applicationId: r.applicationId,
                            guildId: i,
                            page: r.pages[o],
                        }),
                    ],
                }),
                (0, a.jsx)(x.n, {
                    applicationId: r.applicationId,
                    backgroundImageAssetId:
                        null == (n = r.pages[o]) || null == (t = n.leaderboard) ? void 0 : t.backgroundImageAssetId,
                }),
            ],
        })
    );
}
function C(e) {
    let { match: t } = e,
        { guildId: n, gameShopPageIndex: r, gameShopSkuId: c } = t.params,
        v = (0, o.e7)([b.Z], () => (null != n ? b.Z.getStorefrontData(n) : void 0)),
        I = l.useMemo(() => {
            if (null == r) return 0;
            let e = parseInt(r, 10);
            return isNaN(e) || (null != v && null != v.storefront && e >= v.storefront.pages.length) ? 0 : e;
        }, [r, v]),
        h = (0, o.e7)([f.Z], () => (null != c ? f.Z.get(c) : null), [c]);
    l.useEffect(() => {
        null != n && (0, m.m)(n, I, null != c ? c : null);
    }, [n, I, c]);
    let x =
        ((null == v ? void 0 : v.storefront) != null || (null == v ? void 0 : v.error)) &&
        !(null == v ? void 0 : v.loading);
    l.useEffect(() => {
        null != n && null == v && (0, m.Y)(n);
    }, [n, v]);
    let _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        { userProfile: C, wishlistId: k } = (0, o.cj)(
            [s.Z],
            () => ({
                userProfile: null != _ ? s.Z.getUserProfile(_.id) : null,
                wishlistId: null != _ ? s.Z.getFirstWishlistId(_.id) : null,
            }),
            [_],
        );
    return (l.useEffect(() => {
        null != _ && null == C && (0, u.Z)(_.id);
    }, [_, C]),
    (0, g.kZ)(k, null == _ ? void 0 : _.id),
    x && null != n && (null == v ? void 0 : v.storefront) != null)
        ? (0, a.jsx)(y, {
              storefront: v.storefront,
              guildId: n,
              selectedPageIndex: I,
              selectedSku: h,
          })
        : (0, a.jsx)("div", {
              className: i()(j.spinner, j.container),
              children: (0, a.jsx)(d.$jN, {}),
          });
}
