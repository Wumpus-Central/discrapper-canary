t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eV, default: () => eF });
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
    x = t(793574),
    p = t(688810),
    m = t(976860),
    f = t(435658),
    h = t(561794),
    j = t(495544),
    I = t(696451),
    k = t(71393),
    A = t(67480),
    v = t(385648),
    _ = t(871123),
    S = t(733391),
    b = t(439303),
    N = t(353281),
    E = t(429635),
    C = t(317560),
    L = t(696292),
    y = t(939249),
    R = t(366010),
    T = t(926268),
    M = t(736653),
    O = t(742589),
    D = t(617986),
    H = t(975732),
    G = t(371446),
    w = t(70926),
    P = t(287809),
    $ = t(174459),
    F = t(975571),
    V = t(371794),
    Y = t(995393),
    U = t(652215),
    B = t(518477),
    Z = t(375708),
    J = t(308116);
function W(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: i()(J.gb, a), onClick: t, "aria-label": s, children: l });
}
function X() {
    let { enabled: e } = (0, G.Z)({ location: "slayer_storefront_header" }),
        l = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: L.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, n.jsx)(w.SS, { cardAlignment: w.SS.CardAlignment.END, ctaText: Z.intl.string(Z.t.VC4Mq0), ctaOnClick: l })
        : null;
}
function z(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, R.M)((0, M.Ay)()),
        r = (0, o.bG)([P.default], () => P.default.getCurrentUser()),
        c = (0, b.jM)(),
        { analyticsLocations: u } = (0, p.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, N.H)(),
        f = s.useCallback(() => {
            r?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: r.id,
                    tabSection: B.RP.WISHLIST,
                    sourceAnalyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            $.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: Y.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(F.A.getArticleURL(U.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        j = s.useCallback(() => {
            null != g && (0, m.pX)(g(0));
        }, [g]);
    if (null == l) return null;
    let I = null != l.logoAssetId ? (0, V.YE)(l.applicationId, l.logoAssetId, 128) : null,
        k = null != l.lightThemeLogoAssetId ? (0, V.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        A = null;
    return (
        (A = a ? (I ?? k) : (k ?? I)),
        (0, n.jsxs)(O.A, {
            disableDoubleClick: !0,
            className: J.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: j,
                    className: J.gn,
                    children: [
                        null != A && (0, n.jsx)("img", { className: J.wm, src: A, alt: l.title }),
                        (0, n.jsx)(O.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: J.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                O.A.Title,
                                {
                                    onClick: () => {
                                        null != g && (0, m.pX)(g(l));
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
                        (0, n.jsx)(W, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: f,
                            ariaLabel: Z.intl.string(Z.t["7lZ31J"]),
                            className: J.ij,
                        }),
                        (0, n.jsx)(X, {}),
                        (0, n.jsx)(W, {
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
    q = t(765671);
let Q = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = t(801158),
    el = t(31969),
    et = t(328100),
    en = t(668254);
function es(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: en.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: en.FS,
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
                              className: en.Ui,
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
var ea = t(317097),
    ei = t(43990),
    er = t(406810),
    eo = t(52133),
    ec = t(417098),
    ed = t(396583),
    eu = t(421108),
    eg = t(920948),
    ex = t(818348),
    ep = t(207533);
function em(e) {
    let { className: l, color: t = "default", sticky: s = !1, children: a } = e,
        r = s ? ep.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: l,
            customStyle: t,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(ec.$T, { className: e, color: l, style: t, children: a });
    }
    if ("nitro-pink" === t)
        return o({
            className: i()(ep.cI, ep.p3, r, l),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, ea.qt)(t)) {
        let e = (0, ea.OK)((0, ea.LX)(t)) > 0.5 ? ex.NJ.DARK : ex.NJ.LIGHT;
        return (0, n.jsx)(ei.N, {
            theme: e,
            children: (e) =>
                o({
                    className: i()(e, ep.cI, r, l),
                    customStyle: {
                        "--custom-notice-background": t,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": t,
                    },
                }),
        });
    }
    return (0, n.jsx)(ei.N, {
        theme: ex.NJ.DARK,
        children: (e) => o({ className: i()(e, ep.cI, r, l), noticeColor: ec.Hv.BRAND }),
    });
}
function ef(e) {
    let { Icon: l, text: t, endDatetime: a, ...i } = e,
        [r, o] = s.useState(() => (0, eu.Z)(a));
    (0, ed.A)(() => {
        let e = (0, eu.Z)(a);
        o((l) => (null == e ? null : null != l && (0, eo.A)(l, e) ? l : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: ep.lt,
            children: [
                null != l && (0, n.jsx)(l, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof t ? (0, eg.U)(t) : t,
                }),
            ],
        });
    return null != r
        ? r.days > 0
            ? (0, n.jsxs)(em, { ...i, children: [c(), (0, n.jsx)(eh, { days: r.days })] })
            : (0, n.jsxs)(em, { ...i, children: [c(), (0, n.jsx)(ej, { timeLeft: r })] })
        : null != a && null == r
          ? null
          : (0, n.jsx)(em, { ...i, children: c() });
}
function eh(e) {
    let { days: l } = e;
    return (0, n.jsxs)("div", {
        className: ep.S5,
        children: [
            (0, n.jsx)(er.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                children: Z.intl.formatToPlainString(Z.t.BXpdIg, { days: l }),
            }),
        ],
    });
}
function ej(e) {
    let {
        timeLeft: { days: l, hours: t, minutes: s, seconds: a },
    } = e;
    function r(e) {
        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: t.map((e, t) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: i()(ep.g2, { [ep.$2]: l }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: e,
                    },
                    t,
                ),
            ),
        });
    }
    function o() {
        return (0, n.jsx)(d.E, { className: ep.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: ep.kz,
        children: [l > 0 && r(l), l > 0 && o(), r(t), o(), r(s), o(), r(a, !0)],
    });
}
var eI = t(307462);
function ek(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, V.YE)(l, t, 1024, _.pV) : null;
    return (0, n.jsx)("div", {
        className: eI._,
        children: null != s ? (0, n.jsx)("div", { className: eI.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eA = t(894071);
function ev(e) {
    let { skuIds: l, variant: t = et.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(eA.kL, eA.$2, { [eA.Wc]: t === et.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(et.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var e_ = t(629414);
function eS(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = et.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: e_.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: e_.G,
                              children: t,
                          }),
                      (0, n.jsx)(ev, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eb = t(821609),
    eN = t(403581),
    eE = t(587895),
    eC = t(532794),
    eL = t(681064),
    ey = t(69236),
    eR = t(788868),
    eT = t(580350),
    eM = t(946571);
function eO(e) {
    let { applicationId: l, analyticsLocations: t } = e,
        a = (0, ey.W)(),
        i = (0, o.bG)([eE.A], () => eE.A.getApplication(l)),
        r = s.useCallback(() => {
            (0, eC.A)({ subscriptionTier: eR.pe.TIER_2, analyticsLocations: t, applicationId: l });
        }, [t, l]);
    return a
        ? (0, n.jsx)(ef, {
              sticky: !0,
              color: "nitro-pink",
              text: Z.intl.format(eT.default.iFXcjn, { applicationName: i?.name }),
              endDatetime: eL.V,
          })
        : (0, n.jsx)(em, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eM.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: Z.intl.format(eT.default.iFXcjn, { applicationName: i?.name }),
                      }),
                      (0, n.jsx)(eb.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: eN.t,
                          text: Z.intl.string(Z.t.pj0XBN),
                          onClick: r,
                      }),
                  ],
              }),
          });
}
var eD = t(59520);
function eH(e, l, t, n) {
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
            $.default.track(e, {
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
var eG = t(809490);
function ew(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, q.Ay)(),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, p.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((l = s.useRef(c)),
            s.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eD.I)(eH, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(U.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        x = (function (e) {
            let { location: l } = e;
            return Q.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        m = (0, ee.A)({ applicationId: a }),
        f = (0, el.F)("storefront_banner", { applicationId: a }),
        [h, j] = s.useMemo(() => {
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
        I = 1 === h.length && null != o && o >= 834 && !x;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        $.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
                  m
                      ? (0, n.jsx)(eO, { applicationId: a, analyticsLocations: d })
                      : null != f && (0, n.jsx)(ef, { sticky: !0, Icon: f.Icon, text: f.text, endDatetime: f.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eG.k,
                      children: [
                          (0, n.jsx)(ek, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !x &&
                              (0, n.jsx)(es, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: I ? h[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eS, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : h,
                              variant: et.s.MEDIUM,
                          }),
                          (0, n.jsx)(eS, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          i.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  eS,
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
var eP = t(265740);
function e$(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, b.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, N.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = s.useCallback(() => {
            null != c && (0, m.bG)(c(0));
        }, [c]),
        g = i?.id;
    return (
        s.useEffect(() => {
            if (null != g)
                return (
                    (0, C.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, m.JK)().location;
                            (0, _.rG)(e, n, l.applicationId, t) && null != c && (0, m.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, C.j)();
                    }
                );
        }, [t, a, g, l.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: eP.kL,
            children: [o?.(a, l), (0, n.jsx)(ew, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eF(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        c = s.useCallback((e, l, n) => U.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, _.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(z, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == k.A.getGuild(t) && (0, v.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eV, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eV(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: m = 0,
            renderHeader: k,
            getSocialLayerStorefrontLink: v,
        } = e,
        { analyticsLocations: _ } = (0, p.Ay)(x.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, E.A)({ applicationId: l }),
        L = (0, o.bG)([A.A], () => A.A.get(a), [a]);
    (0, h.pE)(), (0, f.x)({ applicationId: C?.storefront?.applicationId });
    let y = (0, g.A)((0, r.A)()),
        R = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(t, j.default.getId())),
        T = s.useMemo(
            () =>
                null == m || isNaN(m) || (null != C && null != C.storefront && m >= C.storefront.pages.length) ? 0 : m,
            [m, C],
        ),
        M = C?.storefront?.pages[T]?.title ?? null,
        O = C?.storefront?.pages[T]?.leaderboard != null,
        D = s.useMemo(
            () => ({
                sessionId: y,
                guildId: t,
                applicationId: l,
                pageIndex: T,
                pageTitle: M,
                isUserGuildMember: R,
                pageHasLeaderboard: O,
            }),
            [y, t, l, T, M, R, O],
        );
    return (s.useEffect(() => {
        null != l && (0, S.SP)(l, T, null != a ? a : null);
    }, [l, T, a]),
    null == l || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: i()(eP.p$, eP.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: Z.intl.string(eT.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: Z.intl.string(eT.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(eP.u1, eP.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(p.f5, {
              value: _,
              children: (0, n.jsx)(N.J, {
                  renderHeader: k,
                  getSocialLayerStorefrontLink: v,
                  children: (0, n.jsx)(b.E9, {
                      newValue: D,
                      children: (0, n.jsx)(e$, {
                          storefront: C.storefront,
                          guildId: t,
                          selectedPageIndex: T,
                          selectedSku: L,
                      }),
                  }),
              }),
          });
}
