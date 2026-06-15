t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eb, default: () => eR });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(17928),
    c = t(534514),
    d = t(834730),
    u = t(289873),
    g = t(444927),
    p = t(793574),
    _ = t(688810),
    f = t(976860),
    x = t(470285),
    h = t(561794),
    A = t(495544),
    I = t(696451),
    m = t(71393),
    S = t(67480),
    E = t(385648),
    j = t(871123),
    k = t(733391),
    N = t(439303),
    R = t(353281),
    b = t(429635),
    v = t(317560),
    C = t(696292),
    L = t(939249),
    M = t(366010),
    y = t(926268),
    O = t(736653),
    T = t(742589),
    D = t(617986),
    H = t(975732),
    G = t(371446),
    P = t(70926),
    w = t(287809),
    B = t(174459),
    Y = t(975571),
    U = t(371794),
    $ = t(681064),
    V = t(995393),
    W = t(652215),
    F = t(518477),
    Z = t(375708),
    J = t(718356);
function X(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(L.D, { className: i()(J.gb, a), onClick: t, "aria-label": s, children: l });
}
function z() {
    let { enabled: e } = (0, G.Z)({ location: "slayer_storefront_header" }),
        l = (0, $.R)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: C.u.ORBS_BALANCE_MENU });
        }, []);
    return e && l
        ? (0, n.jsx)(P.SS, { cardAlignment: P.SS.CardAlignment.END, ctaText: Z.intl.string(Z.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function q(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, M.M)((0, O.Ay)()),
        r = (0, o.bG)([w.default], () => w.default.getCurrentUser()),
        c = (0, N.jM)(),
        { analyticsLocations: u } = (0, _.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, R.H)(),
        x = s.useCallback(() => {
            r?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: r.id,
                    tabSection: F.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            B.default.track(W.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: V.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(Y.A.getArticleURL(W.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        A = s.useCallback(() => {
            null != g && (0, f.pX)(g(0));
        }, [g]);
    if (null == l) return null;
    let I = null != l.logoAssetId ? (0, U.YE)(l.applicationId, l.logoAssetId, 128) : null,
        m = null != l.lightThemeLogoAssetId ? (0, U.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        S = null;
    return (
        (S = a ? (I ?? m) : (m ?? I)),
        (0, n.jsxs)(T.A, {
            disableDoubleClick: !0,
            className: J.N1,
            children: [
                (0, n.jsxs)(L.D, {
                    onClick: A,
                    className: J.gn,
                    children: [
                        null != S && (0, n.jsx)("img", { className: J.wm, src: S, alt: l.title }),
                        (0, n.jsx)(T.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: J.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                T.A.Title,
                                {
                                    onClick: () => {
                                        null != g && (0, f.pX)(g(l));
                                    },
                                    wrapperClassName: J.oB,
                                    className: i()(J.xT, { [J.ys]: t === l }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: J.sZ,
                    children: [
                        (0, n.jsx)(X, {
                            content: (0, n.jsx)(y.C, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: Z.intl.string(Z.t["7lZ31J"]),
                            className: J.ij,
                        }),
                        (0, n.jsx)(z, {}),
                        (0, n.jsx)(X, {
                            onClick: h,
                            ariaLabel: Z.intl.string(Z.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: Z.intl.string(Z.t.hvVgAZ),
                            }),
                            className: J.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var K = t(689175),
    Q = t(765671);
let ee = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var el = t(318254),
    et = t(554146),
    en = t(417098),
    es = t(853735),
    ea = t(131607),
    ei = t(945942),
    er = t(49999),
    eo = t(922674);
function ec(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: s } = (0, ei.A)({ location: l }),
        [a, i] = (0, ea.RF)(
            t ? et.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, es.c)(et.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== et.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, n.jsxs)(en.$T, {
              className: eo.U,
              color: en.Hv.BRAND,
              children: [
                  (0, n.jsx)(en.PM, {
                      noticeType: W.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(er.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(el.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: eo.f,
                      children: [
                          (0, n.jsxs)(d.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [Z.intl.string(Z.t.yYEZGi), null != s && ` (${s})`],
                          }),
                          (0, n.jsx)(d.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, n.jsx)(d.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: Z.intl.format(Z.t.RUuXiA, { applicationName: Z.intl.string(Z.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var ed = t(328100),
    eu = t(514270);
function eg(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(N.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eu.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: eu.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: eu.Ui,
                              children: (0, n.jsx)(ed.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ed.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ep = t(500102);
function e_(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, U.YE)(l, t, 1024, j.pV) : null;
    return (0, n.jsx)("div", {
        className: ep._,
        children: null != s ? (0, n.jsx)("div", { className: ep.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ef = t(198647);
function ex(e) {
    let { skuIds: l, variant: t = ed.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(ef.kL, ef.$2, { [ef.Wc]: t === ed.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(ed.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eh = t(259238);
function eA(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = ed.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(N.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eh.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eh.G,
                              children: t,
                          }),
                      (0, n.jsx)(ex, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eI = t(59520);
function em(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = l;
            B.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eS = t(384274);
function eE(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, Q.Ay)(),
        c = (0, N.jM)(),
        { analyticsLocations: d } = (0, _.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((l = s.useRef(c)),
            s.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eI.I)(em, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(W.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        p = (function (e) {
            let { location: l } = e;
            return ee.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [f, x] = s.useMemo(() => {
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
        h = 1 === f.length && null != o && o >= 834 && !p;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        B.default.track(W.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: d,
        });
    }, [c, a, d]),
    null == i)
        ? null
        : (0, n.jsxs)(K.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  (0, n.jsx)(ec, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eS.k,
                      children: [
                          (0, n.jsx)(e_, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, n.jsx)(eg, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? f[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eA, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : f,
                              variant: ed.s.MEDIUM,
                          }),
                          (0, n.jsx)(eA, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  eA,
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
var ej = t(430825),
    ek = t(253004);
function eN(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, N.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, R.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = s.useCallback(() => {
            null != c && (0, f.bG)(c(0));
        }, [c]),
        g = i?.id;
    return (
        s.useEffect(() => {
            if (null != g)
                return (
                    (0, v.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, f.JK)().location;
                            (0, j.rG)(e, n, l.applicationId, t) && null != c && (0, f.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, v.j)();
                    }
                );
        }, [t, a, g, l.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: ek.kL,
            children: [o?.(a, l), (0, n.jsx)(eE, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eR(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([A.default], () => A.default.getSessionId(), []),
        c = s.useCallback((e, l, n) => W.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, j.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(q, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == m.A.getGuild(t) && (0, E.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eb, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eb(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: f = 0,
            renderHeader: m,
            getSocialLayerStorefrontLink: E,
        } = e,
        { analyticsLocations: j } = (0, _.Ay)(p.A.SOCIAL_LAYER_STOREFRONT),
        v = (0, b.A)({ applicationId: l }),
        C = (0, o.bG)([S.A], () => S.A.get(a), [a]);
    (0, h.pE)(), (0, x.x)({ applicationId: v?.storefront?.applicationId });
    let L = (0, g.A)((0, r.A)()),
        M = (0, o.bG)([I.Ay, A.default], () => I.Ay.isMember(t, A.default.getId())),
        y = s.useMemo(
            () =>
                null == f || isNaN(f) || (null != v && null != v.storefront && f >= v.storefront.pages.length) ? 0 : f,
            [f, v],
        ),
        O = v?.storefront?.pages[y]?.title ?? null,
        T = v?.storefront?.pages[y]?.leaderboard != null,
        D = s.useMemo(
            () => ({
                sessionId: L,
                guildId: t,
                applicationId: l,
                pageIndex: y,
                pageTitle: O,
                isUserGuildMember: M,
                pageHasLeaderboard: T,
            }),
            [L, t, l, y, O, M, T],
        );
    return (s.useEffect(() => {
        null != l && (0, k.SP)(l, y, null != a ? a : null);
    }, [l, y, a]),
    null == l || v?.storefront == null)
        ? null != v && "loading" !== v.state
            ? (0, n.jsxs)("div", {
                  className: i()(ek.p$, ek.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: Z.intl.string(ej.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: Z.intl.string(ej.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(ek.u1, ek.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(_.f5, {
              value: j,
              children: (0, n.jsx)(R.J, {
                  renderHeader: m,
                  getSocialLayerStorefrontLink: E,
                  children: (0, n.jsx)(N.E9, {
                      newValue: D,
                      children: (0, n.jsx)(eN, {
                          storefront: v.storefront,
                          guildId: t,
                          selectedPageIndex: y,
                          selectedSku: C,
                      }),
                  }),
              }),
          });
}
