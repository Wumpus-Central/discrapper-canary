n.d(t, { S: () => g });
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(735438),
    d = n(110259),
    u = n(732955),
    o = n(462887),
    c = n(397927),
    m = n(736653),
    _ = n(139286),
    R = n(531260),
    h = n(914410),
    p = n(954571),
    x = n(872725),
    A = n(857586),
    E = n(788868),
    f = n(652215),
    N = n(985018),
    C = n(340091);
let g = (e) => {
    let {
            id: t,
            title: n,
            description: s,
            caption: g,
            pillText: D,
            primaryAsset: I,
            primaryAssetClassName: v,
            backgroundAssetUrl: S,
            progress: T,
            ctaText: O,
            onCtaClick: P,
            subscriptionRequired: j,
            glowing: y,
            progressGlowing: L = !1,
            featured: M,
            className: U,
            containerClassName: w,
            tabIndex: B = 0,
            blurTint: k,
        } = e,
        G = (0, m.DP)(),
        { fractionalState: W } = (0, R.A)();
    (0, _.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let V = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    p.default.track(f.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(n),
                    });
                }, 800),
            [n],
        ),
        H = a.useCallback(() => {
            null != P &&
                (P(),
                p.default.track(f.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(n),
                    function_name: (0, i.snakeCase)(P.name),
                }));
        }, [P, n]),
        Y = j && W === E.xc.FP_ONLY,
        F = !(0, i.isEmpty)(S),
        K = F && (0, o.q)(G),
        $ = (0, c.rdh)(c.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        q = Y || !(0, i.isEmpty)(O);
    return (0, r.jsx)(u.NPJ, {
        theme: K ? f.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(x.A, {
                id: t,
                tabIndex: B,
                onMouseEnter: V,
                cardType: c.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: y ? ((0, o.M)(G) ? 2 : 8) : 0,
                blurAmount: 10 * !!y,
                className: l()(C.Ui, w, { [C.Tn]: F }),
                cardClassName: l()(C.Nr, e, U, { [C.j8]: M }),
                cardStyle: {
                    backgroundImage: F ? `url(${S})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(D) &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: C.Io,
                            children: D,
                        }),
                    (0, r.jsxs)("div", {
                        className: C.qh,
                        children: [
                            M &&
                                (0, r.jsx)("div", {
                                    className: C.gW,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(b, { asset: I, className: v }),
                                }),
                            (0, r.jsx)(b, { asset: I, className: v }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: C.u_,
                                style: { "--custom-tint-color": k ?? $ },
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: C.P_,
                                children: [
                                    Y &&
                                        (0, r.jsxs)("div", {
                                            className: C.d_,
                                            children: [
                                                (0, r.jsx)(c.tvc, { size: "sm", color: c.LU0.colors.ICON_MUTED }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: N.intl.string(N.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(g) &&
                                        (0, r.jsx)("div", {
                                            className: C.OU,
                                            children:
                                                "string" == typeof g
                                                    ? (0, r.jsx)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: g,
                                                      })
                                                    : g,
                                        }),
                                    (0, r.jsx)(c.Heading, { variant: "heading-lg/semibold", children: n }),
                                    !(0, i.isEmpty)(s) &&
                                        (0, r.jsxs)("div", {
                                            className: C.Wi,
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: C.h_,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: C.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != T &&
                                        (0, r.jsx)("div", {
                                            className: C.oU,
                                            children: (0, r.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, i.clamp)(T, 0, 1),
                                                maximum: 1,
                                                glowing: L,
                                            }),
                                        }),
                                    q && (0, r.jsx)("div", { className: C.Cj }),
                                ],
                            }),
                            q &&
                                (0, r.jsxs)("div", {
                                    className: C.yk,
                                    children: [
                                        Y &&
                                            (0, r.jsx)(A.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: N.intl.string(N.t.sEAnVH),
                                            }),
                                        !Y &&
                                            (0, r.jsx)(u.$nd, {
                                                text: O,
                                                variant: !F && (0, o.q)(G) ? "primary" : "overlay-primary",
                                                onClick: H,
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
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, r.jsx)("img", { src: t, alt: "", className: l()(C.eq, n), draggable: "false" })
          : t;
}
