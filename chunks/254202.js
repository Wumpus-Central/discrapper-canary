n.d(t, { S: () => G });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    d = n(562708),
    c = n(17928),
    o = n(821609),
    u = n(43990),
    m = n(462887),
    b = n(602853),
    p = n(661531),
    f = n(993077),
    h = n(834730),
    g = n(403581),
    N = n(297264),
    R = n(736653),
    x = n(139286),
    E = n(914410),
    _ = n(287809),
    A = n(174459),
    v = n(872725),
    O = n(721157),
    P = n(555393),
    I = n(51965),
    C = n(140735),
    U = n(496431),
    T = n(19107),
    M = n(105292),
    S = n(191740);
function j(e) {
    let { digit: t } = e;
    return (0, a.jsx)("div", {
        className: S.U2,
        children: (0, a.jsx)(h.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
}
function L() {
    return (0, a.jsxs)("svg", {
        className: S.kx,
        width: "2",
        height: "7",
        viewBox: "0 0 2 7",
        "aria-hidden": "true",
        children: [
            (0, a.jsx)("circle", { cx: "1", cy: "1", r: "1", fill: "currentColor" }),
            (0, a.jsx)("circle", { cx: "1", cy: "6", r: "1", fill: "currentColor" }),
        ],
    });
}
function y(e) {
    let { value: t, hasColon: n } = e,
        [s, i] = String(t).padStart(2, "0");
    return (0, a.jsxs)("div", {
        className: S.Os,
        children: [
            (0, a.jsx)("div", { className: S.Mc, children: (0, a.jsx)(j, { digit: s }) }),
            (0, a.jsx)(j, { digit: i }),
            n && (0, a.jsx)(L, {}),
        ],
    });
}
function B(e) {
    let { label: t } = e;
    return (0, a.jsx)(h.E, { variant: "text-xs/medium", color: "text-strong", children: t });
}
function w(e) {
    let { endsAt: t } = e,
        { days: n, hours: s, minutes: i } = (0, U.A)(t, 6e4);
    return (0, a.jsxs)("div", {
        role: "timer",
        children: [
            (0, a.jsxs)("div", {
                className: S.Vg,
                "aria-hidden": "true",
                children: [
                    (0, a.jsx)(y, { value: n, hasColon: !0 }),
                    (0, a.jsx)(y, { value: s, hasColon: !0 }),
                    (0, a.jsx)(y, { value: i, hasColon: !1 }),
                    (0, a.jsx)(B, { label: M.intl.string(T.default["7TxNKE"]) }),
                    (0, a.jsx)(B, { label: M.intl.string(T.default["7pATiR"]) }),
                    (0, a.jsx)(B, { label: M.intl.string(T.default.dXR9qI) }),
                ],
            }),
            (0, a.jsx)(C.A, { children: M.intl.format(M.t.j6IyVe, { days: n, hours: s, minutes: i }) }),
        ],
    });
}
var k = n(465794),
    Y = n(325652),
    D = n(652215),
    V = n(799544);
function G(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: C,
            caption: U,
            pillText: T,
            primaryAsset: S,
            primaryAssetClassName: j,
            backgroundAssetUrl: L,
            progress: y,
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
            teaserEndsAt: en,
            className: ea,
            containerClassName: es,
            tabIndex: ei = 0,
            blurTint: er,
            footerContent: el,
            analyticsOptions: ed,
            onFocus: ec,
            listItemProps: eo,
        } = e,
        eu = (0, R.DP)(),
        em = (0, c.bG)([_.default], () => _.default.getCurrentUser()),
        eb = em?.isFractionalPremiumWithNoStandardSub() ?? !1,
        ep = (0, P.N)(),
        ef = { name: t };
    (ed?.thirdPartyPartner != null && (ef.third_party_partner = ed.thirdPartyPartner),
        (0, x.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ef }));
    let eh = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    A.default.track(D.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: ed?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ed?.thirdPartyPartner, n],
        ),
        eg = s.useCallback(() => {
            null != K &&
                (K(),
                A.default.track(D.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eN = !0 === q && ($ ? ep?.state === O.zE.UPSELL : eb),
        eR = !$ || ep?.state === O.zE.CAN_CLAIM,
        ex = s.useRef(!1);
    s.useEffect(() => {
        !Z || ex.current || z || eN || !eR || ((ex.current = !0), eg());
    }, [Z, eR, z, eg, eN]);
    let eE = !(0, l.isEmpty)(L),
        e_ = eE && (0, m.q)(eu),
        eA = (0, b.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        ev = eN || !(0, l.isEmpty)(X),
        eO = W ?? (!eE && (0, m.q)(eu) ? "primary" : "overlay-primary"),
        eP = (0, l.isEmpty)(X)
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
        eI = (0, a.jsx)(k.A, {
            fullWidth: !ee,
            defaultTextOverride: M.intl.string(M.t.sEAnVH),
            tabIndex: eo?.tabIndex,
        }),
        eC = null == eP ? null : $ ? (0, a.jsx)(I.A, { ...eP }) : (0, a.jsx)(o.$, { ...eP });
    return (0, a.jsx)(u.N, {
        theme: e_ ? D.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(v.A, {
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
                className: r()(V.Ui, es, { [V.Tn]: eE }),
                cardClassName: r()(V.Nr, e, ea, { [V.j8]: ee, [V._7]: et === Y.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != L ? `url(${L})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(T) &&
                        (0, a.jsx)(h.E, {
                            variant: "text-xs/bold",
                            color: et === Y.L.EXPIRED ? "badge-secondary-text" : "badge-expressive-text",
                            className: V.Io,
                            children: T,
                        }),
                    (0, a.jsxs)("div", {
                        className: V.qh,
                        children: [
                            ee &&
                                (0, a.jsx)("div", {
                                    className: V.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(H, { asset: S, className: j }),
                                }),
                            (0, a.jsx)(H, { asset: S, className: j }),
                        ],
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: V.iy,
                            style: { "--custom-tint-color": er ?? eA },
                            "aria-hidden": !0,
                            children: [(0, a.jsx)("div", { className: V.u_ }), (0, a.jsx)("div", { className: V.G3 })],
                        }),
                    (0, a.jsxs)("div", {
                        className: V.hQ,
                        children: [
                            !ee &&
                                (0, a.jsx)("div", {
                                    className: V.u_,
                                    style: { "--custom-tint-color": er ?? eA },
                                    "aria-hidden": !0,
                                }),
                            (0, a.jsxs)("div", {
                                className: V.P_,
                                children: [
                                    eN &&
                                        (0, a.jsxs)("div", {
                                            className: V.d_,
                                            children: [
                                                (0, a.jsx)(g.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: M.intl.string(M.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(U) &&
                                        (0, a.jsx)("div", {
                                            className: V.OU,
                                            children:
                                                "string" == typeof U
                                                    ? (0, a.jsx)(h.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: U,
                                                      })
                                                    : U,
                                        }),
                                    (0, a.jsx)(N.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && V.jC),
                                        children: n,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: V.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(C) &&
                                                    (0, a.jsx)("div", { className: V.Ph, children: C }),
                                            ],
                                        }),
                                    null != y &&
                                        (0, a.jsx)("div", {
                                            className: V.oU,
                                            children: (0, a.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, l.clamp)(y, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === Y.L.TEASER &&
                                        null != en &&
                                        (0, a.jsx)("div", { className: V.Gv, children: (0, a.jsx)(w, { endsAt: en }) }),
                                    null != el && (0, a.jsx)("div", { className: V.Gv, children: el }),
                                    ev && (0, a.jsx)("div", { className: V.Cj }),
                                ],
                            }),
                            ev && (0, a.jsx)("div", { className: V.yk, children: eN ? eI : eC }),
                        ],
                    }),
                ],
            }),
    });
}
function H(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, a.jsx)("img", { src: t, alt: "", className: r()(V.eq, n), draggable: "false" })
          : t;
}
