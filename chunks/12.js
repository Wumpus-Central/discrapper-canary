l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => eB, default: () => eV });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(835245),
    o = l(17928),
    c = l(534514),
    d = l(834730),
    u = l(289873),
    x = l(444927),
    g = l(793574),
    f = l(688810),
    p = l(976860),
    h = l(435658),
    m = l(561794),
    j = l(495544),
    I = l(696451),
    A = l(71393),
    k = l(67480),
    S = l(385648),
    v = l(871123),
    _ = l(733391),
    b = l(439303),
    N = l(353281),
    E = l(429635),
    C = l(317560),
    L = l(696292),
    y = l(939249),
    R = l(366010),
    T = l(926268),
    M = l(736653),
    O = l(742589),
    D = l(617986),
    H = l(975732),
    w = l(371446),
    G = l(70926),
    Y = l(287809),
    P = l(174459),
    U = l(975571),
    $ = l(371794),
    F = l(681064),
    V = l(995393),
    B = l(652215),
    J = l(518477),
    W = l(375708),
    X = l(718356);
function z(e) {
    let { content: t, onClick: l, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: i()(X.gb, a), onClick: l, "aria-label": s, children: t });
}
function Z() {
    let { enabled: e } = (0, w.Z)({ location: "slayer_storefront_header" }),
        t = (0, F.R)({ location: "slayer_storefront_header" }),
        l = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: L.u.ORBS_BALANCE_MENU });
        }, []);
    return e && t
        ? (0, n.jsx)(G.SS, { cardAlignment: G.SS.CardAlignment.END, ctaText: W.intl.string(W.t.VC4Mq0), ctaOnClick: l })
        : null;
}
function K(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        a = (0, R.M)((0, M.Ay)()),
        r = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, b.jM)(),
        { analyticsLocations: u } = (0, f.Ay)(),
        { getSocialLayerStorefrontLink: x } = (0, N.H)(),
        h = s.useCallback(() => {
            r?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: r.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        m = s.useCallback(() => {
            P.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: V.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(U.A.getArticleURL(B.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        j = s.useCallback(() => {
            null != x && (0, p.pX)(x(0));
        }, [x]);
    if (null == t) return null;
    let I = null != t.logoAssetId ? (0, $.YE)(t.applicationId, t.logoAssetId, 128) : null,
        A = null != t.lightThemeLogoAssetId ? (0, $.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        k = null;
    return (
        (k = a ? (I ?? A) : (A ?? I)),
        (0, n.jsxs)(O.A, {
            disableDoubleClick: !0,
            className: X.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: j,
                    className: X.gn,
                    children: [
                        null != k && (0, n.jsx)("img", { className: X.wm, src: k, alt: t.title }),
                        (0, n.jsx)(O.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: X.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                O.A.Title,
                                {
                                    onClick: () => {
                                        null != x && (0, p.pX)(x(t));
                                    },
                                    wrapperClassName: X.oB,
                                    className: i()(X.xT, { [X.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: X.sZ,
                    children: [
                        (0, n.jsx)(z, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: h,
                            ariaLabel: W.intl.string(W.t["7lZ31J"]),
                            className: X.ij,
                        }),
                        (0, n.jsx)(Z, {}),
                        (0, n.jsx)(z, {
                            onClick: m,
                            ariaLabel: W.intl.string(W.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: W.intl.string(W.t.hvVgAZ),
                            }),
                            className: X.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var q = l(689175),
    Q = l(765671);
let ee = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var et = l(801158),
    el = l(31969),
    en = l(328100),
    es = l(514270);
function ea(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == t
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: es.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: es.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: t.title }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: t.description,
                              }),
                          ],
                      }),
                      null != l &&
                          (0, n.jsx)("div", {
                              className: es.Ui,
                              children: (0, n.jsx)(en.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: en.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ei = l(989349),
    er = l.n(ei),
    eo = l(317097),
    ec = l(43990),
    ed = l(406810),
    eu = l(52133),
    ex = l(417098),
    eg = l(396583),
    ef = l(927813),
    ep = l(920948),
    eh = l(818348),
    em = l(569901);
function ej(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: a } = e,
        r = s ? em.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: t,
            customStyle: l,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(ex.$T, { className: e, color: t, style: l, children: a });
    }
    if ("nitro-pink" === l)
        return o({
            className: i()(em.cI, em.p3, r, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, eo.qt)(l)) {
        let e = (0, eo.OK)((0, eo.LX)(l)) > 0.5 ? eh.NJ.DARK : eh.NJ.LIGHT;
        return (0, n.jsx)(ec.N, {
            theme: e,
            children: (e) =>
                o({
                    className: i()(e, em.cI, r, t),
                    customStyle: {
                        "--custom-notice-background": l,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": l,
                    },
                }),
        });
    }
    return (0, n.jsx)(ec.N, {
        theme: eh.NJ.DARK,
        children: (e) => o({ className: i()(e, em.cI, r, t), noticeColor: ex.Hv.BRAND }),
    });
}
function eI(e) {
    let { Icon: t, text: l, endDatetime: a, ...i } = e,
        [r, o] = s.useState(() => eS(a));
    (0, eg.A)(() => {
        let e = eS(a);
        null != e && o((t) => (null != t && (0, eu.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: em.lt,
            children: [
                null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof l ? (0, ep.U)(l) : l,
                }),
            ],
        });
    if (null != r)
        switch (r.units) {
            case "days":
                return (0, n.jsxs)(ej, { ...i, children: [c(), (0, n.jsx)(eA, { days: r.count })] });
            case "seconds":
                return (0, n.jsxs)(ej, { ...i, children: [c(), (0, n.jsx)(ek, { seconds: r.count })] });
        }
    return (0, n.jsx)(ej, { ...i, children: c() });
}
function eA(e) {
    let { days: t } = e;
    return (0, n.jsxs)("div", {
        className: em.S5,
        children: [
            (0, n.jsx)(ed.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                children: W.intl.formatToPlainString(W.t.BXpdIg, { days: t }),
            }),
        ],
    });
}
function ek(e) {
    let { seconds: t } = e,
        l = Math.floor(t / ef.A.Seconds.DAY),
        s = Math.floor((t % ef.A.Seconds.DAY) / ef.A.Seconds.HOUR),
        a = Math.floor((t % ef.A.Seconds.HOUR) / ef.A.Seconds.MINUTE),
        r = t % ef.A.Seconds.MINUTE;
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: l.map((e, l) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: i()(em.g2, { [em.$2]: t }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: e,
                    },
                    l,
                ),
            ),
        });
    }
    function c() {
        return (0, n.jsx)(d.E, { className: em.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: em.kz,
        children: [l > 0 && o(l), l > 0 && c(), o(s), c(), o(a), c(), o(r, !0)],
    });
}
function eS(e) {
    if (null == e) return null;
    let t = er()(),
        l = er()(new Date(e)),
        n = l.diff(t, "days");
    return n >= 1 ? { units: "days", count: n } : { units: "seconds", count: Math.max(l.diff(t, "seconds"), 0) };
}
var ev = l(500102);
function e_(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, $.YE)(t, l, 1024, v.pV) : null;
    return (0, n.jsx)("div", {
        className: ev._,
        children: null != s ? (0, n.jsx)("div", { className: ev.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eb = l(198647);
function eN(e) {
    let { skuIds: t, variant: l = en.s.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(eb.kL, eb.$2, { [eb.Wc]: l === en.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(en.A, { positionInSection: t, skuId: e, variant: l, analyticsLocations: s }, `${e}-${t}`),
              ),
          });
}
var eE = l(259238);
function eC(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: a, variant: i = en.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eE.h,
                  children: [
                      null != l &&
                          l.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eE.G,
                              children: l,
                          }),
                      (0, n.jsx)(eN, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eL = l(821609),
    ey = l(403581),
    eR = l(587895),
    eT = l(532794),
    eM = l(69236),
    eO = l(788868),
    eD = l(430825),
    eH = l(201483);
function ew(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        a = (0, eM.W)(),
        i = (0, o.bG)([eR.A], () => eR.A.getApplication(t)),
        r = s.useCallback(() => {
            (0, eT.A)({ subscriptionTier: eO.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]);
    return a
        ? (0, n.jsx)(eI, {
              sticky: !0,
              color: "nitro-pink",
              text: W.intl.format(eD.default.iFXcjn, { applicationName: i?.name }),
              endDatetime: F.V,
          })
        : (0, n.jsx)(ej, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eH.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: W.intl.format(eD.default.iFXcjn, { applicationName: i?.name }),
                      }),
                      (0, n.jsx)(eL.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: ey.t,
                          text: W.intl.string(W.t.pj0XBN),
                          onClick: r,
                      }),
                  ],
              }),
          });
}
var eG = l(59520);
function eY(e, t, l, n) {
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
                pageHasLeaderboard: x,
            } = t;
            P.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: x,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: l,
            });
        }
    }
}
var eP = l(384274);
function eU(e) {
    let t,
        l,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, Q.Ay)(),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, f.Ay)(),
        u = s.useRef(null),
        { handleScroll: x } =
            ((t = s.useRef(c)),
            s.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eG.I)(eY, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(B.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [l, d, u]),
            }),
        g = (function (e) {
            let { location: t } = e;
            return ee.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        p = (0, et.A)({ applicationId: a }),
        h = (0, el.F)("storefront_banner", { applicationId: a }),
        [m, j] = s.useMemo(() => {
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
        I = 1 === m.length && null != o && o >= 834 && !g;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        P.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: a,
            page_index: l,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: d,
        });
    }, [c, a, d]),
    null == i)
        ? null
        : (0, n.jsxs)(q.Ch, {
              ref: u,
              onScroll: x,
              children: [
                  p
                      ? (0, n.jsx)(ew, { applicationId: a, analyticsLocations: d })
                      : null != h && (0, n.jsx)(eI, { sticky: !0, Icon: h.Icon, text: h.text, endDatetime: h.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eP.k,
                      children: [
                          (0, n.jsx)(e_, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !g &&
                              (0, n.jsx)(ea, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: I ? m[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eC, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : m,
                              variant: en.s.MEDIUM,
                          }),
                          (0, n.jsx)(eC, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          i.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  eC,
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
var e$ = l(253004);
function eF(e) {
    let { storefront: t, guildId: l, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, b.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, N.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = s.useCallback(() => {
            null != c && (0, p.bG)(c(0));
        }, [c]),
        x = i?.id;
    return (
        s.useEffect(() => {
            if (null != x)
                return (
                    (0, C.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: x,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, p.JK)().location;
                            (0, v.rG)(e, n, t.applicationId, l) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, C.j)();
                    }
                );
        }, [l, a, x, t.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: e$.kL,
            children: [o?.(a, t), (0, n.jsx)(eU, { applicationId: t.applicationId, page: t.pages[a] })],
        })
    );
}
function eV(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: i } = t.params,
        r = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        c = s.useCallback((e, t, n) => B.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, v.nY)(l),
        u = s.useCallback((e, t) => (0, n.jsx)(K, { storefront: t, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == l || null == r || (null == A.A.getGuild(l) && (0, S.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, r]),
        (0, n.jsx)(eB, {
            applicationId: d,
            guildId: l,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eB(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: a,
            pageIndex: p = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: S,
        } = e,
        { analyticsLocations: v } = (0, f.Ay)(g.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, E.A)({ applicationId: t }),
        L = (0, o.bG)([k.A], () => k.A.get(a), [a]);
    (0, m.pE)(), (0, h.x)({ applicationId: C?.storefront?.applicationId });
    let y = (0, x.A)((0, r.A)()),
        R = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(l, j.default.getId())),
        T = s.useMemo(
            () =>
                null == p || isNaN(p) || (null != C && null != C.storefront && p >= C.storefront.pages.length) ? 0 : p,
            [p, C],
        ),
        M = C?.storefront?.pages[T]?.title ?? null,
        O = C?.storefront?.pages[T]?.leaderboard != null,
        D = s.useMemo(
            () => ({
                sessionId: y,
                guildId: l,
                applicationId: t,
                pageIndex: T,
                pageTitle: M,
                isUserGuildMember: R,
                pageHasLeaderboard: O,
            }),
            [y, l, t, T, M, R, O],
        );
    return (s.useEffect(() => {
        null != t && (0, _.SP)(t, T, null != a ? a : null);
    }, [t, T, a]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: i()(e$.p$, e$.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: W.intl.string(eD.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: W.intl.string(eD.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(e$.u1, e$.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(f.f5, {
              value: v,
              children: (0, n.jsx)(N.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: S,
                  children: (0, n.jsx)(b.E9, {
                      newValue: D,
                      children: (0, n.jsx)(eF, {
                          storefront: C.storefront,
                          guildId: l,
                          selectedPageIndex: T,
                          selectedSku: L,
                      }),
                  }),
              }),
          });
}
