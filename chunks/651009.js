l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => e3, default: () => e7 });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(132500),
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
    N = l(353281),
    _ = l(429635),
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
    F = l(617986),
    H = l(975732),
    Y = l(70926),
    V = l(287809),
    $ = l(174459),
    B = l(975571),
    W = l(371794),
    X = l(995393),
    Z = l(652215),
    J = l(518477),
    U = l(375708),
    z = l(308116);
function K(e) {
    let { content: t, onClick: l, ariaLabel: s, className: i } = e;
    return (0, n.jsx)(O.D, { className: r()(z.gb, i), onClick: l, "aria-label": s, children: t });
}
function q() {
    let e = s.useCallback(() => {
        (0, F.mA)({ fromContent: M.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(Y.SS, {
        cardAlignment: Y.SS.CardAlignment.END,
        ctaText: U.intl.string(U.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function Q(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        i = (0, D.M)((0, G.Ay)()),
        a = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        c = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, N.H)(),
        x = s.useCallback(() => {
            a?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: a.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [a]),
        h = s.useCallback(() => {
            $.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: X.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT));
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
            className: z.N1,
            children: [
                (0, n.jsxs)(O.D, {
                    onClick: j,
                    className: z.gn,
                    children: [
                        null != v && (0, n.jsx)("img", { className: z.wm, src: v, alt: t.title }),
                        (0, n.jsx)(P.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: z.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                P.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, p.pX)(f(t));
                                    },
                                    wrapperClassName: z.oB,
                                    className: r()(z.xT, { [z.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: z.sZ,
                    children: [
                        (0, n.jsx)(K, {
                            content: (0, n.jsx)(w.C, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: U.intl.string(U.t["7lZ31J"]),
                            className: z.ij,
                        }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(K, {
                            onClick: h,
                            ariaLabel: U.intl.string(U.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: U.intl.string(U.t.hvVgAZ),
                            }),
                            className: z.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var ee = l(689175),
    et = l(765671);
let el = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var en = l(517907),
    es = l(31969),
    ei = l(467884),
    er = l(668254);
function ea(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: i, analyticsSectionId: r } = e,
        a = s.useMemo(() => ({ pageSection: r }), [r]);
    return null == t
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: a,
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
                              children: (0, n.jsx)(ei.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: ei.s.MEDIUM,
                                  analyticsLocations: i,
                              }),
                          }),
                  ],
              }),
          });
}
var eo = l(317097),
    ec = l(43990),
    ed = l(406810),
    eu = l(52133),
    ef = l(417098),
    em = l(396583),
    eg = l(421108),
    ep = l(920948),
    ex = l(818348),
    eh = l(207533);
function ej(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: i } = e,
        a = s ? eh.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: t,
            customStyle: l,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(ef.$T, { className: e, color: t, style: l, children: i });
    }
    if ("nitro-pink" === l)
        return o({
            className: r()(eh.cI, eh.p3, a, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, eo.qt)(l)) {
        let e = (0, eo.OK)((0, eo.LX)(l)) > 0.5 ? ex.NJ.DARK : ex.NJ.LIGHT;
        return (0, n.jsx)(ec.N, {
            theme: e,
            children: (e) =>
                o({
                    className: r()(e, eh.cI, a, t),
                    customStyle: {
                        "--custom-notice-background": l,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": l,
                    },
                }),
        });
    }
    return (0, n.jsx)(ec.N, {
        theme: ex.NJ.DARK,
        children: (e) => o({ className: r()(e, eh.cI, a, t), noticeColor: ef.Hv.BRAND }),
    });
}
function eI(e) {
    let { Icon: t, text: l, endDatetime: i, ...r } = e,
        [a, o] = s.useState(() => (0, eg.Z)(i));
    (0, em.A)(() => {
        let e = (0, eg.Z)(i);
        o((t) => (null == e ? null : null != t && (0, eu.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: eh.lt,
            children: [
                null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof l ? (0, ep.U)(l) : l,
                }),
            ],
        });
    return null != a
        ? a.days > 0
            ? (0, n.jsxs)(ej, { ...r, children: [c(), (0, n.jsx)(eA, { days: a.days })] })
            : (0, n.jsxs)(ej, { ...r, children: [c(), (0, n.jsx)(ev, { timeLeft: a })] })
        : null != i && null == a
          ? null
          : (0, n.jsx)(ej, { ...r, children: c() });
}
function eA(e) {
    let { days: t } = e;
    return (0, n.jsxs)("div", {
        className: eh.S5,
        children: [
            (0, n.jsx)(ed.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: U.intl.formatToPlainString(U.t.BXpdIg, { days: t }),
            }),
        ],
    });
}
function ev(e) {
    let {
        timeLeft: { days: t, hours: l, minutes: s, seconds: i },
    } = e;
    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: l.map((e, l) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: r()(eh.g2, { [eh.$2]: t }),
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
        return (0, n.jsx)(d.E, { className: eh.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: eh.kz,
        children: [t > 0 && a(t), t > 0 && o(), a(l), o(), a(s), o(), a(i, !0)],
    });
}
var eS = l(307462);
function ek(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, W.YE)(t, l, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: eS._,
        children: null != s ? (0, n.jsx)("div", { className: eS.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eb = l(894071);
function eE(e) {
    let { className: t, skuIds: l, variant: s = ei.s.SMALL, analyticsLocations: i } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: r()(t, eb.kL, eb.$2, { [eb.Wc]: s === ei.s.MEDIUM }),
              children: l.map((e, t) =>
                  (0, n.jsx)(ei.A, { positionInSection: t, skuId: e, variant: s, analyticsLocations: i }, `${e}-${t}`),
              ),
          });
}
var eN = l(629414);
function e_(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: i, variant: r = ei.s.SMALL } = e,
        a = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    if (null == i || 0 === i.length) return null;
    let o = null != l && l.length > 0;
    return (0, n.jsx)(E.E9, {
        newValue: a,
        children: (0, n.jsxs)("div", {
            className: eN.hd,
            children: [
                o &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eN.Gf,
                        children: l,
                    }),
                (0, n.jsx)(eE, { className: o ? eN.EM : void 0, skuIds: i, variant: r }),
            ],
        }),
    });
}
var eC = l(821609),
    eL = l(403581),
    ey = l(587895),
    eT = l(532794),
    eR = l(69236),
    eM = l(202541),
    eO = l(580350),
    eD = l(946571);
function ew(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        i = (0, eR.W8)(),
        r = (0, o.bG)([ey.A], () => ey.A.getApplication(t)),
        a = (0, o.bG)([L.A], () => L.A.getConfigForApplicationId(t)),
        c = s.useCallback(() => {
            (0, eT.A)({ subscriptionTier: eM.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        u =
            a?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(U.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      a?.promotionEndDatetime,
                  )
                : "";
    return i
        ? (0, n.jsx)(eI, {
              sticky: !0,
              color: "nitro-pink",
              text: U.intl.format(eO.default.iFXcjn, { applicationName: r?.name, endDate: u }),
              endDatetime: a?.promotionEndDatetime,
          })
        : (0, n.jsx)(ej, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eD.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: U.intl.format(eO.default.iFXcjn, { applicationName: r?.name, endDate: u }),
                      }),
                      (0, n.jsx)(eC.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: eL.t,
                          text: U.intl.string(U.t.pj0XBN),
                          onClick: c,
                      }),
                  ],
              }),
          });
}
var eG = l(59520);
function eP(e, t, l, n) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: r = 0, scrollWidth: a = 0 } = n;
    if (r > 0) {
        let n = (s + i) / r;
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
            $.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: i,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(r),
                page_width: Math.round(a),
                location_stack: l,
            });
        }
    }
}
var eF = l(809490);
function eH(e) {
    let t,
        l,
        { applicationId: i, page: r } = e,
        { ref: a, width: o } = (0, et.Ay)(),
        c = (0, E.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = s.useRef(null),
        { handleScroll: f } =
            ((t = s.useRef(c)),
            s.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eG.I)(eP, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(Z.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
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
            return el.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        p = (0, en.A)({ applicationId: i, location: "SocialLayerStorefrontPage" }),
        x = (0, es.F)("storefront_banner", { applicationId: i }),
        [h, j] = s.useMemo(() => {
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
        I = 1 === h.length && null != o && o >= 834 && !m;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: r } = c;
        $.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: i,
            page_index: l,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: r,
            location_stack: d,
        });
    }, [c, i, d]),
    null == r)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  p
                      ? (0, n.jsx)(ew, { applicationId: i, analyticsLocations: d })
                      : null != x && (0, n.jsx)(eI, { sticky: !0, Icon: x.Icon, text: x.text, endDatetime: x.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: a,
                      className: eF.k,
                      children: [
                          (0, n.jsx)(ek, {
                              applicationId: i,
                              backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                          }),
                          !m &&
                              (0, n.jsx)(ea, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: I ? h[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(e_, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : h,
                              variant: ei.s.MEDIUM,
                          }),
                          (0, n.jsx)(e_, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
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
var eY = l(785562),
    eV = l(379418),
    e$ = l(847374),
    eB = l(980707),
    eW = l(477782),
    eX = l(922016),
    eZ = l(562113);
function eJ(e) {
    let { entries: t, selectedStorefrontId: l, liveStorefrontId: s, onSelect: i, onClose: r } = e;
    return (0, n.jsx)(eB.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": U.intl.string(eO.default.c2I5Ti),
        onClose: r,
        onSelect: r,
        children: (0, n.jsx)(eW.rX, {
            children: t.map((e) => {
                var t;
                let a;
                return (0, n.jsx)(
                    eW.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === l,
                        action: () => {
                            i(e.id), r();
                        },
                        label:
                            ((t = e.id === s),
                            (a = "" !== e.title ? e.title : U.intl.string(eO.default.OvBwPV)),
                            t
                                ? U.intl.formatToPlainString(eO.default.eF1VJh, { title: a })
                                : null == e.publishedAt
                                  ? U.intl.formatToPlainString(eO.default.dX2mQt, { title: a })
                                  : a),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eU(e) {
    let { triggerRef: t, isOpen: l, onToggle: s, children: i } = e;
    return (0, n.jsx)("div", {
        className: eZ.I,
        ref: t,
        children: (0, n.jsxs)(O.D, {
            className: eZ.h,
            onClick: s,
            "aria-expanded": l,
            "aria-haspopup": "menu",
            children: [i, (0, n.jsx)(e$.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function ez(e) {
    let { applicationId: t, children: l } = e,
        { entries: i, selectedStorefrontId: r, liveStorefrontId: a } = T(t),
        [o, c] = s.useState(!1),
        d = s.useRef(null),
        u = s.useCallback(() => c(!1), []),
        f = s.useCallback(() => c((e) => !e), []),
        m = s.useCallback((e) => (0, b.ZR)(t, e === a ? null : e), [t, a]);
    return (0, n.jsx)(eX.Y, {
        targetElementRef: d,
        shouldShow: o,
        animation: eX.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eJ, { entries: i, selectedStorefrontId: r, liveStorefrontId: a, onSelect: m, onClose: u }),
        children: () => (0, n.jsx)(eU, { triggerRef: d, isOpen: o, onToggle: f, children: l }),
    });
}
var eK = l(470046);
function eq(e) {
    let t = (0, eV.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, n.jsx)(eY.A, { node: t }) : null;
}
function eQ(e) {
    let t,
        { storefront: l, isLive: i } = e,
        { publishedAt: r, applicationId: a } = l,
        { entries: o } = T(a),
        [c] = s.useState(() => Date.now());
    t =
        null == r
            ? U.intl.string(eO.default.Id33AH)
            : r.getTime() > c
              ? U.intl.format(eO.default.WOZod0, { timestamp: eq(r) })
              : i
                ? U.intl.format(eO.default.QsHYzr, { timestamp: eq(r) })
                : U.intl.format(eO.default["3x/M9Z"], { timestamp: eq(r) });
    let u = (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t });
    return (0, n.jsx)("div", {
        className: eK.v,
        children: o.length > 1 ? (0, n.jsx)(ez, { applicationId: a, children: u }) : u,
    });
}
var e0 = l(265740);
function e1(e) {
    let { storefront: t, guildId: l, selectedPageIndex: i, selectedSku: r, isTestMode: a, isLive: o } = e,
        c = (0, E.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: u } = (0, N.H)(),
        f = s.useRef(c);
    s.useEffect(() => {
        f.current = c;
    }, [c]);
    let g = s.useCallback(() => {
            null != u && (0, p.bG)(u(0));
        }, [u]),
        x = r?.id;
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
            className: e0.kL,
            children: [
                d?.(i, t),
                a && (0, n.jsx)(eQ, { storefront: t, isLive: o }),
                (0, n.jsx)(eH, { applicationId: t.applicationId, page: t.pages[i] }),
            ],
        })
    );
}
function e7(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: i, gameShopSkuId: r } = t.params,
        a = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        c = s.useCallback((e, t, n) => Z.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, k.nY)(l),
        u = s.useCallback((e, t) => (0, n.jsx)(Q, { storefront: t, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == l || null == a || (null == A.A.getGuild(l) && (0, S.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, a]),
        (0, n.jsx)(e3, {
            applicationId: d,
            guildId: l,
            skuId: r,
            pageIndex: null != i ? parseInt(i, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function e3(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: i,
            pageIndex: p = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: S,
        } = e,
        { analyticsLocations: k } = (0, g.Ay)(m.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, _.A)({ applicationId: t }),
        y = C?.storefront ?? null,
        R = (function (e) {
            let { applicationId: t } = e,
                { isTestMode: l, selectedStorefrontId: n, liveStorefrontId: i, liveStorefront: r } = T(t),
                a = l && null != n && n !== i;
            s.useEffect(() => {
                l && null != t && (0, b.JX)(t);
            }, [l, t]),
                s.useEffect(() => {
                    a && null != t && null != n && (0, b.d8)(t, n);
                }, [a, t, n]);
            let c = (0, o.bG)([L.A], () => (a && null != n ? L.A.getStorefrontById(n) : void 0), [a, n]);
            return {
                isTestMode: l,
                selectedStorefrontId: n,
                liveStorefrontId: i,
                effectiveStorefront: a ? (c?.storefront ?? null) : r,
            };
        })({ applicationId: t }),
        M = R.effectiveStorefront ?? y,
        O = null != M && M.id === R.liveStorefrontId,
        D = (0, o.bG)([v.A], () => v.A.get(i), [i]);
    (0, h.pE)(), (0, x.x)({ applicationId: C?.storefront?.applicationId });
    let w = (0, f.A)((0, a.A)()),
        G = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(l, j.default.getId())),
        P = s.useMemo(() => (null == p || isNaN(p) || (null != M && p >= M.pages.length) ? 0 : p), [p, M]),
        F = M?.pages[P]?.title ?? null,
        H = M?.pages[P]?.leaderboard != null,
        Y = s.useMemo(
            () => ({
                sessionId: w,
                guildId: l,
                applicationId: t,
                pageIndex: P,
                pageTitle: F,
                isUserGuildMember: G,
                pageHasLeaderboard: H,
            }),
            [w, l, t, P, F, G, H],
        );
    return (s.useEffect(() => {
        null != t && (0, b.SP)(t, P, null != i ? i : null);
    }, [t, P, i]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: r()(e0.p$, e0.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: U.intl.string(eO.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: U.intl.string(eO.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: r()(e0.u1, e0.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: k,
              children: (0, n.jsx)(N.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: S,
                  children: (0, n.jsx)(E.E9, {
                      newValue: Y,
                      children: (0, n.jsx)(e1, {
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
