t.r(n), t.d(n, { default: () => S }), t(35282);
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    s = t(772848),
    r = t(442837),
    d = t(481060),
    c = t(211266),
    u = t(100527),
    p = t(906732),
    g = t(703656),
    I = t(602733),
    x = t(314897),
    _ = t(271383),
    f = t(55563),
    h = t(411935),
    m = t(590961),
    v = t(417317),
    C = t(705338),
    j = t(436585),
    k = t(720983),
    b = t(323540),
    Z = t(140594);
function N(e) {
    let { storefront: n, guildId: t, selectedPageIndex: a, selectedSku: o } = e,
        s = (0, m.oR)(),
        r = i.useRef(s);
    return (
        i.useEffect(() => {
            r.current = s;
        }, [s]),
        i.useEffect(() => {
            null != o
                ? (0, j.g)({
                      skuId: o.id,
                      applicationId: n.applicationId,
                      guildId: t,
                      isStorefront: !0,
                      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                      analyticsContext: r.current,
                      onClose: () => {
                          "POP" !== (0, g.s1)().action &&
                              (0, C.Z)({
                                  guildId: t,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, j.U)();
        }, [t, a, o, n.applicationId]),
        (0, l.jsxs)("div", {
            className: Z.container,
            children: [
                (0, l.jsx)(k.Z, {
                    guildId: t,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, l.jsx)(b.$, {
                    applicationId: n.applicationId,
                    guildId: t,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function S(e) {
    var n, t, a;
    let { match: g } = e,
        { guildId: C, gameShopPageIndex: j, gameShopSkuId: k } = g.params,
        { analyticsLocations: b } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        S = (0, v.Z)({ guildId: C }),
        L = (0, r.e7)([f.Z], () => f.Z.get(k), [k]);
    (0, I.p2)();
    let T = (0, c.Z)((0, s.Z)()),
        P = (0, r.e7)([_.ZP, x.default], () => _.ZP.isMember(C, x.default.getId())),
        A = i.useMemo(() => {
            if (null == j) return 0;
            let e = parseInt(j, 10);
            return isNaN(e) || (null != S && null != S.storefront && e >= S.storefront.pages.length) ? 0 : e;
        }, [j, S]),
        R =
            null != (a = null == S || null == (t = S.storefront) || null == (n = t.pages[A]) ? void 0 : n.title)
                ? a
                : null,
        y = i.useMemo(
            () => ({
                sessionId: T,
                guildId: C,
                pageIndex: A,
                pageTitle: R,
                isUserGuildMember: P,
            }),
            [T, C, A, R, P],
        );
    return (i.useEffect(() => {
        null != C && (0, h.m0)(C, A, null != k ? k : null);
    }, [C, A, k]),
    ((null == S ? void 0 : S.storefront) != null || (null == S ? void 0 : S.error)) &&
        !(null == S ? void 0 : S.loading) &&
        null != C &&
        (null == S ? void 0 : S.storefront) != null)
        ? (0, l.jsx)(p.Gt, {
              value: b,
              children: (0, l.jsx)(m.hL, {
                  newValue: y,
                  children: (0, l.jsx)(N, {
                      storefront: S.storefront,
                      guildId: C,
                      selectedPageIndex: A,
                      selectedSku: L,
                  }),
              }),
          })
        : (0, l.jsx)("div", {
              className: o()(Z.spinner, Z.container),
              children: (0, l.jsx)(d.$jN, {}),
          });
}
