"use strict";
n.d(t, { S: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(562708),
    u = n(43990),
    c = n(821609),
    d = n(462887),
    _ = n(602853),
    f = n(661531),
    h = n(359778),
    p = n(834730),
    E = n(403581),
    m = n(534514),
    g = n(736653),
    A = n(139286),
    I = n(531260),
    T = n(914410),
    S = n(174459),
    N = n(872725),
    y = n(465794),
    C = n(788868),
    v = n(652215),
    O = n(375708),
    R = n(555599);
let b = (e) => {
    let {
            id: t,
            title: n,
            description: s,
            caption: b,
            pillText: L,
            primaryAsset: w,
            primaryAssetClassName: M,
            backgroundAssetUrl: P,
            progress: x,
            ctaIcon: U,
            ctaIconPosition: k,
            ctaText: G,
            ctaVariant: F,
            ctaDisabled: V,
            ctaLoading: B,
            onCtaClick: H,
            subscriptionRequired: j,
            glowing: Y = !1,
            progressGlowing: W = !1,
            featured: K,
            className: z,
            containerClassName: $,
            tabIndex: q = 0,
            blurTint: Z,
            footerContent: X,
            analyticsOptions: Q,
        } = e,
        J = (0, g.DP)(),
        { fractionalState: ee } = (0, I.A)(),
        et = { name: t };
    Q?.thirdPartyPartner != null && (et.third_party_partner = Q.thirdPartyPartner),
        (0, A.A)({ type: l.ImpressionTypes.VIEW, name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: et });
    let en = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    S.default.track(v.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, o.snakeCase)(n),
                        partner: Q?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [Q?.thirdPartyPartner, n],
        ),
        ei = r.useCallback(() => {
            null != H &&
                (H(),
                S.default.track(v.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, o.snakeCase)(n),
                    function_name: (0, o.snakeCase)(H.name),
                }));
        }, [H, n]),
        er = j && ee === C.xc.FP_ONLY,
        es = !(0, o.isEmpty)(P),
        ea = es && (0, d.q)(J),
        eo = (0, _.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
        el = er || !(0, o.isEmpty)(G);
    return (0, i.jsx)(u.N, {
        theme: ea ? v.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(N.A, {
                id: t,
                tabIndex: q,
                onMouseEnter: en,
                cardType: h.s.PRIMARY,
                glowing: Y,
                hueRotate: 25,
                glowAmount: (0, d.M)(J) ? 2 : 8,
                blurAmount: 10,
                className: a()(R.Ui, $, { [R.Tn]: es }),
                cardClassName: a()(R.Nr, e, z, { [R.j8]: K }),
                cardStyle: {
                    backgroundImage: null != P ? `url(${P})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, o.isEmpty)(L) &&
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: R.Io,
                            children: L,
                        }),
                    (0, i.jsxs)("div", {
                        className: R.qh,
                        children: [
                            K &&
                                (0, i.jsx)("div", {
                                    className: R.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(D, { asset: w, className: M }),
                                }),
                            (0, i.jsx)(D, { asset: w, className: M }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: R.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: R.u_,
                                style: { "--custom-tint-color": Z ?? eo },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: R.P_,
                                children: [
                                    er &&
                                        (0, i.jsxs)("div", {
                                            className: R.d_,
                                            children: [
                                                (0, i.jsx)(E.t, { size: "sm", color: f.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: O.intl.string(O.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, o.isEmpty)(b) &&
                                        (0, i.jsx)("div", {
                                            className: R.OU,
                                            children:
                                                "string" == typeof b
                                                    ? (0, i.jsx)(p.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: b,
                                                      })
                                                    : b,
                                        }),
                                    (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, o.isEmpty)(s) &&
                                        (0, i.jsxs)("div", {
                                            className: R.Wi,
                                            children: [
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: R.h_,
                                                    children: s,
                                                }),
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: R.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != x &&
                                        (0, i.jsx)("div", {
                                            className: R.oU,
                                            children: (0, i.jsx)(T.Ay, {
                                                variant: T.qP.BLUE,
                                                progress: (0, o.clamp)(x, 0, 1),
                                                maximum: 1,
                                                glowing: W,
                                            }),
                                        }),
                                    null != X && (0, i.jsx)("div", { className: R.Gv, children: X }),
                                    el && (0, i.jsx)("div", { className: R.Cj }),
                                ],
                            }),
                            el &&
                                (0, i.jsxs)("div", {
                                    className: R.yk,
                                    children: [
                                        er &&
                                            (0, i.jsx)(y.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: O.intl.string(O.t.sEAnVH),
                                            }),
                                        !er &&
                                            (0, i.jsx)(c.$, {
                                                icon: U,
                                                iconPosition: k,
                                                text: G,
                                                variant: F ?? (!es && (0, d.q)(J) ? "primary" : "overlay-primary"),
                                                onClick: ei,
                                                disabled: V,
                                                loading: B,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function D(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: a()(R.eq, n), draggable: "false" })
          : t;
}
