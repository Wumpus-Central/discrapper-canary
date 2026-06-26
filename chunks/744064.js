"use strict";
n.d(t, { S: () => L });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(562708),
    u = n(43990),
    c = n(331322),
    d = n(821609),
    _ = n(462887),
    h = n(602853),
    f = n(661531),
    p = n(993077),
    E = n(834730),
    m = n(403581),
    g = n(534514),
    A = n(736653),
    I = n(139286),
    T = n(531260),
    S = n(914410),
    y = n(174459),
    C = n(872725),
    N = n(3074),
    v = n(465794),
    R = n(788868),
    O = n(652215),
    b = n(375708),
    D = n(853903);
function L(e) {
    let {
            id: t,
            title: n,
            description: s,
            descriptionNote: L,
            caption: M,
            pillText: P,
            primaryAsset: x,
            primaryAssetClassName: k,
            backgroundAssetUrl: U,
            progress: G,
            ctaIcon: F,
            ctaIconPosition: V,
            ctaText: B,
            ctaVariant: j,
            ctaDisabled: H,
            ctaLoading: Y,
            onCtaClick: W,
            subscriptionRequired: K,
            isThirdPartyPerk: $ = !1,
            glowing: z = !1,
            progressGlowing: q = !1,
            featured: Z,
            className: X,
            containerClassName: Q,
            tabIndex: J = 0,
            blurTint: ee,
            footerContent: et,
            analyticsOptions: en,
            onFocus: ei,
        } = e,
        er = (0, A.DP)(),
        { fractionalState: es } = (0, T.A)(),
        ea = (0, N.N)(),
        eo = { name: t };
    en?.thirdPartyPartner != null && (eo.third_party_partner = en.thirdPartyPartner),
        (0, I.A)({ type: l.ImpressionTypes.VIEW, name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eo });
    let el = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    y.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, o.snakeCase)(n),
                        partner: en?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [en?.thirdPartyPartner, n],
        ),
        eu = r.useCallback(() => {
            null != W &&
                (W(),
                y.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, o.snakeCase)(n),
                    function_name: (0, o.snakeCase)(W.name),
                }));
        }, [W, n]),
        ec = !0 === K && ($ ? !1 === ea : es === R.xc.FP_ONLY),
        ed = !(0, o.isEmpty)(U),
        e_ = ed && (0, _.q)(er),
        eh = (0, h.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
        ef = ec || !(0, o.isEmpty)(B);
    return (0, i.jsx)(u.N, {
        theme: e_ ? O.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(C.A, {
                id: t,
                tabIndex: J,
                onMouseEnter: el,
                onFocus: ei,
                cardType: p.s.PRIMARY,
                glowing: z,
                hueRotate: 25,
                glowAmount: (0, _.M)(er) ? 2 : 8,
                blurAmount: 10,
                className: a()(D.Ui, Q, { [D.Tn]: ed }),
                cardClassName: a()(D.Nr, e, X, { [D.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != U ? `url(${U})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, o.isEmpty)(P) &&
                        (0, i.jsx)(E.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: D.Io,
                            children: P,
                        }),
                    (0, i.jsxs)("div", {
                        className: D.qh,
                        children: [
                            Z &&
                                (0, i.jsx)("div", {
                                    className: D.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(w, { asset: x, className: k }),
                                }),
                            (0, i.jsx)(w, { asset: x, className: k }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: D.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: D.u_,
                                style: { "--custom-tint-color": ee ?? eh },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: D.P_,
                                children: [
                                    ec &&
                                        (0, i.jsxs)("div", {
                                            className: D.d_,
                                            children: [
                                                (0, i.jsx)(m.t, { size: "sm", color: f.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, o.isEmpty)(M) &&
                                        (0, i.jsx)("div", {
                                            className: D.OU,
                                            children:
                                                "string" == typeof M
                                                    ? (0, i.jsx)(E.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: M,
                                                      })
                                                    : M,
                                        }),
                                    (0, i.jsx)(g.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, o.isEmpty)(s) &&
                                        (0, i.jsxs)("div", {
                                            className: D.Wi,
                                            children: [
                                                (0, i.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.h_,
                                                    children: (0, o.isEmpty)(L)
                                                        ? s
                                                        : (0, i.jsxs)(c.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: s }),
                                                                  (0, i.jsx)("div", { children: L }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != G &&
                                        (0, i.jsx)("div", {
                                            className: D.oU,
                                            children: (0, i.jsx)(S.Ay, {
                                                variant: S.qP.BLUE,
                                                progress: (0, o.clamp)(G, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != et && (0, i.jsx)("div", { className: D.Gv, children: et }),
                                    ef && (0, i.jsx)("div", { className: D.Cj }),
                                ],
                            }),
                            ef &&
                                (0, i.jsxs)("div", {
                                    className: D.yk,
                                    children: [
                                        ec &&
                                            (0, i.jsx)(v.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: b.intl.string(b.t.sEAnVH),
                                            }),
                                        !ec &&
                                            (0, i.jsx)(d.$, {
                                                icon: F,
                                                iconPosition: V,
                                                text: B,
                                                variant: j ?? (!ed && (0, _.q)(er) ? "primary" : "overlay-primary"),
                                                onClick: eu,
                                                disabled: H,
                                                loading: Y,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
}
function w(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: a()(D.eq, n), draggable: "false" })
          : t;
}
