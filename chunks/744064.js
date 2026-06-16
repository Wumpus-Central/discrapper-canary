r.d(t, { S: () => y });
var i = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    n = r(735438),
    o = r(562708),
    d = r(43990),
    c = r(331322),
    u = r(821609),
    m = r(462887),
    C = r(602853),
    h = r(661531),
    x = r(993077),
    p = r(834730),
    _ = r(403581),
    g = r(534514),
    R = r(736653),
    f = r(139286),
    j = r(531260),
    E = r(914410),
    A = r(174459),
    v = r(872725),
    N = r(465794),
    P = r(788868),
    D = r(652215),
    I = r(375708),
    b = r(555599);
let y = (e) => {
    let {
            id: t,
            title: r,
            description: l,
            descriptionNote: y,
            caption: O,
            pillText: S,
            primaryAsset: T,
            primaryAssetClassName: M,
            backgroundAssetUrl: k,
            progress: L,
            ctaIcon: U,
            ctaIconPosition: B,
            ctaText: F,
            ctaVariant: H,
            ctaDisabled: G,
            ctaLoading: V,
            onCtaClick: W,
            subscriptionRequired: K,
            glowing: Z = !1,
            progressGlowing: Y = !1,
            featured: z,
            className: $,
            containerClassName: X,
            tabIndex: q = 0,
            blurTint: Q,
            footerContent: J,
            analyticsOptions: ee,
            onFocus: et,
        } = e,
        er = (0, R.DP)(),
        { fractionalState: ei } = (0, j.A)(),
        es = { name: t };
    ee?.thirdPartyPartner != null && (es.third_party_partner = ee.thirdPartyPartner),
        (0, f.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: es });
    let el = s.useMemo(
            () =>
                (0, n.debounce)(() => {
                    A.default.track(D.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, n.snakeCase)(r),
                        partner: ee?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ee?.thirdPartyPartner, r],
        ),
        ea = s.useCallback(() => {
            null != W &&
                (W(),
                A.default.track(D.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, n.snakeCase)(r),
                    function_name: (0, n.snakeCase)(W.name),
                }));
        }, [W, r]),
        en = K && ei === P.xc.FP_ONLY,
        eo = !(0, n.isEmpty)(k),
        ed = eo && (0, m.q)(er),
        ec = (0, C.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        eu = en || !(0, n.isEmpty)(F);
    return (0, i.jsx)(d.N, {
        theme: ed ? D.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(v.A, {
                id: t,
                tabIndex: q,
                onMouseEnter: el,
                onFocus: et,
                cardType: x.s.PRIMARY,
                glowing: Z,
                hueRotate: 25,
                glowAmount: (0, m.M)(er) ? 2 : 8,
                blurAmount: 10,
                className: a()(b.Ui, X, { [b.Tn]: eo }),
                cardClassName: a()(b.Nr, e, $, { [b.j8]: z }),
                cardStyle: {
                    backgroundImage: null != k ? `url(${k})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, n.isEmpty)(S) &&
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: b.Io,
                            children: S,
                        }),
                    (0, i.jsxs)("div", {
                        className: b.qh,
                        children: [
                            z &&
                                (0, i.jsx)("div", {
                                    className: b.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(w, { asset: T, className: M }),
                                }),
                            (0, i.jsx)(w, { asset: T, className: M }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: b.u_,
                                style: { "--custom-tint-color": Q ?? ec },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: b.P_,
                                children: [
                                    en &&
                                        (0, i.jsxs)("div", {
                                            className: b.d_,
                                            children: [
                                                (0, i.jsx)(_.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(I.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, n.isEmpty)(O) &&
                                        (0, i.jsx)("div", {
                                            className: b.OU,
                                            children:
                                                "string" == typeof O
                                                    ? (0, i.jsx)(p.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: O,
                                                      })
                                                    : O,
                                        }),
                                    (0, i.jsx)(g.D, { variant: "heading-lg/semibold", children: r }),
                                    !(0, n.isEmpty)(l) &&
                                        (0, i.jsxs)("div", {
                                            className: b.Wi,
                                            children: [
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: b.h_,
                                                    children: (0, n.isEmpty)(y)
                                                        ? l
                                                        : (0, i.jsxs)(c.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: l }),
                                                                  (0, i.jsx)("div", { children: y }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: b.XV,
                                                    inert: !0,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != L &&
                                        (0, i.jsx)("div", {
                                            className: b.oU,
                                            children: (0, i.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, n.clamp)(L, 0, 1),
                                                maximum: 1,
                                                glowing: Y,
                                            }),
                                        }),
                                    null != J && (0, i.jsx)("div", { className: b.Gv, children: J }),
                                    eu && (0, i.jsx)("div", { className: b.Cj }),
                                ],
                            }),
                            eu &&
                                (0, i.jsxs)("div", {
                                    className: b.yk,
                                    children: [
                                        en &&
                                            (0, i.jsx)(N.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: I.intl.string(I.t.sEAnVH),
                                            }),
                                        !en &&
                                            (0, i.jsx)(u.$, {
                                                icon: U,
                                                iconPosition: B,
                                                text: F,
                                                variant: H ?? (!eo && (0, m.q)(er) ? "primary" : "overlay-primary"),
                                                onClick: ea,
                                                disabled: G,
                                                loading: V,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function w(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: a()(b.eq, r), draggable: "false" })
          : t;
}
