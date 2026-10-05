n.d(t, { S: () => V });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    c = n(562708),
    o = n(821609),
    d = n(43990),
    u = n(462887),
    m = n(602853),
    p = n(661531),
    b = n(993077),
    f = n(834730),
    _ = n(403581),
    E = n(297264),
    g = n(736653),
    h = n(139286),
    R = n(531260),
    N = n(914410),
    x = n(174459),
    A = n(872725),
    v = n(721157),
    I = n(555393),
    O = n(51965),
    P = n(140735),
    T = n(496431),
    C = n(685477),
    U = n(375708),
    S = n(191740);
function L(e) {
    let { digit: t } = e;
    return (0, a.jsx)("div", {
        className: S.U2,
        children: (0, a.jsx)(f.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
}
function M() {
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
function j(e) {
    let { value: t, hasColon: n } = e,
        [s, i] = String(t).padStart(2, "0");
    return (0, a.jsxs)("div", {
        className: S.Os,
        children: [
            (0, a.jsx)("div", { className: S.Mc, children: (0, a.jsx)(L, { digit: s }) }),
            (0, a.jsx)(L, { digit: i }),
            n && (0, a.jsx)(M, {}),
        ],
    });
}
function y(e) {
    let { label: t } = e;
    return (0, a.jsx)(f.E, { variant: "text-xs/medium", color: "text-strong", children: t });
}
function B(e) {
    let { endsAt: t } = e,
        { days: n, hours: s, minutes: i } = (0, T.A)(t, 6e4);
    return (0, a.jsxs)("div", {
        role: "timer",
        children: [
            (0, a.jsxs)("div", {
                className: S.Vg,
                "aria-hidden": "true",
                children: [
                    (0, a.jsx)(j, { value: n, hasColon: !0 }),
                    (0, a.jsx)(j, { value: s, hasColon: !0 }),
                    (0, a.jsx)(j, { value: i, hasColon: !1 }),
                    (0, a.jsx)(y, { label: U.intl.string(C.default["7TxNKE"]) }),
                    (0, a.jsx)(y, { label: U.intl.string(C.default["7pATiR"]) }),
                    (0, a.jsx)(y, { label: U.intl.string(C.default.dXR9qI) }),
                ],
            }),
            (0, a.jsx)(P.A, { children: U.intl.format(U.t.j6IyVe, { days: n, hours: s, minutes: i }) }),
        ],
    });
}
var w = n(465794),
    D = n(325652),
    k = n(202541),
    Y = n(652215),
    G = n(799544);
function V(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: P,
            caption: T,
            pillText: C,
            primaryAsset: S,
            primaryAssetClassName: L,
            backgroundAssetUrl: M,
            progress: j,
            ctaIcon: y,
            ctaIconPosition: V,
            ctaText: F,
            ctaVariant: X,
            ctaDisabled: W,
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
            analyticsOptions: ec,
            onFocus: eo,
            listItemProps: ed,
        } = e,
        eu = (0, g.DP)(),
        { fractionalState: em } = (0, R.A)(),
        ep = (0, I.N)(),
        eb = { name: t };
    (ec?.thirdPartyPartner != null && (eb.third_party_partner = ec.thirdPartyPartner),
        (0, h.A)({ type: c.ImpressionTypes.VIEW, name: c.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eb }));
    let ef = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    x.default.track(Y.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: ec?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ec?.thirdPartyPartner, n],
        ),
        e_ = s.useCallback(() => {
            null != K &&
                (K(),
                x.default.track(Y.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eE = !0 === q && (J ? ep?.state === v.zE.UPSELL : em === k.xc.FP_ONLY),
        eg = s.useRef(!1);
    s.useEffect(() => {
        !Z || eg.current || W || eE || ((eg.current = !0), e_());
    }, [Z, W, e_, eE]);
    let eh = !(0, l.isEmpty)(M),
        eR = eh && (0, u.q)(eu),
        eN = (0, m.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        ex = eE || !(0, l.isEmpty)(F),
        eA = X ?? (!eh && (0, u.q)(eu) ? "primary" : "overlay-primary"),
        ev = (0, l.isEmpty)(F)
            ? null
            : {
                  icon: y,
                  iconPosition: V,
                  text: F,
                  variant: eA,
                  size: ee ? "md" : void 0,
                  onClick: e_,
                  disabled: W,
                  loading: z,
                  tabIndex: ed?.tabIndex,
              },
        eI = (0, a.jsx)(w.A, { fullWidth: !0, defaultTextOverride: U.intl.string(U.t.sEAnVH), tabIndex: ed?.tabIndex }),
        eO = null == ev ? null : J ? (0, a.jsx)(O.A, { ...ev }) : (0, a.jsx)(o.$, { ...ev });
    return (0, a.jsx)(d.N, {
        theme: eR ? Y.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(A.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: ef,
                onFocus: eo,
                listItemProps: ed,
                cardType: b.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, u.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(G.Ui, es, { [G.Tn]: eh }),
                cardClassName: r()(G.Nr, e, ea, { [G.j8]: ee, [G._7]: et === D.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != M ? `url(${M})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(C) &&
                        (0, a.jsx)(f.E, {
                            variant: "text-xs/bold",
                            color: et === D.L.EXPIRED ? "badge-text-default" : "badge-expressive-text-default",
                            className: G.Io,
                            children: C,
                        }),
                    (0, a.jsxs)("div", {
                        className: G.qh,
                        children: [
                            ee &&
                                (0, a.jsx)("div", {
                                    className: G.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(H, { asset: S, className: L }),
                                }),
                            (0, a.jsx)(H, { asset: S, className: L }),
                        ],
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: G.iy,
                            style: { "--custom-tint-color": er ?? eN },
                            "aria-hidden": !0,
                            children: [(0, a.jsx)("div", { className: G.u_ }), (0, a.jsx)("div", { className: G.G3 })],
                        }),
                    (0, a.jsxs)("div", {
                        className: G.hQ,
                        children: [
                            !ee &&
                                (0, a.jsx)("div", {
                                    className: G.u_,
                                    style: { "--custom-tint-color": er ?? eN },
                                    "aria-hidden": !0,
                                }),
                            (0, a.jsxs)("div", {
                                className: G.P_,
                                children: [
                                    eE &&
                                        (0, a.jsxs)("div", {
                                            className: G.d_,
                                            children: [
                                                (0, a.jsx)(_.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: U.intl.string(U.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(T) &&
                                        (0, a.jsx)("div", {
                                            className: G.OU,
                                            children:
                                                "string" == typeof T
                                                    ? (0, a.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: T,
                                                      })
                                                    : T,
                                        }),
                                    (0, a.jsx)(E.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && G.jC),
                                        children: n,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: G.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(P) &&
                                                    (0, a.jsx)("div", { className: G.Ph, children: P }),
                                            ],
                                        }),
                                    null != j &&
                                        (0, a.jsx)("div", {
                                            className: G.oU,
                                            children: (0, a.jsx)(N.Ay, {
                                                variant: N.qP.BLUE,
                                                progress: (0, l.clamp)(j, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === D.L.TEASER &&
                                        null != en &&
                                        (0, a.jsx)("div", { className: G.Gv, children: (0, a.jsx)(B, { endsAt: en }) }),
                                    null != el && (0, a.jsx)("div", { className: G.Gv, children: el }),
                                    ex && (0, a.jsx)("div", { className: G.Cj }),
                                ],
                            }),
                            ex && (0, a.jsx)("div", { className: G.yk, children: eE ? eI : eO }),
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
