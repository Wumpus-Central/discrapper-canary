r.d(t, { S: () => N });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(735438),
    i = r(732955),
    d = r(462887),
    u = r(397927),
    o = r(736653),
    c = r(531260),
    m = r(613566),
    h = r(872725),
    x = r(857586),
    p = r(788868),
    f = r(652215),
    g = r(985018),
    _ = r(355313);
let N = (e) => {
    let {
            title: t,
            description: r,
            caption: a,
            pillText: N,
            primaryAsset: v,
            primaryAssetClassName: R,
            backgroundAssetUrl: E,
            progress: A,
            ctaText: C,
            onCtaClick: T,
            subscriptionRequired: j,
            glowing: P,
            progressGlowing: y = !1,
            featured: S,
            className: I,
            blurTint: O,
        } = e,
        w = (0, o.DP)(),
        { fractionalState: L } = (0, c.A)(),
        D = j && L === p.xc.FP_ONLY,
        U = !(0, s.isEmpty)(E),
        B = U && (0, d.q)(w),
        M = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        k = D || !(0, s.isEmpty)(C);
    return (0, n.jsx)(i.NPJ, {
        theme: B ? f.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(h.A, {
                cardType: u.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!P,
                blurAmount: 6 * !!P,
                className: _.Ui,
                cardClassName: l()(_.Nr, e, I, { [_.j8]: S, [_.Tn]: U }),
                cardStyle: {
                    backgroundImage: U ? `url(${E})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, s.isEmpty)(N) &&
                        (0, n.jsx)(u.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: _.Io,
                            children: N,
                        }),
                    (0, n.jsxs)("div", {
                        className: _.qh,
                        children: [
                            S &&
                                (0, n.jsx)("div", {
                                    className: _.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(b, { asset: v, className: R }),
                                }),
                            (0, n.jsx)(b, { asset: v, className: R }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: _.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: _.u_,
                                style: { "--custom-tint-color": O ?? M },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: _.P_,
                                tabIndex: 0,
                                children: [
                                    D &&
                                        (0, n.jsxs)("div", {
                                            className: _.d_,
                                            children: [
                                                (0, n.jsx)(u.tvc, { size: "sm", color: u.LU0.colors.ICON_MUTED }),
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: g.intl.string(g.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, s.isEmpty)(a) &&
                                        (0, n.jsx)("div", {
                                            className: _.OU,
                                            children:
                                                "string" == typeof a
                                                    ? (0, n.jsx)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: a,
                                                      })
                                                    : a,
                                        }),
                                    (0, n.jsx)(u.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, s.isEmpty)(r) &&
                                        (0, n.jsxs)("div", {
                                            className: _.Wi,
                                            children: [
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: _.h_,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: _.XV,
                                                    "aria-hidden": "true",
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != A &&
                                        (0, n.jsx)("div", {
                                            className: _.oU,
                                            children: (0, n.jsx)(m.Ay, {
                                                variant: m.qP.BLUE,
                                                progress: (0, s.clamp)(A, 0, 1),
                                                maximum: 1,
                                                glowing: y,
                                            }),
                                        }),
                                    k && (0, n.jsx)("div", { className: _.Cj }),
                                ],
                            }),
                            k &&
                                (0, n.jsxs)("div", {
                                    className: _.yk,
                                    children: [
                                        D &&
                                            (0, n.jsx)(x.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: g.intl.string(g.t.sEAnVH),
                                            }),
                                        !D &&
                                            (0, n.jsx)(i.$nd, {
                                                text: C,
                                                variant: !U && (0, d.q)(w) ? "primary" : "overlay-primary",
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
function b(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: l()(_.eq, r), draggable: "false" })
          : t;
}
