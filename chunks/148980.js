s.r(l), s.d(l, { SocialLayerStorefrontInnerWrapper: () => eE, default: () => eA });
var t = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(835245),
    o = s(17928),
    c = s(289873),
    d = s(444927),
    u = s(793574),
    g = s(688810),
    p = s(976860),
    x = s(530868),
    _ = s(561794),
    I = s(495544),
    f = s(696451),
    h = s(71393),
    A = s(67480),
    E = s(449054),
    m = s(733391),
    S = s(439303),
    j = s(35826),
    k = s(429635),
    R = s(317560),
    N = s(939249),
    v = s(366010),
    b = s(834730),
    L = s(926268),
    M = s(736653),
    C = s(742589),
    O = s(975732),
    y = s(287809),
    T = s(174459),
    D = s(975571),
    G = s(371794),
    P = s(44724),
    H = s(995393),
    w = s(652215),
    Y = s(518477),
    B = s(375708),
    U = s(718356);
function $(e) {
    let { content: l, onClick: s, ariaLabel: n, className: a } = e;
    return (0, t.jsx)(N.D, { className: i()(U.gb, a), onClick: s, "aria-label": n, children: l });
}
function W(e) {
    let { guildId: l, storefront: s, selectedPageIndex: a } = e,
        r = (0, v.M)((0, M.Ay)()),
        c = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        d = (0, S.jM)(),
        { analyticsLocations: p } = (0, g.Ay)(),
        x = n.useCallback(() => {
            c?.id != null &&
                (0, O.openUserProfileModal)({
                    userId: c.id,
                    tabSection: Y.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [c]),
        _ = n.useCallback(() => {
            T.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: d?.sessionId,
                cta_type: H.ST.LEARN_MORE,
                location_stack: p,
            }),
                window.open(D.A.getArticleURL(w.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [d, p]);
    if (null == s) return null;
    let I = null != s.logoAssetId ? (0, G.YE)(s.applicationId, s.logoAssetId, 128) : null,
        f = null != s.lightThemeLogoAssetId ? (0, G.YE)(s.applicationId, s.lightThemeLogoAssetId, 128) : null,
        h = null;
    return (
        (h = r ? (I ?? f) : (f ?? I)),
        (0, t.jsxs)(C.A, {
            disableDoubleClick: !0,
            className: U.N1,
            children: [
                (0, t.jsxs)(N.D, {
                    onClick: () => {
                        (0, P.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: U.gn,
                    children: [
                        null != h && (0, t.jsx)("img", { className: U.wm, src: h, alt: s.title }),
                        (0, t.jsx)(C.A.Title, { children: s.title }),
                    ],
                }),
                s.pages.length > 1 &&
                    (0, t.jsx)("div", {
                        className: U.YC,
                        children: s.pages.map((e, s) =>
                            (0, t.jsx)(
                                C.A.Title,
                                {
                                    onClick: () => {
                                        (0, P.default)({ guildId: l, pageIndex: s });
                                    },
                                    wrapperClassName: U.oB,
                                    className: i()(U.xT, { [U.ys]: a === s }),
                                    children: (0, t.jsx)(b.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${s}`,
                            ),
                        ),
                    }),
                (0, t.jsxs)("div", {
                    className: U.sZ,
                    children: [
                        (0, t.jsx)($, {
                            content: (0, t.jsx)(L.C, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: B.intl.string(B.t["7lZ31J"]),
                            className: U.ij,
                        }),
                        (0, t.jsx)($, {
                            onClick: _,
                            ariaLabel: B.intl.string(B.t.hvVgAZ),
                            content: (0, t.jsx)(b.E, {
                                variant: "text-sm/medium",
                                children: B.intl.string(B.t.hvVgAZ),
                            }),
                            className: U.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var F = s(689175),
    V = s(765671),
    Z = s(318254),
    z = s(554146),
    J = s(417098),
    K = s(853735),
    X = s(131607),
    q = s(945942),
    Q = s(49999),
    ee = s(922674);
function el(e) {
    let { location: l } = e,
        { shouldRender: s, limitedOfferTimeLeft: n } = (0, q.A)({ location: l }),
        [a, i] = (0, X.RF)(
            s ? z.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, K.c)(z.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== z.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !s || r
        ? null
        : (0, t.jsxs)(J.$T, {
              className: ee.U,
              color: J.Hv.BRAND,
              children: [
                  (0, t.jsx)(J.PM, {
                      noticeType: w.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(Q.i.USER_DISMISS),
                  }),
                  (0, t.jsx)(Z.C, { size: "xs", color: "currentColor" }),
                  (0, t.jsxs)("div", {
                      className: ee.f,
                      children: [
                          (0, t.jsxs)(b.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [B.intl.string(B.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, t.jsx)(b.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, t.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: B.intl.format(B.t.RUuXiA, { applicationName: B.intl.string(B.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var es = s(467884),
    et = s(534514),
    en = s(514270);
function ea(e) {
    let { leaderboard: l, skuId: s, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, t.jsx)(S.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: en.kL,
                  children: [
                      (0, t.jsxs)("div", {
                          className: en.FS,
                          children: [
                              (0, t.jsx)(et.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, t.jsx)(b.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != s &&
                          (0, t.jsx)("div", {
                              className: en.Ui,
                              children: (0, t.jsx)(es.A, {
                                  positionInSection: 0,
                                  skuId: s,
                                  variant: es.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ei = s(871123),
    er = s(500102);
function eo(e) {
    let { applicationId: l, backgroundImageAssetId: s } = e,
        n = null != s ? (0, G.YE)(l, s, 1024, ei.pV) : null;
    return (0, t.jsx)("div", {
        className: er._,
        children: null != n ? (0, t.jsx)("div", { className: er.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var ec = s(198647);
function ed(e) {
    let { skuIds: l, variant: s = es.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: i()(ec.kL, ec.$2, { [ec.Wc]: s === es.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, t.jsx)(es.A, { positionInSection: l, skuId: e, variant: s, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var eu = s(259238);
function eg(e) {
    let { analyticsSectionId: l, sectionTitle: s, skuIds: a, variant: i = es.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: s }), [l, s]);
    return null == a || 0 === a.length
        ? null
        : (0, t.jsx)(S.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: eu.h,
                  children: [
                      null != s &&
                          s.length > 0 &&
                          (0, t.jsx)(et.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eu.G,
                              children: s,
                          }),
                      (0, t.jsx)(ed, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var ep = s(59520);
function ex(e, l, s, t) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = t;
    if (i > 0) {
        let t = (n + a) / i;
        if (t > 0) {
            let {
                sessionId: n,
                guildId: a,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: u,
            } = l;
            T.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                page_index: o,
                page_title: c,
                is_user_guild_member: d,
                page_has_leaderboard: u,
                scroll_visible_percent: t,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: s,
            });
        }
    }
}
var e_ = s(384274);
function eI(e) {
    let l,
        s,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, V.Ay)(),
        c = (0, S.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = n.useRef(null),
        { handleScroll: p } =
            ((l = n.useRef(c)),
            n.useEffect(() => {
                l.current = c;
            }, [c]),
            (s = (0, ep.I)(ex, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            t = l.current;
                        null != e &&
                            s(w.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, t, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [s, d, u]),
            }),
        [x, _] = n.useMemo(() => {
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
        I = 1 === x.length && null != o && o >= 834;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: s, pageTitle: t, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        T.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: s,
            page_title: t,
            is_user_guild_member: n,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, d]),
    null == i)
        ? null
        : (0, t.jsxs)(F.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, t.jsx)(el, { location: "social_layer_storefront_page" }),
                  (0, t.jsxs)("section", {
                      ref: r,
                      className: e_.k,
                      children: [
                          (0, t.jsx)(eo, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, t.jsx)(ea, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: i.leaderboard,
                              skuId: I ? x[0] : void 0,
                              analyticsLocations: d,
                          }),
                          (0, t.jsx)(eg, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : x,
                              variant: es.s.MEDIUM,
                          }),
                          (0, t.jsx)(eg, { analyticsSectionId: "non-featured-top-section", skuIds: _ }),
                          i.sections?.map((e, l) =>
                              (0, t.jsx)(
                                  eg,
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
var ef = s(253004);
function eh(e) {
    let { storefront: l, guildId: s, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, S.jM)(),
        o = n.useRef(r);
    n.useEffect(() => {
        o.current = r;
    }, [r]);
    let c = i?.id;
    return (
        n.useEffect(() => {
            if (null != c)
                return (
                    (0, R.R)({
                        skuId: c,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: o.current,
                        onClose: () => {
                            (0, p.JK)().location.pathname.indexOf(w.BVt.CHANNELS_GAME_SHOP(s, a)) >= 0 &&
                                (0, j.A)({ guildId: s, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [s, a, c, l.applicationId]),
        (0, t.jsxs)("div", {
            className: ef.k,
            children: [
                (0, t.jsx)(W, { guildId: s, storefront: l, selectedPageIndex: a }),
                (0, t.jsx)(eI, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function eA(e) {
    let { match: l } = e,
        { guildId: s, gameShopPageIndex: n, gameShopSkuId: a } = l.params;
    return (0, t.jsx)(eE, { guildId: s, skuId: a, pageIndex: null != n ? parseInt(n, 10) : void 0 });
}
function eE(e) {
    let { guildId: l, skuId: s, pageIndex: a = 0 } = e,
        { analyticsLocations: p } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        j = (0, k.A)({ guildId: l }),
        R = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        N = (0, o.bG)([A.A], () => A.A.get(s), [s]);
    (0, _.pE)(), (0, x.x)({ applicationId: j?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let v = (0, d.A)((0, r.A)()),
        b = (0, o.bG)([f.Ay, I.default], () => f.Ay.isMember(l, I.default.getId())),
        L = n.useMemo(
            () =>
                null == a || isNaN(a) || (null != j && null != j.storefront && a >= j.storefront.pages.length) ? 0 : a,
            [a, j],
        ),
        M = j?.storefront?.pages[L]?.title ?? null,
        C = j?.storefront?.pages[L]?.leaderboard != null,
        O = n.useMemo(
            () => ({
                sessionId: v,
                guildId: l,
                pageIndex: L,
                pageTitle: M,
                isUserGuildMember: b,
                pageHasLeaderboard: C,
            }),
            [v, l, L, M, b, C],
        );
    return (n.useEffect(() => {
        null != l && (0, m.SP)(l, L, null != s ? s : null);
    }, [l, L, s]),
    n.useEffect(() => {
        null == l || null == R || (null == h.A.getGuild(l) && (0, E.Z2)(l, {}, { shouldNavigate: !1 }));
    }, [l, R]),
    null == l || j?.storefront == null)
        ? (0, t.jsx)("div", { className: i()(ef.u, ef.k), children: (0, t.jsx)(c.y, {}) })
        : (0, t.jsx)(g.f5, {
              value: p,
              children: (0, t.jsx)(S.E9, {
                  newValue: O,
                  children: (0, t.jsx)(eh, {
                      storefront: j.storefront,
                      guildId: l,
                      selectedPageIndex: L,
                      selectedSku: N,
                  }),
              }),
          });
}
