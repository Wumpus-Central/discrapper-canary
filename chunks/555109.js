t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eL, default: () => eC });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(17928),
    c = t(462887),
    d = t(534514),
    u = t(834730),
    g = t(289873),
    p = t(444927),
    x = t(736653),
    _ = t(793574),
    f = t(688810),
    h = t(976860),
    A = t(470285),
    m = t(561794),
    I = t(495544),
    S = t(696451),
    E = t(71393),
    j = t(67480),
    k = t(385648),
    N = t(871123),
    R = t(733391),
    b = t(439303),
    v = t(353281),
    C = t(429635),
    L = t(317560),
    M = t(696292),
    y = t(939249),
    O = t(366010),
    T = t(926268),
    D = t(742589),
    H = t(617986),
    G = t(975732),
    P = t(371446),
    w = t(70926),
    B = t(287809),
    Y = t(174459),
    U = t(975571),
    $ = t(371794),
    V = t(681064),
    W = t(995393),
    F = t(652215),
    Z = t(518477),
    J = t(375708),
    X = t(718356);
function z(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: i()(X.gb, a), onClick: t, "aria-label": s, children: l });
}
function q() {
    let { enabled: e } = (0, P.Z)({ location: "slayer_storefront_header" }),
        l = (0, V.R)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, H.navigateToQuestHome)({ fromContent: M.u.ORBS_BALANCE_MENU });
        }, []);
    return e && l
        ? (0, n.jsx)(w.SS, { cardAlignment: w.SS.CardAlignment.END, ctaText: J.intl.string(J.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function K(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, O.M)((0, x.Ay)()),
        r = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, f.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, v.H)(),
        p = s.useCallback(() => {
            r?.id != null &&
                (0, G.openUserProfileModal)({
                    userId: r.id,
                    tabSection: Z.RP.WISHLIST,
                    sourceAnalyticsLocations: [_.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        A = s.useCallback(() => {
            Y.default.track(F.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: W.ST.LEARN_MORE,
                location_stack: d,
            }),
                window.open(U.A.getArticleURL(F.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, d]),
        m = s.useCallback(() => {
            null != g && (0, h.pX)(g(0));
        }, [g]);
    if (null == l) return null;
    let I = null != l.logoAssetId ? (0, $.YE)(l.applicationId, l.logoAssetId, 128) : null,
        S = null != l.lightThemeLogoAssetId ? (0, $.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        E = null;
    return (
        (E = a ? (I ?? S) : (S ?? I)),
        (0, n.jsxs)(D.A, {
            disableDoubleClick: !0,
            className: X.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: m,
                    className: X.gn,
                    children: [
                        null != E && (0, n.jsx)("img", { className: X.wm, src: E, alt: l.title }),
                        (0, n.jsx)(D.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: X.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                D.A.Title,
                                {
                                    onClick: () => {
                                        null != g && (0, h.pX)(g(l));
                                    },
                                    wrapperClassName: X.oB,
                                    className: i()(X.xT, { [X.ys]: t === l }),
                                    children: (0, n.jsx)(u.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: X.sZ,
                    children: [
                        (0, n.jsx)(z, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: p,
                            ariaLabel: J.intl.string(J.t["7lZ31J"]),
                            className: X.ij,
                        }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(z, {
                            onClick: A,
                            ariaLabel: J.intl.string(J.t.hvVgAZ),
                            content: (0, n.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: J.intl.string(J.t.hvVgAZ),
                            }),
                            className: X.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var Q = t(689175),
    ee = t(765671);
let el = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var et = t(318254),
    en = t(554146),
    es = t(417098),
    ea = t(853735),
    ei = t(131607),
    er = t(945942),
    eo = t(49999),
    ec = t(922674);
function ed(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: s } = (0, er.A)({ location: l }),
        [a, i] = (0, ei.RF)(
            t ? en.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, ea.c)(en.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== en.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, n.jsxs)(es.$T, {
              className: ec.U,
              color: es.Hv.BRAND,
              children: [
                  (0, n.jsx)(es.PM, {
                      noticeType: F.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(eo.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(et.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: ec.f,
                      children: [
                          (0, n.jsxs)(u.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [J.intl.string(J.t.yYEZGi), null != s && ` (${s})`],
                          }),
                          (0, n.jsx)(u.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, n.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: J.intl.format(J.t.RUuXiA, { applicationName: J.intl.string(J.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var eu = t(328100),
    eg = t(514270);
function ep(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eg.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: eg.FS,
                          children: [
                              (0, n.jsx)(d.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: eg.Ui,
                              children: (0, n.jsx)(eu.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: eu.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ex = t(500102);
function e_(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, $.YE)(l, t, 1024, N.pV) : null;
    return (0, n.jsx)("div", {
        className: ex._,
        children: null != s ? (0, n.jsx)("div", { className: ex.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ef = t(198647);
function eh(e) {
    let { skuIds: l, variant: t = eu.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(ef.kL, ef.$2, { [ef.Wc]: t === eu.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(eu.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eA = t(259238);
function em(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = eu.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eA.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(d.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eA.G,
                              children: t,
                          }),
                      (0, n.jsx)(eh, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eI = t(59520);
function eS(e, l, t, n) {
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
            Y.default.track(e, {
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
var eE = t(384274);
function ej(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, ee.Ay)(),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, f.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((l = s.useRef(c)),
            s.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eI.I)(eS, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(F.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
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
            return el.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [x, _] = s.useMemo(() => {
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
        h = 1 === x.length && null != o && o >= 834 && !p;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        Y.default.track(F.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, n.jsxs)(Q.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  (0, n.jsx)(ed, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eE.k,
                      children: [
                          (0, n.jsx)(e_, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, n.jsx)(ep, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? x[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(em, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : x,
                              variant: eu.s.MEDIUM,
                          }),
                          (0, n.jsx)(em, { analyticsSectionId: "non-featured-top-section", skuIds: _ }),
                          i.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  em,
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
var ek = t(430825),
    eN = t(253004),
    eR = t(626768),
    eb = t(464896);
function ev(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, b.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, v.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = s.useCallback(() => {
            null != c && (0, h.bG)(c(0));
        }, [c]),
        g = i?.id;
    return (
        s.useEffect(() => {
            if (null != g)
                return (
                    (0, L.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [_.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, h.JK)().location;
                            (0, N.rG)(e, n, l.applicationId, t) && null != c && (0, h.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, L.j)();
                    }
                );
        }, [t, a, g, l.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: eN.kL,
            children: [o?.(a, l), (0, n.jsx)(ej, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eC(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        c = s.useCallback((e, l, n) => F.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, N.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(K, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == E.A.getGuild(t) && (0, k.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eL, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eL(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: h = 0,
            renderHeader: E,
            getSocialLayerStorefrontLink: k,
        } = e,
        N = (0, x.Ay)(),
        { analyticsLocations: L } = (0, f.Ay)(_.A.SOCIAL_LAYER_STOREFRONT),
        M = (0, C.A)({ applicationId: l }),
        y = (0, o.bG)([j.A], () => j.A.get(a), [a]);
    (0, m.pE)(), (0, A.x)({ applicationId: M?.storefront?.applicationId });
    let O = (0, p.A)((0, r.A)()),
        T = (0, o.bG)([S.Ay, I.default], () => S.Ay.isMember(t, I.default.getId())),
        D = s.useMemo(
            () =>
                null == h || isNaN(h) || (null != M && null != M.storefront && h >= M.storefront.pages.length) ? 0 : h,
            [h, M],
        ),
        H = M?.storefront?.pages[D]?.title ?? null,
        G = M?.storefront?.pages[D]?.leaderboard != null,
        P = s.useMemo(
            () => ({
                sessionId: O,
                guildId: t,
                applicationId: l,
                pageIndex: D,
                pageTitle: H,
                isUserGuildMember: T,
                pageHasLeaderboard: G,
            }),
            [O, t, l, D, H, T, G],
        );
    return (s.useEffect(() => {
        null != l && (0, R.SP)(l, D, null != a ? a : null);
    }, [l, D, a]),
    null == l || M?.storefront == null)
        ? null != M && "loading" !== M.state
            ? (0, n.jsxs)("div", {
                  className: i()(eN.p$, eN.kL),
                  children: [
                      (0, n.jsx)("img", { className: eN.QT, src: (0, c.M)(N) ? eR : eb, alt: "" }),
                      (0, n.jsx)(d.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: J.intl.string(ek.default.OvBwPV),
                      }),
                      (0, n.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: J.intl.string(ek.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(eN.u1, eN.kL), children: (0, n.jsx)(g.y, {}) })
        : (0, n.jsx)(f.f5, {
              value: L,
              children: (0, n.jsx)(v.J, {
                  renderHeader: E,
                  getSocialLayerStorefrontLink: k,
                  children: (0, n.jsx)(b.E9, {
                      newValue: P,
                      children: (0, n.jsx)(ev, {
                          storefront: M.storefront,
                          guildId: t,
                          selectedPageIndex: D,
                          selectedSku: y,
                      }),
                  }),
              }),
          });
}
