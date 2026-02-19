r.d(t, { S: () => R });
var n = r(627968),
    a = r(64700),
    l = r(310784),
    s = r.n(l),
    i = r(503698),
    d = r.n(i),
    u = r(735438),
    o = r(732955),
    c = r(462887),
    m = r(397927),
    h = r(736653),
    p = r(531260),
    x = r(613566),
    g = r(872725),
    f = r(857586),
    _ = r(788868),
    b = r(652215),
    v = r(985018),
    N = r(340091);
let R = (e) => {
    let {
            title: t,
            description: r,
            caption: l,
            pillText: i,
            primaryAsset: R,
            primaryAssetClassName: E,
            backgroundAssetUrl: C,
            progress: j,
            ctaText: T,
            onCtaClick: I,
            subscriptionRequired: y,
            glowing: P,
            progressGlowing: S = !1,
            featured: O,
            className: L,
            blurTint: U,
        } = e,
        w = (0, h.DP)(),
        { fractionalState: D } = (0, p.A)(),
        B = y && D === _.xc.FP_ONLY,
        M = !(0, u.isEmpty)(C),
        k = M && (0, c.q)(w),
        G = a.useMemo(() => {
            if (null != U && "" !== U)
                try {
                    let e = s()(U);
                    return 1 === e.alpha() ? e.alpha(0.25).css() : e.css();
                } catch {
                    return;
                }
        }, [U]);
    return (0, n.jsx)(o.NPJ, {
        theme: k ? b.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(g.A, {
                cardType: m.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!P,
                blurAmount: 6 * !!P,
                className: N.Ui,
                cardClassName: d()(N.Nr, e, L, { [N.j8]: O, [N.Tn]: M }),
                cardStyle: {
                    backgroundImage: M ? `url(${C})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, u.isEmpty)(i) &&
                        (0, n.jsx)(m.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: N.Io,
                            children: i,
                        }),
                    (0, n.jsxs)("div", {
                        className: N.qh,
                        children: [
                            O &&
                                (0, n.jsx)("div", {
                                    className: N.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(A, { asset: R, className: E }),
                                }),
                            (0, n.jsx)(A, { asset: R, className: E }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: N.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: N.u_,
                                style: { backgroundColor: G },
                                "aria-hidden": "true",
                            }),
                            (0, n.jsxs)("div", {
                                className: N.P_,
                                tabIndex: (0, u.isEmpty)(T) ? 0 : void 0,
                                children: [
                                    B &&
                                        (0, n.jsxs)("div", {
                                            className: N.d_,
                                            children: [
                                                (0, n.jsx)(m.tvc, { size: "sm", color: "text-muted" }),
                                                (0, n.jsx)(m.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: v.intl.string(v.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, u.isEmpty)(l) &&
                                        (0, n.jsx)("div", {
                                            className: N.OU,
                                            children:
                                                "string" == typeof l
                                                    ? (0, n.jsx)(m.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: l,
                                                      })
                                                    : l,
                                        }),
                                    (0, n.jsx)(m.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, u.isEmpty)(r) &&
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: N.h_,
                                            children: r,
                                        }),
                                    null != j &&
                                        (0, n.jsx)("div", {
                                            className: N.oU,
                                            children: (0, n.jsx)(x.Ay, {
                                                variant: x.qP.BLUE,
                                                progress: (0, u.clamp)(j, 0, 1),
                                                maximum: 1,
                                                glowing: S,
                                            }),
                                        }),
                                    B &&
                                        (0, n.jsx)("div", {
                                            className: N.lI,
                                            children: (0, n.jsx)(f.A, {
                                                defaultTextOverride: v.intl.string(v.t.sEAnVH),
                                            }),
                                        }),
                                    !B &&
                                        !(0, u.isEmpty)(T) &&
                                        (0, n.jsx)("div", {
                                            className: N.lI,
                                            children: (0, n.jsx)(o.$nd, {
                                                text: T,
                                                variant: !M && (0, c.q)(w) ? "primary" : "overlay-primary",
                                                onClick: I,
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
};
function A(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: d()(N.eq, r) })
          : t;
}
