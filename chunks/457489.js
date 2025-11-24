t.r(n), t.d(n, { default: () => R }), t(35282);
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    r = t(772848),
    s = t(442837),
    d = t(481060),
    c = t(211266),
    u = t(100527),
    g = t(906732),
    p = t(703656),
    _ = t(602733),
    f = t(314897),
    I = t(271383),
    h = t(430824),
    x = t(55563),
    m = t(900849),
    v = t(411935),
    C = t(590961),
    b = t(417317),
    k = t(705338),
    j = t(436585),
    S = t(720983),
    Z = t(323540),
    E = t(140594);
function N(e) {
    let { storefront: n, guildId: t, selectedPageIndex: a, selectedSku: o } = e,
        r = (0, C.oR)(),
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
                      guildId: t,
                      isStorefront: !0,
                      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                      analyticsContext: s.current,
                      onClose: () => {
                          "POP" !== (0, p.s1)().action &&
                              (0, k.Z)({
                                  guildId: t,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, j.U)();
        }, [t, a, o, n.applicationId]),
        (0, l.jsxs)("div", {
            className: E.container,
            children: [
                (0, l.jsx)(S.Z, {
                    guildId: t,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, l.jsx)(Z.$, {
                    applicationId: n.applicationId,
                    guildId: t,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function R(e) {
    var n, t, a, p, k;
    let { match: j } = e,
        { guildId: S, gameShopPageIndex: Z, gameShopSkuId: R } = j.params,
        { analyticsLocations: T } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        L = (0, b.Z)({ guildId: S }),
        A = (0, s.e7)([f.default], () => f.default.getSessionId(), []),
        M = (0, s.e7)([x.Z], () => x.Z.get(R), [R]);
    (0, _.p2)();
    let O = (0, c.Z)((0, r.Z)()),
        P = (0, s.e7)([I.ZP, f.default], () => I.ZP.isMember(S, f.default.getId())),
        y = i.useMemo(() => {
            if (null == Z) return 0;
            let e = parseInt(Z, 10);
            return isNaN(e) || (null != L && null != L.storefront && e >= L.storefront.pages.length) ? 0 : e;
        }, [Z, L]),
        w =
            null != (k = null == L || null == (t = L.storefront) || null == (n = t.pages[y]) ? void 0 : n.title)
                ? k
                : null,
        G = (null == L || null == (p = L.storefront) || null == (a = p.pages[y]) ? void 0 : a.leaderboard) != null,
        B = i.useMemo(
            () => ({
                sessionId: O,
                guildId: S,
                pageIndex: y,
                pageTitle: w,
                isUserGuildMember: P,
                pageHasLeaderboard: G,
            }),
            [O, S, y, w, P, G],
        );
    return (i.useEffect(() => {
        null != S && (0, v.m0)(S, y, null != R ? R : null);
    }, [S, y, R]),
    i.useEffect(() => {
        null != S && null != A && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, { shouldNavigate: !1 });
    }, [S, A]),
    ((null == L ? void 0 : L.state) !== "fetched" && (null == L ? void 0 : L.state) !== "error") ||
        null == S ||
        (null == L ? void 0 : L.storefront) == null)
        ? (0, l.jsx)("div", {
              className: o()(E.spinner, E.container),
              children: (0, l.jsx)(d.$jN, {}),
          })
        : (0, l.jsx)(g.Gt, {
              value: T,
              children: (0, l.jsx)(C.hL, {
                  newValue: B,
                  children: (0, l.jsx)(N, {
                      storefront: L.storefront,
                      guildId: S,
                      selectedPageIndex: y,
                      selectedSku: M,
                  }),
              }),
          });
}
