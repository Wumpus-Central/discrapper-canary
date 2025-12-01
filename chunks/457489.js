t.r(n), t.d(n, { default: () => R }), t(35282);
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    s = t(772848),
    r = t(442837),
    d = t(481060),
    c = t(211266),
    u = t(100527),
    g = t(906732),
    p = t(703656),
    _ = t(602733),
    I = t(314897),
    f = t(271383),
    h = t(430824),
    x = t(55563),
    m = t(900849),
    v = t(411935),
    C = t(590961),
    k = t(417317),
    j = t(705338),
    b = t(436585),
    S = t(720983),
    L = t(323540),
    N = t(140594);
function E(e) {
    let { storefront: n, guildId: t, selectedPageIndex: a, selectedSku: o } = e,
        s = (0, C.oR)(),
        r = i.useRef(s);
    return (
        i.useEffect(() => {
            r.current = s;
        }, [s]),
        i.useEffect(() => {
            null != o
                ? (0, b.g)({
                      skuId: o.id,
                      applicationId: n.applicationId,
                      guildId: t,
                      isStorefront: !0,
                      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                      analyticsContext: r.current,
                      onClose: () => {
                          "POP" !== (0, p.s1)().action &&
                              (0, j.default)({
                                  guildId: t,
                                  pageIndex: a,
                              });
                      },
                  })
                : null == o && (0, b.U)();
        }, [t, a, o, n.applicationId]),
        (0, l.jsxs)("div", {
            className: N.container,
            children: [
                (0, l.jsx)(S.Z, {
                    guildId: t,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, l.jsx)(L.$, {
                    applicationId: n.applicationId,
                    guildId: t,
                    page: n.pages[a],
                }),
            ],
        })
    );
}
function R(e) {
    var n, t, a, p, j;
    let { match: b } = e,
        { guildId: S, gameShopPageIndex: L, gameShopSkuId: R } = b.params,
        { analyticsLocations: Z } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        T = (0, k.Z)({
            guildId: S,
            location: "Social Layer Storefront",
        }),
        A = (0, r.e7)([I.default], () => I.default.getSessionId(), []),
        M = (0, r.e7)([x.Z], () => x.Z.get(R), [R]);
    (0, _.p2)();
    let y = (0, c.Z)((0, s.Z)()),
        O = (0, r.e7)([f.ZP, I.default], () => f.ZP.isMember(S, I.default.getId())),
        P = i.useMemo(() => {
            if (null == L) return 0;
            let e = parseInt(L, 10);
            return isNaN(e) || (null != T && null != T.storefront && e >= T.storefront.pages.length) ? 0 : e;
        }, [L, T]),
        w =
            null != (j = null == T || null == (t = T.storefront) || null == (n = t.pages[P]) ? void 0 : n.title)
                ? j
                : null,
        G = (null == T || null == (p = T.storefront) || null == (a = p.pages[P]) ? void 0 : a.leaderboard) != null,
        B = i.useMemo(
            () => ({
                sessionId: y,
                guildId: S,
                pageIndex: P,
                pageTitle: w,
                isUserGuildMember: O,
                pageHasLeaderboard: G,
            }),
            [y, S, P, w, O, G],
        );
    return (i.useEffect(() => {
        null != S && (0, v.m0)(S, P, null != R ? R : null);
    }, [S, P, R]),
    i.useEffect(() => {
        null != S && null != A && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, { shouldNavigate: !1 });
    }, [S, A]),
    ((null == T ? void 0 : T.state) !== "fetched" && (null == T ? void 0 : T.state) !== "error") ||
        null == S ||
        (null == T ? void 0 : T.storefront) == null)
        ? (0, l.jsx)("div", {
              className: o()(N.spinner, N.container),
              children: (0, l.jsx)(d.$jN, {}),
          })
        : (0, l.jsx)(g.Gt, {
              value: Z,
              children: (0, l.jsx)(C.hL, {
                  newValue: B,
                  children: (0, l.jsx)(E, {
                      storefront: T.storefront,
                      guildId: S,
                      selectedPageIndex: P,
                      selectedSku: M,
                  }),
              }),
          });
}
