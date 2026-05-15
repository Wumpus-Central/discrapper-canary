l.r(t), l.d(t, { default: () => er });
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(289873),
    o = l(17928),
    c = l(944791),
    d = l(710195),
    u = l(976860),
    p = l(495544),
    C = l(832163),
    S = l(81341),
    f = l(44724),
    x = l(865949),
    E = l(696292),
    L = l(939249),
    A = l(34188),
    _ = l(661531),
    m = l(926268),
    I = l(885574),
    g = l(834730),
    j = l(793574),
    h = l(688810),
    O = l(742589),
    b = l(617986),
    N = l(975732),
    T = l(318346),
    k = l(371446),
    R = l(70926),
    B = l(287809),
    P = l(174459),
    v = l(975571),
    y = l(439303),
    H = l(980707),
    M = l(477782),
    w = l(847374),
    F = l(922016),
    U = l(900797),
    G = l(486020),
    V = l(429913),
    D = l(733391),
    z = l(652215),
    Y = l(375708),
    W = l(583144);
function X(e) {
    let { shops: t, currentApplicationId: l, onClose: n } = e;
    return (0, a.jsx)(H.W, {
        "data-menu-migrated": !0,
        navId: "slayer-storefront-shop-dropdown",
        onClose: n,
        "aria-label": Y.intl.string(Y.t.FkjcWY),
        onSelect: () => {},
        children: t.map((e) =>
            (0, a.jsx)(
                M.Dr,
                {
                    id: e.applicationId,
                    label: e.application.name,
                    color: e.applicationId === l ? "brand" : "default",
                    action: () => {
                        (0, u.pX)(z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), n();
                    },
                },
                e.applicationId,
            ),
        ),
    });
}
function Z(e) {
    let t,
        l,
        i,
        { selectedApplicationId: r, className: c } = e,
        d = n.useRef(null),
        [u, p] = n.useState(!1),
        S =
            ((t = (0, o.yK)([C.A], () =>
                (C.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (l = n.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, V.A)(l)),
            n.useEffect(() => {
                (0, D.Xw)();
            }, []),
            n.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        f = S.find((e) => e.applicationId === r)?.application,
        x = n.useCallback(() => {
            p((e) => !e);
        }, []);
    if (null == f)
        return (0, a.jsxs)("div", {
            className: s()(W.hZ, W.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: W.wm }), (0, a.jsx)(w.a, { size: "xs", color: "currentColor" })],
        });
    let E = null != f.icon ? G.Ay.getApplicationIconURL({ id: f.id, icon: f.icon, size: 32 }) : null;
    return (0, a.jsx)(F.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(X, { shops: S, currentApplicationId: r, onClose: t });
        },
        children: (e) => {
            let t = u ? U.t : w.a;
            return (0, a.jsxs)(L.D, {
                ...e,
                innerRef: d,
                onClick: x,
                className: s()(W.hZ, c),
                "aria-label": f.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != E && (0, a.jsx)("img", { className: W.wm, src: E, alt: "" }),
                    (0, a.jsx)(g.E, { variant: "text-md/medium", color: "text-default", children: f.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var q = l(995393),
    Q = l(518477),
    J = l(951259);
function K(e) {
    let { content: t, onClick: l, ariaLabel: n } = e;
    return (0, a.jsx)(L.D, { className: J.gb, onClick: l, "aria-label": n, children: t });
}
function $() {
    let e = n.useCallback(() => {
        (0, u.pX)(z.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(L.D, {
        className: J.Ak,
        onClick: e,
        "aria-label": Y.intl.string(Y.t["5upuqx"]),
        children: (0, a.jsx)(A.U, { size: "md", color: _.A.colors.TEXT_DEFAULT }),
    });
}
function ee() {
    let e = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        t = n.useCallback(() => {
            e?.id != null &&
                (0, N.openUserProfileModal)({
                    userId: e.id,
                    tabSection: Q.RP.WISHLIST,
                    sourceAnalyticsLocations: [j.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(K, {
        content: (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: Y.intl.string(Y.t["7lZ31J"]),
    });
}
function et() {
    let { enabled: e } = (0, k.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = n.useCallback(() => {
            (0, T.Y)({
                pageType: z.liQ.COLLECTIBLES_SHOP,
                sectionType: z.JJy.ORBS_BALANCE_MENU,
                ctaObject: z.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, b.navigateToQuestHome)({ fromContent: E.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, a.jsx)(R.SS, {
              analyticsPage: z.liQ.COLLECTIBLES_SHOP,
              cardAlignment: R.SS.CardAlignment.END,
              ctaText: Y.intl.string(Y.t.VC4Mq0),
              ctaOnClick: t,
          })
        : null;
}
function el() {
    let e = (0, y.jM)(),
        { analyticsLocations: t } = (0, h.Ay)(),
        l = n.useCallback(() => {
            P.default.track(z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: q.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(v.A.getArticleURL(z.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, a.jsx)(K, {
        content: (0, a.jsx)(I.m, { size: "xs", color: "currentColor" }),
        onClick: l,
        ariaLabel: Y.intl.string(Y.t.hvVgAZ),
    });
}
function ea(e) {
    let { storefront: t, selectedPageIndex: l } = e;
    return null == t
        ? null
        : (0, a.jsxs)(O.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: J.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(ee, {}), (0, a.jsx)(et, {}), (0, a.jsx)(el, {})],
              }),
              children: [
                  (0, a.jsx)($, {}),
                  (0, a.jsx)("div", { className: J.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(Z, { selectedApplicationId: t.applicationId, className: J.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: J.YC,
                          children: t.pages.map((e, n) =>
                              (0, a.jsx)(
                                  O.A.Title,
                                  {
                                      onClick: () => {
                                          (0, u.pX)(
                                              z.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, n > 0 ? n : void 0),
                                          );
                                      },
                                      wrapperClassName: J.oB,
                                      className: s()(J.xT, { [J.ys]: l === n }),
                                      children: (0, a.jsx)(g.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${n}`,
                              ),
                          ),
                      }),
              ],
          });
}
var en = l(964395),
    ei = l(901123),
    es = l(253004);
function er(e) {
    let { applicationId: t, pageIndex: l, skuId: i, slug: E } = e,
        { guildId: L, configFetchState: A } = (0, o.cf)([C.A], () => ({
            guildId: C.A.getGuildIdFromApplicationId(t),
            configFetchState: C.A.getConfigFetchState(),
        })),
        _ = (0, o.bG)([p.default], () => p.default.getId()),
        m = (0, o.bG)([d.A], () => d.A.hasLoaded(_)),
        I = (0, S.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        g = null != l ? parseInt(l, 10) : 0;
    n.useEffect(() => {
        (0, c.I)(ei.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, isNaN(g) ? void 0 : g, i, E));
    }, [t, g, i, E]),
        n.useEffect(() => {
            m &&
                "idle" !== A.state &&
                "loading" !== A.state &&
                (I ||
                    null == L ||
                    (0, f.default)({
                        guildId: L,
                        skuId: i ?? void 0,
                        pageIndex: isNaN(g) ? void 0 : g,
                        slug: E ?? void 0,
                    }),
                null == L && (0, u.pX)(ei.BV.COLLECTIBLES_SHOP));
        }, [I, L, m, A.state, i, g, E]);
    let j = n.useCallback(
            (e, t) =>
                I
                    ? (0, a.jsx)(ea, { storefront: t, selectedPageIndex: e })
                    : null == L
                      ? null
                      : (0, a.jsx)(en.A, { guildId: L, storefront: t, selectedPageIndex: e }),
            [L, I],
        ),
        h = n.useCallback((e, l, a) => ei.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, l, a), [t]);
    return null != L && m && I && "success" === A.state
        ? (0, a.jsx)(x.SocialLayerStorefrontInnerWrapper, {
              guildId: L,
              skuId: i,
              pageIndex: g,
              renderHeader: j,
              getSocialLayerStorefrontLink: h,
          })
        : (0, a.jsx)("div", { className: s()(es.u, es.k), children: (0, a.jsx)(r.y, {}) });
}
