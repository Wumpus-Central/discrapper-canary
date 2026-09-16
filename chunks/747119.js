(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eN, default: () => ev }));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(132500),
    d = t(17928),
    o = t(289873),
    c = t(297264),
    u = t(834730),
    g = t(444927),
    x = t(220839),
    p = t(793574),
    f = t(688810),
    h = t(976860),
    m = t(435658),
    I = t(594832),
    j = t(280450),
    A = t(696451),
    _ = t(71393),
    k = t(67480),
    S = t(927813),
    b = t(449054),
    v = t(871123),
    E = t(733391),
    N = t(439303),
    L = t(353281),
    C = t(429635),
    y = t(156454),
    M = t(317560);
function R(e) {
    let { alt: l, ariaLabel: t, ariaHidden: n, role: a, width: i = 288, height: r = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": n,
        role: a ?? "img",
    });
}
var T = t(28863),
    O = t(188275),
    D = t(206285),
    H = t(375708),
    w = t(771442);
function G() {
    return (0, s.jsxs)("div", {
        className: w.p,
        children: [
            (0, s.jsx)("div", {
                className: w.b,
                children: (0, s.jsx)(R, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(c.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: H.intl.string(D.default["0XMNl5"]),
            }),
            (0, s.jsxs)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [H.intl.string(D.default.NZbasC), (0, s.jsx)("br", {}), H.intl.string(D.default.Tc8sxG)],
            }),
            (0, s.jsx)(u.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(T.Anchor, { href: O.uy, children: H.intl.string(D.default.KPCFC9) }),
            }),
        ],
    });
}
var P = t(696292),
    Y = t(939249),
    V = t(366010),
    $ = t(926268),
    F = t(736653),
    U = t(742589),
    W = t(617986),
    Z = t(402860),
    B = t(70926),
    J = t(287809),
    K = t(174459),
    X = t(975571),
    z = t(371794),
    q = t(995393),
    Q = t(652215),
    ee = t(518477),
    el = t(859425);
