l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => e2, default: () => e8 });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(132500),
    o = l(17928),
    c = l(297264),
    d = l(834730),
    u = l(289873),
    f = l(444927),
    m = l(793574),
    g = l(688810),
    x = l(976860),
    p = l(435658),
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
function R(e) {
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
var T = l(317560),
    M = l(696292),
    O = l(939249),
    D = l(366010),
    P = l(926268),
    w = l(736653),
    G = l(742589),
    F = l(617986),
    H = l(975732),
    Y = l(70926),
    V = l(287809),
    $ = l(174459),
    B = l(975571),
    U = l(371794),
    W = l(995393),
    Z = l(652215),
    z = l(518477),
    J = l(375708),
    X = l(718356);
function K(e) {
    let { content: t, onClick: l, ariaLabel: s, className: i } = e;
    return (0, n.jsx)(O.D, { className: r()(X.gb, i), onClick: l, "aria-label": s, children: t });
}
function q() {
    let e = s.useCallback(() => {
        (0, F.mA)({ fromContent: M.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(Y.SS, {
        cardAlignment: Y.SS.CardAlignment.END,
        ctaText: J.intl.string(J.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function Q(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        i = (0, D.M)((0, w.Ay)()),
        a = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        c = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, _.H)(),
        p = s.useCallback(() => {
            a?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: a.id,
                    tabSection: z.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [a]),
        h = s.useCallback(() => {
            $.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: W.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        j = s.useCallback(() => {
            null != f && (0, x.pX)(f(0));
        }, [f]);
    if (null == t) return null;
    let I = null != t.logoAssetId ? (0, U.YE)(t.applicationId, t.logoAssetId, 128) : null,
        A = null != t.lightThemeLogoAssetId ? (0, U.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        v = null;
    return (
        (v = i ? (I ?? A) : (A ?? I)),
        (0, n.jsxs)(G.A, {
            disableDoubleClick: !0,
            className: X.N1,
            children: [
                (0, n.jsxs)(O.D, {
                    onClick: j,
                    className: X.gn,
                    children: [
                        null != v && (0, n.jsx)("img", { className: X.wm, src: v, alt: t.title }),
                        (0, n.jsx)(G.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: X.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                G.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, x.pX)(f(t));
                                    },
                                    wrapperClassName: X.oB,
                                    className: r()(X.xT, { [X.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: X.sZ,
                    children: [
                        (0, n.jsx)(K, {
                            content: (0, n.jsx)(P.C, { size: "xs", color: "currentColor" }),
                            onClick: p,
                            ariaLabel: J.intl.string(J.t["7lZ31J"]),
                            className: X.ij,
                        }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(K, {
                            onClick: h,
                            ariaLabel: J.intl.string(J.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
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
    er = l(514270);
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
var eo = l(920948),
    ec = l(317097),
    ed = l(43990),
    eu = l(406810),
    ef = l(52133),
    em = l(417098),
    eg = l(396583),
    ex = l(421108),
    ep = l(818348),
    eh = l(569901);
function ej(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: i } = e,
        a = s ? eh.qf : void 0;
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
            className: r()(eh.cI, eh.p3, a, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, ec.qt)(l)) {
        let e = (0, ec.OK)((0, ec.LX)(l)) > 0.5 ? ep.NJ.DARK : ep.NJ.LIGHT;
        return (0, n.jsx)(ed.N, {
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
    return (0, n.jsx)(ed.N, {
        theme: ep.NJ.DARK,
        children: (e) => o({ className: r()(e, eh.cI, a, t), noticeColor: em.Hv.BRAND }),
    });
}
function eI(e) {
    let { Icon: t, children: l, endDatetime: i, ...r } = e,
        [a, o] = s.useState(() => (0, ex.Z)(i));
    (0, eg.A)(() => {
        let e = (0, ex.Z)(i);
        o((t) => (null == e ? null : null != t && (0, ef.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: eh.lt,
            children: [null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }), l],
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
            (0, n.jsx)(eu.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: J.intl.formatToPlainString(J.t.BXpdIg, { days: t }),
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
var eS = l(500102);
function ek(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, U.YE)(t, l, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: eS._,
        children: null != s ? (0, n.jsx)("div", { className: eS.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eb = l(198647);
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
var e_ = l(259238);
function eN(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: i, variant: r = ei.s.SMALL } = e,
        a = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    if (null == i || 0 === i.length) return null;
    let o = null != l && l.length > 0;
    return (0, n.jsx)(E.E9, {
        newValue: a,
        children: (0, n.jsxs)("div", {
            className: e_.hd,
            children: [
                o &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: e_.Gf,
                        children: l,
                    }),
                (0, n.jsx)(eE, { className: o ? e_.EM : void 0, skuIds: i, variant: r }),
            ],
        }),
    });
}
var eC = l(508770),
    eL = l(821609),
    ey = l(403581),
    eR = l(587895),
    eT = l(532794),
    eM = l(69236),
    eO = l(202541),
    eD = l(430825),
    eP = l(201483);
function ew(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        i = (0, eM.W8)(),
        r = (0, o.bG)([eR.A], () => eR.A.getApplication(t)),
        a = (0, o.bG)([L.A], () => L.A.getConfigForApplicationId(t)),
        c = s.useCallback(() => {
            (0, eT.A)({ subscriptionTier: eO.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        u =
            a?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(J.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      a?.promotionEndDatetime,
                  )
                : "",
        f = (0, n.jsxs)("div", {
            className: eP.F,
            children: [
                (0, n.jsx)(eC.E, { type: "beta", variant: "expressive" }),
                (0, n.jsxs)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: [
                        J.intl.format(eD.default.iFXcjn, { applicationName: r?.name, endDate: u }),
                        " ",
                        J.intl.format(J.t.BPDKoA, {
                            helpdeskArticle: B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_SPEND_ORBS_LEARN_MORE),
                        }),
                    ],
                }),
            ],
        });
    return i
        ? (0, n.jsx)(eI, { sticky: !0, color: "nitro-pink", children: f, endDatetime: a?.promotionEndDatetime })
        : (0, n.jsx)(ej, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eP.k,
                  children: [
                      f,
                      (0, n.jsx)(eL.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: ey.t,
                          text: J.intl.string(J.t.pj0XBN),
                          onClick: c,
                      }),
                  ],
              }),
          });
}
var eG = l(59520);
function eF(e, t, l, n) {
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
var eH = l(384274);
function eY(e) {
    let t,
        l,
        { applicationId: i, page: r } = e,
        { ref: a, width: o } = (0, et.Ay)(),
        c = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        f = s.useRef(null),
        { handleScroll: m } =
            ((t = s.useRef(c)),
            s.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eG.I)(eF, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(Z.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, u, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [l, u, f]),
            }),
        x = (function (e) {
            let { location: t } = e;
            return el.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        p = (0, en.A)({ applicationId: i, location: "SocialLayerStorefrontPage" }),
        h = (0, es.F)("storefront_banner", { applicationId: i }),
        [j, I] = s.useMemo(() => {
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
        A = 1 === j.length && null != o && o >= 834 && !x;
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
            location_stack: u,
        });
    }, [c, i, u]),
    null == r)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: f,
              onScroll: m,
              children: [
                  p
                      ? (0, n.jsx)(ew, { applicationId: i, analyticsLocations: u })
                      : null != h &&
                        (0, n.jsx)(eI, {
                            sticky: !0,
                            Icon: h.Icon,
                            endDatetime: h.endsAt,
                            children: (0, n.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, eo.U)(h.text),
                            }),
                        }),
                  (0, n.jsxs)("section", {
                      ref: a,
                      className: eH.k,
                      children: [
                          (0, n.jsx)(ek, {
                              applicationId: i,
                              backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                          }),
                          !x &&
                              (0, n.jsx)(ea, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: A ? j[0] : void 0,
                                  analyticsLocations: u,
                              }),
                          (0, n.jsx)(eN, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: A ? void 0 : j,
                              variant: ei.s.MEDIUM,
                          }),
                          (0, n.jsx)(eN, { analyticsSectionId: "non-featured-top-section", skuIds: I }),
                          r.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  eN,
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
    eB = l(847374),
    eU = l(980707),
    eW = l(477782),
    eZ = l(922016),
    ez = l(488705);
function eJ(e) {
    let { entries: t, selectedStorefrontId: l, liveStorefrontId: s, onSelect: i, onClose: r } = e;
    return (0, n.jsx)(eU.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": J.intl.string(eD.default.c2I5Ti),
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
                            (a = "" !== e.title ? e.title : J.intl.string(eD.default.OvBwPV)),
                            t
                                ? J.intl.formatToPlainString(eD.default.eF1VJh, { title: a })
                                : null == e.publishedAt
                                  ? J.intl.formatToPlainString(eD.default.dX2mQt, { title: a })
                                  : a),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eX(e) {
    let { triggerRef: t, isOpen: l, onToggle: s, children: i } = e;
    return (0, n.jsx)("div", {
        className: ez.I,
        ref: t,
        children: (0, n.jsxs)(O.D, {
            className: ez.h,
            onClick: s,
            "aria-expanded": l,
            "aria-haspopup": "menu",
            children: [i, (0, n.jsx)(eB.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eK(e) {
    let { applicationId: t, children: l } = e,
        { entries: i, selectedStorefrontId: r, liveStorefrontId: a } = R(t),
        [o, c] = s.useState(!1),
        d = s.useRef(null),
        u = s.useCallback(() => c(!1), []),
        f = s.useCallback(() => c((e) => !e), []),
        m = s.useCallback((e) => (0, b.ZR)(t, e === a ? null : e), [t, a]);
    return (0, n.jsx)(eZ.Y, {
        targetElementRef: d,
        shouldShow: o,
        animation: eZ.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eJ, { entries: i, selectedStorefrontId: r, liveStorefrontId: a, onSelect: m, onClose: u }),
        children: () => (0, n.jsx)(eX, { triggerRef: d, isOpen: o, onToggle: f, children: l }),
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
        { publishedAt: r, applicationId: a } = l,
        { entries: o } = R(a),
        [c] = s.useState(() => Date.now());
    t =
        null == r
            ? J.intl.string(eD.default.Id33AH)
            : r.getTime() > c
              ? J.intl.format(eD.default.WOZod0, { timestamp: eQ(r) })
              : i
                ? J.intl.format(eD.default.QsHYzr, { timestamp: eQ(r) })
                : J.intl.format(eD.default["3x/M9Z"], { timestamp: eQ(r) });
    let u = (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t });
    return (0, n.jsx)("div", {
        className: eq.v,
        children: o.length > 1 ? (0, n.jsx)(eK, { applicationId: a, children: u }) : u,
    });
}
var e1 = l(253004);
function e7(e) {
    let { storefront: t, guildId: l, selectedPageIndex: i, selectedSku: r, isTestMode: a, isLive: o } = e,
        c = (0, E.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: u } = (0, _.H)(),
        f = s.useRef(c);
    s.useEffect(() => {
        f.current = c;
    }, [c]);
    let g = s.useCallback(() => {
            null != u && (0, x.bG)(u(0));
        }, [u]),
        p = r?.id;
    return (
        s.useEffect(() => {
            if (null != p)
                return (
                    (0, T.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: p,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, x.JK)().location;
                            (0, k.rG)(e, n, t.applicationId, l) && null != u && (0, x.bG)(u(i));
                        },
                    }),
                    () => {
                        (0, T.j)();
                    }
                );
        }, [l, i, p, t.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: e1.kL,
            children: [
                d?.(i, t),
                a && (0, n.jsx)(e0, { storefront: t, isLive: o }),
                (0, n.jsx)(eY, { applicationId: t.applicationId, page: t.pages[i] }),
            ],
        })
    );
}
function e8(e) {
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
        (0, n.jsx)(e2, {
            applicationId: d,
            guildId: l,
            skuId: r,
            pageIndex: null != i ? parseInt(i, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function e2(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: i,
            pageIndex: x = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: S,
        } = e,
        { analyticsLocations: k } = (0, g.Ay)(m.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, N.A)({ applicationId: t }),
        y = C?.storefront ?? null,
        T = (function (e) {
            let { applicationId: t } = e,
                { isTestMode: l, selectedStorefrontId: n, liveStorefrontId: i, liveStorefront: r } = R(t),
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
        M = T.effectiveStorefront ?? y,
        O = null != M && M.id === T.liveStorefrontId,
        D = (0, o.bG)([v.A], () => v.A.get(i), [i]);
    (0, h.pE)(), (0, p.x)({ applicationId: C?.storefront?.applicationId });
    let P = (0, f.A)((0, a.A)()),
        w = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(l, j.default.getId())),
        G = s.useMemo(() => (null == x || isNaN(x) || (null != M && x >= M.pages.length) ? 0 : x), [x, M]),
        F = M?.pages[G]?.title ?? null,
        H = M?.pages[G]?.leaderboard != null,
        Y = s.useMemo(
            () => ({
                sessionId: P,
                guildId: l,
                applicationId: t,
                pageIndex: G,
                pageTitle: F,
                isUserGuildMember: w,
                pageHasLeaderboard: H,
            }),
            [P, l, t, G, F, w, H],
        );
    return (s.useEffect(() => {
        null != t && (0, b.SP)(t, G, null != i ? i : null);
    }, [t, G, i]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: r()(e1.p$, e1.kL),
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
            : (0, n.jsx)("div", { className: r()(e1.u1, e1.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: k,
              children: (0, n.jsx)(_.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: S,
                  children: (0, n.jsx)(E.E9, {
                      newValue: Y,
                      children: (0, n.jsx)(e7, {
                          storefront: M ?? C.storefront,
                          guildId: l,
                          selectedPageIndex: G,
                          selectedSku: D,
                          isTestMode: T.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
