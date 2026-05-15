l.r(t), l.d(t, { default: () => eo });
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
    C = l(619921),
    S = l(832163),
    E = l(81341),
    f = l(44724),
    x = l(865949),
    L = l(696292),
    _ = l(939249),
    A = l(34188),
    I = l(661531),
    m = l(926268),
    g = l(885574),
    O = l(834730),
    h = l(793574),
    j = l(688810),
    b = l(742589),
    N = l(617986),
    T = l(975732),
    k = l(318346),
    B = l(371446),
    R = l(70926),
    P = l(287809),
    H = l(174459),
    v = l(975571),
    y = l(439303),
    M = l(980707),
    w = l(477782),
    F = l(847374),
    V = l(922016),
    G = l(900797),
    U = l(486020),
    D = l(429913),
    z = l(733391),
    W = l(652215),
    Y = l(375708),
    X = l(583144);
function Z(e) {
    let { shops: t, currentApplicationId: l, onClose: n } = e;
    return (0, a.jsx)(M.W, {
        "data-menu-migrated": !0,
        navId: "slayer-storefront-shop-dropdown",
        onClose: n,
        "aria-label": Y.intl.string(Y.t.FkjcWY),
        onSelect: () => {},
        children: t.map((e) =>
            (0, a.jsx)(
                w.Dr,
                {
                    id: e.applicationId,
                    label: e.application.name,
                    color: e.applicationId === l ? "brand" : "default",
                    action: () => {
                        (0, u.pX)(W.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), n();
                    },
                },
                e.applicationId,
            ),
        ),
    });
}
function q(e) {
    let t,
        l,
        i,
        { selectedApplicationId: r, className: c } = e,
        d = n.useRef(null),
        [u, p] = n.useState(!1),
        C =
            ((t = (0, o.yK)([S.A], () =>
                (S.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (l = n.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, D.A)(l)),
            n.useEffect(() => {
                (0, z.Xw)();
            }, []),
            n.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        E = C.find((e) => e.applicationId === r)?.application,
        f = n.useCallback(() => {
            p((e) => !e);
        }, []);
    if (null == E)
        return (0, a.jsxs)("div", {
            className: s()(X.hZ, X.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: X.wm }), (0, a.jsx)(F.a, { size: "xs", color: "currentColor" })],
        });
    let x = null != E.icon ? U.Ay.getApplicationIconURL({ id: E.id, icon: E.icon, size: 32 }) : null;
    return (0, a.jsx)(V.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(Z, { shops: C, currentApplicationId: r, onClose: t });
        },
        children: (e) => {
            let t = u ? G.t : F.a;
            return (0, a.jsxs)(_.D, {
                ...e,
                innerRef: d,
                onClick: f,
                className: s()(X.hZ, c),
                "aria-label": E.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != x && (0, a.jsx)("img", { className: X.wm, src: x, alt: "" }),
                    (0, a.jsx)(O.E, { variant: "text-md/medium", color: "text-default", children: E.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var Q = l(995393),
    J = l(518477),
    K = l(951259);
function $(e) {
    let { content: t, onClick: l, ariaLabel: n } = e;
    return (0, a.jsx)(_.D, { className: K.gb, onClick: l, "aria-label": n, children: t });
}
function ee() {
    let e = n.useCallback(() => {
        (0, u.pX)(W.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(_.D, {
        className: K.Ak,
        onClick: e,
        "aria-label": Y.intl.string(Y.t["5upuqx"]),
        children: (0, a.jsx)(A.U, { size: "md", color: I.A.colors.TEXT_DEFAULT }),
    });
}
function et() {
    let e = (0, o.bG)([P.default], () => P.default.getCurrentUser()),
        t = n.useCallback(() => {
            e?.id != null &&
                (0, T.openUserProfileModal)({
                    userId: e.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [h.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)($, {
        content: (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: Y.intl.string(Y.t["7lZ31J"]),
    });
}
function el() {
    let { enabled: e } = (0, B.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = n.useCallback(() => {
            (0, k.Y)({
                pageType: W.liQ.COLLECTIBLES_SHOP,
                sectionType: W.JJy.ORBS_BALANCE_MENU,
                ctaObject: W.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, N.navigateToQuestHome)({ fromContent: L.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, a.jsx)(R.SS, {
              analyticsPage: W.liQ.COLLECTIBLES_SHOP,
              cardAlignment: R.SS.CardAlignment.END,
              ctaText: Y.intl.string(Y.t.VC4Mq0),
              ctaOnClick: t,
          })
        : null;
}
function ea() {
    let e = (0, y.jM)(),
        { analyticsLocations: t } = (0, j.Ay)(),
        l = n.useCallback(() => {
            H.default.track(W.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: Q.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(v.A.getArticleURL(W.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, a.jsx)($, {
        content: (0, a.jsx)(g.m, { size: "xs", color: "currentColor" }),
        onClick: l,
        ariaLabel: Y.intl.string(Y.t.hvVgAZ),
    });
}
function en(e) {
    let { storefront: t, selectedPageIndex: l } = e;
    return null == t
        ? null
        : (0, a.jsxs)(b.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: K.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(et, {}), (0, a.jsx)(el, {}), (0, a.jsx)(ea, {})],
              }),
              children: [
                  (0, a.jsx)(ee, {}),
                  (0, a.jsx)("div", { className: K.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(q, { selectedApplicationId: t.applicationId, className: K.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: K.YC,
                          children: t.pages.map((e, n) =>
                              (0, a.jsx)(
                                  b.A.Title,
                                  {
                                      onClick: () => {
                                          (0, u.pX)(
                                              W.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, n > 0 ? n : void 0),
                                          );
                                      },
                                      wrapperClassName: K.oB,
                                      className: s()(K.xT, { [K.ys]: l === n }),
                                      children: (0, a.jsx)(O.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${n}`,
                              ),
                          ),
                      }),
              ],
          });
}
var ei = l(964395),
    es = l(901123),
    er = l(253004);
function eo(e) {
    let { applicationId: t, pageIndex: l, skuId: i, slug: L } = e,
        { guildId: _, configFetchState: A } = (0, o.cf)([S.A], () => ({
            guildId: S.A.getGuildIdFromApplicationId(t),
            configFetchState: S.A.getConfigFetchState(),
        })),
        I = (0, o.bG)([p.default], () => p.default.getId()),
        m = (0, o.bG)([d.A], () => d.A.hasLoaded(I)),
        g = (0, E.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        O = null != l ? parseInt(l, 10) : 0;
    n.useEffect(() => {
        if (!g) {
            let e = C.A.getHomeLink();
            if (null == e) return;
            e?.startsWith(es.BV.COLLECTIBLES_SHOP_GAME_SHOP("")) && (0, c.I)(es.BV.FRIENDS);
            return;
        }
        (0, c.I)(es.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, isNaN(O) ? void 0 : O));
    }, [t, O, i, L, g]),
        n.useEffect(() => {
            m &&
                "idle" !== A.state &&
                "loading" !== A.state &&
                (g ||
                    null == _ ||
                    (0, f.default)({
                        guildId: _,
                        skuId: i ?? void 0,
                        pageIndex: isNaN(O) ? void 0 : O,
                        slug: L ?? void 0,
                    }),
                null == _ && (0, u.pX)(es.BV.COLLECTIBLES_SHOP));
        }, [g, _, m, A.state, i, O, L]);
    let h = n.useCallback(
            (e, t) =>
                g
                    ? (0, a.jsx)(en, { storefront: t, selectedPageIndex: e })
                    : null == _
                      ? null
                      : (0, a.jsx)(ei.A, { guildId: _, storefront: t, selectedPageIndex: e }),
            [_, g],
        ),
        j = n.useCallback((e, l, a) => es.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, l, a), [t]);
    return null != _ && m && g && "success" === A.state
        ? (0, a.jsx)(x.SocialLayerStorefrontInnerWrapper, {
              guildId: _,
              skuId: i,
              pageIndex: O,
              renderHeader: h,
              getSocialLayerStorefrontLink: j,
          })
        : (0, a.jsx)("div", { className: s()(er.u, er.k), children: (0, a.jsx)(r.y, {}) });
}
