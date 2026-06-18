"use strict";
n.d(t, { S: () => k });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(562708),
    u = n(17928),
    c = n(43990),
    d = n(331322),
    _ = n(821609),
    h = n(462887),
    f = n(602853),
    p = n(661531),
    E = n(993077),
    m = n(834730),
    g = n(403581),
    A = n(534514),
    I = n(736653),
    T = n(139286),
    S = n(531260),
    y = n(914410),
    C = n(166403),
    N = n(174459),
    v = n(872725),
    R = n(428262),
    O = n(852218),
    b = n(788868);
let D = new Set([b.k4, b.Dw, b.pX, b.Hp, b.fY, b.bi, b.J7, b.a7, b.Tt]),
    L = new Set([b.gd, b.Uk]);
var w = n(465794),
    M = n(652215),
    P = n(375708),
    x = n(555599);
let k = (e) => {
    let {
            id: t,
            title: n,
            description: s,
            descriptionNote: k,
            caption: G,
            pillText: F,
            primaryAsset: V,
            primaryAssetClassName: B,
            backgroundAssetUrl: j,
            progress: H,
            ctaIcon: Y,
            ctaIconPosition: W,
            ctaText: K,
            ctaVariant: $,
            ctaDisabled: z,
            ctaLoading: q,
            onCtaClick: Z,
            subscriptionRequired: X,
            isThirdPartyPerk: Q = !1,
            glowing: J = !1,
            progressGlowing: ee = !1,
            featured: et,
            className: en,
            containerClassName: ei,
            tabIndex: er = 0,
            blurTint: es,
            footerContent: ea,
            analyticsOptions: eo,
            onFocus: el,
        } = e,
        eu = (0, I.DP)(),
        { fractionalState: ec } = (0, S.A)(),
        ed = (0, u.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        e_ = { name: t };
    eo?.thirdPartyPartner != null && (e_.third_party_partner = eo.thirdPartyPartner),
        (0, T.A)({ type: l.ImpressionTypes.VIEW, name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: e_ });
    let eh = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    N.default.track(M.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, o.snakeCase)(n),
                        partner: eo?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [eo?.thirdPartyPartner, n],
        ),
        ef = r.useCallback(() => {
            null != Z &&
                (Z(),
                N.default.track(M.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, o.snakeCase)(n),
                    function_name: (0, o.snakeCase)(Z.name),
                }));
        }, [Z, n]),
        ep =
            !0 === X &&
            (Q
                ? !(function (e, t) {
                      var n;
                      if (null == e || (!e.statusAllowsPerks && t !== b.xc.FP_SUB_PAUSED)) return !1;
                      let i = (0, R.EL)(e);
                      return (
                          null != i &&
                          b.hd[i.planId]?.premiumType === b.PremiumTypes.TIER_2 &&
                          ((n = void 0),
                          !(null != e.trialId && (n?.partnerId === O.NC ? !D.has(e.trialId) : L.has(e.trialId))))
                      );
                  })(ed, ec)
                : ec === b.xc.FP_ONLY),
        eE = !(0, o.isEmpty)(j),
        em = eE && (0, h.q)(eu),
        eg = (0, f.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eA = ep || !(0, o.isEmpty)(K);
    return (0, i.jsx)(c.N, {
        theme: em ? M.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(v.A, {
                id: t,
                tabIndex: er,
                onMouseEnter: eh,
                onFocus: el,
                cardType: E.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, h.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: a()(x.Ui, ei, { [x.Tn]: eE }),
                cardClassName: a()(x.Nr, e, en, { [x.j8]: et }),
                cardStyle: {
                    backgroundImage: null != j ? `url(${j})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, o.isEmpty)(F) &&
                        (0, i.jsx)(m.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: x.Io,
                            children: F,
                        }),
                    (0, i.jsxs)("div", {
                        className: x.qh,
                        children: [
                            et &&
                                (0, i.jsx)("div", {
                                    className: x.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(U, { asset: V, className: B }),
                                }),
                            (0, i.jsx)(U, { asset: V, className: B }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: x.u_,
                                style: { "--custom-tint-color": es ?? eg },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: x.P_,
                                children: [
                                    ep &&
                                        (0, i.jsxs)("div", {
                                            className: x.d_,
                                            children: [
                                                (0, i.jsx)(g.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: P.intl.string(P.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, o.isEmpty)(G) &&
                                        (0, i.jsx)("div", {
                                            className: x.OU,
                                            children:
                                                "string" == typeof G
                                                    ? (0, i.jsx)(m.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: G,
                                                      })
                                                    : G,
                                        }),
                                    (0, i.jsx)(A.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, o.isEmpty)(s) &&
                                        (0, i.jsxs)("div", {
                                            className: x.Wi,
                                            children: [
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: x.h_,
                                                    children: (0, o.isEmpty)(k)
                                                        ? s
                                                        : (0, i.jsxs)(d.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: s }),
                                                                  (0, i.jsx)("div", { children: k }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: x.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != H &&
                                        (0, i.jsx)("div", {
                                            className: x.oU,
                                            children: (0, i.jsx)(y.Ay, {
                                                variant: y.qP.BLUE,
                                                progress: (0, o.clamp)(H, 0, 1),
                                                maximum: 1,
                                                glowing: ee,
                                            }),
                                        }),
                                    null != ea && (0, i.jsx)("div", { className: x.Gv, children: ea }),
                                    eA && (0, i.jsx)("div", { className: x.Cj }),
                                ],
                            }),
                            eA &&
                                (0, i.jsxs)("div", {
                                    className: x.yk,
                                    children: [
                                        ep &&
                                            (0, i.jsx)(w.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: P.intl.string(P.t.sEAnVH),
                                            }),
                                        !ep &&
                                            (0, i.jsx)(_.$, {
                                                icon: Y,
                                                iconPosition: W,
                                                text: K,
                                                variant: $ ?? (!eE && (0, h.q)(eu) ? "primary" : "overlay-primary"),
                                                onClick: ef,
                                                disabled: z,
                                                loading: q,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function U(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: a()(x.eq, n), draggable: "false" })
          : t;
}
