n.r(t), n.d(t, { default: () => ei });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(289873),
    r = n(17928),
    c = n(944791),
    d = n(976860),
    u = n(832163),
    p = n(651009),
    C = n(696292),
    A = n(939249),
    E = n(34188),
    L = n(661531),
    x = n(926268),
    S = n(885574),
    f = n(834730),
    m = n(793574),
    _ = n(688810),
    I = n(742589),
    g = n(617986),
    j = n(975732),
    h = n(318346),
    O = n(371446),
    b = n(70926),
    k = n(287809),
    T = n(174459),
    N = n(975571),
    R = n(439303),
    y = n(980707),
    M = n(477782),
    v = n(478016),
    B = n(847374),
    P = n(922016),
    H = n(900797),
    U = n(587895),
    w = n(421773),
    F = n(486020),
    D = n(429913),
    V = n(733391),
    z = n(652215),
    G = n(375708),
    Y = n(583144);
function X(e) {
    let { shops: t, currentApplicationId: n, onClose: l, onMouseEnter: i, onMouseLeave: s } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: s,
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
                            (0, d.pX)(z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l();
                        },
                    },
                    e.applicationId,
                );
            }),
        }),
    });
}
function Z(e) {
    let t,
        n,
        i,
        { selectedApplicationId: o, className: c } = e,
        d = l.useRef(null),
        { isHovered: p, setIsHovered: C, onMouseEnter: E, onMouseLeave: L, cancelTimers: x } = (0, w.A)(100, 100),
        S =
            ((t = (0, r.yK)([u.A], () =>
                (u.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
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
        m = (0, r.bG)([U.A], () => U.A.getApplication(o)),
        _ = l.useCallback(
            (e) => {
                x(), C(e);
            },
            [x, C],
        ),
        I = l.useCallback(() => {
            _(!p);
        }, [p, _]);
    if (null == m)
        return (0, a.jsxs)("div", {
            className: s()(Y.hZ, Y.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: Y.wm }), (0, a.jsx)(B.a, { size: "xs", color: "currentColor" })],
        });
    let g = null != m.icon ? F.Ay.getApplicationIconURL({ id: m.id, icon: m.icon, size: 32 }) : null;
    return (0, a.jsx)(P.Y, {
        targetElementRef: d,
        shouldShow: p,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => _(!0),
        onRequestClose: () => _(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(X, { shops: S, currentApplicationId: o, onClose: t, onMouseEnter: E, onMouseLeave: L });
        },
        children: (e) => {
            let t = p ? H.t : B.a;
            return (0, a.jsxs)(A.D, {
                ...e,
                innerRef: d,
                onClick: I,
                onMouseLeave: L,
                className: s()(Y.hZ, c),
                "aria-label": m.name,
                "aria-haspopup": "menu",
                "aria-expanded": p,
                children: [
                    null != g && (0, a.jsx)("img", { className: Y.wm, src: g, alt: "" }),
                    (0, a.jsx)(f.E, { variant: "text-md/medium", color: "text-default", children: m.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var q = n(995393),
    W = n(518477),
    J = n(951259);
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
        children: (0, a.jsx)(E.U, { size: "md", color: L.A.colors.TEXT_DEFAULT }),
    });
}
function $() {
    let e = (0, r.bG)([k.default], () => k.default.getCurrentUser()),
        t = l.useCallback(() => {
            e?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: e.id,
                    tabSection: W.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(x.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: G.intl.string(G.t["7lZ31J"]),
    });
}
function ee() {
    let { enabled: e } = (0, O.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = l.useCallback(() => {
            (0, h.Y)({
                pageType: z.liQ.COLLECTIBLES_SHOP,
                sectionType: z.JJy.ORBS_BALANCE_MENU,
                ctaObject: z.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, g.mA)({ fromContent: C.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, a.jsx)(b.SS, {
              analyticsPage: z.liQ.COLLECTIBLES_SHOP,
              cardAlignment: b.SS.CardAlignment.END,
              ctaText: G.intl.string(G.t.VC4Mq0),
              ctaOnClick: t,
          })
        : null;
}
function et() {
    let e = (0, R.jM)(),
        { analyticsLocations: t } = (0, _.Ay)(),
        n = l.useCallback(() => {
            T.default.track(z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: q.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(N.A.getArticleURL(z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, a.jsx)(Q, {
        content: (0, a.jsx)(S.m, { size: "xs", color: "currentColor" }),
        onClick: n,
        ariaLabel: G.intl.string(G.t.hvVgAZ),
    });
}
function en(e) {
    let { storefront: t, selectedPageIndex: n } = e;
    return null == t
        ? null
        : (0, a.jsxs)(I.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: J.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(et, {})],
              }),
              children: [
                  (0, a.jsx)(K, {}),
                  (0, a.jsx)("div", { className: J.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(Z, { selectedApplicationId: t.applicationId, className: J.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: J.YC,
                          children: t.pages.map((e, l) =>
                              (0, a.jsx)(
                                  I.A.Title,
                                  {
                                      onClick: () => {
                                          (0, d.pX)(
                                              z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: J.oB,
                                      className: s()(J.xT, { [J.ys]: n === l }),
                                      children: (0, a.jsx)(f.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var ea = n(901123),
    el = n(253004);
function ei(e) {
    let { applicationId: t, pageIndex: n, skuId: i } = e,
        { guildId: C, configFetchState: A } = (0, r.cf)([u.A], () => ({
            guildId: u.A.getGuildIdFromApplicationId(t),
            configFetchState: u.A.getConfigFetchState(),
        })),
        E = (0, r.bG)([u.A], () => u.A.getStorefrontDataForApplicationId(t)),
        L = null != n ? parseInt(n, 10) : 0;
    l.useEffect(() => {
        (0, c.I)(ea.BV.COLLECTIBLES_SHOP);
    }, []),
        l.useEffect(() => {
            "idle" !== A.state && "loading" !== A.state && E?.state === "error" && (0, d.pX)(ea.BV.COLLECTIBLES_SHOP);
        }, [A.state, E?.state]);
    let x = l.useCallback((e, t) => (0, a.jsx)(en, { storefront: t, selectedPageIndex: e }), []),
        S = l.useCallback((e, n, a) => ea.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, n, a), [t]);
    return null == t || "success" !== A.state
        ? (0, a.jsx)("div", { className: s()(el.u1, el.kL), children: (0, a.jsx)(o.y, {}) })
        : (0, a.jsx)(p.SocialLayerStorefrontInnerWrapper, {
              applicationId: t,
              guildId: C,
              skuId: i,
              pageIndex: L,
              renderHeader: x,
              getSocialLayerStorefrontLink: S,
          });
}
