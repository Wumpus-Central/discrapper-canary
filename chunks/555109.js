t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => em, default: () => eA });
var s = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(17928),
    c = t(289873),
    d = t(444927),
    u = t(793574),
    g = t(688810),
    p = t(976860),
    f = t(470285),
    _ = t(561794),
    x = t(495544),
    I = t(696451),
    h = t(71393),
    A = t(67480),
    m = t(385648),
    E = t(871123),
    S = t(733391),
    j = t(439303),
    k = t(353281),
    R = t(429635),
    N = t(317560),
    b = t(939249),
    v = t(366010),
    C = t(834730),
    L = t(926268),
    M = t(736653),
    y = t(742589),
    O = t(975732),
    T = t(287809),
    G = t(174459),
    H = t(975571),
    D = t(371794),
    P = t(995393),
    w = t(652215),
    Y = t(518477),
    B = t(375708),
    U = t(718356);
function $(e) {
    let { content: l, onClick: t, ariaLabel: n, className: a } = e;
    return (0, s.jsx)(b.D, { className: i()(U.gb, a), onClick: t, "aria-label": n, children: l });
}
function W(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, v.M)((0, M.Ay)()),
        r = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, k.H)(),
        _ = n.useCallback(() => {
            r?.id != null &&
                (0, O.openUserProfileModal)({
                    userId: r.id,
                    tabSection: Y.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        x = n.useCallback(() => {
            G.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: P.ST.LEARN_MORE,
                location_stack: d,
            }),
                window.open(H.A.getArticleURL(w.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, d]),
        I = n.useCallback(() => {
            null != f && (0, p.pX)(f(0));
        }, [f]);
    if (null == l) return null;
    let h = null != l.logoAssetId ? (0, D.YE)(l.applicationId, l.logoAssetId, 128) : null,
        A = null != l.lightThemeLogoAssetId ? (0, D.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        m = null;
    return (
        (m = a ? (h ?? A) : (A ?? h)),
        (0, s.jsxs)(y.A, {
            disableDoubleClick: !0,
            className: U.N1,
            children: [
                (0, s.jsxs)(b.D, {
                    onClick: I,
                    className: U.gn,
                    children: [
                        null != m && (0, s.jsx)("img", { className: U.wm, src: m, alt: l.title }),
                        (0, s.jsx)(y.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, s.jsx)("div", {
                        className: U.YC,
                        children: l.pages.map((e, l) =>
                            (0, s.jsx)(
                                y.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, p.pX)(f(l));
                                    },
                                    wrapperClassName: U.oB,
                                    className: i()(U.xT, { [U.ys]: t === l }),
                                    children: (0, s.jsx)(C.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, s.jsxs)("div", {
                    className: U.sZ,
                    children: [
                        (0, s.jsx)($, {
                            content: (0, s.jsx)(L.C, { size: "xs", color: "currentColor" }),
                            onClick: _,
                            ariaLabel: B.intl.string(B.t["7lZ31J"]),
                            className: U.ij,
                        }),
                        (0, s.jsx)($, {
                            onClick: x,
                            ariaLabel: B.intl.string(B.t.hvVgAZ),
                            content: (0, s.jsx)(C.E, {
                                variant: "text-sm/medium",
                                children: B.intl.string(B.t.hvVgAZ),
                            }),
                            className: U.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var F = t(689175),
    V = t(765671);
let Z = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var J = t(318254),
    X = t(554146),
    z = t(417098),
    K = t(853735),
    q = t(131607),
    Q = t(945942),
    ee = t(49999),
    el = t(922674);
function et(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: n } = (0, Q.A)({ location: l }),
        [a, i] = (0, q.RF)(
            t ? X.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, K.c)(X.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== X.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, s.jsxs)(z.$T, {
              className: el.U,
              color: z.Hv.BRAND,
              children: [
                  (0, s.jsx)(z.PM, {
                      noticeType: w.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(ee.i.USER_DISMISS),
                  }),
                  (0, s.jsx)(J.C, { size: "xs", color: "currentColor" }),
                  (0, s.jsxs)("div", {
                      className: el.f,
                      children: [
                          (0, s.jsxs)(C.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [B.intl.string(B.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, s.jsx)(C.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, s.jsx)(C.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: B.intl.format(B.t.RUuXiA, { applicationName: B.intl.string(B.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var es = t(328100),
    en = t(534514),
    ea = t(514270);
function ei(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(j.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: ea.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: ea.FS,
                          children: [
                              (0, s.jsx)(en.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(C.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: ea.Ui,
                              children: (0, s.jsx)(es.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: es.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var er = t(500102);
function eo(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, D.YE)(l, t, 1024, E.pV) : null;
    return (0, s.jsx)("div", {
        className: er._,
        children: null != n ? (0, s.jsx)("div", { className: er.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var ec = t(198647);
function ed(e) {
    let { skuIds: l, variant: t = es.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(ec.kL, ec.$2, { [ec.Wc]: t === es.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, s.jsx)(es.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var eu = t(259238);
function eg(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = es.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, s.jsx)(j.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: eu.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, s.jsx)(en.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eu.G,
                              children: t,
                          }),
                      (0, s.jsx)(ed, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var ep = t(59520);
function ef(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: u,
            } = l;
            G.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                page_index: o,
                page_title: c,
                is_user_guild_member: d,
                page_has_leaderboard: u,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var e_ = t(384274);
function ex(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, V.Ay)(),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = n.useRef(null),
        { handleScroll: p } =
            ((l = n.useRef(c)),
            n.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, ep.I)(ef, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(w.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        f = (function (e) {
            let { location: l } = e;
            return Z.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [_, x] = n.useMemo(() => {
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
        I = 1 === _.length && null != o && o >= 834 && !f;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        G.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, d]),
    null == i)
        ? null
        : (0, s.jsxs)(F.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, s.jsx)(et, { location: "social_layer_storefront_page" }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: e_.k,
                      children: [
                          (0, s.jsx)(eo, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !f &&
                              (0, s.jsx)(ei, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: I ? _[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, s.jsx)(eg, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : _,
                              variant: es.s.MEDIUM,
                          }),
                          (0, s.jsx)(eg, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
                                  eg,
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
var eI = t(253004);
function eh(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, j.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, k.H)(),
        d = n.useRef(r);
    n.useEffect(() => {
        d.current = r;
    }, [r]);
    let g = n.useCallback(() => {
            null != c && (0, p.bG)(c(0));
        }, [c]),
        f = i?.id;
    return (
        n.useEffect(() => {
            if (null != f)
                return (
                    (0, N.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: f,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: s } = (0, p.JK)().location;
                            (0, E.rG)(e, s, l.applicationId, t) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, N.j)();
                    }
                );
        }, [t, a, f, l.applicationId, c, g]),
        (0, s.jsxs)("div", {
            className: eI.k,
            children: [o?.(a, l), (0, s.jsx)(ex, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eA(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([x.default], () => x.default.getSessionId(), []),
        c = n.useCallback((e, l, s) => w.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        d = (0, E.nY)(t),
        u = n.useCallback((e, l) => (0, s.jsx)(W, { storefront: l, selectedPageIndex: e }), []);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == h.A.getGuild(t) && (0, m.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(em, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function em(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: p = 0,
            renderHeader: h,
            getSocialLayerStorefrontLink: m,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        N = (0, R.A)({ applicationId: l }),
        b = (0, o.bG)([A.A], () => A.A.get(a), [a]);
    (0, _.pE)(), (0, f.x)({ applicationId: N?.storefront?.applicationId });
    let v = (0, d.A)((0, r.A)()),
        C = (0, o.bG)([I.Ay, x.default], () => I.Ay.isMember(t, x.default.getId())),
        L = n.useMemo(
            () =>
                null == p || isNaN(p) || (null != N && null != N.storefront && p >= N.storefront.pages.length) ? 0 : p,
            [p, N],
        ),
        M = N?.storefront?.pages[L]?.title ?? null,
        y = N?.storefront?.pages[L]?.leaderboard != null,
        O = n.useMemo(
            () => ({
                sessionId: v,
                guildId: t,
                applicationId: l,
                pageIndex: L,
                pageTitle: M,
                isUserGuildMember: C,
                pageHasLeaderboard: y,
            }),
            [v, t, l, L, M, C, y],
        );
    return (n.useEffect(() => {
        null != l && (0, S.SP)(l, L, null != a ? a : null);
    }, [l, L, a]),
    null == l || N?.storefront == null)
        ? (0, s.jsx)("div", { className: i()(eI.u, eI.k), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(g.f5, {
              value: E,
              children: (0, s.jsx)(k.J, {
                  renderHeader: h,
                  getSocialLayerStorefrontLink: m,
                  children: (0, s.jsx)(j.E9, {
                      newValue: O,
                      children: (0, s.jsx)(eh, {
                          storefront: N.storefront,
                          guildId: t,
                          selectedPageIndex: L,
                          selectedSku: b,
                      }),
                  }),
              }),
          });
}
