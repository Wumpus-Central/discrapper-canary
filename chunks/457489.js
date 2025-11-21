l.r(n), l.d(n, { default: () => S }), l(35282);
var t = l(54381),
    i = l(473749),
    a = l(120356),
    o = l.n(a),
    r = l(772848),
    s = l(442837),
    d = l(481060),
    c = l(211266),
    u = l(100527),
    p = l(906732),
    g = l(703656),
    I = l(602733),
    x = l(314897),
    _ = l(271383),
    f = l(55563),
    h = l(411935),
    m = l(590961),
    v = l(417317),
    C = l(705338),
    j = l(436585),
    b = l(720983),
    k = l(323540),
    Z = l(140594);
function N(e) {
    let { storefront: n, guildId: l, selectedPageIndex: a, selectedSku: o } = e,
        r = (0, m.oR)(),
        s = i.useRef(r);
    return (
        i.useEffect(() => {
            s.current = r;
        }, [r]),
        i.useEffect(() => {
            null != o
                ? (0, j.g)({
                      skuId: o.id,
                      applicationId: n.applicationId,
                      guildId: l,
                      isStorefront: !0,
                      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                      analyticsContext: s.current,
                      onClose: () => {
                          "POP" !== (0, g.s1)().action &&
                              (0, C.Z)({
                                  guildId: l,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, j.U)();
        }, [l, a, o, n.applicationId]),
        (0, t.jsxs)("div", {
            className: Z.container,
            children: [
                (0, t.jsx)(b.Z, {
                    guildId: l,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, t.jsx)(k.$, {
                    applicationId: n.applicationId,
                    guildId: l,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function S(e) {
    var n, l, a, g, C;
    let { match: j } = e,
        { guildId: b, gameShopPageIndex: k, gameShopSkuId: S } = j.params,
        { analyticsLocations: L } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        T = (0, v.Z)({ guildId: b }),
        P = (0, s.e7)([f.Z], () => f.Z.get(S), [S]);
    (0, I.p2)();
    let A = (0, c.Z)((0, r.Z)()),
        R = (0, s.e7)([_.ZP, x.default], () => _.ZP.isMember(b, x.default.getId())),
        y = i.useMemo(() => {
            if (null == k) return 0;
            let e = parseInt(k, 10);
            return isNaN(e) || (null != T && null != T.storefront && e >= T.storefront.pages.length) ? 0 : e;
        }, [k, T]),
        E =
            null != (C = null == T || null == (l = T.storefront) || null == (n = l.pages[y]) ? void 0 : n.title)
                ? C
                : null,
        M = (null == T || null == (g = T.storefront) || null == (a = g.pages[y]) ? void 0 : a.leaderboard) != null,
        O = i.useMemo(
            () => ({
                sessionId: A,
                guildId: b,
                pageIndex: y,
                pageTitle: E,
                isUserGuildMember: R,
                pageHasLeaderboard: M,
            }),
            [A, b, y, E, R, M],
        );
    return (i.useEffect(() => {
        null != b && (0, h.m0)(b, y, null != S ? S : null);
    }, [b, y, S]),
    ((null == T ? void 0 : T.storefront) != null || (null == T ? void 0 : T.error)) &&
        !(null == T ? void 0 : T.loading) &&
        null != b &&
        (null == T ? void 0 : T.storefront) != null)
        ? (0, t.jsx)(p.Gt, {
              value: L,
              children: (0, t.jsx)(m.hL, {
                  newValue: O,
                  children: (0, t.jsx)(N, {
                      storefront: T.storefront,
                      guildId: b,
                      selectedPageIndex: y,
                      selectedSku: P,
                  }),
              }),
          })
        : (0, t.jsx)("div", {
              className: o()(Z.spinner, Z.container),
              children: (0, t.jsx)(d.$jN, {}),
          });
}
