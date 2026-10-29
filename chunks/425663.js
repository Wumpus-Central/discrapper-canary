(n.r(t), n.d(t, { default: () => ei }));
var a = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    s = n(17928),
    r = n(289873),
    c = n(944791),
    d = n(976860),
    u = n(439303),
    p = n(832163),
    C = n(897503),
    E = n(696292),
    A = n(939249),
    L = n(34188),
    S = n(661531),
    x = n(926268),
    I = n(885574),
    m = n(834730),
    f = n(793574),
    g = n(688810),
    _ = n(742589),
    j = n(617986),
    O = n(402860),
    h = n(318346),
    b = n(70926),
    T = n(287809),
    k = n(174459),
    N = n(975571),
    R = n(225647),
    y = n(980707),
    M = n(477782),
    v = n(478016),
    B = n(847374),
    P = n(265872),
    H = n(900797),
    U = n(587895),
    w = n(421773),
    F = n(486020),
    D = n(429913),
    V = n(733391),
    z = n(652215),
    G = n(105292),
    Y = n(348701);
function X(e) {
    let { shops: t, currentApplicationId: n, onClose: l, onMouseEnter: i, onMouseLeave: o } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, a.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: l,
            "aria-label": G.intl.string(G.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) => {
                let t =
                    null != e.application.icon
                        ? F.Ay.getApplicationIconURL({ id: e.application.id, icon: e.application.icon, size: 32 })
                        : void 0;
                return (0, a.jsx)(
                    M.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                        color: e.applicationId === n ? "brand" : "default",
                        trailingIndicator: n === e.applicationId ? { type: "icon", icon: v.U } : void 0,
                        action: () => {
                            ((0, d.pX)(z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l());
                        },
                    },
                    e.applicationId,
                );
            }),
        }),
    });
}
function q(e) {
    let t,
        n,
        i,
        { selectedApplicationId: r, className: c } = e,
        d = l.useRef(null),
        { isHovered: u, setIsHovered: C, onMouseEnter: E, onMouseLeave: L, cancelTimers: S } = (0, w.A)(100, 100),
        x =
            ((t = (0, s.yK)([p.A], () =>
                (p.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (n = l.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, D.A)(n)),
            l.useEffect(() => {
                (0, V.Xw)();
            }, []),
            l.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        I = (0, s.bG)([U.A], () => U.A.getApplication(r)),
        f = l.useCallback(
            (e) => {
                (S(), C(e));
            },
            [S, C],
        ),
        g = l.useCallback(() => {
            f(!u);
        }, [u, f]);
    if (null == I)
        return (0, a.jsxs)("div", {
            className: o()(Y.hZ, Y.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: Y.wm }), (0, a.jsx)(B.a, { size: "xs", color: "currentColor" })],
        });
    let _ = null != I.icon ? F.Ay.getApplicationIconURL({ id: I.id, icon: I.icon, size: 32 }) : null;
    return (0, a.jsx)(P.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(X, { shops: x, currentApplicationId: r, onClose: t, onMouseEnter: E, onMouseLeave: L });
        },
        children: (e) => {
            let t = u ? H.t : B.a;
            return (0, a.jsxs)(A.D, {
                ...e,
                innerRef: d,
                onClick: g,
                onMouseLeave: L,
                className: o()(Y.hZ, c),
                "aria-label": I.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != _ && (0, a.jsx)("img", { className: Y.wm, src: _, alt: "" }),
                    (0, a.jsx)(m.E, { variant: "text-md/medium", color: "text-default", children: I.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var W = n(995393),
    Z = n(518477),
    J = n(709514);
function Q(e) {
    let { content: t, onClick: n, ariaLabel: l } = e;
    return (0, a.jsx)(A.D, { className: J.gb, onClick: n, "aria-label": l, children: t });
}
function K() {
    let e = l.useCallback(() => {
        (0, d.pX)(z.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(A.D, {
        className: J.Ak,
        onClick: e,
        "aria-label": G.intl.string(G.t["5upuqx"]),
        children: (0, a.jsx)(L.U, { size: "md", color: S.A.colors.TEXT_DEFAULT }),
    });
}
function $() {
    let e = (0, s.bG)([T.default], () => T.default.getCurrentUser()),
        t = l.useCallback(() => {
            e?.id != null &&
                (0, O.openUserProfileModal)({
                    userId: e.id,
                    tabSection: Z.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(x.HeartIcon, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: G.intl.string(G.t["7lZ31J"]),
    });
}
function ee() {
    let e = l.useCallback(() => {
        ((0, h.Y)({
            pageType: z.liQ.COLLECTIBLES_SHOP,
            sectionType: z.JJy.ORBS_BALANCE_MENU,
            ctaObject: z.ZSU.CTA_TO_QUEST_HOME,
        }),
            (0, j.mA)({ fromContent: E.u.ORBS_BALANCE_MENU }));
    }, []);
    return (0, a.jsx)(b.SS, {
        analyticsPage: z.liQ.COLLECTIBLES_SHOP,
        cardAlignment: b.SS.CardAlignment.END,
        ctaText: G.intl.string(G.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function et() {
    let e = (0, u.jM)(),
        { analyticsLocations: t } = (0, g.Ay)(),
        n = l.useCallback(() => {
            (k.default.track(z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: W.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(N.A.getArticleURL(z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer"));
        }, [e, t]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(I.CircleInformationIcon, { size: "xs", color: "currentColor" }),
        onClick: n,
        ariaLabel: G.intl.string(G.t.hvVgAZ),
    });
}
function en(e) {
    let { storefront: t, selectedPageIndex: n } = e;
    return null == t
        ? null
        : (0, a.jsxs)(_.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: J.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(et, {})],
              }),
              children: [
                  (0, a.jsx)(K, {}),
                  (0, a.jsx)("div", { className: J.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(q, { selectedApplicationId: t.applicationId, className: J.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: J.YC,
                          children: t.pages.map((e, l) =>
                              (0, a.jsx)(
                                  _.A.Title,
                                  {
                                      onClick: () => {
                                          (0, d.pX)(
                                              z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: J.oB,
                                      className: o()(J.xT, { [J.ys]: n === l }),
                                      children: (0, a.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          children: (0, R.A)(e.title),
                                      }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var ea = n(901123),
    el = n(537067);
function ei(e) {
    let { applicationId: t, pageIndex: n, skuId: i } = e,
        { guildId: E, configFetchState: A } = (0, s.cf)([p.A], () => ({
            guildId: p.A.getGuildIdFromApplicationId(t),
            configFetchState: p.A.getConfigFetchState(),
        })),
        L = (0, s.bG)([p.A], () => p.A.getStorefrontDataForApplicationId(t)),
        S = null != n ? parseInt(n, 10) : 0;
    (l.useEffect(() => {
        (0, c.I)(ea.BV.COLLECTIBLES_SHOP);
    }, []),
        l.useEffect(() => {
            "idle" !== A.state && "loading" !== A.state && L?.state === "error" && (0, d.pX)(ea.BV.COLLECTIBLES_SHOP);
        }, [A.state, L?.state]));
    let x = l.useCallback((e, t) => (0, a.jsx)(en, { storefront: t, selectedPageIndex: e }), []),
        I = l.useCallback((e, n, a) => ea.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, n, a), [t]);
    return null == t || "success" !== A.state
        ? (0, a.jsx)("div", { className: o()(el.u1, el.kL, el.gI), children: (0, a.jsx)(r.y, {}) })
        : (0, a.jsx)(C.SocialLayerStorefrontInnerWrapper, {
              applicationId: t,
              guildId: E,
              skuId: i,
              pageIndex: S,
              analyticsPlacement: u.Ye.COLLECTIBLES_SHOP,
              renderHeader: x,
              getSocialLayerStorefrontLink: I,
          });
}
