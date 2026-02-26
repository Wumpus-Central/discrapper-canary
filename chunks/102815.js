r.d(t, { S: () => R });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(735438),
    d = r(732955),
    u = r(462887),
    o = r(397927),
    c = r(736653),
    m = r(531260),
    h = r(613566),
    x = r(954571),
    p = r(872725),
    _ = r(857586),
    f = r(788868),
    g = r(652215),
    N = r(985018),
    b = r(355313);
let R = (e) => {
    let {
            title: t,
            description: r,
            caption: l,
            pillText: R,
            primaryAsset: E,
            primaryAssetClassName: A,
            backgroundAssetUrl: C,
            progress: T,
            ctaText: j,
            onCtaClick: P,
            subscriptionRequired: I,
            glowing: y,
            progressGlowing: S = !1,
            featured: O,
            className: w,
            blurTint: D,
        } = e,
        L = (0, c.DP)(),
        { fractionalState: U } = (0, m.A)(),
        M = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    x.default.track(g.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        B = a.useCallback(() => {
            null != P &&
                (P(),
                x.default.track(g.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(t),
                    function_name: (0, i.snakeCase)(P.name),
                }));
        }, [P, t]),
        k = I && U === f.xc.FP_ONLY,
        G = !(0, i.isEmpty)(C),
        W = G && (0, u.q)(L),
        H = (0, o.rdh)(o.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        V = k || !(0, i.isEmpty)(j);
    return (0, n.jsx)(d.NPJ, {
        theme: W ? g.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(p.A, {
                onMouseEnter: M,
                cardType: o.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!y,
                blurAmount: 6 * !!y,
                className: b.Ui,
                cardClassName: s()(b.Nr, e, w, { [b.j8]: O, [b.Tn]: G }),
                cardStyle: {
                    backgroundImage: G ? `url(${C})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(R) &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: b.Io,
                            children: R,
                        }),
                    (0, n.jsxs)("div", {
                        className: b.qh,
                        children: [
                            O &&
                                (0, n.jsx)("div", {
                                    className: b.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(v, { asset: E, className: A }),
                                }),
                            (0, n.jsx)(v, { asset: E, className: A }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: b.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: b.u_,
                                style: { "--custom-tint-color": D ?? H },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: b.P_,
                                tabIndex: 0,
                                children: [
                                    k &&
                                        (0, n.jsxs)("div", {
                                            className: b.d_,
                                            children: [
                                                (0, n.jsx)(o.tvc, { size: "sm", color: o.LU0.colors.ICON_MUTED }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: N.intl.string(N.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(l) &&
                                        (0, n.jsx)("div", {
                                            className: b.OU,
                                            children:
                                                "string" == typeof l
                                                    ? (0, n.jsx)(o.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: l,
                                                      })
                                                    : l,
                                        }),
                                    (0, n.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, i.isEmpty)(r) &&
                                        (0, n.jsxs)("div", {
                                            className: b.Wi,
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: b.h_,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: b.XV,
                                                    "aria-hidden": "true",
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != T &&
                                        (0, n.jsx)("div", {
                                            className: b.oU,
                                            children: (0, n.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, i.clamp)(T, 0, 1),
                                                maximum: 1,
                                                glowing: S,
                                            }),
                                        }),
                                    V && (0, n.jsx)("div", { className: b.Cj }),
                                ],
                            }),
                            V &&
                                (0, n.jsxs)("div", {
                                    className: b.yk,
                                    children: [
                                        k &&
                                            (0, n.jsx)(_.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: N.intl.string(N.t.sEAnVH),
                                            }),
                                        !k &&
                                            (0, n.jsx)(d.$nd, {
                                                text: j,
                                                variant: !G && (0, u.q)(L) ? "primary" : "overlay-primary",
                                                onClick: B,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function v(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: s()(b.eq, r), draggable: "false" })
          : t;
}
