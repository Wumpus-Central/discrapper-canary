n.d(t, { S: () => D });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    c = n(613412),
    d = n(855986),
    o = n(821609),
    u = n(43990),
    m = n(462887),
    b = n(602853),
    p = n(646514),
    f = n(993077),
    h = n(834730),
    N = n(403581),
    g = n(534514),
    E = n(736653),
    x = n(139286),
    A = n(914410),
    R = n(287809),
    _ = n(129230),
    v = n(872725),
    O = n(721157),
    P = n(555393),
    I = n(51965),
    C = n(140735),
    M = n(496431),
    T = n(116716),
    j = n(792996),
    U = n(191740);
function y(e) {
    let { digit: t } = e;
    return (0, a.jsx)("div", {
        className: U.U2,
        children: (0, a.jsx)(h.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
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
function L(e) {
    let { value: t, hasColon: n } = e,
        [s, i] = String(t).padStart(2, "0");
    return (0, a.jsxs)("div", {
        className: U.Os,
        children: [
            (0, a.jsx)("div", { className: U.Mc, children: (0, a.jsx)(y, { digit: s }) }),
            (0, a.jsx)(y, { digit: i }),
            n && (0, a.jsx)(S, {}),
        ],
    });
}
function B(e) {
    let { label: t } = e;
    return (0, a.jsx)(h.E, { variant: "body-xs/medium", color: "text-strong", children: t });
}
function k(e) {
    let { endsAt: t } = e,
        { days: n, hours: s, minutes: i } = (0, M.A)(t, 6e4);
    return (0, a.jsxs)("div", {
        role: "timer",
        children: [
            (0, a.jsxs)("div", {
                className: U.Vg,
                "aria-hidden": "true",
                children: [
                    (0, a.jsx)(L, { value: n, hasColon: !0 }),
                    (0, a.jsx)(L, { value: s, hasColon: !0 }),
                    (0, a.jsx)(L, { value: i, hasColon: !1 }),
                    (0, a.jsx)(B, { label: j.intl.string(T.default["7TxNKE"]) }),
                    (0, a.jsx)(B, { label: j.intl.string(T.default["7pATiR"]) }),
                    (0, a.jsx)(B, { label: j.intl.string(T.default.dXR9qI) }),
                ],
            }),
            (0, a.jsx)(C.A, { children: j.intl.format(j.t.j6IyVe, { days: n, hours: s, minutes: i }) }),
        ],
    });
}
var G = n(465794),
    V = n(325652),
    Y = n(652215),
    w = n(799544);
function D(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: C,
            caption: M,
            pillText: T,
            primaryAsset: U,
            primaryAssetClassName: y,
            backgroundAssetUrl: S,
            progress: L,
            ctaIcon: B,
            ctaIconPosition: D,
            ctaText: X,
            ctaVariant: W,
            ctaDisabled: F,
            ctaLoading: z,
            onCtaClick: K,
            subscriptionRequired: q,
            isThirdPartyPerk: $ = !1,
            glowing: J = !1,
            autoClickCta: Z = !1,
            progressGlowing: Q = !1,
            featured: ee = !1,
            phase: et = V.L.DEFAULT,
            teaserEndsAt: en,
            className: ea,
            containerClassName: es,
            tabIndex: ei = 0,
            blurTint: er,
            footerContent: el,
            analyticsOptions: ec,
            onFocus: ed,
            listItemProps: eo,
        } = e,
        eu = (0, E.DP)(),
        em = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
        eb = em?.isFractionalPremiumWithNoStandardSub() ?? !1,
        ep = (0, P.N)(),
        ef = { name: t };
    (ec?.thirdPartyPartner != null && (ef.third_party_partner = ec.thirdPartyPartner),
        (0, x.A)({ type: c.ImpressionTypes.VIEW, name: c.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ef }));
    let eh = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    _.default.track(Y.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: ec?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ec?.thirdPartyPartner, n],
        ),
        eN = s.useCallback(() => {
            null != K &&
                (K(),
                _.default.track(Y.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eg = !0 === q && ($ ? ep?.state === O.zE.UPSELL : eb),
        eE = !$ || ep?.state === O.zE.CAN_CLAIM,
        ex = s.useRef(!1);
    s.useEffect(() => {
        !Z || ex.current || F || eg || !eE || ((ex.current = !0), eN());
    }, [Z, eE, F, eN, eg]);
    let eA = !(0, l.isEmpty)(S),
        eR = eA && (0, m.q)(eu),
        e_ = (0, b.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        ev = eg || !(0, l.isEmpty)(X),
        eO = W ?? (!eA && (0, m.q)(eu) ? "primary" : "overlay-primary"),
        eP = (0, l.isEmpty)(X)
            ? null
            : {
                  icon: B,
                  iconPosition: D,
                  text: X,
                  variant: eO,
                  size: ee ? "md" : void 0,
                  onClick: eN,
                  disabled: F,
                  loading: z,
                  tabIndex: eo?.tabIndex,
              },
        eI = (0, a.jsx)(G.A, {
            fullWidth: !ee,
            defaultTextOverride: j.intl.string(j.t.sEAnVH),
            tabIndex: eo?.tabIndex,
        }),
        eC = null == eP ? null : $ ? (0, a.jsx)(I.A, { ...eP }) : (0, a.jsx)(o.$, { ...eP });
    return (0, a.jsx)(u.N, {
        theme: eR ? Y.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(v.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eh,
                onFocus: ed,
                listItemProps: eo,
                cardType: f.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, m.M)(eu) ? 2 : 8,
                blurAmount: 10,
                className: r()(w.Ui, es, { [w.Tn]: eA }),
                cardClassName: r()(w.Nr, e, ea, { [w.j8]: ee, [w._7]: et === V.L.EXPIRED }),
                cardStyle: {
                    backgroundImage: null != S ? `url(${S})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(T) &&
                        (0, a.jsx)(h.E, {
                            variant: "body-xs/semibold",
                            color: et === V.L.EXPIRED ? "badge-secondary-text" : "badge-expressive-text",
                            className: w.Io,
                            children: T,
                        }),
                    (0, a.jsxs)("div", {
                        className: w.qh,
                        children: [
                            ee &&
                                (0, a.jsx)("div", {
                                    className: w.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(H, { asset: U, className: y }),
                                }),
                            (0, a.jsx)(H, { asset: U, className: y }),
                        ],
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: w.iy,
                            style: { "--custom-tint-color": er ?? e_ },
                            "aria-hidden": !0,
                            children: [(0, a.jsx)("div", { className: w.u_ }), (0, a.jsx)("div", { className: w.G3 })],
                        }),
                    (0, a.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            !ee &&
                                (0, a.jsx)("div", {
                                    className: w.u_,
                                    style: { "--custom-tint-color": er ?? e_ },
                                    "aria-hidden": !0,
                                }),
                            (0, a.jsxs)("div", {
                                className: w.P_,
                                children: [
                                    eg &&
                                        (0, a.jsxs)("div", {
                                            className: w.d_,
                                            children: [
                                                (0, a.jsx)(N.NitroWheelIcon, {
                                                    size: "sm",
                                                    color: p.A.colors.ICON_MUTED,
                                                }),
                                                (0, a.jsx)(h.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: j.intl.string(j.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(M) &&
                                        (0, a.jsx)("div", {
                                            className: w.OU,
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
                                        className: r()(ee && w.jC),
                                        children: n,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)(h.E, {
                                            variant: "body-sm/normal",
                                            color: "text-default",
                                            className: w.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(C) &&
                                                    (0, a.jsx)("div", { className: w.Ph, children: C }),
                                            ],
                                        }),
                                    null != L &&
                                        (0, a.jsx)("div", {
                                            className: w.oU,
                                            children: (0, a.jsx)(A.Ay, {
                                                variant: A.qP.BLUE,
                                                progress: (0, l.clamp)(L, 0, 1),
                                                maximum: 1,
                                                glowing: Q,
                                            }),
                                        }),
                                    et === V.L.TEASER &&
                                        null != en &&
                                        (0, a.jsx)("div", { className: w.Gv, children: (0, a.jsx)(k, { endsAt: en }) }),
                                    null != el && (0, a.jsx)("div", { className: w.Gv, children: el }),
                                    ev && (0, a.jsx)("div", { className: w.Cj }),
                                ],
                            }),
                            ev && (0, a.jsx)("div", { className: w.yk, children: eg ? eI : eC }),
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
          ? (0, a.jsx)("img", { src: t, alt: "", className: r()(w.eq, n), draggable: "false" })
          : t;
}
