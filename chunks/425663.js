l.r(t), l.d(t, { default: () => ed });
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(289873),
    r = l(17928),
    c = l(944791),
    d = l(710195),
    u = l(976860),
    p = l(495544),
    C = l(619921),
    E = l(832163),
    S = l(81341),
    L = l(44724),
    f = l(865949),
    x = l(696292),
    A = l(939249),
    _ = l(34188),
    m = l(661531),
    I = l(926268),
    g = l(885574),
    h = l(834730),
    j = l(793574),
    O = l(688810),
    b = l(742589),
    T = l(617986),
    k = l(975732),
    N = l(318346),
    v = l(371446),
    M = l(70926),
    B = l(287809),
    P = l(174459),
    R = l(975571),
    H = l(439303),
    y = l(980707),
    w = l(477782),
    G = l(847374),
    F = l(922016),
    V = l(900797),
    U = l(587895),
    D = l(421773),
    W = l(486020),
    z = l(429913),
    Y = l(733391),
    X = l(652215),
    Z = l(375708),
    q = l(583144);
function Q(e) {
    let { shops: t, currentApplicationId: l, onClose: n, onMouseEnter: i, onMouseLeave: s } = e;
    return (0, a.jsx)("div", {
        onMouseEnter: i,
        onMouseLeave: s,
        children: (0, a.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "slayer-storefront-shop-dropdown",
            onClose: n,
            "aria-label": Z.intl.string(Z.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, a.jsx)(
                    w.Dr,
                    {
                        id: e.applicationId,
                        label: e.application.name,
                        color: e.applicationId === l ? "brand" : "default",
                        action: () => {
                            (0, u.pX)(X.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e.applicationId)), n();
                        },
                    },
                    e.applicationId,
                ),
            ),
        }),
    });
}
function J(e) {
    let t,
        l,
        i,
        { selectedApplicationId: o, className: c } = e,
        d = n.useRef(null),
        { isHovered: u, setIsHovered: p, onMouseEnter: C, onMouseLeave: S, cancelTimers: L } = (0, D.A)(100, 100),
        f =
            ((t = (0, r.yK)([E.A], () =>
                (E.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
            )),
            (l = n.useMemo(() => t.map((e) => e.applicationId), [t])),
            (i = (0, z.A)(l)),
            n.useEffect(() => {
                (0, Y.Xw)();
            }, []),
            n.useMemo(
                () =>
                    t.flatMap((e) => {
                        let t = i.find((t) => t?.id === e.applicationId);
                        return null == t ? [] : [{ ...e, application: t }];
                    }),
                [t, i],
            )),
        x = (0, r.bG)([U.A], () => U.A.getApplication(o)),
        _ = n.useCallback(
            (e) => {
                L(), p(e);
            },
            [L, p],
        ),
        m = n.useCallback(() => {
            _(!u);
        }, [u, _]);
    if (null == x)
        return (0, a.jsxs)("div", {
            className: s()(q.hZ, q.qf, c),
            "aria-hidden": "true",
            children: [(0, a.jsx)("span", { className: q.wm }), (0, a.jsx)(G.a, { size: "xs", color: "currentColor" })],
        });
    let I = null != x.icon ? W.Ay.getApplicationIconURL({ id: x.id, icon: x.icon, size: 32 }) : null;
    return (0, a.jsx)(F.Y, {
        targetElementRef: d,
        shouldShow: u,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => _(!0),
        onRequestClose: () => _(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(Q, { shops: f, currentApplicationId: o, onClose: t, onMouseEnter: C, onMouseLeave: S });
        },
        children: (e) => {
            let t = u ? V.t : G.a;
            return (0, a.jsxs)(A.D, {
                ...e,
                innerRef: d,
                onClick: m,
                onMouseLeave: S,
                className: s()(q.hZ, c),
                "aria-label": x.name,
                "aria-haspopup": "menu",
                "aria-expanded": u,
                children: [
                    null != I && (0, a.jsx)("img", { className: q.wm, src: I, alt: "" }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-default", children: x.name }),
                    (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
                ],
            });
        },
    });
}
var K = l(995393),
    $ = l(518477),
    ee = l(951259);
function et(e) {
    let { content: t, onClick: l, ariaLabel: n } = e;
    return (0, a.jsx)(A.D, { className: ee.gb, onClick: l, "aria-label": n, children: t });
}
function el() {
    let e = n.useCallback(() => {
        (0, u.pX)(X.BVt.COLLECTIBLES_SHOP);
    }, []);
    return (0, a.jsx)(A.D, {
        className: ee.Ak,
        onClick: e,
        "aria-label": Z.intl.string(Z.t["5upuqx"]),
        children: (0, a.jsx)(_.U, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
    });
}
function ea() {
    let e = (0, r.bG)([B.default], () => B.default.getCurrentUser()),
        t = n.useCallback(() => {
            e?.id != null &&
                (0, k.openUserProfileModal)({
                    userId: e.id,
                    tabSection: $.RP.WISHLIST,
                    sourceAnalyticsLocations: [j.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [e]);
    return (0, a.jsx)(et, {
        content: (0, a.jsx)(I.C, { size: "xs", color: "currentColor" }),
        onClick: t,
        ariaLabel: Z.intl.string(Z.t["7lZ31J"]),
    });
}
function en() {
    let { enabled: e } = (0, v.Z)({ location: "slayer_storefront_collectibles_shop_header" }),
        t = n.useCallback(() => {
            (0, N.Y)({
                pageType: X.liQ.COLLECTIBLES_SHOP,
                sectionType: X.JJy.ORBS_BALANCE_MENU,
                ctaObject: X.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, T.navigateToQuestHome)({ fromContent: x.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, a.jsx)(M.SS, {
              analyticsPage: X.liQ.COLLECTIBLES_SHOP,
              cardAlignment: M.SS.CardAlignment.END,
              ctaText: Z.intl.string(Z.t.VC4Mq0),
              ctaOnClick: t,
          })
        : null;
}
function ei() {
    let e = (0, H.jM)(),
        { analyticsLocations: t } = (0, O.Ay)(),
        l = n.useCallback(() => {
            P.default.track(X.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: e?.sessionId,
                cta_type: K.ST.LEARN_MORE,
                location_stack: t,
            }),
                window.open(R.A.getArticleURL(X.MVz.SOCIAL_LAYER_STOREFRONT), "_blank", "noopener,noreferrer");
        }, [e, t]);
    return (0, a.jsx)(et, {
        content: (0, a.jsx)(g.m, { size: "xs", color: "currentColor" }),
        onClick: l,
        ariaLabel: Z.intl.string(Z.t.hvVgAZ),
    });
}
function es(e) {
    let { storefront: t, selectedPageIndex: l } = e;
    return null == t
        ? null
        : (0, a.jsxs)(b.A, {
              disableDoubleClick: !0,
              hideSearch: !0,
              className: ee.N1,
              toolbar: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(ea, {}), (0, a.jsx)(en, {}), (0, a.jsx)(ei, {})],
              }),
              children: [
                  (0, a.jsx)(el, {}),
                  (0, a.jsx)("div", { className: ee.yF, "aria-hidden": "true" }),
                  (0, a.jsx)(J, { selectedApplicationId: t.applicationId, className: ee.Wm }),
                  t.pages.length > 1 &&
                      (0, a.jsx)("div", {
                          className: ee.YC,
                          children: t.pages.map((e, n) =>
                              (0, a.jsx)(
                                  b.A.Title,
                                  {
                                      onClick: () => {
                                          (0, u.pX)(
                                              X.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, n > 0 ? n : void 0),
                                          );
                                      },
                                      wrapperClassName: ee.oB,
                                      className: s()(ee.xT, { [ee.ys]: l === n }),
                                      children: (0, a.jsx)(h.E, { variant: "text-sm/medium", children: e.title }),
                                  },
                                  `${e.title}-${n}`,
                              ),
                          ),
                      }),
              ],
          });
}
var eo = l(964395),
    er = l(901123),
    ec = l(253004);
function ed(e) {
    let { applicationId: t, pageIndex: l, skuId: i, slug: x } = e,
        { guildId: A, configFetchState: _ } = (0, r.cf)([E.A], () => ({
            guildId: E.A.getGuildIdFromApplicationId(t),
            configFetchState: E.A.getConfigFetchState(),
        })),
        m = (0, r.bG)([p.default], () => p.default.getId()),
        I = (0, r.bG)([d.A], () => d.A.hasLoaded(m)),
        g = (0, S.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        h = null != l ? parseInt(l, 10) : 0;
    n.useEffect(() => {
        if (!g) {
            let e = C.A.getHomeLink();
            if (null == e) return;
            e?.startsWith(er.BV.COLLECTIBLES_SHOP_GAME_SHOP("")) && (0, c.I)(er.BV.FRIENDS);
            return;
        }
        (0, c.I)(er.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, isNaN(h) ? void 0 : h));
    }, [t, h, i, x, g]),
        n.useEffect(() => {
            I &&
                "idle" !== _.state &&
                "loading" !== _.state &&
                (g ||
                    null == A ||
                    (0, L.navigateToSocialLayerStorefrontWithGuildPreview)({
                        guildId: A,
                        skuId: i ?? void 0,
                        pageIndex: isNaN(h) ? void 0 : h,
                        slug: x ?? void 0,
                    }),
                null == A && (0, u.pX)(er.BV.COLLECTIBLES_SHOP));
        }, [g, A, I, _.state, i, h, x]);
    let j = n.useCallback(
            (e, t) =>
                g
                    ? (0, a.jsx)(es, { storefront: t, selectedPageIndex: e })
                    : null == A
                      ? null
                      : (0, a.jsx)(eo.A, { storefront: t, selectedPageIndex: e }),
            [A, g],
        ),
        O = n.useCallback((e, l, a) => er.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, l, a), [t]);
    return null != A && I && g && "success" === _.state
        ? (0, a.jsx)(f.SocialLayerStorefrontInnerWrapper, {
              guildId: A,
              skuId: i,
              pageIndex: h,
              renderHeader: j,
              getSocialLayerStorefrontLink: O,
          })
        : (0, a.jsx)("div", { className: s()(ec.u, ec.k), children: (0, a.jsx)(o.y, {}) });
}
