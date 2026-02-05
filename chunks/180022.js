n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(735438),
    o = n(110259),
    c = n(417597),
    d = n(397927),
    u = n(775602),
    _ = n(139286),
    m = n(160761),
    A = n(954571),
    g = n(543233),
    E = n(29570),
    h = n(975662),
    p = n(322631),
    C = n(784356),
    x = n(452910),
    T = n(652215),
    I = n(49999),
    S = n(985018),
    f = n(296388);
let N = s.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: r, forceShadow: g, cardType: C } = e,
        x = e?.onCtaClick,
        R = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        [v, O] = s.useState(!1),
        [j, P] = s.useState(!1),
        y =
            C === p.cJ.CARD_CAROUSEL_FIRST_ROW ||
            C === p.cJ.CARD_CAROUSEL_SECOND_ROW ||
            C === p.cJ.CARD_CAROUSEL_THIRD_ROW,
        L = (0, h.A)(),
        [D, M] = (0, m.DP)(null != r && n ? [r] : []),
        { easterEggLevel: G, isEasterEggTriggered: U, onHover: k, onUnhover: B } = (0, E.A)(5),
        w = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    A.default.track(T.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        H = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    null != x &&
                        A.default.track(T.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                            card_type: (0, l.snakeCase)(t),
                            function_name: (0, l.snakeCase)(x.name),
                        });
                }, 800),
            [t, x],
        );
    e = {
        onMouseEnter: w,
        ...e,
        onCtaClick:
            null != x
                ? () => {
                      x?.(), H();
                  }
                : void 0,
    };
    let V = D !== r || null == r || j;
    return (s.useEffect(() => {
        R &&
            v &&
            (P(!0),
            A.default.track(T.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
            null != r && M(I.i.TAKE_ACTION));
    }, [R, v, r, t, M]),
    (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    }),
    n)
        ? t === h.U.UPCOMING_DROP_UNTIMED
            ? (0, i.jsx)("div", {
                  className: f.iQ,
                  onMouseEnter: k,
                  onFocus: k,
                  onMouseLeave: B,
                  onBlur: B,
                  children: (0, i.jsx)("div", {
                      className: a()(f.Rz, { [f.sT]: g }),
                      children: (0, i.jsxs)("div", {
                          className: a()(f.Ci, { [f.BX]: !U, [f.yg]: U, [f.Ud]: U && 3 === G, [f.VN]: R }),
                          children: [
                              (0, i.jsx)("div", {
                                  className: f.He,
                                  children: (0, i.jsx)(b, { ...e, className: f.Du }),
                              }),
                              (0, i.jsx)("div", {
                                  className: f.ll,
                                  children: (0, i.jsx)(b, { ...e, className: f.Du }),
                              }),
                          ],
                      }),
                  }),
              })
            : V
              ? (0, i.jsx)("div", {
                    className: f.iQ,
                    children: (0, i.jsx)("div", {
                        className: a()({ [f.u9]: !y, [f.E$]: y, [f.sT]: g, [f.VN]: R }),
                        children: (0, i.jsx)(b, { ...e }),
                    }),
                })
              : (0, i.jsx)("div", {
                    className: f.iQ,
                    children: (0, i.jsx)("div", {
                        className: a()(f.Rz, { [f.sT]: g }),
                        children: (0, i.jsxs)(d.DUT, {
                            onClick: () => O(!0),
                            className: a()(f.Ci, f.vk, { [f.zq]: v, [f.BX]: !j && !v, [f.VN]: R }),
                            onTransitionEnd: (e) => {
                                v &&
                                    "transform" === e.propertyName &&
                                    e.target.classList.contains(f.Ci) &&
                                    (P(!0),
                                    A.default.track(T.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
                                    null != r && M(I.i.TAKE_ACTION));
                            },
                            children: [
                                (0, i.jsx)("div", {
                                    className: f.UF,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(b, { ...e }),
                                }),
                                (0, i.jsx)("div", {
                                    className: f.He,
                                    children: (0, i.jsx)(b, { ...L.upcomingDropUntimed, pillText: "" }),
                                }),
                                (0, i.jsx)("div", {
                                    className: f.ll,
                                    children: (0, i.jsx)(b, { ...e, description: null }),
                                }),
                                (0, i.jsx)("div", {
                                    className: f.Z7,
                                    children: (0, i.jsx)(d.Button, {
                                        variant: "primary",
                                        text: S.intl.string(S.t.dcztdU),
                                        onClick: () => O(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, i.jsx)(N, { ...L.upcomingDropUntimed, forceShadow: g });
});
N.displayName = "PremiumPerkCard";
let b = s.forwardRef((e, t) => {
    let {
            title: n,
            titleClassName: s,
            subtitle: r,
            description: l,
            descriptionCta: o,
            customContent: c,
            isPremiumGetCta: u,
            onCtaClick: _,
            onMouseEnter: m,
            className: A,
            perkComponent: E,
            cardVariant: h,
            cardType: T,
            onClick: I,
            backgroundImage: S,
            pillText: N,
            perkImage: b,
            imageOverlayText: R,
            hasNitroGradientBackground: v,
        } = e,
        O =
            T === p.cJ.CARD_CAROUSEL_FIRST_ROW ||
            T === p.cJ.CARD_CAROUSEL_SECOND_ROW ||
            T === p.cJ.CARD_CAROUSEL_THIRD_ROW,
        j = null != l || null != o,
        P = (0, g.Q)(h);
    return (0, i.jsxs)(d.DUT, {
        className: a()(f.Nr, A, P.cardContainer?.className, { [f.vk]: null != I, [f.JP]: O, [f.NT]: v }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != S ? `url(${S})` : void 0,
            backgroundPosition: null != S ? "bottom right" : void 0,
            backgroundRepeat: null != S ? "no-repeat" : void 0,
        },
        onClick: I,
        children: [
            null != N && (0, i.jsx)(d.Text, { variant: "text-xs/semibold", className: f.Io, children: N }),
            (0, i.jsx)("div", { ref: t }),
            (0, i.jsx)(C.A, {
                title: n,
                titleClassName: s,
                subtitle: r,
                perkImage: b,
                isCarousel: O,
                descriptionCta: o,
                customContent: c,
                onCtaClick: _,
                perkComponent: E,
                subtitleClassName: f.Dc,
                cardVariant: h,
                imageOverlayText: R,
            }),
            j &&
                (0, i.jsx)(x.A, {
                    title: n,
                    titleClassName: s,
                    subtitle: r,
                    description: l,
                    descriptionCta: o,
                    isPremiumGetCta: u,
                    onCtaClick: _,
                    cardVariant: h,
                    perkComponent: E,
                }),
            (0, i.jsx)("div", { className: a()(f.Iv, f.G1), ref: t }),
        ],
    });
});
b.displayName = "PerkCardContent";
let R = N;
