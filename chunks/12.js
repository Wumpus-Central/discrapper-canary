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
    F = l(995393),
    V = l(652215),
    B = l(518477),
    J = l(375708),
    W = l(718356);
function X(e) {
    let { content: t, onClick: l, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: i()(W.gb, a), onClick: l, "aria-label": s, children: t });
}
function z() {
    let { enabled: e } = (0, w.Z)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: L.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, n.jsx)(G.SS, { cardAlignment: G.SS.CardAlignment.END, ctaText: J.intl.string(J.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function Z(e) {
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
                    tabSection: B.RP.WISHLIST,
                    sourceAnalyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        m = s.useCallback(() => {
            P.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: F.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(U.A.getArticleURL(V.MVz.SOCIAL_LAYER_STOREFRONT));
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
            className: W.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: j,
                    className: W.gn,
                    children: [
                        null != k && (0, n.jsx)("img", { className: W.wm, src: k, alt: t.title }),
                        (0, n.jsx)(O.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: W.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                O.A.Title,
                                {
                                    onClick: () => {
                                        null != x && (0, p.pX)(x(t));
                                    },
                                    wrapperClassName: W.oB,
                                    className: i()(W.xT, { [W.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: W.sZ,
                    children: [
                        (0, n.jsx)(X, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: h,
                            ariaLabel: J.intl.string(J.t["7lZ31J"]),
                            className: W.ij,
                        }),
                        (0, n.jsx)(z, {}),
                        (0, n.jsx)(X, {
                            onClick: m,
                            ariaLabel: J.intl.string(J.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: J.intl.string(J.t.hvVgAZ),
                            }),
                            className: W.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var K = l(689175),
    q = l(765671);
let Q = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = l(801158),
    et = l(31969),
    el = l(328100),
    en = l(514270);
function es(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == t
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: en.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: en.FS,
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
                              className: en.Ui,
                              children: (0, n.jsx)(el.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: el.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ea = l(989349),
    ei = l.n(ea),
    er = l(317097),
    eo = l(43990),
    ec = l(406810),
    ed = l(52133),
    eu = l(417098),
    ex = l(396583),
    eg = l(927813),
    ef = l(920948),
    ep = l(818348),
    eh = l(569901);
function em(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: a } = e,
        r = s ? eh.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: t,
            customStyle: l,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(eu.$T, { className: e, color: t, style: l, children: a });
    }
    if ("nitro-pink" === l)
        return o({
            className: i()(eh.cI, eh.p3, r, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, er.qt)(l)) {
        let e = (0, er.OK)((0, er.LX)(l)) > 0.5 ? ep.NJ.DARK : ep.NJ.LIGHT;
        return (0, n.jsx)(eo.N, {
            theme: e,
            children: (e) =>
                o({
                    className: i()(e, eh.cI, r, t),
                    customStyle: {
                        "--custom-notice-background": l,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": l,
                    },
                }),
        });
    }
    return (0, n.jsx)(eo.N, {
        theme: ep.NJ.DARK,
        children: (e) => o({ className: i()(e, eh.cI, r, t), noticeColor: eu.Hv.BRAND }),
    });
}
function ej(e) {
    let { Icon: t, text: l, endDatetime: a, ...i } = e,
        [r, o] = s.useState(() => ek(a));
    (0, ex.A)(() => {
        let e = ek(a);
        null != e && o((t) => (null != t && (0, ed.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: eh.lt,
            children: [
                null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof l ? (0, ef.U)(l) : l,
                }),
            ],
        });
    if (null != r)
        switch (r.units) {
            case "days":
                return (0, n.jsxs)(em, { ...i, children: [c(), (0, n.jsx)(eI, { days: r.count })] });
            case "seconds":
                return (0, n.jsxs)(em, { ...i, children: [c(), (0, n.jsx)(eA, { seconds: r.count })] });
        }
    return (0, n.jsx)(em, { ...i, children: c() });
}
function eI(e) {
    let { days: t } = e;
    return (0, n.jsxs)("div", {
        className: eh.S5,
        children: [
            (0, n.jsx)(ec.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                children: J.intl.formatToPlainString(J.t.BXpdIg, { days: t }),
            }),
        ],
    });
}
function eA(e) {
    let { seconds: t } = e,
        l = Math.floor(t / eg.A.Seconds.DAY),
        s = Math.floor((t % eg.A.Seconds.DAY) / eg.A.Seconds.HOUR),
        a = Math.floor((t % eg.A.Seconds.HOUR) / eg.A.Seconds.MINUTE),
        r = t % eg.A.Seconds.MINUTE;
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: l.map((e, l) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: i()(eh.g2, { [eh.$2]: t }),
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
        return (0, n.jsx)(d.E, { className: eh.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: eh.kz,
        children: [l > 0 && o(l), l > 0 && c(), o(s), c(), o(a), c(), o(r, !0)],
    });
}
function ek(e) {
    if (null == e) return null;
    let t = ei()(),
        l = ei()(new Date(e)),
        n = l.diff(t, "days");
    return n >= 1 ? { units: "days", count: n } : { units: "seconds", count: Math.max(l.diff(t, "seconds"), 0) };
}
var eS = l(500102);
function ev(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, $.YE)(t, l, 1024, v.pV) : null;
    return (0, n.jsx)("div", {
        className: eS._,
        children: null != s ? (0, n.jsx)("div", { className: eS.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var e_ = l(198647);
function eb(e) {
    let { skuIds: t, variant: l = el.s.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(e_.kL, e_.$2, { [e_.Wc]: l === el.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(el.A, { positionInSection: t, skuId: e, variant: l, analyticsLocations: s }, `${e}-${t}`),
              ),
          });
}
var eN = l(259238);
function eE(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: a, variant: i = el.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eN.h,
                  children: [
                      null != l &&
                          l.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eN.G,
                              children: l,
                          }),
                      (0, n.jsx)(eb, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eC = l(821609),
    eL = l(403581),
    ey = l(587895),
    eR = l(532794),
    eT = l(681064),
    eM = l(69236),
    eO = l(788868),
    eD = l(430825),
    eH = l(201483);
function ew(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        a = (0, eM.W)(),
        i = (0, o.bG)([ey.A], () => ey.A.getApplication(t)),
        r = s.useCallback(() => {
            (0, eR.A)({ subscriptionTier: eO.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]);
    return a
        ? (0, n.jsx)(ej, {
              sticky: !0,
              color: "nitro-pink",
              text: J.intl.format(eD.default.iFXcjn, { applicationName: i?.name }),
              endDatetime: eT.V,
          })
        : (0, n.jsx)(em, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eH.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: J.intl.format(eD.default.iFXcjn, { applicationName: i?.name }),
                      }),
                      (0, n.jsx)(eC.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: eL.t,
                          text: J.intl.string(J.t.pj0XBN),
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
        { ref: r, width: o } = (0, q.Ay)(),
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
                            l(V.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
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
            return Q.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        p = (0, ee.A)({ applicationId: a }),
        h = (0, et.F)("storefront_banner", { applicationId: a }),
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
        P.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, n.jsxs)(K.Ch, {
              ref: u,
              onScroll: x,
              children: [
                  p
                      ? (0, n.jsx)(ew, { applicationId: a, analyticsLocations: d })
                      : null != h && (0, n.jsx)(ej, { sticky: !0, Icon: h.Icon, text: h.text, endDatetime: h.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eP.k,
                      children: [
                          (0, n.jsx)(ev, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !g &&
                              (0, n.jsx)(es, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: I ? m[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eE, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : m,
                              variant: el.s.MEDIUM,
                          }),
                          (0, n.jsx)(eE, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          i.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  eE,
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
        c = s.useCallback((e, t, n) => V.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, v.nY)(l),
        u = s.useCallback((e, t) => (0, n.jsx)(Z, { storefront: t, selectedPageIndex: e }), []);
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
                          children: J.intl.string(eD.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: J.intl.string(eD.default["Sy7D+/"]),
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
