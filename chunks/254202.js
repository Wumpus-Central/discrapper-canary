a.d(t, { S: () => G });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    d = a(562708),
    c = a(17928),
    o = a(821609),
    u = a(43990),
    m = a(462887),
    b = a(602853),
    p = a(661531),
    f = a(993077),
    h = a(834730),
    g = a(403581),
    x = a(297264),
    R = a(736653),
    N = a(139286),
    E = a(914410),
    A = a(287809),
    _ = a(174459),
    v = a(872725),
    O = a(236233),
    I = a(555393),
    P = a(51965),
    C = a(140735),
    M = a(496431),
    U = a(685477),
    T = a(105292),
    j = a(191740);
function S(e) {
    let { digit: t } = e;
    return (0, n.jsx)("div", {
        className: j.U2,
        children: (0, n.jsx)(h.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
}
function y() {
    return (0, n.jsxs)("svg", {
        className: j.kx,
        width: "2",
        height: "7",
        viewBox: "0 0 2 7",
        "aria-hidden": "true",
        children: [
            (0, n.jsx)("circle", { cx: "1", cy: "1", r: "1", fill: "currentColor" }),
            (0, n.jsx)("circle", { cx: "1", cy: "6", r: "1", fill: "currentColor" }),
        ],
    });
}
function L(e) {
    let { value: t, hasColon: a } = e,
        [s, i] = String(t).padStart(2, "0");
    return (0, n.jsxs)("div", {
        className: j.Os,
        children: [
            (0, n.jsx)("div", { className: j.Mc, children: (0, n.jsx)(S, { digit: s }) }),
            (0, n.jsx)(S, { digit: i }),
            a && (0, n.jsx)(y, {}),
        ],
    });
}
function B(e) {
    let { label: t } = e;
    return (0, n.jsx)(h.E, { variant: "text-xs/medium", color: "text-strong", children: t });
}
function w(e) {
    let { endsAt: t } = e,
        { days: a, hours: s, minutes: i } = (0, M.A)(t, 6e4);
    return (0, n.jsxs)("div", {
        role: "timer",
        children: [
            (0, n.jsxs)("div", {
                className: j.Vg,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(L, { value: a, hasColon: !0 }),
                    (0, n.jsx)(L, { value: s, hasColon: !0 }),
                    (0, n.jsx)(L, { value: i, hasColon: !1 }),
                    (0, n.jsx)(B, { label: T.intl.string(U.default["7TxNKE"]) }),
                    (0, n.jsx)(B, { label: T.intl.string(U.default["7pATiR"]) }),
                    (0, n.jsx)(B, { label: T.intl.string(U.default.dXR9qI) }),
                ],
            }),
            (0, n.jsx)(C.A, { children: T.intl.format(T.t.j6IyVe, { days: a, hours: s, minutes: i }) }),
        ],
    });
}
var k = a(465794),
    Y = a(325652),
    V = a(652215),
    D = a(799544);
function G(e) {
    let {
            id: t,
            title: a,
            description: i,
            descriptionNote: C,
            caption: M,
            pillText: U,
            primaryAsset: j,
            primaryAssetClassName: S,
            backgroundAssetUrl: y,
            progress: L,
            ctaIcon: B,
            ctaIconPosition: G,
            ctaText: X,
            ctaVariant: W,
            ctaDisabled: z,
            ctaLoading: F,
            onCtaClick: K,
            subscriptionRequired: q,
            isThirdPartyPerk: $ = !1,
            glowing: J = !1,
            autoClickCta: Z = !1,
            progressGlowing: Q = !1,
            featured: ee = !1,
            phase: et = Y.L.DEFAULT,
            teaserEndsAt: ea,
            className: en,
            containerClassName: es,
            tabIndex: ei = 0,
            blurTint: er,
            footerContent: el,
            analyticsOptions: ed,
            onFocus: ec,
            listItemProps: eo,
        } = e,
        eu = (0, R.DP)(),
        em = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        eb = em?.isFractionalPremiumWithNoStandardSub() ?? !1,
        ep = (0, I.N)(),
        ef = { name: t };
    (ed?.thirdPartyPartner != null && (ef.third_party_partner = ed.thirdPartyPartner),
        (0, N.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ef }));
    let eh = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    _.default.track(V.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(a),
                        partner: ed?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ed?.thirdPartyPartner, a],
        ),
        eg = s.useCallback(() => {
            null != K &&
                (K(),
                _.default.track(V.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(a),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, a]),
        ex = !0 === q && ($ ? ep?.state === O.zE.UPSELL : eb),
        eR = !$ || ep?.state === O.zE.CAN_CLAIM,
        eN = s.useRef(!1);
    s.useEffect(() => {
        !Z || eN.current || z || ex || !eR || ((eN.current = !0), eg());
    }, [Z, eR, z, eg, ex]);
    let eE = !(0, l.isEmpty)(y),
        eA = eE && (0, m.q)(eu),
        e_ = (0, b.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        ev = ex || !(0, l.isEmpty)(X),
        eO = W ?? (!eE && (0, m.q)(eu) ? "primary" : "overlay-primary"),
        eI = (0, l.isEmpty)(X)
            ? null
            : {
                  icon: B,
                  iconPosition: G,
                  text: X,
                  variant: eO,
                  size: ee ? "md" : void 0,
                  onClick: eg,
                  disabled: z,
                  loading: F,
                  tabIndex: eo?.tabIndex,
              },
        eP = (0, n.jsx)(k.A, {
            fullWidth: !ee,
            defaultTextOverride: T.intl.string(T.t.sEAnVH),
            tabIndex: eo?.tabIndex,
        }),
        eC = null == eI ? null : $ ? (0, n.jsx)(P.A, { ...eI }) : (0, n.jsx)(o.$, { ...eI });
    return (0, n.jsx)(u.N, {
        theme: eA ? V.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)(v.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eh,
                onFocus: ec,
                listItemProps: eo,
                cardType: f.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, m.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(D.Ui, es, { [D.Tn]: eE }),
                cardClassName: r()(D.Nr, e, en, { [D.j8]: ee, [D._7]: et === Y.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != y ? `url(${y})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(U) &&
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/bold",
                            color: et === Y.L.EXPIRED ? "badge-secondary-text" : "badge-expressive-text",
                            className: D.Io,
                            children: U,
                        }),
                    (0, n.jsxs)("div", {
                        className: D.qh,
                        children: [
                            ee &&
                                (0, n.jsx)("div", {
                                    className: D.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(H, { asset: j, className: S }),
                                }),
                            (0, n.jsx)(H, { asset: j, className: S }),
                        ],
                    }),
                    ee &&
                        (0, n.jsxs)("div", {
                            className: D.iy,
                            style: { "--custom-tint-color": er ?? e_ },
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("div", { className: D.u_ }), (0, n.jsx)("div", { className: D.G3 })],
                        }),
                    (0, n.jsxs)("div", {
                        className: D.hQ,
                        children: [
                            !ee &&
                                (0, n.jsx)("div", {
                                    className: D.u_,
                                    style: { "--custom-tint-color": er ?? e_ },
                                    "aria-hidden": !0,
                                }),
                            (0, n.jsxs)("div", {
                                className: D.P_,
                                children: [
                                    ex &&
                                        (0, n.jsxs)("div", {
                                            className: D.d_,
                                            children: [
                                                (0, n.jsx)(g.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: T.intl.string(T.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(M) &&
                                        (0, n.jsx)("div", {
                                            className: D.OU,
                                            children:
                                                "string" == typeof M
                                                    ? (0, n.jsx)(h.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: M,
                                                      })
                                                    : M,
                                        }),
                                    (0, n.jsx)(x.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && D.jC),
                                        children: a,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, n.jsxs)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: D.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(C) &&
                                                    (0, n.jsx)("div", { className: D.Ph, children: C }),
                                            ],
                                        }),
                                    null != L &&
                                        (0, n.jsx)("div", {
                                            className: D.oU,
                                            children: (0, n.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, l.clamp)(L, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === Y.L.TEASER &&
                                        null != ea &&
                                        (0, n.jsx)("div", { className: D.Gv, children: (0, n.jsx)(w, { endsAt: ea }) }),
                                    null != el && (0, n.jsx)("div", { className: D.Gv, children: el }),
                                    ev && (0, n.jsx)("div", { className: D.Cj }),
                                ],
                            }),
                            ev && (0, n.jsx)("div", { className: D.yk, children: ex ? eP : eC }),
                        ],
                    }),
                ],
            }),
    });
}
function H(e) {
    let { asset: t, className: a } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: r()(D.eq, a), draggable: "false" })
          : t;
}
