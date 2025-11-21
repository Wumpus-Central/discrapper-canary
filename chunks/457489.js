l.r(n), l.d(n, { default: () => T }), l(35282);
var t = l(54381),
    i = l(473749),
    a = l(120356),
    o = l.n(a),
    r = l(772848),
    s = l(442837),
    d = l(481060),
    c = l(211266),
    u = l(100527),
    g = l(906732),
    p = l(703656),
    f = l(602733),
    _ = l(314897),
    I = l(271383),
    h = l(430824),
    x = l(55563),
    m = l(900849),
    v = l(411935),
    C = l(590961),
    b = l(417317),
    j = l(705338),
    k = l(436585),
    Z = l(720983),
    S = l(323540),
    N = l(140594);
function L(e) {
    let { storefront: n, guildId: l, selectedPageIndex: a, selectedSku: o } = e,
        r = (0, C.oR)(),
        s = i.useRef(r);
    return (
        i.useEffect(() => {
            s.current = r;
        }, [r]),
        i.useEffect(() => {
            null != o
                ? (0, k.g)({
                      skuId: o.id,
                      applicationId: n.applicationId,
                      guildId: l,
                      isStorefront: !0,
                      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                      analyticsContext: s.current,
                      onClose: () => {
                          "POP" !== (0, p.s1)().action &&
                              (0, j.Z)({
                                  guildId: l,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, k.U)();
        }, [l, a, o, n.applicationId]),
        (0, t.jsxs)("div", {
            className: N.container,
            children: [
                (0, t.jsx)(Z.Z, {
                    guildId: l,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, t.jsx)(S.$, {
                    applicationId: n.applicationId,
                    guildId: l,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function T(e) {
    var n, l, a, p, j;
    let { match: k } = e,
        { guildId: Z, gameShopPageIndex: S, gameShopSkuId: T } = k.params,
        { analyticsLocations: P } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        R = (0, b.Z)({ guildId: Z }),
        E = (0, s.e7)([_.default], () => _.default.getSessionId(), []),
        A = (0, s.e7)([x.Z], () => x.Z.get(T), [T]);
    (0, f.p2)();
    let M = (0, c.Z)((0, r.Z)()),
        y = (0, s.e7)([I.ZP, _.default], () => I.ZP.isMember(Z, _.default.getId())),
        O = i.useMemo(() => {
            if (null == S) return 0;
            let e = parseInt(S, 10);
            return isNaN(e) || (null != R && null != R.storefront && e >= R.storefront.pages.length) ? 0 : e;
        }, [S, R]),
        w =
            null != (j = null == R || null == (l = R.storefront) || null == (n = l.pages[O]) ? void 0 : n.title)
                ? j
                : null,
        W = (null == R || null == (p = R.storefront) || null == (a = p.pages[O]) ? void 0 : a.leaderboard) != null,
        G = i.useMemo(
            () => ({
                sessionId: M,
                guildId: Z,
                pageIndex: O,
                pageTitle: w,
                isUserGuildMember: y,
                pageHasLeaderboard: W,
            }),
            [M, Z, O, w, y, W],
        );
    return (i.useEffect(() => {
        null != Z && (0, v.m0)(Z, O, null != T ? T : null);
    }, [Z, O, T]),
    i.useEffect(() => {
        null != Z && null != E && null == h.Z.getGuild(Z) && (0, m.Ub)(Z, {}, { shouldNavigate: !1 });
    }, [Z, E]),
    ((null == R ? void 0 : R.storefront) != null || (null == R ? void 0 : R.error)) &&
        !(null == R ? void 0 : R.loading) &&
        null != Z &&
        (null == R ? void 0 : R.storefront) != null)
        ? (0, t.jsx)(g.Gt, {
              value: P,
              children: (0, t.jsx)(C.hL, {
                  newValue: G,
                  children: (0, t.jsx)(L, {
                      storefront: R.storefront,
                      guildId: Z,
                      selectedPageIndex: O,
                      selectedSku: A,
                  }),
              }),
          })
        : (0, t.jsx)("div", {
              className: o()(N.spinner, N.container),
              children: (0, t.jsx)(d.$jN, {}),
          });
}
