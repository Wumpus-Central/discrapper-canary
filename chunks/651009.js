l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => e8, default: () => e7 });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(835245),
    o = l(17928),
    c = l(534514),
    d = l(834730),
    u = l(289873),
    f = l(444927),
    m = l(793574),
    g = l(688810),
    p = l(976860),
    x = l(435658),
    h = l(561794),
    j = l(280450),
    I = l(696451),
    A = l(71393),
    v = l(67480),
    S = l(385648),
    k = l(871123),
    b = l(733391),
    E = l(439303),
    _ = l(353281),
    N = l(429635),
    C = l(977445),
    L = l(832163);
let y = [];
function T(e) {
    let t = (0, C.uS)(e ?? void 0),
        l = (0, o.bG)(
            [L.A],
            () => (null == e ? null : (L.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        n = (0, o.bG)([L.A], () => (null != e ? L.A.getStorefrontEntries(e) : void 0), [e]),
        s = (0, o.bG)([L.A], () => (null != e ? L.A.getPreviewStorefrontId(e) : null), [e]),
        i = l?.id ?? null;
    return t
        ? {
              isTestMode: t,
              entries: n?.state === "fetched" ? n.entries : y,
              selectedStorefrontId: s ?? i,
              liveStorefrontId: i,
              liveStorefront: l,
          }
        : { isTestMode: !1, entries: y, selectedStorefrontId: i, liveStorefrontId: i, liveStorefront: l };
}
var R = l(317560),
    M = l(696292),
    O = l(939249),
    D = l(366010),
    w = l(926268),
    G = l(736653),
    P = l(742589),
    H = l(617986),
    F = l(975732),
    Y = l(371446),
    V = l(70926),
    $ = l(287809),
    Z = l(174459),
    B = l(975571),
    W = l(371794),
    X = l(995393),
    J = l(652215),
    U = l(518477),
    z = l(375708),
    K = l(718356);
function q(e) {
    let { content: t, onClick: l, ariaLabel: s, className: i } = e;
    return (0, n.jsx)(O.D, { className: a()(K.gb, i), onClick: l, "aria-label": s, children: t });
}
function Q() {
    let { enabled: e } = (0, Y.Z)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, H.navigateToQuestHome)({ fromContent: M.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, n.jsx)(V.SS, { cardAlignment: V.SS.CardAlignment.END, ctaText: z.intl.string(z.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function ee(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        i = (0, D.M)((0, G.Ay)()),
        r = (0, o.bG)([$.default], () => $.default.getCurrentUser()),
        c = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, _.H)(),
        x = s.useCallback(() => {
            r?.id != null &&
                (0, F.openUserProfileModal)({
                    userId: r.id,
                    tabSection: U.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            Z.default.track(J.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: X.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(B.A.getArticleURL(J.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        j = s.useCallback(() => {
            null != f && (0, p.pX)(f(0));
        }, [f]);
    if (null == t) return null;
    let I = null != t.logoAssetId ? (0, W.YE)(t.applicationId, t.logoAssetId, 128) : null,
        A = null != t.lightThemeLogoAssetId ? (0, W.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        v = null;
    return (
        (v = i ? (I ?? A) : (A ?? I)),
        (0, n.jsxs)(P.A, {
            disableDoubleClick: !0,
            className: K.N1,
            children: [
                (0, n.jsxs)(O.D, {
                    onClick: j,
                    className: K.gn,
                    children: [
                        null != v && (0, n.jsx)("img", { className: K.wm, src: v, alt: t.title }),
                        (0, n.jsx)(P.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: K.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                P.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, p.pX)(f(t));
                                    },
                                    wrapperClassName: K.oB,
                                    className: a()(K.xT, { [K.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: K.sZ,
                    children: [
                        (0, n.jsx)(q, {
                            content: (0, n.jsx)(w.C, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: z.intl.string(z.t["7lZ31J"]),
                            className: K.ij,
                        }),
                        (0, n.jsx)(Q, {}),
                        (0, n.jsx)(q, {
                            onClick: h,
                            ariaLabel: z.intl.string(z.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: z.intl.string(z.t.hvVgAZ),
                            }),
                            className: K.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var et = l(689175),
    el = l(765671);
let en = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var es = l(517907),
    ei = l(31969),
    ea = l(467884),
    er = l(514270);
function eo(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: i, analyticsSectionId: a } = e,
        r = s.useMemo(() => ({ pageSection: a }), [a]);
    return null == t
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: er.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: er.FS,
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
                              className: er.Ui,
                              children: (0, n.jsx)(ea.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: ea.s.MEDIUM,
                                  analyticsLocations: i,
                              }),
                          }),
                  ],
              }),
          });
}
var ec = l(317097),
    ed = l(43990),
    eu = l(406810),
    ef = l(52133),
    em = l(417098),
    eg = l(396583),
    ep = l(421108),
    ex = l(920948),
    eh = l(818348),
    ej = l(569901);
function eI(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: i } = e,
        r = s ? ej.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: t,
            customStyle: l,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(em.$T, { className: e, color: t, style: l, children: i });
    }
    if ("nitro-pink" === l)
        return o({
            className: a()(ej.cI, ej.p3, r, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, ec.qt)(l)) {
        let e = (0, ec.OK)((0, ec.LX)(l)) > 0.5 ? eh.NJ.DARK : eh.NJ.LIGHT;
        return (0, n.jsx)(ed.N, {
            theme: e,
            children: (e) =>
                o({
                    className: a()(e, ej.cI, r, t),
                    customStyle: {
                        "--custom-notice-background": l,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": l,
                    },
                }),
        });
    }
    return (0, n.jsx)(ed.N, {
        theme: eh.NJ.DARK,
        children: (e) => o({ className: a()(e, ej.cI, r, t), noticeColor: em.Hv.BRAND }),
    });
}
function eA(e) {
    let { Icon: t, text: l, endDatetime: i, ...a } = e,
        [r, o] = s.useState(() => (0, ep.Z)(i));
    (0, eg.A)(() => {
        let e = (0, ep.Z)(i);
        o((t) => (null == e ? null : null != t && (0, ef.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: ej.lt,
            children: [
                null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof l ? (0, ex.U)(l) : l,
                }),
            ],
        });
    return null != r
        ? r.days > 0
            ? (0, n.jsxs)(eI, { ...a, children: [c(), (0, n.jsx)(ev, { days: r.days })] })
            : (0, n.jsxs)(eI, { ...a, children: [c(), (0, n.jsx)(eS, { timeLeft: r })] })
        : null != i && null == r
          ? null
          : (0, n.jsx)(eI, { ...a, children: c() });
}
function ev(e) {
    let { days: t } = e;
    return (0, n.jsxs)("div", {
        className: ej.S5,
        children: [
            (0, n.jsx)(eu.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: z.intl.formatToPlainString(z.t.BXpdIg, { days: t }),
            }),
        ],
    });
}
function eS(e) {
    let {
        timeLeft: { days: t, hours: l, minutes: s, seconds: i },
    } = e;
    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: l.map((e, l) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: a()(ej.g2, { [ej.$2]: t }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: e,
                    },
                    l,
                ),
            ),
        });
    }
    function o() {
        return (0, n.jsx)(d.E, { className: ej.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: ej.kz,
        children: [t > 0 && r(t), t > 0 && o(), r(l), o(), r(s), o(), r(i, !0)],
    });
}
var ek = l(500102);
function eb(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, W.YE)(t, l, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: ek._,
        children: null != s ? (0, n.jsx)("div", { className: ek.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eE = l(198647);
function e_(e) {
    let { skuIds: t, variant: l = ea.s.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: a()(eE.kL, eE.$2, { [eE.Wc]: l === ea.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(ea.A, { positionInSection: t, skuId: e, variant: l, analyticsLocations: s }, `${e}-${t}`),
              ),
          });
}
var eN = l(259238);
function eC(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: i, variant: a = ea.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    return null == i || 0 === i.length
        ? null
        : (0, n.jsx)(E.E9, {
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
                      (0, n.jsx)(e_, { skuIds: i, variant: a }),
                  ],
              }),
          });
}
var eL = l(821609),
    ey = l(403581),
    eT = l(587895),
    eR = l(532794),
    eM = l(69236),
    eO = l(202541),
    eD = l(430825),
    ew = l(201483);
function eG(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        i = (0, eM.W)(),
        a = (0, o.bG)([eT.A], () => eT.A.getApplication(t)),
        r = (0, o.bG)([L.A], () => L.A.getConfigForApplicationId(t)),
        c = s.useCallback(() => {
            (0, eR.A)({ subscriptionTier: eO.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        u =
            r?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(z.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      r?.promotionEndDatetime,
                  )
                : "";
    return i
        ? (0, n.jsx)(eA, {
              sticky: !0,
              color: "nitro-pink",
              text: z.intl.format(eD.default.iFXcjn, { applicationName: a?.name, endDate: u }),
              endDatetime: r?.promotionEndDatetime,
          })
        : (0, n.jsx)(eI, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: ew.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: z.intl.format(eD.default.iFXcjn, { applicationName: a?.name, endDate: u }),
                      }),
                      (0, n.jsx)(eL.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: ey.t,
                          text: z.intl.string(z.t.pj0XBN),
                          onClick: c,
                      }),
                  ],
              }),
          });
}
var eP = l(59520);
function eH(e, t, l, n) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = n;
    if (a > 0) {
        let n = (s + i) / a;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: i,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = t;
            Z.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: i,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                location_stack: l,
            });
        }
    }
}
var eF = l(384274);
function eY(e) {
    let t,
        l,
        { applicationId: i, page: a } = e,
        { ref: r, width: o } = (0, el.Ay)(),
        c = (0, E.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = s.useRef(null),
        { handleScroll: f } =
            ((t = s.useRef(c)),
            s.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eP.I)(eH, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(J.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [l, d, u]),
            }),
        m = (function (e) {
            let { location: t } = e;
            return en.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        p = (0, es.A)({ applicationId: i, location: "SocialLayerStorefrontPage" }),
        x = (0, ei.F)("storefront_banner", { applicationId: i }),
        [h, j] = s.useMemo(() => {
            if (a?.skuIds == null || 0 === a.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return a?.leaderboard == null || null == e || e < 564
                ? [[], a.skuIds]
                : e < 1104
                  ? a.skuIds.length >= 2
                      ? [[], a.skuIds]
                      : [a.skuIds.slice(0, 1), a.skuIds.slice(1)]
                  : [a.skuIds.slice(0, 2), a.skuIds.slice(2)];
        }, [a, o]),
        I = 1 === h.length && null != o && o >= 834 && !m;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = c;
        Z.default.track(J.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: i,
            page_index: l,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, i, d]),
    null == a)
        ? null
        : (0, n.jsxs)(et.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  p
                      ? (0, n.jsx)(eG, { applicationId: i, analyticsLocations: d })
                      : null != x && (0, n.jsx)(eA, { sticky: !0, Icon: x.Icon, text: x.text, endDatetime: x.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eF.k,
                      children: [
                          (0, n.jsx)(eb, {
                              applicationId: i,
                              backgroundImageAssetId: a.leaderboard?.backgroundImageAssetId,
                          }),
                          !m &&
                              (0, n.jsx)(eo, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: a.leaderboard,
                                  skuId: I ? h[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eC, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : h,
                              variant: ea.s.MEDIUM,
                          }),
                          (0, n.jsx)(eC, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          a.sections?.map((e, t) =>
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
var eV = l(785562),
    e$ = l(379418),
    eZ = l(847374),
    eB = l(980707),
    eW = l(477782),
    eX = l(922016),
    eJ = l(488705);
function eU(e) {
    let { entries: t, selectedStorefrontId: l, liveStorefrontId: s, onSelect: i, onClose: a } = e;
    return (0, n.jsx)(eB.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": z.intl.string(eD.default.c2I5Ti),
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(eW.rX, {
            children: t.map((e) => {
                var t;
                let r;
                return (0, n.jsx)(
                    eW.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === l,
                        action: () => {
                            i(e.id), a();
                        },
                        label:
                            ((t = e.id === s),
                            (r = "" !== e.title ? e.title : z.intl.string(eD.default.OvBwPV)),
                            t
                                ? z.intl.formatToPlainString(eD.default.eF1VJh, { title: r })
                                : null == e.publishedAt
                                  ? z.intl.formatToPlainString(eD.default.dX2mQt, { title: r })
                                  : r),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function ez(e) {
    let { triggerRef: t, isOpen: l, onToggle: s, children: i } = e;
    return (0, n.jsx)("div", {
        className: eJ.I,
        ref: t,
        children: (0, n.jsxs)(O.D, {
            className: eJ.h,
            onClick: s,
            "aria-expanded": l,
            "aria-haspopup": "menu",
            children: [i, (0, n.jsx)(eZ.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eK(e) {
    let { applicationId: t, children: l } = e,
        { entries: i, selectedStorefrontId: a, liveStorefrontId: r } = T(t),
        [o, c] = s.useState(!1),
        d = s.useRef(null),
        u = s.useCallback(() => c(!1), []),
        f = s.useCallback(() => c((e) => !e), []),
        m = s.useCallback((e) => (0, b.ZR)(t, e === r ? null : e), [t, r]);
    return (0, n.jsx)(eX.Y, {
        targetElementRef: d,
        shouldShow: o,
        animation: eX.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eU, { entries: i, selectedStorefrontId: a, liveStorefrontId: r, onSelect: m, onClose: u }),
        children: () => (0, n.jsx)(ez, { triggerRef: d, isOpen: o, onToggle: f, children: l }),
    });
}
var eq = l(662686);
function eQ(e) {
    let t = (0, e$.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, n.jsx)(eV.A, { node: t }) : null;
}
function e0(e) {
    let t,
        { storefront: l, isLive: i } = e,
        { publishedAt: a, applicationId: r } = l,
        { entries: o } = T(r),
        [c] = s.useState(() => Date.now());
    t =
        null == a
            ? z.intl.string(eD.default.Id33AH)
            : a.getTime() > c
              ? z.intl.format(eD.default.WOZod0, { timestamp: eQ(a) })
              : i
                ? z.intl.format(eD.default.QsHYzr, { timestamp: eQ(a) })
                : z.intl.format(eD.default["3x/M9Z"], { timestamp: eQ(a) });
    let u = (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t });
    return (0, n.jsx)("div", {
        className: eq.v,
        children: o.length > 1 ? (0, n.jsx)(eK, { applicationId: r, children: u }) : u,
    });
}
var e1 = l(253004);
function e3(e) {
    let { storefront: t, guildId: l, selectedPageIndex: i, selectedSku: a, isTestMode: r, isLive: o } = e,
        c = (0, E.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: u } = (0, _.H)(),
        f = s.useRef(c);
    s.useEffect(() => {
        f.current = c;
    }, [c]);
    let g = s.useCallback(() => {
            null != u && (0, p.bG)(u(0));
        }, [u]),
        x = a?.id;
    return (
        s.useEffect(() => {
            if (null != x)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: x,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, p.JK)().location;
                            (0, k.rG)(e, n, t.applicationId, l) && null != u && (0, p.bG)(u(i));
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [l, i, x, t.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: e1.kL,
            children: [
                d?.(i, t),
                r && (0, n.jsx)(e0, { storefront: t, isLive: o }),
                (0, n.jsx)(eY, { applicationId: t.applicationId, page: t.pages[i] }),
            ],
        })
    );
}
function e7(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: i, gameShopSkuId: a } = t.params,
        r = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        c = s.useCallback((e, t, n) => J.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, k.nY)(l),
        u = s.useCallback((e, t) => (0, n.jsx)(ee, { storefront: t, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == l || null == r || (null == A.A.getGuild(l) && (0, S.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, r]),
        (0, n.jsx)(e8, {
            applicationId: d,
            guildId: l,
            skuId: a,
            pageIndex: null != i ? parseInt(i, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function e8(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: i,
            pageIndex: p = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: S,
        } = e,
        { analyticsLocations: k } = (0, g.Ay)(m.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, N.A)({ applicationId: t }),
        y = C?.storefront ?? null,
        R = (function (e) {
            let { applicationId: t } = e,
                { isTestMode: l, selectedStorefrontId: n, liveStorefrontId: i, liveStorefront: a } = T(t),
                r = l && null != n && n !== i;
            s.useEffect(() => {
                l && null != t && (0, b.JX)(t);
            }, [l, t]),
                s.useEffect(() => {
                    r && null != t && null != n && (0, b.d8)(t, n);
                }, [r, t, n]);
            let c = (0, o.bG)([L.A], () => (r && null != n ? L.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: l,
                selectedStorefrontId: n,
                liveStorefrontId: i,
                effectiveStorefront: r ? (c?.storefront ?? null) : a,
            };
        })({ applicationId: t }),
        M = R.effectiveStorefront ?? y,
        O = null != M && M.id === R.liveStorefrontId,
        D = (0, o.bG)([v.A], () => v.A.get(i), [i]);
    (0, h.pE)(), (0, x.x)({ applicationId: C?.storefront?.applicationId });
    let w = (0, f.A)((0, r.A)()),
        G = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(l, j.default.getId())),
        P = s.useMemo(() => (null == p || isNaN(p) || (null != M && p >= M.pages.length) ? 0 : p), [p, M]),
        H = M?.pages[P]?.title ?? null,
        F = M?.pages[P]?.leaderboard != null,
        Y = s.useMemo(
            () => ({
                sessionId: w,
                guildId: l,
                applicationId: t,
                pageIndex: P,
                pageTitle: H,
                isUserGuildMember: G,
                pageHasLeaderboard: F,
            }),
            [w, l, t, P, H, G, F],
        );
    return (s.useEffect(() => {
        null != t && (0, b.SP)(t, P, null != i ? i : null);
    }, [t, P, i]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: a()(e1.p$, e1.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: z.intl.string(eD.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: z.intl.string(eD.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: a()(e1.u1, e1.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: k,
              children: (0, n.jsx)(_.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: S,
                  children: (0, n.jsx)(E.E9, {
                      newValue: Y,
                      children: (0, n.jsx)(e3, {
                          storefront: M ?? C.storefront,
                          guildId: l,
                          selectedPageIndex: P,
                          selectedSku: D,
                          isTestMode: R.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
