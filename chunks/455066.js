t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eH, default: () => eD });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    i = t(835245),
    o = t(17928),
    c = t(534514),
    d = t(834730),
    u = t(289873),
    g = t(444927),
    f = t(793574),
    x = t(688810),
    h = t(976860),
    m = t(435658),
    p = t(561794),
    I = t(495544),
    j = t(696451),
    A = t(71393),
    S = t(67480),
    _ = t(385648),
    k = t(871123),
    v = t(733391),
    b = t(439303),
    N = t(353281),
    E = t(429635),
    C = t(317560),
    L = t(696292),
    y = t(939249),
    R = t(366010),
    M = t(926268),
    T = t(736653),
    O = t(742589),
    D = t(617986),
    H = t(975732),
    w = t(371446),
    G = t(70926),
    Y = t(287809),
    P = t(174459),
    U = t(975571),
    $ = t(371794),
    V = t(681064),
    F = t(995393),
    B = t(652215),
    J = t(518477),
    W = t(375708),
    Z = t(718356);
function z(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: r()(Z.gb, a), onClick: t, "aria-label": s, children: l });
}
function K() {
    let { enabled: e } = (0, w.Z)({ location: "slayer_storefront_header" }),
        l = (0, V.R)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: L.u.ORBS_BALANCE_MENU });
        }, []);
    return e && l
        ? (0, n.jsx)(G.SS, { cardAlignment: G.SS.CardAlignment.END, ctaText: W.intl.string(W.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function X(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, R.M)((0, T.Ay)()),
        i = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, b.jM)(),
        { analyticsLocations: u } = (0, x.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, N.H)(),
        m = s.useCallback(() => {
            i?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: i.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [i]),
        p = s.useCallback(() => {
            P.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: F.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(U.A.getArticleURL(B.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        I = s.useCallback(() => {
            null != g && (0, h.pX)(g(0));
        }, [g]);
    if (null == l) return null;
    let j = null != l.logoAssetId ? (0, $.YE)(l.applicationId, l.logoAssetId, 128) : null,
        A = null != l.lightThemeLogoAssetId ? (0, $.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        S = null;
    return (
        (S = a ? (j ?? A) : (A ?? j)),
        (0, n.jsxs)(O.A, {
            disableDoubleClick: !0,
            className: Z.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: I,
                    className: Z.gn,
                    children: [
                        null != S && (0, n.jsx)("img", { className: Z.wm, src: S, alt: l.title }),
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
                                        null != g && (0, h.pX)(g(l));
                                    },
                                    wrapperClassName: Z.oB,
                                    className: r()(Z.xT, { [Z.ys]: t === l }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: Z.sZ,
                    children: [
                        (0, n.jsx)(z, {
                            content: (0, n.jsx)(M.C, { size: "xs", color: "currentColor" }),
                            onClick: m,
                            ariaLabel: W.intl.string(W.t["7lZ31J"]),
                            className: Z.ij,
                        }),
                        (0, n.jsx)(K, {}),
                        (0, n.jsx)(z, {
                            onClick: p,
                            ariaLabel: W.intl.string(W.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: W.intl.string(W.t.hvVgAZ),
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
    Q = t(765671);
let ee = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var el = t(31969),
    et = t(328100),
    en = t(514270);
function es(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: r } = e,
        i = s.useMemo(() => ({ pageSection: r }), [r]);
    return null == l
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: i,
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
var ea = t(989349),
    er = t.n(ea),
    ei = t(317097),
    eo = t(43990),
    ec = t(406810),
    ed = t(52133),
    eu = t(417098),
    eg = t(396583),
    ef = t(927813),
    ex = t(920948),
    eh = t(818348),
    em = t(569901);
function ep(e) {
    let { className: l, color: t = "default", sticky: s = !1, children: a } = e,
        i = s ? em.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: l,
            customStyle: t,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(eu.$T, { className: e, color: l, style: t, children: a });
    }
    if ("nitro-pink" === t)
        return o({
            className: r()(em.cI, em.p3, i, l),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, ei.qt)(t)) {
        let e = (0, ei.OK)((0, ei.LX)(t)) > 0.5 ? eh.NJ.DARK : eh.NJ.LIGHT;
        return (0, n.jsx)(eo.N, {
            theme: e,
            children: (e) =>
                o({
                    className: r()(e, em.cI, i, l),
                    customStyle: {
                        "--custom-notice-background": t,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": t,
                    },
                }),
        });
    }
    return (0, n.jsx)(eo.N, {
        theme: eh.NJ.DARK,
        children: (e) => o({ className: r()(e, em.cI, i, l), noticeColor: eu.Hv.BRAND }),
    });
}
function eI(e) {
    let { Icon: l, text: t, endDatetime: a, ...r } = e,
        [i, o] = s.useState(() => eS(a));
    (0, eg.A)(() => {
        let e = eS(a);
        null != e && o((l) => (null != l && (0, ed.A)(l, e) ? l : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: em.lt,
            children: [
                null != l && (0, n.jsx)(l, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof t ? (0, ex.U)(t) : t,
                }),
            ],
        });
    if (null != i)
        switch (i.units) {
            case "days":
                return (0, n.jsxs)(ep, { ...r, children: [c(), (0, n.jsx)(ej, { days: i.count })] });
            case "seconds":
                return (0, n.jsxs)(ep, { ...r, children: [c(), (0, n.jsx)(eA, { seconds: i.count })] });
        }
    return (0, n.jsx)(ep, { ...r, children: c() });
}
function ej(e) {
    let { days: l } = e;
    return (0, n.jsxs)("div", {
        className: em.S5,
        children: [
            (0, n.jsx)(ec.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                children: W.intl.formatToPlainString(W.t.BXpdIg, { days: l }),
            }),
        ],
    });
}
function eA(e) {
    let { seconds: l } = e,
        t = Math.floor(l / ef.A.Seconds.DAY),
        s = Math.floor((l % ef.A.Seconds.DAY) / ef.A.Seconds.HOUR),
        a = Math.floor((l % ef.A.Seconds.HOUR) / ef.A.Seconds.MINUTE),
        i = l % ef.A.Seconds.MINUTE;
    function o(e) {
        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: t.map((e, t) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: r()(em.g2, { [em.$2]: l }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: e,
                    },
                    t,
                ),
            ),
        });
    }
    function c() {
        return (0, n.jsx)(d.E, { className: em.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: em.kz,
        children: [t > 0 && o(t), t > 0 && c(), o(s), c(), o(a), c(), o(i, !0)],
    });
}
function eS(e) {
    if (null == e) return null;
    let l = er()(),
        t = er()(new Date(e)),
        n = t.diff(l, "days");
    return n >= 1 ? { units: "days", count: n } : { units: "seconds", count: Math.max(t.diff(l, "seconds"), 0) };
}
var e_ = t(500102);
function ek(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, $.YE)(l, t, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: e_._,
        children: null != s ? (0, n.jsx)("div", { className: e_.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ev = t(198647);
function eb(e) {
    let { skuIds: l, variant: t = et.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: r()(ev.kL, ev.$2, { [ev.Wc]: t === et.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(et.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eN = t(259238);
function eE(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: r = et.s.SMALL } = e,
        i = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: i,
              children: (0, n.jsxs)("div", {
                  className: eN.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eN.G,
                              children: t,
                          }),
                      (0, n.jsx)(eb, { skuIds: a, variant: r }),
                  ],
              }),
          });
}
var eC = t(59520);
function eL(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = n;
    if (r > 0) {
        let n = (s + a) / r;
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
            P.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: n,
                page_height: Math.round(r),
                page_width: Math.round(i),
                location_stack: t,
            });
        }
    }
}
var ey = t(384274);
function eR(e) {
    let l,
        t,
        { applicationId: a, page: r } = e,
        { ref: i, width: o } = (0, Q.Ay)(),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, x.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((l = s.useRef(c)),
            s.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eC.I)(eL, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(B.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
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
            return ee.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        h = (0, el.F)("storefront_banner", { applicationId: a }),
        [m, p] = s.useMemo(() => {
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
        I = 1 === m.length && null != o && o >= 834 && !f;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: r } = c;
        P.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: r,
            location_stack: d,
        });
    }, [c, a, d]),
    null == r)
        ? null
        : (0, n.jsxs)(q.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  null != h && (0, n.jsx)(eI, { sticky: !0, Icon: h.Icon, text: h.text, endDatetime: h.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: i,
                      className: ey.k,
                      children: [
                          (0, n.jsx)(ek, {
                              applicationId: a,
                              backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                          }),
                          !f &&
                              (0, n.jsx)(es, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: I ? m[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eE, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : m,
                              variant: et.s.MEDIUM,
                          }),
                          (0, n.jsx)(eE, { analyticsSectionId: "non-featured-top-section", skuIds: p }),
                          r.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  eE,
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
var eM = t(430825),
    eT = t(253004);
function eO(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: r } = e,
        i = (0, b.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, N.H)(),
        d = s.useRef(i);
    s.useEffect(() => {
        d.current = i;
    }, [i]);
    let u = s.useCallback(() => {
            null != c && (0, h.bG)(c(0));
        }, [c]),
        g = r?.id;
    return (
        s.useEffect(() => {
            if (null != g)
                return (
                    (0, C.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, h.JK)().location;
                            (0, k.rG)(e, n, l.applicationId, t) && null != c && (0, h.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, C.j)();
                    }
                );
        }, [t, a, g, l.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: eT.kL,
            children: [o?.(a, l), (0, n.jsx)(eR, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function eD(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: r } = l.params,
        i = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        c = s.useCallback((e, l, n) => B.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, k.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(X, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == i || (null == A.A.getGuild(t) && (0, _.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, i]),
        (0, n.jsx)(eH, {
            applicationId: d,
            guildId: t,
            skuId: r,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eH(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: h = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: _,
        } = e,
        { analyticsLocations: k } = (0, x.Ay)(f.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, E.A)({ applicationId: l }),
        L = (0, o.bG)([S.A], () => S.A.get(a), [a]);
    (0, p.pE)(), (0, m.x)({ applicationId: C?.storefront?.applicationId });
    let y = (0, g.A)((0, i.A)()),
        R = (0, o.bG)([j.Ay, I.default], () => j.Ay.isMember(t, I.default.getId())),
        M = s.useMemo(
            () =>
                null == h || isNaN(h) || (null != C && null != C.storefront && h >= C.storefront.pages.length) ? 0 : h,
            [h, C],
        ),
        T = C?.storefront?.pages[M]?.title ?? null,
        O = C?.storefront?.pages[M]?.leaderboard != null,
        D = s.useMemo(
            () => ({
                sessionId: y,
                guildId: t,
                applicationId: l,
                pageIndex: M,
                pageTitle: T,
                isUserGuildMember: R,
                pageHasLeaderboard: O,
            }),
            [y, t, l, M, T, R, O],
        );
    return (s.useEffect(() => {
        null != l && (0, v.SP)(l, M, null != a ? a : null);
    }, [l, M, a]),
    null == l || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: r()(eT.p$, eT.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: W.intl.string(eM.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: W.intl.string(eM.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: r()(eT.u1, eT.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(x.f5, {
              value: k,
              children: (0, n.jsx)(N.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: _,
                  children: (0, n.jsx)(b.E9, {
                      newValue: D,
                      children: (0, n.jsx)(eO, {
                          storefront: C.storefront,
                          guildId: t,
                          selectedPageIndex: M,
                          selectedSku: L,
                      }),
                  }),
              }),
          });
}
