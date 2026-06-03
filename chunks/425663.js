l.r(t), l.d(t, { default: () => eu });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    o = l.n(i),
    s = l(289873),
    r = l(17928),
    c = l(944791),
    d = l(710195),
    u = l(976860),
    p = l(495544),
    C = l(619921),
    L = l(832163),
    E = l(81341),
    S = l(44724),
    A = l(939599),
    x = l(696292),
    f = l(939249),
    g = l(34188),
    m = l(661531),
    I = l(926268),
    _ = l(885574),
    h = l(834730),
    j = l(793574),
    O = l(688810),
    b = l(742589),
    T = l(617986),
    k = l(975732),
    N = l(318346),
    v = l(371446),
    y = l(70926),
    M = l(287809),
    R = l(174459),
    B = l(975571),
    P = l(439303),
    H = l(980707),
    w = l(477782),
    U = l(478016),
    G = l(847374),
    F = l(922016),
    V = l(900797),
    z = l(587895),
    D = l(421773),
    W = l(486020),
    Y = l(429913),
    X = l(733391),
    Z = l(652215),
    q = l(375708),
    Q = l(583144);
function J(e) {
    let { shops: t, currentApplicationId: l, onClose: a, onMouseEnter: i, onMouseLeave: o } = e;
    return (0, n.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, n.jsx)(H.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: a,
            "aria-label": q.intl.string(q.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) => {
                let t =
                    null != e.application.icon
                        ? W.Ay.getApplicationIconURL({ id: e.application.id, icon: e.application.icon, size: 32 })
                        : void 0;
                return (0, n.jsx)(
                    w.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                        color: e.applicationId === l ? "brand" : "default",
                        trailingIndicator: l === e.applicationId ? { type: "icon", icon: U.U } : void 0,
                        action: () => {
                            (0, u.pX)(Z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), a();
                        },
                    },
                    e.applicationId,
                );
            }),
        }),
    });
}
function K(e) {
    let t,
        l,
        i,
        { selectedApplicationId: s, className: c } = e,
        d = a.useRef(null),
        { isHovered: u, setIsHovered: p, onMouseEnter: C, onMouseLeave: E, cancelTimers: S } = (0, D.A)(100, 100),
        A =
            ((t = (0, r.yK)([L.A], () =>
                (L.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (l = a.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, Y.A)(l)),
            a.useEffect(() => {
                (0, X.Xw)();
            }, []),
            a.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        x = (0, r.bG)([z.A], () => z.A.getApplication(s)),
        g = a.useCallback(
            (e) => {
                S(), p(e);
            },
            [S, p],
        ),
        m = a.useCallback(() => {
            g(!u);
        }, [u, g]);
    if (null == x)
        return (0, n.jsxs)("div", {
            className: o()(Q.hZ, Q.qf, c),
            "aria-hidden": "true",
            children: [(0, n.jsx)("span", { className: Q.wm }), (0, n.jsx)(G.a, { size: "xs", color: "currentColor" })],
        });
    let I = null != x.icon ? W.Ay.getApplicationIconURL({ id: x.id, icon: x.icon, size: 32 }) : null;
    return (0, n.jsx)(F.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => g(!0),
        onRequestClose: () => g(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(J, { shops: A, currentApplicationId: s, onClose: t, onMouseEnter: C, onMouseLeave: E });
        },
        children: (e) => {
            let t = u ? V.t : G.a;
            return (0, n.jsxs)(f.D, {
                ...e,
                innerRef: d,
                onClick: m,
                onMouseLeave: E,
                className: o()(Q.hZ, c),
                "aria-label": x.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != I && (0, n.jsx)("img", { className: Q.wm, src: I, alt: "" }),
                    (0, n.jsx)(h.E, { variant: "text-md/medium", color: "text-default", children: x.name }),
                    (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var $ = l(995393),
    ee = l(518477),
    et = l(951259);
function el(e) {
    let { content: t, onClick: l, ariaLabel: a } = e;
    return (0, n.jsx)(f.D, { className: et.gb, onClick: l, "aria-label": a, children: t });
}
function en() {
    let e = a.useCallback(() => {
        (0, u.pX)(Z.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, n.jsx)(f.D, {
        className: et.Ak,
        onClick: e,
        "aria-label": q.intl.string(q.t["5upuqx"]),
        children: (0, n.jsx)(g.U, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
    });
}
function ea() {
    let e = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
        t = a.useCallback(() => {
            e?.id != null &&
                (0, k.openUserProfileModal)({
                    userId: e.id,
                    tabSection: ee.RP.WISHLIST,
                    sourceAnalyticsLocations: [j.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, n.jsx)(el, {
        content: (0, n.jsx)(I.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: q.intl.string(q.t["7lZ31J"]),
    });
}
function ei() {
    let { enabled: e } = (0, v.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = a.useCallback(() => {
            (0, N.Y)({
                pageType: Z.liQ.COLLECTIBLES_SHOP,
                sectionType: Z.JJy.ORBS_BALANCE_MENU,
                ctaObject: Z.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, T.navigateToQuestHome)({ fromContent: x.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, n.jsx)(y.SS, {
              analyticsPage: Z.liQ.COLLECTIBLES_SHOP,
              cardAlignment: y.SS.CardAlignment.END,
              ctaText: q.intl.string(q.t.VC4Mq0),
              ctaOnClick: t,
          })
        : null;
}
function eo() {
    let e = (0, P.jM)(),
        { analyticsLocations: t } = (0, O.Ay)(),
        l = a.useCallback(() => {
            R.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: $.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, n.jsx)(el, {
        content: (0, n.jsx)(_.m, { size: "xs", color: "currentColor" }),
        onClick: l,
        ariaLabel: q.intl.string(q.t.hvVgAZ),
    });
}
function es(e) {
    let { storefront: t, selectedPageIndex: l } = e;
    return null == t
        ? null
        : (0, n.jsxs)(b.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: et.N1,
              toolbar: (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(ea, {}), (0, n.jsx)(ei, {}), (0, n.jsx)(eo, {})],
              }),
              children: [
                  (0, n.jsx)(en, {}),
                  (0, n.jsx)("div", { className: et.yF, "aria-hidden": "true" }),
                  (0, n.jsx)(K, { selectedApplicationId: t.applicationId, className: et.Wm }),
                  t.pages.length > 1 &&
                      (0, n.jsx)("div", {
                          className: et.YC,
                          children: t.pages.map((e, a) =>
                              (0, n.jsx)(
                                  b.A.Title,
                                  {
                                      onClick: () => {
                                          (0, u.pX)(
                                              Z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, a > 0 ? a : void 0),
                                          );
                                      },
                                      wrapperClassName: et.oB,
                                      className: o()(et.xT, { [et.ys]: l === a }),
                                      children: (0, n.jsx)(h.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${a}`,
                              ),
                          ),
                      }),
              ],
          });
}
var er = l(964395),
    ec = l(901123),
    ed = l(253004);
function eu(e) {
    let { applicationId: t, pageIndex: l, skuId: i, slug: x } = e,
        { guildId: f, configFetchState: g } = (0, r.cf)([L.A], () => ({
            guildId: L.A.getGuildIdFromApplicationId(t),
            configFetchState: L.A.getConfigFetchState(),
        })),
        m = (0, r.bG)([p.default], () => p.default.getId()),
        I = (0, r.bG)([d.A], () => d.A.hasLoaded(m)),
        _ = (0, E.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        h = null != l ? parseInt(l, 10) : 0;
    a.useEffect(() => {
        (C.A.getHomeLink()?.startsWith(ec.BV.COLLECTIBLES_SHOP_GAME_SHOP("")) || _) &&
            (0, c.I)(ec.BV.COLLECTIBLES_SHOP);
    }, [t, h, i, x, _]),
        a.useEffect(() => {
            I &&
                "idle" !== g.state &&
                "loading" !== g.state &&
                (_ ||
                    null == f ||
                    (0, S.navigateToSocialLayerStorefrontWithGuildPreview)({
                        guildId: f,
                        skuId: i ?? void 0,
                        pageIndex: isNaN(h) ? void 0 : h,
                        slug: x ?? void 0,
                    }),
                null == f && (0, u.pX)(ec.BV.COLLECTIBLES_SHOP));
        }, [_, f, I, g.state, i, h, x]);
    let j = a.useCallback(
            (e, t) =>
                _
                    ? (0, n.jsx)(es, { storefront: t, selectedPageIndex: e })
                    : null == f
                      ? null
                      : (0, n.jsx)(er.A, { storefront: t, selectedPageIndex: e }),
            [f, _],
        ),
        O = a.useCallback((e, l, n) => ec.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, l, n), [t]);
    return null != f && I && _ && "success" === g.state
        ? (0, n.jsx)(A.SocialLayerStorefrontInnerWrapper, {
              guildId: f,
              skuId: i,
              pageIndex: h,
              renderHeader: j,
              getSocialLayerStorefrontLink: O,
          })
        : (0, n.jsx)("div", { className: o()(ed.u, ed.k), children: (0, n.jsx)(s.y, {}) });
}
