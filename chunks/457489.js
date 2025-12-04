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
    C = t(411935),
    v = t(590961),
    k = t(980728),
    j = t(417317),
    b = t(436585),
    S = t(720983),
    N = t(323540),
    E = t(981631),
    L = t(140594);
function Z(e) {
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
                    (0, b.g)({
                        skuId: d,
                        applicationId: n.applicationId,
                        guildId: t,
                        isStorefront: !0,
                        analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: r.current,
                        onClose: () => {
                            (0, p.s1)().location.pathname.indexOf(E.Z5c.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, k.Z)({
                                    guildId: t,
                                    pageIndex: a,
                                });
                        },
                    }),
                    () => {
                        (0, b.U)();
                    }
                );
        }, [t, a, d, n.applicationId]),
        (0, l.jsxs)("div", {
            className: L.container,
            children: [
                (0, l.jsx)(S.Z, {
                    guildId: t,
                    storefront: n,
                    selectedPageIndex: a,
                }),
                (0, l.jsx)(N.$, {
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
    let { match: b } = e,
        { guildId: S, gameShopPageIndex: N, gameShopSkuId: E } = b.params,
        { analyticsLocations: R } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT),
        T = (0, j.Z)({
            guildId: S,
            location: "Social Layer Storefront",
        }),
        A = (0, r.e7)([I.default], () => I.default.getSessionId(), []),
        M = (0, r.e7)([x.Z], () => x.Z.get(E), [E]);
    (0, _.p2)();
    let O = (0, c.Z)((0, s.Z)()),
        P = (0, r.e7)([f.ZP, I.default], () => f.ZP.isMember(S, I.default.getId())),
        y = i.useMemo(() => {
            if (null == N) return 0;
            let e = parseInt(N, 10);
            return isNaN(e) || (null != T && null != T.storefront && e >= T.storefront.pages.length) ? 0 : e;
        }, [N, T]),
        w =
            null != (k = null == T || null == (t = T.storefront) || null == (n = t.pages[y]) ? void 0 : n.title)
                ? k
                : null,
        G = (null == T || null == (p = T.storefront) || null == (a = p.pages[y]) ? void 0 : a.leaderboard) != null,
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
        null != S && (0, C.m0)(S, y, null != E ? E : null);
    }, [S, y, E]),
    i.useEffect(() => {
        null != S && null != A && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, { shouldNavigate: !1 });
    }, [S, A]),
    null == S || (null == T ? void 0 : T.storefront) == null)
        ? (0, l.jsx)("div", {
              className: o()(L.spinner, L.container),
              children: (0, l.jsx)(d.$jN, {}),
          })
        : (0, l.jsx)(g.Gt, {
              value: R,
              children: (0, l.jsx)(v.hL, {
                  newValue: B,
                  children: (0, l.jsx)(Z, {
                      storefront: T.storefront,
                      guildId: S,
                      selectedPageIndex: y,
                      selectedSku: M,
                  }),
              }),
          });
}