function et(e) {
    let { content: l, onClick: t, ariaLabel: n, className: a } = e;
    return (0, s.jsx)(Y.D, { className: i()(el.gb, a), onClick: t, "aria-label": n, children: l });
}
function es() {
    let e = n.useCallback(() => {
        (0, W.mA)({ fromContent: P.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, s.jsx)(B.SS, {
        cardAlignment: B.SS.CardAlignment.END,
        ctaText: H.intl.string(H.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function en(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, V.M)((0, F.Ay)()),
        r = (0, d.bG)([J.default], () => J.default.getCurrentUser()),
        o = (0, N.jM)(),
        { analyticsLocations: c } = (0, f.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, L.H)(),
        x = n.useCallback(() => {
            r?.id != null &&
                (0, Z.openUserProfileModal)({
                    userId: r.id,
                    tabSection: ee.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        m = n.useCallback(() => {
            (K.default.track(Q.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: o?.sessionId,
                cta_type: q.ST.LEARN_MORE,
                location_stack: c,
            }),
                window.open(X.A.getArticleURL(Q.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [o, c]),
        I = n.useCallback(() => {
            null != g && (0, h.pX)(g(0));
        }, [g]);
    if (null == l) return null;
    let j = null != l.logoAssetId ? (0, z.YE)(l.applicationId, l.logoAssetId, 128) : null,
        A = null != l.lightThemeLogoAssetId ? (0, z.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        _ = null;
    return (
        (_ = a ? (j ?? A) : (A ?? j)),
        (0, s.jsxs)(U.A, {
            disableDoubleClick: !0,
            className: el.N1,
            children: [
                (0, s.jsxs)(Y.D, {
                    onClick: I,
                    className: el.gn,
                    children: [
                        null != _ && (0, s.jsx)("img", { className: el.wm, src: _, alt: l.title }),
                        (0, s.jsx)(U.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, s.jsx)("div", {
                        className: el.YC,
                        children: l.pages.map((e, l) =>
                            (0, s.jsx)(
                                U.A.Title,
                                {
                                    onClick: () => {
                                        null != g && (0, h.pX)(g(l));
                                    },
                                    wrapperClassName: el.oB,
                                    className: i()(el.xT, { [el.ys]: t === l }),
                                    children: (0, s.jsx)(u.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, s.jsxs)("div", {
                    className: el.sZ,
                    children: [
                        (0, s.jsx)(et, {
                            content: (0, s.jsx)($.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: H.intl.string(H.t["7lZ31J"]),
                            className: el.ij,
                        }),
                        (0, s.jsx)(es, {}),
                        (0, s.jsx)(et, {
                            onClick: m,
                            ariaLabel: H.intl.string(H.t.hvVgAZ),
                            content: (0, s.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: H.intl.string(H.t.hvVgAZ),
                            }),
                            className: el.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var ea = t(689175),
    ei = t(765671);
let er = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ed = t(445881),
    eo = t(352749);
function ec(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(N.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: eo.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: eo.FS,
                          children: [
                              (0, s.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: eo.Ui,
                              children: (0, s.jsx)(ed.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ed.s6.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var eu = t(199023);
function eg(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, z.YE)(l, t, 1024, v.pV) : null;
    return (0, s.jsx)("div", {
        className: eu._,
        children: null != n ? (0, s.jsx)("div", { className: eu.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var ex = t(259745),
    ep = t(504082);
function ef(e) {
    let { className: l, skuIds: t, variant: n = ed.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(l, ep.kL, ep.$2, { [ep.Wc]: n === ed.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(ed.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var eh = t(534125);
function em(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = ed.s6.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let d = null != t && t.length > 0;
    return (0, s.jsx)(N.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: eh.hd,
            children: [
                d &&
                    (0, s.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eh.Gf,
                        children: t,
                    }),
                (0, s.jsx)(ef, { className: d ? eh.EM : void 0, skuIds: a, variant: i }),
            ],
        }),
    });
}
var eI = t(59520);
function ej(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                applicationId: d,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = l;
            K.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                application_id: d,
                page_index: o,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eA = t(167551);
function e_(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: d } = (0, ei.Ay)(),
        o = (0, N.jM)(),
        { analyticsLocations: c } = (0, f.Ay)(),
        u = n.useRef(null),
        { handleScroll: g } =
            ((l = n.useRef(o)),
            n.useEffect(() => {
                l.current = o;
            }, [o]),
            (t = (0, eI.I)(ej, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(Q.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, c, u]),
            }),
        x = (function (e) {
            let { location: l } = e;
            return er.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [p, h] = n.useMemo(() => {
            if (i?.skuIds == null || 0 === i.skuIds.length) return [[], []];
            let e = Math.round(d ?? 0);
            return i?.leaderboard == null || null == e || e < 564
                ? [[], i.skuIds]
                : e < 1104
                  ? i.skuIds.length >= 2
                      ? [[], i.skuIds]
                      : [i.skuIds.slice(0, 1), i.skuIds.slice(1)]
                  : [i.skuIds.slice(0, 2), i.skuIds.slice(2)];
        }, [i, d]),
        m = 1 === p.length && null != d && d >= 834 && !x;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: i } = o;
        K.default.track(Q.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: i,
            location_stack: c,
        });
    }, [o, a, c]),
    null == i)
        ? null
        : (0, s.jsxs)(ea.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  (0, s.jsx)(ex.M, { applicationId: a, analyticsLocations: c }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: eA.k,
                      children: [
                          (0, s.jsx)(eg, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !x &&
                              (0, s.jsx)(ec, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: m ? p[0] : void 0,
                                  analyticsLocations: c,
                              }),
                          (0, s.jsx)(em, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: m ? void 0 : p,
                              variant: ed.s6.MEDIUM,
                          }),
                          (0, s.jsx)(em, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
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
var ek = t(537067);
let eS = 10 * S.A.Millis.SECOND;
function eb(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, N.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: o } = (0, L.H)(),
        c = n.useRef(r);
    n.useEffect(() => {
        c.current = r;
    }, [r]);
    let u = n.useCallback(() => {
            null != o && (0, h.bG)(o(0));
        }, [o]),
        g = i?.id;
    return (
        n.useEffect(() => {
            if (null != g)
                return (
                    (0, M.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: c.current,
                        onClose: () => {
                            let { pathname: e, search: s } = (0, h.JK)().location;
                            (0, v.rG)(e, s, l.applicationId, t) && null != o && (0, h.bG)(o(a));
                        },
                    }),
                    () => {
                        (0, M.j)();
                    }
                );
        }, [t, a, g, l.applicationId, o, u]),
        (0, s.jsxs)("div", {
            className: ek.kL,
            children: [d?.(a, l), (0, s.jsx)(e_, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function ev(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, d.bG)([j.default], () => j.default.getSessionId(), []),
        o = n.useCallback((e, l, s) => Q.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        c = (0, v.nY)(t),
        u = n.useCallback((e, l) => (0, s.jsx)(en, { storefront: l, selectedPageIndex: e }), []);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == _.A.getGuild(t) && (0, b.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eN, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eE() {
    let [e, l] = n.useState(!1);
    return ((0, x.A)(() => l(!0), eS), e)
        ? (0, s.jsx)("div", { className: ek.kL, children: (0, s.jsx)(G, {}) })
        : (0, s.jsx)("div", { className: i()(ek.u1, ek.kL), children: (0, s.jsx)(o.y, {}) });
}
function eN(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: x = 0,
            renderHeader: h,
            getSocialLayerStorefrontLink: _,
        } = e,
        { analyticsLocations: S } = (0, f.Ay)(p.A.SOCIAL_LAYER_STOREFRONT),
        b = (0, C.A)({ applicationId: l, guildId: t }),
        v = b?.storefront ?? null,
        M = (0, y.A)({ applicationId: l }),
        R = M.effectiveStorefront ?? v,
        T = (0, d.bG)([k.A], () => k.A.get(a), [a]);
    ((0, I.pE)(), (0, m.x)({ applicationId: b?.storefront?.applicationId }));
    let O = (0, g.A)((0, r.A)()),
        w = (0, d.bG)([A.Ay, j.default], () => A.Ay.isMember(t, j.default.getId())),
        G = n.useMemo(() => (null == x || isNaN(x) || (null != R && x >= R.pages.length) ? 0 : x), [x, R]),
        P = R?.pages[G]?.title ?? null,
        Y = R?.pages[G]?.leaderboard != null,
        V = n.useMemo(
            () => ({
                sessionId: O,
                guildId: t,
                applicationId: l,
                pageIndex: G,
                pageTitle: P,
                isUserGuildMember: w,
                pageHasLeaderboard: Y,
            }),
            [O, t, l, G, P, w, Y],
        );
    return (n.useEffect(() => {
        null != l && (0, E.SP)(l, G, null != a ? a : null);
    }, [l, G, a]),
    null == l || b?.storefront == null)
        ? null != b && "loading" !== b.state
            ? (0, s.jsxs)("div", {
                  className: i()(ek.p$, ek.kL),
                  children: [
                      (0, s.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: H.intl.string(D.default.OvBwPV),
                      }),
                      (0, s.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: H.intl.string(D.default["Sy7D+/"]),
                      }),
                  ],
              })
            : M.isTestMode
              ? (0, s.jsx)(eE, {}, l)
              : (0, s.jsx)("div", { className: i()(ek.u1, ek.kL), children: (0, s.jsx)(o.y, {}) })
        : (0, s.jsx)(f.f5, {
              value: S,
              children: (0, s.jsx)(L.J, {
                  renderHeader: h,
                  getSocialLayerStorefrontLink: _,
                  children: (0, s.jsx)(N.E9, {
                      newValue: V,
                      children: (0, s.jsx)(eb, {
                          storefront: R ?? b.storefront,
                          guildId: t,
                          selectedPageIndex: G,
                          selectedSku: T,
                      }),
                  }),
              }),
          });
}
