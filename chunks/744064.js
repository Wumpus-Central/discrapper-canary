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
    h = s(827734),
    x = s(359778),
    C = s(834730),
    _ = s(403581),
    p = s(534514),
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
            ctaIconPosition: U,
            ctaText: k,
            ctaVariant: B,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: W,
            subscriptionRequired: H,
            glowing: V = !1,
            progressGlowing: K = !1,
            featured: Z,
            className: z,
            containerClassName: Y,
            tabIndex: $ = 0,
            blurTint: X,
            footerContent: q,
            backgroundElement: J,
        } = e,
        Q = (0, g.DP)(),
        { fractionalState: ee } = (0, b.A)();
    (0, f.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let et = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    v.default.track(N.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(s),
                    });
                }, 800),
            [s],
        ),
        es = a.useCallback(() => {
            null != W &&
                (W(),
                v.default.track(N.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(s),
                    function_name: (0, i.snakeCase)(W.name),
                }));
        }, [W, s]),
        en = H && ee === A.xc.FP_ONLY,
        ea = !(0, i.isEmpty)(T) || null != J,
        er = ea && (0, u.q)(Q),
        el = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        ei = en || !(0, i.isEmpty)(k);
    return (0, n.jsx)(o.N, {
        theme: er ? N.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(j.A, {
                id: t,
                tabIndex: $,
                onMouseEnter: et,
                cardType: x.s.PRIMARY,
                glowing: V,
                hueRotate: 25,
                glowAmount: (0, u.M)(Q) ? 2 : 8,
                blurAmount: 10,
                className: l()(I.Ui, Y, { [I.Tn]: ea }),
                cardClassName: l()(I.Nr, e, z, { [I.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != T ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    null != J && (0, n.jsx)("div", { className: I.d$, "aria-hidden": "true", children: J }),
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
                                style: { "--custom-tint-color": X ?? el },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: I.P_,
                                children: [
                                    en &&
                                        (0, n.jsxs)("div", {
                                            className: I.d_,
                                            children: [
                                                (0, n.jsx)(_.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
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
                                    (0, n.jsx)(p.D, { variant: "heading-lg/semibold", children: s }),
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
                                    ei && (0, n.jsx)("div", { className: I.Cj }),
                                ],
                            }),
                            ei &&
                                (0, n.jsxs)("div", {
                                    className: I.yk,
                                    children: [
                                        en &&
                                            (0, n.jsx)(E.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: P.intl.string(P.t.sEAnVH),
                                            }),
                                        !en &&
                                            (0, n.jsx)(c.$, {
                                                icon: L,
                                                iconPosition: U,
                                                text: k,
                                                variant: B ?? (!ea && (0, u.q)(Q) ? "primary" : "overlay-primary"),
                                                onClick: es,
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
