t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eR, default: () => eN });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(17928),
    c = t(289873),
    d = t(444927),
    u = t(793574),
    g = t(688810),
    p = t(976860),
    _ = t(470285),
    f = t(561794),
    x = t(495544),
    h = t(696451),
    A = t(71393),
    I = t(67480),
    m = t(385648),
    S = t(871123),
    E = t(733391),
    j = t(439303),
    k = t(353281),
    N = t(429635),
    R = t(317560),
    b = t(696292),
    v = t(939249),
    C = t(366010),
    L = t(834730),
    M = t(926268),
    y = t(736653),
    O = t(742589),
    T = t(617986),
    H = t(975732),
    D = t(371446),
    G = t(70926),
    P = t(287809),
    w = t(174459),
    B = t(975571),
    Y = t(371794),
    U = t(681064),
    $ = t(995393),
    V = t(652215),
    W = t(518477),
    F = t(375708),
    Z = t(718356);
function J(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(v.D, { className: i()(Z.gb, a), onClick: t, "aria-label": s, children: l });
}
function X() {
    let { enabled: e } = (0, D.Z)({ location: "slayer_storefront_header" }),
        l = (0, U.R)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, T.navigateToQuestHome)({ fromContent: b.u.ORBS_BALANCE_MENU });
        }, []);
    return e && l
        ? (0, n.jsx)(G.SS, { cardAlignment: G.SS.CardAlignment.END, ctaText: F.intl.string(F.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function z(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, C.M)((0, y.Ay)()),
        r = (0, o.bG)([P.default], () => P.default.getCurrentUser()),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: _ } = (0, k.H)(),
        f = s.useCallback(() => {
            r?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: r.id,
                    tabSection: W.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        x = s.useCallback(() => {
            w.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: $.ST.LEARN_MORE,
                location_stack: d,
            }),
                window.open(B.A.getArticleURL(V.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, d]),
        h = s.useCallback(() => {
            null != _ && (0, p.pX)(_(0));
        }, [_]);
    if (null == l) return null;
    let A = null != l.logoAssetId ? (0, Y.YE)(l.applicationId, l.logoAssetId, 128) : null,
        I = null != l.lightThemeLogoAssetId ? (0, Y.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        m = null;
    return (
        (m = a ? (A ?? I) : (I ?? A)),
        (0, n.jsxs)(O.A, {
            disableDoubleClick: !0,
            className: Z.N1,
            children: [
                (0, n.jsxs)(v.D, {
                    onClick: h,
                    className: Z.gn,
                    children: [
                        null != m && (0, n.jsx)("img", { className: Z.wm, src: m, alt: l.title }),
                        (0, n.jsx)(O.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: Z.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                O.A.Title,
                                {
                                    onClick: () => {
                                        null != _ && (0, p.pX)(_(l));
                                    },
                                    wrapperClassName: Z.oB,
                                    className: i()(Z.xT, { [Z.ys]: t === l }),
                                    children: (0, n.jsx)(L.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: Z.sZ,
                    children: [
                        (0, n.jsx)(J, {
                            content: (0, n.jsx)(M.C, { size: "xs", color: "currentColor" }),
                            onClick: f,
                            ariaLabel: F.intl.string(F.t["7lZ31J"]),
                            className: Z.ij,
                        }),
                        (0, n.jsx)(X, {}),
                        (0, n.jsx)(J, {
                            onClick: x,
                            ariaLabel: F.intl.string(F.t.hvVgAZ),
                            content: (0, n.jsx)(L.E, {
                                variant: "text-sm/medium",
                                children: F.intl.string(F.t.hvVgAZ),
                            }),
                            className: Z.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var q = t(689175),
    K = t(765671);
let Q = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = t(318254),
    el = t(554146),
    et = t(417098),
    en = t(853735),
    es = t(131607),
    ea = t(945942),
    ei = t(49999),
    er = t(922674);
function eo(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: s } = (0, ea.A)({ location: l }),
        [a, i] = (0, es.RF)(
            t ? el.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, en.c)(el.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== el.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, n.jsxs)(et.$T, {
              className: er.U,
              color: et.Hv.BRAND,
              children: [
                  (0, n.jsx)(et.PM, {
                      noticeType: V.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(ei.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(ee.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: er.f,
                      children: [
                          (0, n.jsxs)(L.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [F.intl.string(F.t.yYEZGi), null != s && ` (${s})`],
                          }),
                          (0, n.jsx)(L.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, n.jsx)(L.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: F.intl.format(F.t.RUuXiA, { applicationName: F.intl.string(F.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var ec = t(328100),
    ed = t(534514),
    eu = t(514270);
function eg(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(j.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eu.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: eu.FS,
                          children: [
                              (0, n.jsx)(ed.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(L.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: eu.Ui,
                              children: (0, n.jsx)(ec.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ec.s.MEDIUM,
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
        s = null != t ? (0, Y.YE)(l, t, 1024, S.pV) : null;
    return (0, n.jsx)("div", {
        className: ep._,
        children: null != s ? (0, n.jsx)("div", { className: ep.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ef = t(198647);
function ex(e) {
    let { skuIds: l, variant: t = ec.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(ef.kL, ef.$2, { [ef.Wc]: t === ec.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(ec.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eh = t(259238);
function eA(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = ec.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(j.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eh.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(ed.D, {
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
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: u,
            } = l;
            w.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                page_index: o,
                page_title: c,
                is_user_guild_member: d,
                page_has_leaderboard: u,
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
        { ref: r, width: o } = (0, K.Ay)(),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = s.useRef(null),
        { handleScroll: p } =
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
                            t(V.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        _ = (function (e) {
            let { location: l } = e;
            return Q.useConfig({ location: l }).enabled;
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
        h = 1 === f.length && null != o && o >= 834 && !_;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = c;
        w.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, d]),
    null == i)
        ? null
        : (0, n.jsxs)(q.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, n.jsx)(eo, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eS.k,
                      children: [
                          (0, n.jsx)(e_, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !_ &&
                              (0, n.jsx)(eg, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? f[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eA, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : f,
                              variant: ec.s.MEDIUM,
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
var ej = t(253004);
function ek(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, j.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, k.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let g = s.useCallback(() => {
            null != c && (0, p.bG)(c(0));
        }, [c]),
        _ = i?.id;
    return (
        s.useEffect(() => {
            if (null != _)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: _,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, p.JK)().location;
                            (0, S.rG)(e, n, l.applicationId, t) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [t, a, _, l.applicationId, c, g]),
        (0, n.jsxs)("div", {
            className: ej.k,
            children: [o?.(a, l), (0, n.jsx)(eE, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eN(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([x.default], () => x.default.getSessionId(), []),
        c = s.useCallback((e, l, n) => V.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, S.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(z, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == A.A.getGuild(t) && (0, m.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eR, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eR(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: p = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: m,
        } = e,
        { analyticsLocations: S } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        R = (0, N.A)({ applicationId: l }),
        b = (0, o.bG)([I.A], () => I.A.get(a), [a]);
    (0, f.pE)(), (0, _.x)({ applicationId: R?.storefront?.applicationId });
    let v = (0, d.A)((0, r.A)()),
        C = (0, o.bG)([h.Ay, x.default], () => h.Ay.isMember(t, x.default.getId())),
        L = s.useMemo(
            () =>
                null == p || isNaN(p) || (null != R && null != R.storefront && p >= R.storefront.pages.length) ? 0 : p,
            [p, R],
        ),
        M = R?.storefront?.pages[L]?.title ?? null,
        y = R?.storefront?.pages[L]?.leaderboard != null,
        O = s.useMemo(
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
    return (s.useEffect(() => {
        null != l && (0, E.SP)(l, L, null != a ? a : null);
    }, [l, L, a]),
    null == l || R?.storefront == null)
        ? (0, n.jsx)("div", { className: i()(ej.u, ej.k), children: (0, n.jsx)(c.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: S,
              children: (0, n.jsx)(k.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: m,
                  children: (0, n.jsx)(j.E9, {
                      newValue: O,
                      children: (0, n.jsx)(ek, {
                          storefront: R.storefront,
                          guildId: t,
                          selectedPageIndex: L,
                          selectedSku: b,
                      }),
                  }),
              }),
          });
}
