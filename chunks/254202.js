n.d(t, { S: () => G });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    d = n(562708),
    c = n(821609),
    o = n(43990),
    u = n(462887),
    m = n(602853),
    b = n(661531),
    p = n(993077),
    f = n(834730),
    h = n(403581),
    g = n(297264),
    x = n(736653),
    R = n(139286),
    N = n(531260),
    E = n(914410),
    A = n(174459),
    _ = n(872725),
    v = n(721157),
    O = n(555393),
    I = n(51965),
    P = n(140735),
    C = n(496431),
    M = n(685477),
    T = n(105292),
    U = n(191740);
function j(e) {
    let { digit: t } = e;
    return (0, a.jsx)("div", {
        className: U.U2,
        children: (0, a.jsx)(f.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
}
function S() {
    return (0, a.jsxs)("svg", {
        className: U.kx,
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
        className: U.Os,
        children: [
            (0, a.jsx)("div", { className: U.Mc, children: (0, a.jsx)(j, { digit: s }) }),
            (0, a.jsx)(j, { digit: i }),
            n && (0, a.jsx)(S, {}),
        ],
    });
}
function L(e) {
    let { label: t } = e;
    return (0, a.jsx)(f.E, { variant: "text-xs/medium", color: "text-strong", children: t });
}
function B(e) {
    let { endsAt: t } = e,
        { days: n, hours: s, minutes: i } = (0, C.A)(t, 6e4);
    return (0, a.jsxs)("div", {
        role: "timer",
        children: [
            (0, a.jsxs)("div", {
                className: U.Vg,
                "aria-hidden": "true",
                children: [
                    (0, a.jsx)(y, { value: n, hasColon: !0 }),
                    (0, a.jsx)(y, { value: s, hasColon: !0 }),
                    (0, a.jsx)(y, { value: i, hasColon: !1 }),
                    (0, a.jsx)(L, { label: T.intl.string(M.default["7TxNKE"]) }),
                    (0, a.jsx)(L, { label: T.intl.string(M.default["7pATiR"]) }),
                    (0, a.jsx)(L, { label: T.intl.string(M.default.dXR9qI) }),
                ],
            }),
            (0, a.jsx)(P.A, { children: T.intl.format(T.t.j6IyVe, { days: n, hours: s, minutes: i }) }),
        ],
    });
}
var w = n(465794),
    k = n(325652),
    Y = n(202541),
    V = n(652215),
    D = n(799544);
function G(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: P,
            caption: C,
            pillText: M,
            primaryAsset: U,
            primaryAssetClassName: j,
            backgroundAssetUrl: S,
            progress: y,
            ctaIcon: L,
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
            phase: et = k.L.DEFAULT,
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
        eu = (0, x.DP)(),
        { fractionalState: em } = (0, N.A)(),
        eb = (0, O.N)(),
        ep = { name: t };
    (ed?.thirdPartyPartner != null && (ep.third_party_partner = ed.thirdPartyPartner),
        (0, R.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ep }));
    let ef = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    A.default.track(V.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: ed?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ed?.thirdPartyPartner, n],
        ),
        eh = s.useCallback(() => {
            null != K &&
                (K(),
                A.default.track(V.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eg = !0 === q && ($ ? eb?.state === v.zE.UPSELL : em === Y.xc.FP_ONLY),
        ex = !$ || eb?.state === v.zE.CAN_CLAIM,
        eR = s.useRef(!1);
    s.useEffect(() => {
        !Z || eR.current || z || eg || !ex || ((eR.current = !0), eh());
    }, [Z, ex, z, eh, eg]);
    let eN = !(0, l.isEmpty)(S),
        eE = eN && (0, u.q)(eu),
        eA = (0, m.r)(b.A.colors.BACKGROUND_BASE_LOW).hex(),
        e_ = eg || !(0, l.isEmpty)(X),
        ev = W ?? (!eN && (0, u.q)(eu) ? "primary" : "overlay-primary"),
        eO = (0, l.isEmpty)(X)
            ? null
            : {
                  icon: L,
                  iconPosition: G,
                  text: X,
                  variant: ev,
                  size: ee ? "md" : void 0,
                  onClick: eh,
                  disabled: z,
                  loading: F,
                  tabIndex: eo?.tabIndex,
              },
        eI = (0, a.jsx)(w.A, {
            fullWidth: !ee,
            defaultTextOverride: T.intl.string(T.t.sEAnVH),
            tabIndex: eo?.tabIndex,
        }),
        eP = null == eO ? null : $ ? (0, a.jsx)(I.A, { ...eO }) : (0, a.jsx)(c.$, { ...eO });
    return (0, a.jsx)(o.N, {
        theme: eE ? V.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(_.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: ef,
                onFocus: ec,
                listItemProps: eo,
                cardType: p.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, u.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(D.Ui, es, { [D.Tn]: eN }),
                cardClassName: r()(D.Nr, e, ea, { [D.j8]: ee, [D._7]: et === k.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != S ? `url(${S})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(M) &&
                        (0, a.jsx)(f.E, {
                            variant: "text-xs/bold",
                            color: et === k.L.EXPIRED ? "badge-secondary-text" : "badge-expressive-text",
                            className: D.Io,
                            children: M,
                        }),
                    (0, a.jsxs)("div", {
                        className: D.qh,
                        children: [
                            ee &&
                                (0, a.jsx)("div", {
                                    className: D.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(H, { asset: U, className: j }),
                                }),
                            (0, a.jsx)(H, { asset: U, className: j }),
                        ],
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: D.iy,
                            style: { "--custom-tint-color": er ?? eA },
                            "aria-hidden": !0,
                            children: [(0, a.jsx)("div", { className: D.u_ }), (0, a.jsx)("div", { className: D.G3 })],
                        }),
                    (0, a.jsxs)("div", {
                        className: D.hQ,
                        children: [
                            !ee &&
                                (0, a.jsx)("div", {
                                    className: D.u_,
                                    style: { "--custom-tint-color": er ?? eA },
                                    "aria-hidden": !0,
                                }),
                            (0, a.jsxs)("div", {
                                className: D.P_,
                                children: [
                                    eg &&
                                        (0, a.jsxs)("div", {
                                            className: D.d_,
                                            children: [
                                                (0, a.jsx)(h.t, { size: "sm", color: b.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: T.intl.string(T.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(C) &&
                                        (0, a.jsx)("div", {
                                            className: D.OU,
                                            children:
                                                "string" == typeof C
                                                    ? (0, a.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: C,
                                                      })
                                                    : C,
                                        }),
                                    (0, a.jsx)(g.D, {
                                        variant: ee ? "display-md" : "heading-lg/semibold",
                                        className: r()(ee && D.jC),
                                        children: n,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: D.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(P) &&
                                                    (0, a.jsx)("div", { className: D.Ph, children: P }),
                                            ],
                                        }),
                                    null != y &&
                                        (0, a.jsx)("div", {
                                            className: D.oU,
                                            children: (0, a.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, l.clamp)(y, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === k.L.TEASER &&
                                        null != en &&
                                        (0, a.jsx)("div", { className: D.Gv, children: (0, a.jsx)(B, { endsAt: en }) }),
                                    null != el && (0, a.jsx)("div", { className: D.Gv, children: el }),
                                    e_ && (0, a.jsx)("div", { className: D.Cj }),
                                ],
                            }),
                            e_ && (0, a.jsx)("div", { className: D.yk, children: eg ? eI : eP }),
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
          ? (0, a.jsx)("img", { src: t, alt: "", className: r()(D.eq, n), draggable: "false" })
          : t;
}
