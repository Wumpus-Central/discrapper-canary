n.r(t), n.d(t, { default: () => el });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(289873),
    r = n(17928),
    c = n(944791),
    d = n(976860),
    u = n(832163),
    p = n(8459),
    C = n(696292),
    A = n(939249),
    E = n(34188),
    L = n(661531),
    x = n(926268),
    S = n(885574),
    m = n(834730),
    f = n(793574),
    I = n(688810),
    g = n(742589),
    _ = n(617986),
    j = n(975732),
    h = n(318346),
    O = n(70926),
    b = n(287809),
    k = n(174459),
    T = n(975571),
    N = n(439303),
    R = n(980707),
    M = n(477782),
    v = n(478016),
    y = n(847374),
    B = n(922016),
    P = n(900797),
    H = n(587895),
    U = n(421773),
    w = n(486020),
    F = n(429913),
    D = n(733391),
    V = n(652215),
    z = n(375708),
    G = n(583144);
function Y(e) {
    let { shops: t, currentApplicationId: n, onClose: l, onMouseEnter: i, onMouseLeave: s } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: s,
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
                    M.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                        color: e.applicationId === n ? "brand" : "default",
                        trailingIndicator: n === e.applicationId ? { type: "icon", icon: v.U } : void 0,
                        action: () => {
                            (0, d.pX)(V.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l();
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
        { selectedApplicationId: o, className: c } = e,
        d = l.useRef(null),
        { isHovered: p, setIsHovered: C, onMouseEnter: E, onMouseLeave: L, cancelTimers: x } = (0, U.A)(100, 100),
        S =
            ((t = (0, r.yK)([u.A], () =>
                (u.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
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
        f = (0, r.bG)([H.A], () => H.A.getApplication(o)),
        I = l.useCallback(
            (e) => {
                x(), C(e);
            },
            [x, C],
        ),
        g = l.useCallback(() => {
            I(!p);
        }, [p, I]);
    if (null == f)
        return (0, a.jsxs)("div", {
            className: s()(G.hZ, G.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: G.wm }), (0, a.jsx)(y.a, { size: "xs", color: "currentColor" })],
        });
    let _ = null != f.icon ? w.Ay.getApplicationIconURL({ id: f.id, icon: f.icon, size: 32 }) : null;
    return (0, a.jsx)(B.Y, {
        targetElementRef: d,
        shouldShow: p,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => I(!0),
        onRequestClose: () => I(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(Y, { shops: S, currentApplicationId: o, onClose: t, onMouseEnter: E, onMouseLeave: L });
        },
        children: (e) => {
            let t = p ? P.t : y.a;
            return (0, a.jsxs)(A.D, {
                ...e,
                innerRef: d,
                onClick: g,
                onMouseLeave: L,
                className: s()(G.hZ, c),
                "aria-label": f.name,
                "aria-haspopup": "menu",
                "aria-expanded": p,
                children: [
                    null != _ && (0, a.jsx)("img", { className: G.wm, src: _, alt: "" }),
                    (0, a.jsx)(m.E, { variant: "text-md/medium", color: "text-default", children: f.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var q = n(995393),
    W = n(518477),
    Z = n(951259);
function J(e) {
    let { content: t, onClick: n, ariaLabel: l } = e;
    return (0, a.jsx)(A.D, { className: Z.gb, onClick: n, "aria-label": l, children: t });
}
function Q() {
    let e = l.useCallback(() => {
        (0, d.pX)(V.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(A.D, {
        className: Z.Ak,
        onClick: e,
        "aria-label": z.intl.string(z.t["5upuqx"]),
        children: (0, a.jsx)(E.U, { size: "md", color: L.A.colors.TEXT_DEFAULT }),
    });
}
function K() {
    let e = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        t = l.useCallback(() => {
            e?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: e.id,
                    tabSection: W.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(J, {
        content: (0, a.jsx)(x.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: z.intl.string(z.t["7lZ31J"]),
    });
}
function $() {
    let e = l.useCallback(() => {
        (0, h.Y)({
            pageType: V.liQ.COLLECTIBLES_SHOP,
            sectionType: V.JJy.ORBS_BALANCE_MENU,
            ctaObject: V.ZSU.CTA_TO_QUEST_HOME,
        }),
            (0, _.mA)({ fromContent: C.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, a.jsx)(O.SS, {
        analyticsPage: V.liQ.COLLECTIBLES_SHOP,
        cardAlignment: O.SS.CardAlignment.END,
        ctaText: z.intl.string(z.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function ee() {
    let e = (0, N.jM)(),
        { analyticsLocations: t } = (0, I.Ay)(),
        n = l.useCallback(() => {
            k.default.track(V.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: q.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(T.A.getArticleURL(V.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, a.jsx)(J, {
        content: (0, a.jsx)(S.m, { size: "xs", color: "currentColor" }),
        onClick: n,
        ariaLabel: z.intl.string(z.t.hvVgAZ),
    });
}
function et(e) {
    let { storefront: t, selectedPageIndex: n } = e;
    return null == t
        ? null
        : (0, a.jsxs)(g.A, {
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
                                  g.A.Title,
                                  {
                                      onClick: () => {
                                          (0, d.pX)(
                                              V.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: Z.oB,
                                      className: s()(Z.xT, { [Z.ys]: n === l }),
                                      children: (0, a.jsx)(m.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var en = n(901123),
    ea = n(253004);
function el(e) {
    let { applicationId: t, pageIndex: n, skuId: i } = e,
        { guildId: C, configFetchState: A } = (0, r.cf)([u.A], () => ({
            guildId: u.A.getGuildIdFromApplicationId(t),
            configFetchState: u.A.getConfigFetchState(),
        })),
        E = (0, r.bG)([u.A], () => u.A.getStorefrontDataForApplicationId(t)),
        L = null != n ? parseInt(n, 10) : 0;
    l.useEffect(() => {
        (0, c.I)(en.BV.COLLECTIBLES_SHOP);
    }, []),
        l.useEffect(() => {
            "idle" !== A.state && "loading" !== A.state && E?.state === "error" && (0, d.pX)(en.BV.COLLECTIBLES_SHOP);
        }, [A.state, E?.state]);
    let x = l.useCallback((e, t) => (0, a.jsx)(et, { storefront: t, selectedPageIndex: e }), []),
        S = l.useCallback((e, n, a) => en.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, n, a), [t]);
    return null == t || "success" !== A.state
        ? (0, a.jsx)("div", { className: s()(ea.u1, ea.kL), children: (0, a.jsx)(o.y, {}) })
        : (0, a.jsx)(p.SocialLayerStorefrontInnerWrapper, {
              applicationId: t,
              guildId: C,
              skuId: i,
              pageIndex: L,
              renderHeader: x,
              getSocialLayerStorefrontLink: S,
          });
}
