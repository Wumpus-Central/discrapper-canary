s.d(t, { S: () => y });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(735438),
    d = s(110259),
    o = s(43990),
    c = s(821609),
    u = s(462887),
    m = s(602853),
    h = s(661531),
    x = s(359778),
    C = s(834730),
    p = s(403581),
    _ = s(534514),
    g = s(736653),
    f = s(139286),
    b = s(531260),
    R = s(914410),
    v = s(954571),
    j = s(872725),
    E = s(465794),
    A = s(788868),
    N = s(652215),
    P = s(985018),
    I = s(555599);
let y = (e) => {
    let {
            id: t,
            title: s,
            description: r,
            caption: y,
            pillText: S,
            primaryAsset: w,
            primaryAssetClassName: O,
            backgroundAssetUrl: T,
            progress: M,
            ctaIcon: L,
            ctaIconPosition: k,
            ctaText: B,
            ctaVariant: U,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: V = !1,
            progressGlowing: K = !1,
            featured: Z,
            className: Y,
            containerClassName: z,
            tabIndex: $ = 0,
            blurTint: X,
            footerContent: q,
        } = e,
        J = (0, g.DP)(),
        { fractionalState: Q } = (0, b.A)();
    (0, f.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let ee = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    v.default.track(N.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(s),
                    });
                }, 800),
            [s],
        ),
        et = a.useCallback(() => {
            null != H &&
                (H(),
                v.default.track(N.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(s),
                    function_name: (0, i.snakeCase)(H.name),
                }));
        }, [H, s]),
        es = W && Q === A.xc.FP_ONLY,
        en = !(0, i.isEmpty)(T),
        ea = en && (0, u.q)(J),
        er = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        el = es || !(0, i.isEmpty)(B);
    return (0, n.jsx)(o.N, {
        theme: ea ? N.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(j.A, {
                id: t,
                tabIndex: $,
                onMouseEnter: ee,
                cardType: x.s.PRIMARY,
                glowing: V,
                hueRotate: 25,
                glowAmount: (0, u.M)(J) ? 2 : 8,
                blurAmount: 10,
                className: l()(I.Ui, z, { [I.Tn]: en }),
                cardClassName: l()(I.Nr, e, Y, { [I.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != T ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(S) &&
                        (0, n.jsx)(C.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: I.Io,
                            children: S,
                        }),
                    (0, n.jsxs)("div", {
                        className: I.qh,
                        children: [
                            Z &&
                                (0, n.jsx)("div", {
                                    className: I.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(D, { asset: w, className: O }),
                                }),
                            (0, n.jsx)(D, { asset: w, className: O }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: I.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: I.u_,
                                style: { "--custom-tint-color": X ?? er },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: I.P_,
                                children: [
                                    es &&
                                        (0, n.jsxs)("div", {
                                            className: I.d_,
                                            children: [
                                                (0, n.jsx)(p.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: P.intl.string(P.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(y) &&
                                        (0, n.jsx)("div", {
                                            className: I.OU,
                                            children:
                                                "string" == typeof y
                                                    ? (0, n.jsx)(C.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: y,
                                                      })
                                                    : y,
                                        }),
                                    (0, n.jsx)(_.D, { variant: "heading-lg/semibold", children: s }),
                                    !(0, i.isEmpty)(r) &&
                                        (0, n.jsxs)("div", {
                                            className: I.Wi,
                                            children: [
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: I.h_,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: I.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != M &&
                                        (0, n.jsx)("div", {
                                            className: I.oU,
                                            children: (0, n.jsx)(R.Ay, {
                                                variant: R.qP.BLUE,
                                                progress: (0, i.clamp)(M, 0, 1),
                                                maximum: 1,
                                                glowing: K,
                                            }),
                                        }),
                                    null != q && (0, n.jsx)("div", { className: I.Gv, children: q }),
                                    el && (0, n.jsx)("div", { className: I.Cj }),
                                ],
                            }),
                            el &&
                                (0, n.jsxs)("div", {
                                    className: I.yk,
                                    children: [
                                        es &&
                                            (0, n.jsx)(E.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: P.intl.string(P.t.sEAnVH),
                                            }),
                                        !es &&
                                            (0, n.jsx)(c.$, {
                                                icon: L,
                                                iconPosition: k,
                                                text: B,
                                                variant: U ?? (!en && (0, u.q)(J) ? "primary" : "overlay-primary"),
                                                onClick: et,
                                                disabled: F,
                                                loading: G,
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
    let { asset: t, className: s } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: l()(I.eq, s), draggable: "false" })
          : t;
}
