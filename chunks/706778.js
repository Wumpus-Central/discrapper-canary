n.d(t, { S: () => V });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    d = n(613412),
    o = n(855986),
    c = n(821609),
    u = n(43990),
    m = n(462887),
    b = n(602853),
    p = n(646514),
    f = n(993077),
    h = n(834730),
    N = n(403581),
    g = n(534514),
    E = n(736653),
    R = n(139286),
    x = n(914410),
    A = n(287809),
    _ = n(129230),
    v = n(872725),
    O = n(721157),
    I = n(555393),
    P = n(51965),
    C = n(140735),
    M = n(496431),
    T = n(116716),
    U = n(792996),
    j = n(191740);
function S(e) {
    let { digit: t } = e;
    return (0, a.jsx)("div", {
        className: j.U2,
        children: (0, a.jsx)(h.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
}
function y() {
    return (0, a.jsxs)("svg", {
        className: j.kx,
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
function L(e) {
    let { value: t, hasColon: n } = e,
        [s, i] = String(t).padStart(2, "0");
    return (0, a.jsxs)("div", {
        className: j.Os,
        children: [
            (0, a.jsx)("div", { className: j.Mc, children: (0, a.jsx)(S, { digit: s }) }),
            (0, a.jsx)(S, { digit: i }),
            n && (0, a.jsx)(y, {}),
        ],
    });
}
function B(e) {
    let { label: t } = e;
    return (0, a.jsx)(h.E, { variant: "body-xs/medium", color: "text-strong", children: t });
}
function w(e) {
    let { endsAt: t } = e,
        { days: n, hours: s, minutes: i } = (0, M.A)(t, 6e4);
    return (0, a.jsxs)("div", {
        role: "timer",
        children: [
            (0, a.jsxs)("div", {
                className: j.Vg,
                "aria-hidden": "true",
                children: [
                    (0, a.jsx)(L, { value: n, hasColon: !0 }),
                    (0, a.jsx)(L, { value: s, hasColon: !0 }),
                    (0, a.jsx)(L, { value: i, hasColon: !1 }),
                    (0, a.jsx)(B, { label: U.intl.string(T.default["7TxNKE"]) }),
                    (0, a.jsx)(B, { label: U.intl.string(T.default["7pATiR"]) }),
                    (0, a.jsx)(B, { label: U.intl.string(T.default.dXR9qI) }),
                ],
            }),
            (0, a.jsx)(C.A, { children: U.intl.format(U.t.j6IyVe, { days: n, hours: s, minutes: i }) }),
        ],
    });
}
var k = n(465794),
    D = n(325652),
    Y = n(652215),
    G = n(799544);
function V(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: C,
            caption: M,
            pillText: T,
            primaryAsset: j,
            primaryAssetClassName: S,
            backgroundAssetUrl: y,
            progress: L,
            ctaIcon: B,
            ctaIconPosition: V,
            ctaText: X,
            ctaVariant: W,
            ctaDisabled: F,
            ctaLoading: z,
            onCtaClick: K,
            subscriptionRequired: q,
            isThirdPartyPerk: J = !1,
            glowing: $ = !1,
            autoClickCta: Z = !1,
            progressGlowing: Q = !1,
            featured: ee = !1,
            phase: et = D.L.DEFAULT,
            teaserEndsAt: en,
            className: ea,
            containerClassName: es,
            tabIndex: ei = 0,
            blurTint: er,
            footerContent: el,
            analyticsOptions: ed,
            onFocus: eo,
            listItemProps: ec,
        } = e,
        eu = (0, E.DP)(),
        em = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        eb = em?.isFractionalPremiumWithNoStandardSub() ?? !1,
        ep = (0, I.N)(),
        ef = { name: t };
    (ed?.thirdPartyPartner != null && (ef.third_party_partner = ed.thirdPartyPartner),
        (0, R.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ef }));
    let eh = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    _.default.track(Y.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: ed?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ed?.thirdPartyPartner, n],
        ),
        eN = s.useCallback(() => {
            null != K &&
                (K(),
                _.default.track(Y.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eg = !0 === q && (J ? ep?.state === O.zE.UPSELL : eb),
        eE = !J || ep?.state === O.zE.CAN_CLAIM,
        eR = s.useRef(!1);
    s.useEffect(() => {
        !Z || eR.current || F || eg || !eE || ((eR.current = !0), eN());
    }, [Z, eE, F, eN, eg]);
    let ex = !(0, l.isEmpty)(y),
        eA = ex && (0, m.q)(eu),
        e_ = (0, b.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        ev = eg || !(0, l.isEmpty)(X),
        eO = W ?? (!ex && (0, m.q)(eu) ? "primary" : "overlay-primary"),
        eI = (0, l.isEmpty)(X)
            ? null
            : {
                  icon: B,
                  iconPosition: V,
                  text: X,
                  variant: eO,
                  size: ee ? "md" : void 0,
                  onClick: eN,
                  disabled: F,
                  loading: z,
                  tabIndex: ec?.tabIndex,
              },
        eP = (0, a.jsx)(k.A, {
            fullWidth: !ee,
            defaultTextOverride: U.intl.string(U.t.sEAnVH),
            tabIndex: ec?.tabIndex,
        }),
        eC = null == eI ? null : J ? (0, a.jsx)(P.A, { ...eI }) : (0, a.jsx)(c.$, { ...eI });
    return (0, a.jsx)(u.N, {
        theme: eA ? Y.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(v.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eh,
                onFocus: eo,
                listItemProps: ec,
                cardType: f.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, m.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(G.Ui, es, { [G.Tn]: ex }),
                cardClassName: r()(G.Nr, e, ea, { [G.j8]: ee, [G._7]: et === D.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != y ? `url(${y})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(T) &&
                        (0, a.jsx)(h.E, {
                            variant: "body-xs/semibold",
                            color: et === D.L.EXPIRED ? "badge-secondary-text" : "badge-expressive-text",
                            className: G.Io,
                            children: T,
                        }),
                    (0, a.jsxs)("div", {
                        className: G.qh,
                        children: [
                            ee &&
                                (0, a.jsx)("div", {
                                    className: G.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(H, { asset: j, className: S }),
                                }),
                            (0, a.jsx)(H, { asset: j, className: S }),
                        ],
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: G.iy,
                            style: { "--custom-tint-color": er ?? e_ },
                            "aria-hidden": !0,
                            children: [(0, a.jsx)("div", { className: G.u_ }), (0, a.jsx)("div", { className: G.G3 })],
                        }),
                    (0, a.jsxs)("div", {
                        className: G.hQ,
                        children: [
                            !ee &&
                                (0, a.jsx)("div", {
                                    className: G.u_,
                                    style: { "--custom-tint-color": er ?? e_ },
                                    "aria-hidden": !0,
                                }),
                            (0, a.jsxs)("div", {
                                className: G.P_,
                                children: [
                                    eg &&
                                        (0, a.jsxs)("div", {
                                            className: G.d_,
                                            children: [
                                                (0, a.jsx)(N.NitroWheelIcon, {
                                                    size: "sm",
                                                    color: p.A.colors.ICON_MUTED,
                                                }),
                                                (0, a.jsx)(h.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: U.intl.string(U.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(M) &&
                                        (0, a.jsx)("div", {
                                            className: G.OU,
                                            children:
                                                "string" == typeof M
                                                    ? (0, a.jsx)(h.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          children: M,
                                                      })
                                                    : M,
                                        }),
                                    (0, a.jsx)(g.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && G.jC),
                                        children: n,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)(h.E, {
                                            variant: "body-sm/normal",
                                            color: "text-default",
                                            className: G.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(C) &&
                                                    (0, a.jsx)("div", { className: G.Ph, children: C }),
                                            ],
                                        }),
                                    null != L &&
                                        (0, a.jsx)("div", {
                                            className: G.oU,
                                            children: (0, a.jsx)(x.Ay, {
                                                variant: x.qP.BLUE,
                                                progress: (0, l.clamp)(L, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === D.L.TEASER &&
                                        null != en &&
                                        (0, a.jsx)("div", { className: G.Gv, children: (0, a.jsx)(w, { endsAt: en }) }),
                                    null != el && (0, a.jsx)("div", { className: G.Gv, children: el }),
                                    ev && (0, a.jsx)("div", { className: G.Cj }),
                                ],
                            }),
                            ev && (0, a.jsx)("div", { className: G.yk, children: eg ? eP : eC }),
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
          ? (0, a.jsx)("img", { src: t, alt: "", className: r()(G.eq, n), draggable: "false" })
          : t;
}
