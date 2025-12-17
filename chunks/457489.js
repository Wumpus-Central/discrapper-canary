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
    f = t(906732),
    g = t(703656),
    p = t(602733),
    I = t(314897),
    h = t(271383),
    x = t(430824),
    _ = t(55563),
    m = t(900849),
    b = t(411935),
    v = t(590961),
    C = t(980728),
    k = t(417317),
    S = t(436585),
    j = t(720983),
    Z = t(323540),
    E = t(981631),
    L = t(910440);
function N(e) {
    let { storefront: n, guildId: t, selectedPageIndex: a, selectedSku: o } = e,
        s = (0, v.oR)(),
        r = i.useRef(s);
    i.useEffect(() => {
        r.current = s;
    }, [s]);
    let d = null == o ? void 0 : o.id;
    return (
        i.useEffect(() => {
            if (null != d)
                return (
                    (0, S.g)({
                        skuId: d,
                        applicationId: n.applicationId,
                        guildId: t,
                        isStorefront: !0,
                        analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: r.current,
                        onClose: () => {
                            (0, g.s1)().location.pathname.indexOf(E.Z5c.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, C.Z)({
                                    guildId: t,
                                    pageIndex: a,
                                });
                        },
                    }),
                    () => {
                        (0, S.U)();
                    }
                );
        }, [t, a, d, n.applicationId]),
        (0, l.jsxs)("div", {
            className: L.container,
            children: [
                (0, l.jsx)(j.Z, {
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
    var n, t, a, g, C;
    let { match: S } = e,
        { guildId: j, gameShopPageIndex: Z, gameShopSkuId: E } = S.params,
        { analyticsLocations: R } = (0, f.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        T = (0, k.Z)({
            guildId: j,
            location: "Social Layer Storefront",
        }),
        A = (0, r.e7)([I.default], () => I.default.getSessionId(), []),
        M = (0, r.e7)([_.Z], () => _.Z.get(E), [E]);
    (0, p.p2)();
    let O = (0, c.Z)((0, s.Z)()),
        P = (0, r.e7)([h.ZP, I.default], () => h.ZP.isMember(j, I.default.getId())),
        y = i.useMemo(() => {
            if (null == Z) return 0;
            let e = parseInt(Z, 10);
            return isNaN(e) || (null != T && null != T.storefront && e >= T.storefront.pages.length) ? 0 : e;
        }, [Z, T]),
        w =
            null != (C = null == T || null == (t = T.storefront) || null == (n = t.pages[y]) ? void 0 : n.title)
                ? C
                : null,
        G = (null == T || null == (g = T.storefront) || null == (a = g.pages[y]) ? void 0 : a.leaderboard) != null,
        B = i.useMemo(
            () => ({
                sessionId: O,
                guildId: j,
                pageIndex: y,
                pageTitle: w,
                isUserGuildMember: P,
                pageHasLeaderboard: G,
            }),
            [O, j, y, w, P, G],
        );
    return (i.useEffect(() => {
        null != j && (0, b.m0)(j, y, null != E ? E : null);
    }, [j, y, E]),
    i.useEffect(() => {
        null != j && null != A && null == x.Z.getGuild(j) && (0, m.Ub)(j, {}, { shouldNavigate: !1 });
    }, [j, A]),
    null == j || (null == T ? void 0 : T.storefront) == null)
        ? (0, l.jsx)("div", {
              className: o()(L.spinner, L.container),
              children: (0, l.jsx)(d.$jN, {}),
          })
        : (0, l.jsx)(f.Gt, {
              value: R,
              children: (0, l.jsx)(v.hL, {
                  newValue: B,
                  children: (0, l.jsx)(N, {
                      storefront: T.storefront,
                      guildId: j,
                      selectedPageIndex: y,
                      selectedSku: M,
                  }),
              }),
          });
}
