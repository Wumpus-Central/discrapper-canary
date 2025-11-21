l.r(n), l.d(n, { default: () => P }), l(35282);
var t = l(54381),
    i = l(473749),
    a = l(120356),
    o = l.n(a),
    d = l(772848),
    r = l(442837),
    s = l(481060),
    c = l(211266),
    u = l(100527),
    p = l(906732),
    g = l(703656),
    I = l(602733),
    x = l(314897),
    h = l(271383),
    m = l(55563),
    _ = l(411935),
    f = l(590961),
    v = l(417317),
    j = l(705338),
    C = l(436585),
    k = l(720983),
    b = l(323540),
    Z = l(140594);
function N(e) {
    let { storefront: n, guildId: l, selectedPageIndex: a, selectedSku: o } = e;
    return (
        i.useEffect(() => {
            null != o
                ? (0, C.g)({
                      skuId: o.id,
                      applicationId: n.applicationId,
                      guildId: l,
                      isStorefront: !0,
                      onClose: () => {
                          "POP" !== (0, g.s1)().action &&
                              (0, j.Z)({
                                  guildId: l,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, C.U)();
        }, [l, a, o, n.applicationId]),
        (0, t.jsxs)("div", {
            className: Z.container,
            children: [
                (0, t.jsx)(k.Z, {
                    guildId: l,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, t.jsx)(b.$, {
                    applicationId: n.applicationId,
                    guildId: l,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function P(e) {
    var n, l, a;
    let { match: g } = e,
        { guildId: j, gameShopPageIndex: C, gameShopSkuId: k } = g.params,
        { analyticsLocations: b } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        P = (0, v.Z)({ guildId: j }),
        S = (0, r.e7)([m.Z], () => m.Z.get(k), [k]);
    (0, I.p2)();
    let T = (0, c.Z)((0, d.Z)()),
        L = (0, r.e7)([h.ZP, x.default], () => h.ZP.isMember(j, x.default.getId())),
        M = i.useMemo(() => {
            if (null == C) return 0;
            let e = parseInt(C, 10);
            return isNaN(e) || (null != P && null != P.storefront && e >= P.storefront.pages.length) ? 0 : e;
        }, [C, P]),
        y =
            null != (a = null == P || null == (l = P.storefront) || null == (n = l.pages[M]) ? void 0 : n.title)
                ? a
                : null,
        A = i.useMemo(
            () => ({
                sessionId: T,
                guildId: j,
                pageIndex: M,
                pageTitle: y,
                isUserGuildMember: L,
            }),
            [T, j, M, y, L],
        );
    return (i.useEffect(() => {
        null != j && (0, _.m0)(j, M, null != k ? k : null);
    }, [j, M, k]),
    ((null == P ? void 0 : P.storefront) != null || (null == P ? void 0 : P.error)) &&
        !(null == P ? void 0 : P.loading) &&
        null != j &&
        (null == P ? void 0 : P.storefront) != null)
        ? (0, t.jsx)(p.Gt, {
              value: b,
              children: (0, t.jsx)(f.hL, {
                  newValue: A,
                  children: (0, t.jsx)(N, {
                      storefront: P.storefront,
                      guildId: j,
                      selectedPageIndex: M,
                      selectedSku: S,
                  }),
              }),
          })
        : (0, t.jsx)("div", {
              className: o()(Z.spinner, Z.container),
              children: (0, t.jsx)(s.$jN, {}),
          });
}
