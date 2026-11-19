var a = l(477900),
    n = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(855986),
    o = l(554146),
    c = l(821609),
    d = l(462887),
    h = l(408278),
    u = l(789645),
    m = l(834730),
    C = l(34188),
    _ = l(403581),
    E = l(315629),
    A = l(28863),
    g = l(736653),
    f = l(793574),
    p = l(688810),
    L = l(263775),
    b = l(44724),
    x = l(129230),
    O = l(318346),
    T = l(673125),
    R = l(730916),
    v = l(652215),
    y = l(49999),
    S = l(188275),
    N = l(312653),
    j = l(792996),
    I = l(600676);
function U(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: n,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: o,
        buttonVariant: d,
        onCtaClick: C,
        onClose: _,
        className: E,
    } = e;
    return (0, a.jsxs)("div", {
        className: i()(I.Vm, E),
        children: [
            null != _
                ? (0, a.jsx)("div", {
                      className: I.Fx,
                      children: (0, a.jsx)(h.K, {
                          icon: u.XSmallIcon,
                          "aria-label": j.intl.string(j.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: _,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: I.iH,
                children: [
                    null != l && (0, a.jsx)("img", { alt: n, src: l, className: I.db }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: I.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.$, { text: r, size: "sm", icon: o, onClick: C, variant: d, fullWidth: !0 }),
        ],
    });
}
function B(e, t) {
    let { ctaClickHandler: l, dismissibleContent: a, ctaObject: s } = t,
        { analyticsPage: i = f.A.ORB_WALLET, forceVisible: r, onClose: o, onCloseWallet: c } = e,
        [d, h] = (0, L.kn)([a], { groupName: y.m.ORB_WALLET, bypassAutoDismiss: !0 }),
        u = n.useCallback(() => {
            ((0, O.Y)({ pageType: i, sectionType: f.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || h(y.i.TAKE_ACTION),
                c("navigation"));
        }, [i, h, r, c, l, s]),
        m = n.useCallback(() => {
            (r || h(y.i.DISMISS), o());
        }, [r, h, o]);
    return { onCtaClick: u, shouldHideCard: null == d && !r, onClose: m };
}
let F = { asset: _.NitroWheelIcon, type: "icon" };
l.d(
    t,
    {},
    {
        Wm: function (e) {
            let { onClose: t, onCloseWallet: s, analyticsPage: i = f.A.ORB_WALLET, forceVisible: c = !1 } = e,
                { analyticsLocations: d } = (0, p.Ay)(f.A.ORB_WALLET_PRIMARY_CARD),
                {
                    shouldHideCard: h,
                    onCtaClick: u,
                    onClose: m,
                } = B(
                    { analyticsPage: i, forceVisible: c, onClose: t, onCloseWallet: s },
                    {
                        ctaClickHandler: n.useCallback(() => {
                            (0, R.Wp)({ analyticsLocations: d });
                        }, [d]),
                        dismissibleContent: o.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                        ctaObject: f.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
                    },
                ),
                { nitroGatedOrbMultiplier: C } = (0, r.cf)([T.Ay], () => ({
                    nitroGatedOrbMultiplier: T.Ay.nitroGatedOrbMultiplier,
                })),
                _ = n.useMemo(() => j.intl.format(N.default.BzzCNE, { multiplier: C }), [C]);
            return null == C || h
                ? null
                : (0, a.jsx)(U, {
                      title: j.intl.string(N.default.ZqCAos),
                      imageUrl: l(780361),
                      imageAlt: j.intl.string(N.default.FkfrRH),
                      subTextDescription: _,
                      buttonText: j.intl.string(N.default.U9UQJE),
                      buttonIcon: F,
                      buttonVariant: "expressive",
                      onCtaClick: u,
                      onClose: m,
                      className: I.ml,
                  });
        },
        rI: function (e) {
            let {
                    campaign: t,
                    userHasPremium: l,
                    onClose: s,
                    onCloseWallet: i,
                    analyticsPage: r = f.A.ORB_WALLET,
                    forceVisible: o = !1,
                } = e,
                { applicationId: c, promotionId: h } = t,
                {
                    shouldHideCard: u,
                    onCtaClick: m,
                    onClose: C,
                } = B(
                    { analyticsPage: r, forceVisible: o, onClose: s, onCloseWallet: i },
                    {
                        ctaClickHandler: n.useCallback(() => {
                            (0, b.default)({ applicationId: c });
                        }, [c]),
                        dismissibleContent: t.dismissibleContent,
                        ctaObject: f.A.ORB_WALLET_SHOP_CTA,
                    },
                );
            n.useEffect(() => {
                u ||
                    x.default.track(v.HAw.PROMOTION_VIEWED, {
                        promotion_id: h,
                        application_id: c,
                        promotion_type: l ? "orb_wallet_black_friday_nitro" : "orb_wallet_black_friday_non_nitro",
                        location_page: r,
                        location_section: f.A.ORB_WALLET_PRIMARY_CARD,
                        location_object: f.A.ORB_WALLET,
                    });
            }, [u, h, c, l, r]);
            let _ = (0, d.M)((0, g.Ay)()),
                p = (0, S.X3)(c);
            if (u) return null;
            let L = "primary";
            return (
                l ? (L = "secondary") : _ && (L = "overlay-primary"),
                (0, a.jsxs)("div", {
                    className: I.gq,
                    children: [
                        !l || _ ? (0, a.jsx)(E.h, { "aria-hidden": !0, color: "nitro-pink", className: I.Gm }) : null,
                        (0, a.jsx)(U, {
                            title: j.intl.string(t.title),
                            imageUrl: t.artUrl,
                            imageAlt: "",
                            subTextDescription: j.intl.format(t.body, {
                                termsHook: (e, t) =>
                                    null != p
                                        ? (0, a.jsx)(
                                              A.Anchor,
                                              { href: p, target: "_blank", rel: "noopener noreferrer", children: e },
                                              t,
                                          )
                                        : e,
                            }),
                            buttonText: j.intl.string(t.cta),
                            buttonIcon: void 0,
                            buttonVariant: L,
                            className: I.ZX,
                            onCtaClick: m,
                            onClose: C,
                        }),
                    ],
                })
            );
        },
        xA: function (e) {
            let { onClose: t, onCloseWallet: s, analyticsPage: i = f.A.ORB_WALLET, forceVisible: r = !1 } = e,
                { analyticsLocations: c } = (0, p.Ay)(f.A.ORB_WALLET_PRIMARY_CARD),
                {
                    shouldHideCard: d,
                    onCtaClick: h,
                    onClose: u,
                } = B(
                    { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
                    {
                        ctaClickHandler: n.useCallback(() => {
                            (0, R.P9)({ analyticsLocations: c });
                        }, [c]),
                        dismissibleContent: o.M.ORB_WALLET_SHOP_CTA_CARD,
                        ctaObject: f.A.ORB_WALLET_SHOP_CTA,
                    },
                );
            return d
                ? null
                : (0, a.jsx)(U, {
                      title: j.intl.string(N.default.v8QrJf),
                      imageUrl: l(105644),
                      imageAlt: j.intl.string(N.default.qa1xyr),
                      subTextDescription: j.intl.string(N.default.HACucK),
                      buttonText: j.intl.string(N.default["7raRgL"]),
                      buttonIcon: { asset: C.ShopIcon, type: "icon" },
                      onCtaClick: h,
                      onClose: u,
                  });
        },
    },
);
