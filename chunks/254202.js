a.d(t, { S: () => G });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    c = a(562708),
    d = a(821609),
    o = a(43990),
    u = a(462887),
    m = a(602853),
    p = a(661531),
    b = a(993077),
    f = a(834730),
    h = a(403581),
    g = a(297264),
    R = a(736653),
    E = a(139286),
    x = a(531260),
    N = a(914410),
    _ = a(174459),
    A = a(872725),
    v = a(721157),
    O = a(555393),
    I = a(51965),
    P = a(140735),
    C = a(496431),
    T = a(685477),
    U = a(660183),
    M = a(191740);
function S(e) {
    let { digit: t } = e;
    return (0, n.jsx)("div", {
        className: M.U2,
        children: (0, n.jsx)(f.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
}
function j() {
    return (0, n.jsxs)("svg", {
        className: M.kx,
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
        className: M.Os,
        children: [
            (0, n.jsx)("div", { className: M.Mc, children: (0, n.jsx)(S, { digit: s }) }),
            (0, n.jsx)(S, { digit: i }),
            a && (0, n.jsx)(j, {}),
        ],
    });
}
function y(e) {
    let { label: t } = e;
    return (0, n.jsx)(f.E, { variant: "text-xs/medium", color: "text-strong", children: t });
}
function B(e) {
    let { endsAt: t } = e,
        { days: a, hours: s, minutes: i } = (0, C.A)(t, 6e4);
    return (0, n.jsxs)("div", {
        role: "timer",
        children: [
            (0, n.jsxs)("div", {
                className: M.Vg,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(L, { value: a, hasColon: !0 }),
                    (0, n.jsx)(L, { value: s, hasColon: !0 }),
                    (0, n.jsx)(L, { value: i, hasColon: !1 }),
                    (0, n.jsx)(y, { label: U.intl.string(T.default["7TxNKE"]) }),
                    (0, n.jsx)(y, { label: U.intl.string(T.default["7pATiR"]) }),
                    (0, n.jsx)(y, { label: U.intl.string(T.default.dXR9qI) }),
                ],
            }),
            (0, n.jsx)(P.A, { children: U.intl.format(U.t.j6IyVe, { days: a, hours: s, minutes: i }) }),
        ],
    });
}
var D = a(465794),
    k = a(325652),
    w = a(202541),
    Y = a(652215),
    V = a(799544);
function G(e) {
    let {
            id: t,
            title: a,
            description: i,
            descriptionNote: P,
            caption: C,
            pillText: T,
            primaryAsset: M,
            primaryAssetClassName: S,
            backgroundAssetUrl: j,
            progress: L,
            ctaIcon: y,
            ctaIconPosition: G,
            ctaText: X,
            ctaVariant: F,
            ctaDisabled: W,
            ctaLoading: z,
            onCtaClick: K,
            subscriptionRequired: q,
            isThirdPartyPerk: $ = !1,
            glowing: J = !1,
            autoClickCta: Z = !1,
            progressGlowing: Q = !1,
            featured: ee = !1,
            phase: et = k.L.DEFAULT,
            teaserEndsAt: ea,
            className: en,
            containerClassName: es,
            tabIndex: ei = 0,
            blurTint: er,
            footerContent: el,
            analyticsOptions: ec,
            onFocus: ed,
            listItemProps: eo,
        } = e,
        eu = (0, R.DP)(),
        { fractionalState: em } = (0, x.A)(),
        ep = (0, O.N)(),
        eb = { name: t };
    (ec?.thirdPartyPartner != null && (eb.third_party_partner = ec.thirdPartyPartner),
        (0, E.A)({ type: c.ImpressionTypes.VIEW, name: c.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eb }));
    let ef = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    _.default.track(Y.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(a),
                        partner: ec?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ec?.thirdPartyPartner, a],
        ),
        eh = s.useCallback(() => {
            null != K &&
                (K(),
                _.default.track(Y.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(a),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, a]),
        eg = !0 === q && ($ ? ep?.state === v.zE.UPSELL : em === w.xc.FP_ONLY),
        eR = !$ || ep?.state === v.zE.CAN_CLAIM,
        eE = s.useRef(!1);
    s.useEffect(() => {
        !Z || eE.current || W || eg || !eR || ((eE.current = !0), eh());
    }, [Z, eR, W, eh, eg]);
    let ex = !(0, l.isEmpty)(j),
        eN = ex && (0, u.q)(eu),
        e_ = (0, m.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eA = eg || !(0, l.isEmpty)(X),
        ev = F ?? (!ex && (0, u.q)(eu) ? "primary" : "overlay-primary"),
        eO = (0, l.isEmpty)(X)
            ? null
            : {
                  icon: y,
                  iconPosition: G,
                  text: X,
                  variant: ev,
                  size: ee ? "md" : void 0,
                  onClick: eh,
                  disabled: W,
                  loading: z,
                  tabIndex: eo?.tabIndex,
              },
        eI = (0, n.jsx)(D.A, {
            fullWidth: !ee,
            defaultTextOverride: U.intl.string(U.t.sEAnVH),
            tabIndex: eo?.tabIndex,
        }),
        eP = null == eO ? null : $ ? (0, n.jsx)(I.A, { ...eO }) : (0, n.jsx)(d.$, { ...eO });
    return (0, n.jsx)(o.N, {
        theme: eN ? Y.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)(A.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: ef,
                onFocus: ed,
                listItemProps: eo,
                cardType: b.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, u.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(V.Ui, es, { [V.Tn]: ex }),
                cardClassName: r()(V.Nr, e, en, { [V.j8]: ee, [V._7]: et === k.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != j ? `url(${j})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(T) &&
                        (0, n.jsx)(f.E, {
                            variant: "text-xs/bold",
                            color: et === k.L.EXPIRED ? "badge-text-default" : "badge-expressive-text-default",
                            className: V.Io,
                            children: T,
                        }),
                    (0, n.jsxs)("div", {
                        className: V.qh,
                        children: [
                            ee &&
                                (0, n.jsx)("div", {
                                    className: V.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(H, { asset: M, className: S }),
                                }),
                            (0, n.jsx)(H, { asset: M, className: S }),
                        ],
                    }),
                    ee &&
                        (0, n.jsxs)("div", {
                            className: V.iy,
                            style: { "--custom-tint-color": er ?? e_ },
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("div", { className: V.u_ }), (0, n.jsx)("div", { className: V.G3 })],
                        }),
                    (0, n.jsxs)("div", {
                        className: V.hQ,
                        children: [
                            !ee &&
                                (0, n.jsx)("div", {
                                    className: V.u_,
                                    style: { "--custom-tint-color": er ?? e_ },
                                    "aria-hidden": !0,
                                }),
                            (0, n.jsxs)("div", {
                                className: V.P_,
                                children: [
                                    eg &&
                                        (0, n.jsxs)("div", {
                                            className: V.d_,
                                            children: [
                                                (0, n.jsx)(h.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: U.intl.string(U.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(C) &&
                                        (0, n.jsx)("div", {
                                            className: V.OU,
                                            children:
                                                "string" == typeof C
                                                    ? (0, n.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: C,
                                                      })
                                                    : C,
                                        }),
                                    (0, n.jsx)(g.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && V.jC),
                                        children: a,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, n.jsxs)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: V.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(P) &&
                                                    (0, n.jsx)("div", { className: V.Ph, children: P }),
                                            ],
                                        }),
                                    null != L &&
                                        (0, n.jsx)("div", {
                                            className: V.oU,
                                            children: (0, n.jsx)(N.Ay, {
                                                variant: N.qP.BLUE,
                                                progress: (0, l.clamp)(L, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === k.L.TEASER &&
                                        null != ea &&
                                        (0, n.jsx)("div", { className: V.Gv, children: (0, n.jsx)(B, { endsAt: ea }) }),
                                    null != el && (0, n.jsx)("div", { className: V.Gv, children: el }),
                                    eA && (0, n.jsx)("div", { className: V.Cj }),
                                ],
                            }),
                            eA && (0, n.jsx)("div", { className: V.yk, children: eg ? eI : eP }),
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
          ? (0, n.jsx)("img", { src: t, alt: "", className: r()(V.eq, a), draggable: "false" })
          : t;
}
