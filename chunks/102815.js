r.d(t, { S: () => b });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(735438),
    i = r(732955),
    d = r(462887),
    o = r(397927),
    u = r(736653),
    c = r(531260),
    m = r(613566),
    h = r(872725),
    p = r(857586),
    x = r(788868),
    g = r(652215),
    _ = r(985018),
    f = r(340091);
let b = (e) => {
    let {
            title: t,
            description: r,
            caption: a,
            pillText: b,
            primaryAsset: v,
            primaryAssetClassName: R,
            backgroundAssetUrl: A,
            progress: E,
            ctaText: C,
            onCtaClick: T,
            subscriptionRequired: j,
            glowing: I,
            progressGlowing: y = !1,
            featured: P,
            className: O,
            blurTint: S,
        } = e,
        L = (0, u.DP)(),
        { fractionalState: U } = (0, c.A)(),
        w = j && U === x.xc.FP_ONLY,
        D = !(0, s.isEmpty)(A),
        B = D && (0, d.q)(L),
        M = (0, o.rdh)(o.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        k = w || !(0, s.isEmpty)(C);
    return (0, n.jsx)(i.NPJ, {
        theme: B ? g.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(h.A, {
                cardType: o.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!I,
                blurAmount: 6 * !!I,
                className: f.Ui,
                cardClassName: l()(f.Nr, e, O, { [f.j8]: P, [f.Tn]: D }),
                cardStyle: {
                    backgroundImage: D ? `url(${A})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, s.isEmpty)(b) &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: f.Io,
                            children: b,
                        }),
                    (0, n.jsxs)("div", {
                        className: f.qh,
                        children: [
                            P &&
                                (0, n.jsx)("div", {
                                    className: f.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(N, { asset: v, className: R }),
                                }),
                            (0, n.jsx)(N, { asset: v, className: R }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: f.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: f.u_,
                                style: { "--custom-tint-color": S ?? M },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: f.P_,
                                tabIndex: k ? void 0 : 0,
                                children: [
                                    w &&
                                        (0, n.jsxs)("div", {
                                            className: f.d_,
                                            children: [
                                                (0, n.jsx)(o.tvc, { size: "sm", color: o.LU0.colors.ICON_MUTED }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: _.intl.string(_.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, s.isEmpty)(a) &&
                                        (0, n.jsx)("div", {
                                            className: f.OU,
                                            children:
                                                "string" == typeof a
                                                    ? (0, n.jsx)(o.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: a,
                                                      })
                                                    : a,
                                        }),
                                    (0, n.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, s.isEmpty)(r) &&
                                        (0, n.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: f.h_,
                                            children: r,
                                        }),
                                    null != E &&
                                        (0, n.jsx)("div", {
                                            className: f.oU,
                                            children: (0, n.jsx)(m.Ay, {
                                                variant: m.qP.BLUE,
                                                progress: (0, s.clamp)(E, 0, 1),
                                                maximum: 1,
                                                glowing: y,
                                            }),
                                        }),
                                    k && (0, n.jsx)("div", { className: f.Cj }),
                                ],
                            }),
                            k &&
                                (0, n.jsxs)("div", {
                                    className: f.yk,
                                    children: [
                                        w &&
                                            (0, n.jsx)(p.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: _.intl.string(_.t.sEAnVH),
                                            }),
                                        !w &&
                                            (0, n.jsx)(i.$nd, {
                                                text: C,
                                                variant: !D && (0, d.q)(L) ? "primary" : "overlay-primary",
                                                onClick: T,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function N(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: l()(f.eq, r) })
          : t;
}
