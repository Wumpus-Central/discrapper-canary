"use strict";
i.r(t), i.d(t, { default: () => ex });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    s = i(132500),
    o = i(17928),
    d = i(289873),
    c = i(444927),
    u = i(793574),
    _ = i(688810),
    f = i(976860),
    C = i(171491),
    p = i(594832),
    g = i(495544),
    h = i(696451),
    b = i(71393),
    x = i(67480),
    m = i(449054),
    I = i(733391),
    E = i(439303),
    A = i(35826),
    L = i(429635),
    v = i(317560),
    R = i(939249),
    S = i(366010),
    k = i(834730),
    T = i(926268),
    N = i(736653),
    y = i(742589),
    j = i(975732),
    M = i(287809),
    O = i(954571),
    w = i(975571),
    B = i(371794),
    H = i(44724),
    P = i(995393),
    U = i(652215),
    V = i(518477),
    D = i(985018),
    G = i(718356);
function F(e) {
    let { content: t, onClick: i, ariaLabel: l, className: a } = e;
    return (0, n.jsx)(R.D, { className: r()(G.gb, a), onClick: i, "aria-label": l, children: t });
}
function Y(e) {
    let { guildId: t, storefront: i, selectedPageIndex: a } = e,
        s = (0, S.M)((0, N.Ay)()),
        d = (0, o.bG)([M.default], () => M.default.getCurrentUser()),
        c = (0, E.jM)(),
        { analyticsLocations: f } = (0, _.Ay)(),
        C = l.useCallback(() => {
            d?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: d.id,
                    tabSection: V.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [d]),
        p = l.useCallback(() => {
            O.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: P.ST.LEARN_MORE,
                location_stack: f,
            }),
                window.open(w.A.getArticleURL(U.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, f]);
    if (null == i) return null;
    let g = null != i.logoAssetId ? (0, B.YE)(i.applicationId, i.logoAssetId, 75) : null,
        h = null != i.lightThemeLogoAssetId ? (0, B.YE)(i.applicationId, i.lightThemeLogoAssetId, 75) : null,
        b = null;
    return (
        (b = s ? (g ?? h) : (h ?? g)),
        (0, n.jsxs)(y.A, {
            disableDoubleClick: !0,
            className: G.N1,
            children: [
                (0, n.jsxs)(R.D, {
                    onClick: () => {
                        (0, H.default)({ guildId: t, pageIndex: 0 });
                    },
                    className: G.gn,
                    children: [
                        null != b && (0, n.jsx)("img", { className: G.wm, src: b, alt: i.title }),
                        (0, n.jsx)(y.A.Title, { children: i.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: G.YC,
                    children: i.pages.map((e, i) =>
                        (0, n.jsx)(
                            y.A.Title,
                            {
                                onClick: () => {
                                    (0, H.default)({ guildId: t, pageIndex: i });
                                },
                                wrapperClassName: G.oB,
                                className: r()(G.xT, { [G.ys]: a === i }),
                                children: (0, n.jsx)(k.E, { variant: "text-sm/medium", children: e.title }),
                            },
                            `${e.title}-${i}`,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: G.sZ,
                    children: [
                        (0, n.jsx)(F, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: C,
                            ariaLabel: D.intl.string(D.t["7lZ31J"]),
                            className: G.ij,
                        }),
                        (0, n.jsx)(F, {
                            onClick: p,
                            ariaLabel: D.intl.string(D.t.hvVgAZ),
                            content: (0, n.jsx)(k.E, {
                                variant: "text-sm/medium",
                                children: D.intl.string(D.t.hvVgAZ),
                            }),
                            className: G.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var Z = i(689175),
    W = i(765671),
    K = i(318254),
    $ = i(554146),
    z = i(417098),
    q = i(853735),
    J = i(932001),
    X = i(945942),
    Q = i(49999),
    ee = i(922674);
function et(e) {
    let { location: t } = e,
        { shouldRender: i, limitedOfferTimeLeft: l } = (0, X.A)({ location: t }),
        [a, r] = (0, J.RF)(
            i ? $.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, q.c)($.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        s = a !== $.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !i || s
        ? null
        : (0, n.jsxs)(z.$T, {
              className: ee.U,
              color: z.Hv.BRAND,
              children: [
                  (0, n.jsx)(z.PM, {
                      noticeType: U.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => r(Q.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(K.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: ee.f,
                      children: [
                          (0, n.jsxs)(k.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [D.intl.string(D.t.yYEZGi), null != l && ` (${l})`],
                          }),
                          (0, n.jsx)(k.E, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: D.intl.format(D.t.RUuXiA, { applicationName: D.intl.string(D.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var ei = i(183802),
    en = i(534514),
    el = i(514270);
function ea(e) {
    let { leaderboard: t, skuId: i, analyticsLocations: a, analyticsSectionId: r } = e,
        s = l.useMemo(() => ({ pageSection: r }), [r]);
    return null == t
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: s,
              children: (0, n.jsxs)("div", {
                  className: el.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: el.FS,
                          children: [
                              (0, n.jsx)(en.D, { variant: "display-lg", color: "text-strong", children: t.title }),
                              (0, n.jsx)(k.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: t.description,
                              }),
                          ],
                      }),
                      null != i &&
                          (0, n.jsx)("div", {
                              className: el.Ui,
                              children: (0, n.jsx)(ei.A, {
                                  positionInSection: 0,
                                  skuId: i,
                                  variant: ei.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var er = i(871123),
    es = i(500102);
function eo(e) {
    let { applicationId: t, backgroundImageAssetId: i } = e,
        l = null != i ? (0, B.YE)(t, i, 1024, er.pV) : null;
    return (0, n.jsx)("div", {
        className: es._,
        children: null != l ? (0, n.jsx)("div", { className: es.i, style: { backgroundImage: `url(${l})` } }) : null,
    });
}
var ed = i(198647);
function ec(e) {
    let { skuIds: t, variant: i = ei.s.SMALL, analyticsLocations: l } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: r()(ed.kL, ed.$2, { [ed.Wc]: i === ei.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(ei.A, { positionInSection: t, skuId: e, variant: i, analyticsLocations: l }, `${e}-${t}`),
              ),
          });
}
var eu = i(259238);
function e_(e) {
    let { analyticsSectionId: t, sectionTitle: i, skuIds: a, variant: r = ei.s.SMALL } = e,
        s = l.useMemo(() => ({ pageSection: t, pageSectionTitle: i }), [t, i]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: s,
              children: (0, n.jsxs)("div", {
                  className: eu.h,
                  children: [
                      null != i &&
                          i.length > 0 &&
                          (0, n.jsx)(en.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eu.G,
                              children: i,
                          }),
                      (0, n.jsx)(ec, { skuIds: a, variant: r }),
                  ],
              }),
          });
}
var ef = i(59520);
function eC(e, t, i, n) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: s = 0 } = n;
    if (r > 0) {
        let n = (l + a) / r;
        if (n > 0) {
            let {
                sessionId: l,
                guildId: a,
                pageIndex: o,
                pageTitle: d,
                isUserGuildMember: c,
                pageHasLeaderboard: u,
            } = t;
            O.default.track(e, {
                slayer_storefront_session_id: l,
                guild_id: a,
                page_index: o,
                page_title: d,
                is_user_guild_member: c,
                page_has_leaderboard: u,
                scroll_visible_percent: n,
                page_height: Math.round(r),
                page_width: Math.round(s),
                location_stack: i,
            });
        }
    }
}
var ep = i(384274);
function eg(e) {
    let t,
        i,
        { applicationId: a, page: r } = e,
        { ref: s, width: o } = (0, W.Ay)(),
        d = (0, E.jM)(),
        { analyticsLocations: c } = (0, _.Ay)(),
        u = l.useRef(null),
        { handleScroll: f } =
            ((t = l.useRef(d)),
            l.useEffect(() => {
                t.current = d;
            }, [d]),
            (i = (0, ef.I)(eC, 5e3, [], { trailing: !0 })),
            {
                handleScroll: l.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            i(U.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [i, c, u]),
            }),
        [C, p] = l.useMemo(() => {
            if (r?.skuIds == null || 0 === r.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return r?.leaderboard == null || null == e || e < 564
                ? [[], r.skuIds]
                : e < 1104
                  ? r.skuIds.length >= 2
                      ? [[], r.skuIds]
                      : [r.skuIds.slice(0, 1), r.skuIds.slice(1)]
                  : [r.skuIds.slice(0, 2), r.skuIds.slice(2)];
        }, [r, o]),
        g = 1 === C.length && null != o && o >= 834;
    return (l.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: i, pageTitle: n, isUserGuildMember: l, pageHasLeaderboard: a } = d;
        O.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            page_index: i,
            page_title: n,
            is_user_guild_member: l,
            page_has_leaderboard: a,
            location_stack: c,
        });
    }, [d, c]),
    null == r)
        ? null
        : (0, n.jsxs)(Z.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  (0, n.jsx)(et, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: s,
                      className: ep.k,
                      children: [
                          (0, n.jsx)(eo, {
                              applicationId: a,
                              backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, n.jsx)(ea, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: r.leaderboard,
                              skuId: g ? C[0] : void 0,
                              analyticsLocations: c,
                          }),
                          (0, n.jsx)(e_, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: g ? void 0 : C,
                              variant: ei.s.MEDIUM,
                          }),
                          (0, n.jsx)(e_, { analyticsSectionId: "non-featured-top-section", skuIds: p }),
                          r.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  e_,
                                  {
                                      analyticsSectionId: `index:${t}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${t}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eh = i(253004);
function eb(e) {
    let { storefront: t, guildId: i, selectedPageIndex: a, selectedSku: r } = e,
        s = (0, E.jM)(),
        o = l.useRef(s);
    l.useEffect(() => {
        o.current = s;
    }, [s]);
    let d = r?.id;
    return (
        l.useEffect(() => {
            if (null != d)
                return (
                    (0, v.R)({
                        skuId: d,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: o.current,
                        onClose: () => {
                            (0, f.JK)().location.pathname.indexOf(U.BVt.CHANNELS_GAME_SHOP(i, a)) >= 0 &&
                                (0, A.A)({ guildId: i, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, v.j)();
                    }
                );
        }, [i, a, d, t.applicationId]),
        (0, n.jsxs)("div", {
            className: eh.k,
            children: [
                (0, n.jsx)(Y, { guildId: i, storefront: t, selectedPageIndex: a }),
                (0, n.jsx)(eg, { applicationId: t.applicationId, page: t.pages[a] }),
            ],
        })
    );
}
function ex(e) {
    let { match: t } = e,
        { guildId: i, gameShopPageIndex: a, gameShopSkuId: f } = t.params,
        { analyticsLocations: A } = (0, _.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        v = (0, L.A)({ guildId: i }),
        R = (0, o.bG)([g.default], () => g.default.getSessionId(), []),
        S = (0, o.bG)([x.A], () => x.A.get(f), [f]);
    (0, p.pE)(), (0, C.x)({ applicationId: v?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let k = (0, c.A)((0, s.A)()),
        T = (0, o.bG)([h.Ay, g.default], () => h.Ay.isMember(i, g.default.getId())),
        N = l.useMemo(() => {
            if (null == a) return 0;
            let e = parseInt(a, 10);
            return isNaN(e) || (null != v && null != v.storefront && e >= v.storefront.pages.length) ? 0 : e;
        }, [a, v]),
        y = v?.storefront?.pages[N]?.title ?? null,
        j = v?.storefront?.pages[N]?.leaderboard != null,
        M = l.useMemo(
            () => ({
                sessionId: k,
                guildId: i,
                pageIndex: N,
                pageTitle: y,
                isUserGuildMember: T,
                pageHasLeaderboard: j,
            }),
            [k, i, N, y, T, j],
        );
    return (l.useEffect(() => {
        null != i && (0, I.SP)(i, N, null != f ? f : null);
    }, [i, N, f]),
    l.useEffect(() => {
        null == i || null == R || (null == b.A.getGuild(i) && (0, m.Z2)(i, {}, { shouldNavigate: !1 }));
    }, [i, R]),
    null == i || v?.storefront == null)
        ? (0, n.jsx)("div", { className: r()(eh.u, eh.k), children: (0, n.jsx)(d.y, {}) })
        : (0, n.jsx)(_.f5, {
              value: A,
              children: (0, n.jsx)(E.E9, {
                  newValue: M,
                  children: (0, n.jsx)(eb, {
                      storefront: v.storefront,
                      guildId: i,
                      selectedPageIndex: N,
                      selectedSku: S,
                  }),
              }),
          });
}
