(n.r(t), n.d(t, { default: () => el }));
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
    C = n(747119),
    E = n(696292),
    L = n(939249),
    A = n(34188),
    S = n(661531),
    x = n(926268),
    m = n(885574),
    I = n(834730),
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
    R = n(980707),
    y = n(477782),
    M = n(478016),
    v = n(847374),
    B = n(922016),
    P = n(900797),
    H = n(587895),
    U = n(421773),
    w = n(486020),
    F = n(429913),
    D = n(733391),
    V = n(652215),
    z = n(375708),
    G = n(348701);
function Y(e) {
    let { shops: t, currentApplicationId: n, onClose: l, onMouseEnter: i, onMouseLeave: o } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, a.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: l,
            "aria-label": z.intl.string(z.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) => {
                let t =
                    null != e.application.icon
                        ? w.Ay.getApplicationIconURL({ id: e.application.id, icon: e.application.icon, size: 32 })
                        : void 0;
                return (0, a.jsx)(
                    y.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                        color: e.applicationId === n ? "brand" : "default",
                        trailingIndicator: n === e.applicationId ? { type: "icon", icon: M.U } : void 0,
                        action: () => {
                            ((0, d.pX)(V.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l());
                        },
                    },
                    e.applicationId,
                );
            }),
        }),
    });
}
function X(e) {
    let t,
        n,
        i,
        { selectedApplicationId: r, className: c } = e,
        d = l.useRef(null),
        { isHovered: u, setIsHovered: C, onMouseEnter: E, onMouseLeave: A, cancelTimers: S } = (0, U.A)(100, 100),
        x =
            ((t = (0, s.yK)([p.A], () =>
                (p.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (n = l.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, F.A)(n)),
            l.useEffect(() => {
                (0, D.Xw)();
            }, []),
            l.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        m = (0, s.bG)([H.A], () => H.A.getApplication(r)),
        f = l.useCallback(
            (e) => {
                (S(), C(e));
            },
            [S, C],
        ),
        g = l.useCallback(() => {
            f(!u);
        }, [u, f]);
    if (null == m)
        return (0, a.jsxs)("div", {
            className: o()(G.hZ, G.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: G.wm }), (0, a.jsx)(v.a, { size: "xs", color: "currentColor" })],
        });
    let _ = null != m.icon ? w.Ay.getApplicationIconURL({ id: m.id, icon: m.icon, size: 32 }) : null;
    return (0, a.jsx)(B.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(Y, { shops: x, currentApplicationId: r, onClose: t, onMouseEnter: E, onMouseLeave: A });
        },
        children: (e) => {
            let t = u ? P.t : v.a;
            return (0, a.jsxs)(L.D, {
                ...e,
                innerRef: d,
                onClick: g,
                onMouseLeave: A,
                className: o()(G.hZ, c),
                "aria-label": m.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != _ && (0, a.jsx)("img", { className: G.wm, src: _, alt: "" }),
                    (0, a.jsx)(I.E, { variant: "text-md/medium", color: "text-default", children: m.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var q = n(995393),
    W = n(518477),
    Z = n(709514);
function J(e) {
    let { content: t, onClick: n, ariaLabel: l } = e;
    return (0, a.jsx)(L.D, { className: Z.gb, onClick: n, "aria-label": l, children: t });
}
function Q() {
    let e = l.useCallback(() => {
        (0, d.pX)(V.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(L.D, {
        className: Z.Ak,
        onClick: e,
        "aria-label": z.intl.string(z.t["5upuqx"]),
        children: (0, a.jsx)(A.U, { size: "md", color: S.A.colors.TEXT_DEFAULT }),
    });
}
function K() {
    let e = (0, s.bG)([T.default], () => T.default.getCurrentUser()),
        t = l.useCallback(() => {
            e?.id != null &&
                (0, O.openUserProfileModal)({
                    userId: e.id,
                    tabSection: W.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(J, {
        content: (0, a.jsx)(x.HeartIcon, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: z.intl.string(z.t["7lZ31J"]),
    });
}
function $() {
    let e = l.useCallback(() => {
        ((0, h.Y)({
            pageType: V.liQ.COLLECTIBLES_SHOP,
            sectionType: V.JJy.ORBS_BALANCE_MENU,
            ctaObject: V.ZSU.CTA_TO_QUEST_HOME,
        }),
            (0, j.mA)({ fromContent: E.u.ORBS_BALANCE_MENU }));
    }, []);
    return (0, a.jsx)(b.SS, {
        analyticsPage: V.liQ.COLLECTIBLES_SHOP,
        cardAlignment: b.SS.CardAlignment.END,
        ctaText: z.intl.string(z.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function ee() {
    let e = (0, u.jM)(),
        { analyticsLocations: t } = (0, g.Ay)(),
        n = l.useCallback(() => {
            (k.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: q.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(N.A.getArticleURL(V.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer"));
        }, [e, t]);
    return (0, a.jsx)(J, {
        content: (0, a.jsx)(m.CircleInformationIcon, { size: "xs", color: "currentColor" }),
        onClick: n,
        ariaLabel: z.intl.string(z.t.hvVgAZ),
    });
}
function et(e) {
    let { storefront: t, selectedPageIndex: n } = e;
    return null == t
        ? null
        : (0, a.jsxs)(_.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: Z.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(K, {}), (0, a.jsx)($, {}), (0, a.jsx)(ee, {})],
              }),
              children: [
                  (0, a.jsx)(Q, {}),
                  (0, a.jsx)("div", { className: Z.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(X, { selectedApplicationId: t.applicationId, className: Z.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: Z.YC,
                          children: t.pages.map((e, l) =>
                              (0, a.jsx)(
                                  _.A.Title,
                                  {
                                      onClick: () => {
                                          (0, d.pX)(
                                              V.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: Z.oB,
                                      className: o()(Z.xT, { [Z.ys]: n === l }),
                                      children: (0, a.jsx)(I.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var en = n(901123),
    ea = n(537067);
function el(e) {
    let { applicationId: t, pageIndex: n, skuId: i } = e,
        { guildId: E, configFetchState: L } = (0, s.cf)([p.A], () => ({
            guildId: p.A.getGuildIdFromApplicationId(t),
            configFetchState: p.A.getConfigFetchState(),
        })),
        A = (0, s.bG)([p.A], () => p.A.getStorefrontDataForApplicationId(t)),
        S = null != n ? parseInt(n, 10) : 0;
    (l.useEffect(() => {
        (0, c.I)(en.BV.COLLECTIBLES_SHOP);
    }, []),
        l.useEffect(() => {
            "idle" !== L.state && "loading" !== L.state && A?.state === "error" && (0, d.pX)(en.BV.COLLECTIBLES_SHOP);
        }, [L.state, A?.state]));
    let x = l.useCallback((e, t) => (0, a.jsx)(et, { storefront: t, selectedPageIndex: e }), []),
        m = l.useCallback((e, n, a) => en.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, n, a), [t]);
    return null == t || "success" !== L.state
        ? (0, a.jsx)("div", { className: o()(ea.u1, ea.kL), children: (0, a.jsx)(r.y, {}) })
        : (0, a.jsx)(C.SocialLayerStorefrontInnerWrapper, {
              applicationId: t,
              guildId: E,
              skuId: i,
              pageIndex: S,
              analyticsPlacement: u.Ye.COLLECTIBLES_SHOP,
              renderHeader: x,
              getSocialLayerStorefrontLink: m,
          });
}
