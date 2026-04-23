t.r(l), t.d(l, { default: () => eI });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(132500),
    o = t(17928),
    d = t(289873),
    c = t(444927),
    u = t(793574),
    _ = t(688810),
    g = t(976860),
    p = t(171491),
    x = t(594832),
    f = t(495544),
    h = t(696451),
    A = t(71393),
    I = t(67480),
    m = t(449054),
    E = t(733391),
    S = t(439303),
    j = t(35826),
    k = t(429635),
    R = t(317560),
    b = t(939249),
    N = t(366010),
    C = t(834730),
    v = t(926268),
    L = t(736653),
    M = t(742589),
    T = t(975732),
    O = t(287809),
    y = t(954571),
    G = t(975571),
    D = t(371794),
    w = t(44724),
    P = t(995393),
    B = t(652215),
    H = t(518477),
    U = t(985018),
    Y = t(718356);
function $(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(b.D, { className: i()(Y.gb, a), onClick: t, "aria-label": s, children: l });
}
function W(e) {
    let { guildId: l, storefront: t, selectedPageIndex: a } = e,
        r = (0, N.M)((0, L.Ay)()),
        d = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        c = (0, S.jM)(),
        { analyticsLocations: g } = (0, _.Ay)(),
        p = s.useCallback(() => {
            d?.id != null &&
                (0, T.openUserProfileModal)({
                    userId: d.id,
                    tabSection: H.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [d]),
        x = s.useCallback(() => {
            y.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: P.ST.LEARN_MORE,
                location_stack: g,
            }),
                window.open(G.A.getArticleURL(B.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, g]);
    if (null == t) return null;
    let f = null != t.logoAssetId ? (0, D.YE)(t.applicationId, t.logoAssetId, 75) : null,
        h = null != t.lightThemeLogoAssetId ? (0, D.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        A = null;
    return (
        (A = r ? (f ?? h) : (h ?? f)),
        (0, n.jsxs)(M.A, {
            disableDoubleClick: !0,
            className: Y.N1,
            children: [
                (0, n.jsxs)(b.D, {
                    onClick: () => {
                        (0, w.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: Y.gn,
                    children: [
                        null != A && (0, n.jsx)("img", { className: Y.wm, src: A, alt: t.title }),
                        (0, n.jsx)(M.A.Title, { children: t.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: Y.YC,
                    children: t.pages.map((e, t) =>
                        (0, n.jsx)(
                            M.A.Title,
                            {
                                onClick: () => {
                                    (0, w.default)({ guildId: l, pageIndex: t });
                                },
                                wrapperClassName: Y.oB,
                                className: i()(Y.xT, { [Y.ys]: a === t }),
                                children: (0, n.jsx)(C.E, { variant: "text-sm/medium", children: e.title }),
                            },
                            `${e.title}-${t}`,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: Y.sZ,
                    children: [
                        (0, n.jsx)($, {
                            content: (0, n.jsx)(v.C, { size: "xs", color: "currentColor" }),
                            onClick: p,
                            ariaLabel: U.intl.string(U.t["7lZ31J"]),
                            className: Y.ij,
                        }),
                        (0, n.jsx)($, {
                            onClick: x,
                            ariaLabel: U.intl.string(U.t.hvVgAZ),
                            content: (0, n.jsx)(C.E, {
                                variant: "text-sm/medium",
                                children: U.intl.string(U.t.hvVgAZ),
                            }),
                            className: Y.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var F = t(689175),
    V = t(765671),
    Z = t(318254),
    J = t(554146),
    z = t(417098),
    K = t(853735),
    X = t(932001),
    q = t(945942),
    Q = t(49999),
    ee = t(922674);
function el(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: s } = (0, q.A)({ location: l }),
        [a, i] = (0, X.RF)(
            t ? J.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, K.c)(J.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== J.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, n.jsxs)(z.$T, {
              className: ee.U,
              color: z.Hv.BRAND,
              children: [
                  (0, n.jsx)(z.PM, {
                      noticeType: B.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(Q.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(Z.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: ee.f,
                      children: [
                          (0, n.jsxs)(C.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [U.intl.string(U.t.yYEZGi), null != s && ` (${s})`],
                          }),
                          (0, n.jsx)(C.E, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(C.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: U.intl.format(U.t.RUuXiA, { applicationName: U.intl.string(U.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var et = t(183802),
    en = t(534514),
    es = t(514270);
function ea(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(S.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: es.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: es.FS,
                          children: [
                              (0, n.jsx)(en.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(C.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: es.Ui,
                              children: (0, n.jsx)(et.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: et.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ei = t(871123),
    er = t(500102);
function eo(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, D.YE)(l, t, 1024, ei.pV) : null;
    return (0, n.jsx)("div", {
        className: er._,
        children: null != s ? (0, n.jsx)("div", { className: er.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ed = t(198647);
function ec(e) {
    let { skuIds: l, variant: t = et.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(ed.kL, ed.$2, { [ed.Wc]: t === et.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(et.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eu = t(259238);
function e_(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = et.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(S.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eu.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(en.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eu.G,
                              children: t,
                          }),
                      (0, n.jsx)(ec, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eg = t(59520);
function ep(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                pageIndex: o,
                pageTitle: d,
                isUserGuildMember: c,
                pageHasLeaderboard: u,
            } = l;
            y.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                page_index: o,
                page_title: d,
                is_user_guild_member: c,
                page_has_leaderboard: u,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var ex = t(384274);
function ef(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, V.Ay)(),
        d = (0, S.jM)(),
        { analyticsLocations: c } = (0, _.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((l = s.useRef(d)),
            s.useEffect(() => {
                l.current = d;
            }, [d]),
            (t = (0, eg.I)(ep, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(B.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, c, u]),
            }),
        [p, x] = s.useMemo(() => {
            if (i?.skuIds == null || 0 === i.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return i?.leaderboard == null || null == e || e < 564
                ? [[], i.skuIds]
                : e < 1104
                  ? i.skuIds.length >= 2
                      ? [[], i.skuIds]
                      : [i.skuIds.slice(0, 1), i.skuIds.slice(1)]
                  : [i.skuIds.slice(0, 2), i.skuIds.slice(2)];
        }, [i, o]),
        f = 1 === p.length && null != o && o >= 834;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = d;
        y.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: c,
        });
    }, [d, c]),
    null == i)
        ? null
        : (0, n.jsxs)(F.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  (0, n.jsx)(el, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: ex.k,
                      children: [
                          (0, n.jsx)(eo, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, n.jsx)(ea, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: i.leaderboard,
                              skuId: f ? p[0] : void 0,
                              analyticsLocations: c,
                          }),
                          (0, n.jsx)(e_, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: f ? void 0 : p,
                              variant: et.s.MEDIUM,
                          }),
                          (0, n.jsx)(e_, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  e_,
                                  {
                                      analyticsSectionId: `index:${l}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eh = t(253004);
function eA(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, S.jM)(),
        o = s.useRef(r);
    s.useEffect(() => {
        o.current = r;
    }, [r]);
    let d = i?.id;
    return (
        s.useEffect(() => {
            if (null != d)
                return (
                    (0, R.R)({
                        skuId: d,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: o.current,
                        onClose: () => {
                            (0, g.JK)().location.pathname.indexOf(B.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, j.A)({ guildId: t, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [t, a, d, l.applicationId]),
        (0, n.jsxs)("div", {
            className: eh.k,
            children: [
                (0, n.jsx)(W, { guildId: t, storefront: l, selectedPageIndex: a }),
                (0, n.jsx)(ef, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function eI(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: g } = l.params,
        { analyticsLocations: j } = (0, _.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        R = (0, k.A)({ guildId: t }),
        b = (0, o.bG)([f.default], () => f.default.getSessionId(), []),
        N = (0, o.bG)([I.A], () => I.A.get(g), [g]);
    (0, x.pE)(), (0, p.x)({ applicationId: R?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let C = (0, c.A)((0, r.A)()),
        v = (0, o.bG)([h.Ay, f.default], () => h.Ay.isMember(t, f.default.getId())),
        L = s.useMemo(() => {
            if (null == a) return 0;
            let e = parseInt(a, 10);
            return isNaN(e) || (null != R && null != R.storefront && e >= R.storefront.pages.length) ? 0 : e;
        }, [a, R]),
        M = R?.storefront?.pages[L]?.title ?? null,
        T = R?.storefront?.pages[L]?.leaderboard != null,
        O = s.useMemo(
            () => ({
                sessionId: C,
                guildId: t,
                pageIndex: L,
                pageTitle: M,
                isUserGuildMember: v,
                pageHasLeaderboard: T,
            }),
            [C, t, L, M, v, T],
        );
    return (s.useEffect(() => {
        null != t && (0, E.SP)(t, L, null != g ? g : null);
    }, [t, L, g]),
    s.useEffect(() => {
        null == t || null == b || (null == A.A.getGuild(t) && (0, m.Z2)(t, {}, { shouldNavigate: !1 }));
    }, [t, b]),
    null == t || R?.storefront == null)
        ? (0, n.jsx)("div", { className: i()(eh.u, eh.k), children: (0, n.jsx)(d.y, {}) })
        : (0, n.jsx)(_.f5, {
              value: j,
              children: (0, n.jsx)(S.E9, {
                  newValue: O,
                  children: (0, n.jsx)(eA, {
                      storefront: R.storefront,
                      guildId: t,
                      selectedPageIndex: L,
                      selectedSku: N,
                  }),
              }),
          });
}
