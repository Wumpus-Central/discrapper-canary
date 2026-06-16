a.r(t), a.d(t, { default: () => ed });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    o = a.n(i),
    s = a(289873),
    r = a(17928),
    c = a(944791),
    d = a(710195),
    u = a(976860),
    p = a(495544),
    C = a(619921),
    L = a(832163),
    A = a(81341),
    S = a(44724),
    E = a(52301),
    f = a(696292),
    x = a(939249),
    g = a(34188),
    I = a(661531),
    m = a(926268),
    _ = a(885574),
    h = a(834730),
    j = a(793574),
    O = a(688810),
    b = a(742589),
    T = a(617986),
    k = a(975732),
    v = a(318346),
    N = a(371446),
    y = a(70926),
    M = a(287809),
    R = a(174459),
    B = a(975571),
    P = a(439303),
    H = a(980707),
    w = a(477782),
    G = a(478016),
    U = a(847374),
    F = a(922016),
    V = a(900797),
    D = a(587895),
    z = a(421773),
    W = a(486020),
    Y = a(429913),
    X = a(733391),
    Z = a(652215),
    q = a(375708),
    Q = a(583144);
function J(e) {
    let { shops: t, currentApplicationId: a, onClose: l, onMouseEnter: i, onMouseLeave: o } = e;
    return (0, n.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, n.jsx)(H.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: l,
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
                        color: e.applicationId === a ? "brand" : "default",
                        trailingIndicator: a === e.applicationId ? { type: "icon", icon: G.U } : void 0,
                        action: () => {
                            (0, u.pX)(Z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), l();
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
        a,
        i,
        { selectedApplicationId: s, className: c } = e,
        d = l.useRef(null),
        { isHovered: u, setIsHovered: p, onMouseEnter: C, onMouseLeave: A, cancelTimers: S } = (0, z.A)(100, 100),
        E =
            ((t = (0, r.yK)([L.A], () =>
                (L.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (a = l.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, Y.A)(a)),
            l.useEffect(() => {
                (0, X.Xw)();
            }, []),
            l.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        f = (0, r.bG)([D.A], () => D.A.getApplication(s)),
        g = l.useCallback(
            (e) => {
                S(), p(e);
            },
            [S, p],
        ),
        I = l.useCallback(() => {
            g(!u);
        }, [u, g]);
    if (null == f)
        return (0, n.jsxs)("div", {
            className: o()(Q.hZ, Q.qf, c),
            "aria-hidden": "true",
            children: [(0, n.jsx)("span", { className: Q.wm }), (0, n.jsx)(U.a, { size: "xs", color: "currentColor" })],
        });
    let m = null != f.icon ? W.Ay.getApplicationIconURL({ id: f.id, icon: f.icon, size: 32 }) : null;
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
            return (0, n.jsx)(J, { shops: E, currentApplicationId: s, onClose: t, onMouseEnter: C, onMouseLeave: A });
        },
        children: (e) => {
            let t = u ? V.t : U.a;
            return (0, n.jsxs)(x.D, {
                ...e,
                innerRef: d,
                onClick: I,
                onMouseLeave: A,
                className: o()(Q.hZ, c),
                "aria-label": f.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != m && (0, n.jsx)("img", { className: Q.wm, src: m, alt: "" }),
                    (0, n.jsx)(h.E, { variant: "text-md/medium", color: "text-default", children: f.name }),
                    (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var $ = a(995393),
    ee = a(518477),
    et = a(951259);
function ea(e) {
    let { content: t, onClick: a, ariaLabel: l } = e;
    return (0, n.jsx)(x.D, { className: et.gb, onClick: a, "aria-label": l, children: t });
}
function en() {
    let e = l.useCallback(() => {
        (0, u.pX)(Z.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, n.jsx)(x.D, {
        className: et.Ak,
        onClick: e,
        "aria-label": q.intl.string(q.t["5upuqx"]),
        children: (0, n.jsx)(g.U, { size: "md", color: I.A.colors.TEXT_DEFAULT }),
    });
}
function el() {
    let e = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
        t = l.useCallback(() => {
            e?.id != null &&
                (0, k.openUserProfileModal)({
                    userId: e.id,
                    tabSection: ee.RP.WISHLIST,
                    sourceAnalyticsLocations: [j.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, n.jsx)(ea, {
        content: (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: q.intl.string(q.t["7lZ31J"]),
    });
}
function ei() {
    let { enabled: e } = (0, N.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = l.useCallback(() => {
            (0, v.Y)({
                pageType: Z.liQ.COLLECTIBLES_SHOP,
                sectionType: Z.JJy.ORBS_BALANCE_MENU,
                ctaObject: Z.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, T.navigateToQuestHome)({ fromContent: f.u.ORBS_BALANCE_MENU });
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
        a = l.useCallback(() => {
            R.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: $.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, n.jsx)(ea, {
        content: (0, n.jsx)(_.m, { size: "xs", color: "currentColor" }),
        onClick: a,
        ariaLabel: q.intl.string(q.t.hvVgAZ),
    });
}
function es(e) {
    let { storefront: t, selectedPageIndex: a } = e;
    return null == t
        ? null
        : (0, n.jsxs)(b.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: et.N1,
              toolbar: (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(el, {}), (0, n.jsx)(ei, {}), (0, n.jsx)(eo, {})],
              }),
              children: [
                  (0, n.jsx)(en, {}),
                  (0, n.jsx)("div", { className: et.yF, "aria-hidden": "true" }),
                  (0, n.jsx)(K, { selectedApplicationId: t.applicationId, className: et.Wm }),
                  t.pages.length > 1 &&
                      (0, n.jsx)("div", {
                          className: et.YC,
                          children: t.pages.map((e, l) =>
                              (0, n.jsx)(
                                  b.A.Title,
                                  {
                                      onClick: () => {
                                          (0, u.pX)(
                                              Z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, l > 0 ? l : void 0),
                                          );
                                      },
                                      wrapperClassName: et.oB,
                                      className: o()(et.xT, { [et.ys]: a === l }),
                                      children: (0, n.jsx)(h.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      }),
              ],
          });
}
var er = a(901123),
    ec = a(253004);
function ed(e) {
    let { applicationId: t, pageIndex: a, skuId: i, slug: f } = e,
        { guildId: x, configFetchState: g } = (0, r.cf)([L.A], () => ({
            guildId: L.A.getGuildIdFromApplicationId(t),
            configFetchState: L.A.getConfigFetchState(),
        })),
        I = (0, r.bG)([L.A], () => L.A.getStorefrontDataForApplicationId(t)),
        m = (0, r.bG)([p.default], () => p.default.getId()),
        _ = (0, r.bG)([d.A], () => d.A.hasLoaded(m)),
        h = (0, A.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        j = null != a ? parseInt(a, 10) : 0;
    l.useEffect(() => {
        (C.A.getHomeLink()?.startsWith(er.BV.COLLECTIBLES_SHOP_GAME_SHOP("")) || h) &&
            (0, c.I)(er.BV.COLLECTIBLES_SHOP);
    }, [t, j, i, f, h]),
        l.useEffect(() => {
            if (_ && "idle" !== g.state && "loading" !== g.state) {
                if (!h && null != x)
                    return void (0, S.navigateToSocialLayerStorefrontWithGuildPreview)({
                        guildId: x,
                        skuId: i ?? void 0,
                        pageIndex: isNaN(j) ? void 0 : j,
                        slug: f ?? void 0,
                    });
                (I?.state !== "error" && h) || (0, u.pX)(er.BV.COLLECTIBLES_SHOP);
            }
        }, [h, x, _, g.state, i, j, f, I?.state]);
    let O = l.useCallback((e, t) => (0, n.jsx)(es, { storefront: t, selectedPageIndex: e }), []),
        b = l.useCallback((e, a, n) => er.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, a, n), [t]);
    return null != t && _ && h && "success" === g.state
        ? (0, n.jsx)(E.SocialLayerStorefrontInnerWrapper, {
              applicationId: t,
              guildId: x,
              skuId: i,
              pageIndex: j,
              renderHeader: O,
              getSocialLayerStorefrontLink: b,
          })
        : (0, n.jsx)("div", { className: o()(ec.u1, ec.kL), children: (0, n.jsx)(s.y, {}) });
}
