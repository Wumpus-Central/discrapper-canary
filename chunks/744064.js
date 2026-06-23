"use strict";
n.d(t, { S: () => M });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(562708),
    u = n(17928),
    c = n(43990),
    d = n(331322),
    _ = n(821609),
    h = n(462887),
    f = n(602853),
    p = n(661531),
    E = n(993077),
    m = n(834730),
    g = n(403581),
    A = n(534514),
    I = n(736653),
    T = n(139286),
    S = n(531260),
    y = n(914410),
    C = n(166403),
    N = n(174459),
    v = n(872725),
    R = n(721157),
    O = n(465794),
    b = n(788868),
    D = n(652215),
    L = n(375708),
    w = n(555599);
let M = (e) => {
    let {
            id: t,
            title: n,
            description: s,
            descriptionNote: M,
            caption: x,
            pillText: k,
            primaryAsset: U,
            primaryAssetClassName: G,
            backgroundAssetUrl: F,
            progress: V,
            ctaIcon: B,
            ctaIconPosition: j,
            ctaText: H,
            ctaVariant: Y,
            ctaDisabled: W,
            ctaLoading: K,
            onCtaClick: $,
            subscriptionRequired: z,
            isThirdPartyPerk: q = !1,
            glowing: Z = !1,
            progressGlowing: X = !1,
            featured: Q,
            className: J,
            containerClassName: ee,
            tabIndex: et = 0,
            blurTint: en,
            footerContent: ei,
            analyticsOptions: er,
            onFocus: es,
        } = e,
        ea = (0, I.DP)(),
        { fractionalState: eo } = (0, S.A)(),
        el = (0, u.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        eu = { name: t };
    er?.thirdPartyPartner != null && (eu.third_party_partner = er.thirdPartyPartner),
        (0, T.A)({ type: l.ImpressionTypes.VIEW, name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eu });
    let ec = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    N.default.track(D.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, o.snakeCase)(n),
                        partner: er?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [er?.thirdPartyPartner, n],
        ),
        ed = r.useCallback(() => {
            null != $ &&
                ($(),
                N.default.track(D.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, o.snakeCase)(n),
                    function_name: (0, o.snakeCase)($.name),
                }));
        }, [$, n]),
        e_ = !0 === z && (q ? !(0, R.ij)(el, eo) : eo === b.xc.FP_ONLY),
        eh = !(0, o.isEmpty)(F),
        ef = eh && (0, h.q)(ea),
        ep = (0, f.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eE = e_ || !(0, o.isEmpty)(H);
    return (0, i.jsx)(c.N, {
        theme: ef ? D.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(v.A, {
                id: t,
                tabIndex: et,
                onMouseEnter: ec,
                onFocus: es,
                cardType: E.s.PRIMARY,
                glowing: Z,
                hueRotate: 25,
                glowAmount: (0, h.M)(ea) ? 2 : 8,
                blurAmount: 10,
                className: a()(w.Ui, ee, { [w.Tn]: eh }),
                cardClassName: a()(w.Nr, e, J, { [w.j8]: Q }),
                cardStyle: {
                    backgroundImage: null != F ? `url(${F})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, o.isEmpty)(k) &&
                        (0, i.jsx)(m.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: w.Io,
                            children: k,
                        }),
                    (0, i.jsxs)("div", {
                        className: w.qh,
                        children: [
                            Q &&
                                (0, i.jsx)("div", {
                                    className: w.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(P, { asset: U, className: G }),
                                }),
                            (0, i.jsx)(P, { asset: U, className: G }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: w.u_,
                                style: { "--custom-tint-color": en ?? ep },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: w.P_,
                                children: [
                                    e_ &&
                                        (0, i.jsxs)("div", {
                                            className: w.d_,
                                            children: [
                                                (0, i.jsx)(g.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: L.intl.string(L.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, o.isEmpty)(x) &&
                                        (0, i.jsx)("div", {
                                            className: w.OU,
                                            children:
                                                "string" == typeof x
                                                    ? (0, i.jsx)(m.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: x,
                                                      })
                                                    : x,
                                        }),
                                    (0, i.jsx)(A.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, o.isEmpty)(s) &&
                                        (0, i.jsxs)("div", {
                                            className: w.Wi,
                                            children: [
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: w.h_,
                                                    children: (0, o.isEmpty)(M)
                                                        ? s
                                                        : (0, i.jsxs)(d.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: s }),
                                                                  (0, i.jsx)("div", { children: M }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: w.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != V &&
                                        (0, i.jsx)("div", {
                                            className: w.oU,
                                            children: (0, i.jsx)(y.Ay, {
                                                variant: y.qP.BLUE,
                                                progress: (0, o.clamp)(V, 0, 1),
                                                maximum: 1,
                                                glowing: X,
                                            }),
                                        }),
                                    null != ei && (0, i.jsx)("div", { className: w.Gv, children: ei }),
                                    eE && (0, i.jsx)("div", { className: w.Cj }),
                                ],
                            }),
                            eE &&
                                (0, i.jsxs)("div", {
                                    className: w.yk,
                                    children: [
                                        e_ &&
                                            (0, i.jsx)(O.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: L.intl.string(L.t.sEAnVH),
                                            }),
                                        !e_ &&
                                            (0, i.jsx)(_.$, {
                                                icon: B,
                                                iconPosition: j,
                                                text: H,
                                                variant: Y ?? (!eh && (0, h.q)(ea) ? "primary" : "overlay-primary"),
                                                onClick: ed,
                                                disabled: W,
                                                loading: K,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function P(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: a()(w.eq, n), draggable: "false" })
          : t;
}
