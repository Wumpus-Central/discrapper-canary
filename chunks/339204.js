var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(855986),
    o = l(554146),
    c = l(821609),
    h = l(462887),
    d = l(408278),
    u = l(789645),
    m = l(834730),
    C = l(34188),
    _ = l(403581),
    A = l(315629),
    g = l(28863),
    E = l(736653),
    f = l(793574),
    p = l(688810),
    L = l(263775),
    b = l(44724),
    O = l(129230),
    x = l(318346),
    T = l(673125),
    R = l(730916),
    y = l(652215),
    v = l(49999),
    S = l(188275),
    N = l(312653),
    j = l(792996),
    I = l(600676);
function U(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: a,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: o,
        buttonVariant: h,
        onCtaClick: C,
        onClose: _,
        className: A,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(I.Vm, A),
        children: [
            null != _
                ? (0, n.jsx)("div", {
                      className: I.Fx,
                      children: (0, n.jsx)(d.K, {
                          icon: u.XSmallIcon,
                          "aria-label": j.intl.string(j.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: _,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: I.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: I.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: I.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(m.E, { variant: "body-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.$, { text: r, size: "sm", icon: o, onClick: C, variant: h, fullWidth: !0 }),
        ],
    });
}
function B(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = f.A.ORB_WALLET, forceVisible: r, onClose: o, onCloseWallet: c } = e,
        [h, d] = (0, L.kn)([n], { groupName: v.m.ORB_WALLET, bypassAutoDismiss: !0 }),
        u = a.useCallback(() => {
            ((0, x.Y)({ pageType: i, sectionType: f.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || d(v.i.TAKE_ACTION),
                c("navigation"));
        }, [i, d, r, c, l, s]),
        m = a.useCallback(() => {
            (r || d(v.i.DISMISS), o());
        }, [r, d, o]);
    return { onCtaClick: u, shouldHideCard: null == h && !r, onClose: m };
}
let F = { asset: _.NitroWheelIcon, type: "icon" };
l.d(
    t,
    {},
    {
        Wm: function (e) {
            let { onClose: t, onCloseWallet: s, analyticsPage: i = f.A.ORB_WALLET, forceVisible: c = !1 } = e,
                { analyticsLocations: h } = (0, p.Ay)(f.A.ORB_WALLET_PRIMARY_CARD),
                {
                    shouldHideCard: d,
                    onCtaClick: u,
                    onClose: m,
                } = B(
                    { analyticsPage: i, forceVisible: c, onClose: t, onCloseWallet: s },
                    {
                        ctaClickHandler: a.useCallback(() => {
                            (0, R.Wp)({ analyticsLocations: h });
                        }, [h]),
                        dismissibleContent: o.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                        ctaObject: f.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
                    },
                ),
                { nitroGatedOrbMultiplier: C } = (0, r.cf)([T.Ay], () => ({
                    nitroGatedOrbMultiplier: T.Ay.nitroGatedOrbMultiplier,
                })),
                _ = a.useMemo(() => j.intl.format(N.default["Ba/7wO"], { multiplier: C }), [C]);
            return null == C || d
                ? null
                : (0, n.jsx)(U, {
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
                { applicationId: c, promotionId: d } = t,
                {
                    shouldHideCard: u,
                    onCtaClick: m,
                    onClose: C,
                } = B(
                    { analyticsPage: r, forceVisible: o, onClose: s, onCloseWallet: i },
                    {
                        ctaClickHandler: a.useCallback(() => {
                            (0, b.default)({ applicationId: c });
                        }, [c]),
                        dismissibleContent: t.dismissibleContent,
                        ctaObject: f.A.ORB_WALLET_SHOP_CTA,
                    },
                );
            a.useEffect(() => {
                u ||
                    O.default.track(y.HAw.PROMOTION_VIEWED, {
                        promotion_id: d,
                        application_id: c,
                        promotion_type: l ? "orb_wallet_black_friday_nitro" : "orb_wallet_black_friday_non_nitro",
                        location_page: r,
                        location_section: f.A.ORB_WALLET_PRIMARY_CARD,
                        location_object: f.A.ORB_WALLET,
                    });
            }, [u, d, c, l, r]);
            let _ = (0, h.M)((0, E.Ay)()),
                p = (0, S.X3)(c);
            if (u) return null;
            let L = "primary";
            return (
                l ? (L = "secondary") : _ && (L = "overlay-primary"),
                (0, n.jsxs)("div", {
                    className: I.gq,
                    children: [
                        !l || _ ? (0, n.jsx)(A.h, { "aria-hidden": !0, color: "nitro-pink", className: I.Gm }) : null,
                        (0, n.jsx)(U, {
                            title: j.intl.string(t.title),
                            imageUrl: t.artUrl,
                            imageAlt: "",
                            subTextDescription: j.intl.format(t.body, {
                                termsHook: (e, t) =>
                                    null != p
                                        ? (0, n.jsx)(
                                              g.Anchor,
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
                    shouldHideCard: h,
                    onCtaClick: d,
                    onClose: u,
                } = B(
                    { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
                    {
                        ctaClickHandler: a.useCallback(() => {
                            (0, R.P9)({ analyticsLocations: c });
                        }, [c]),
                        dismissibleContent: o.M.ORB_WALLET_SHOP_CTA_CARD,
                        ctaObject: f.A.ORB_WALLET_SHOP_CTA,
                    },
                );
            return h
                ? null
                : (0, n.jsx)(U, {
                      title: j.intl.string(N.default.v8QrJf),
                      imageUrl: l(105644),
                      imageAlt: j.intl.string(N.default.qa1xyr),
                      subTextDescription: j.intl.string(N.default.HACucK),
                      buttonText: j.intl.string(N.default["7raRgL"]),
                      buttonIcon: { asset: C.ShopIcon, type: "icon" },
                      onCtaClick: d,
                      onClose: u,
                  });
        },
    },
);
