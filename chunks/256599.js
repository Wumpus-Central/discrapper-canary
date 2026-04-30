i.d(t, { A: () => j });
var s = i(627968);
i(64700);
var a = i(503698),
    n = i.n(a),
    r = i(110259),
    l = i(192308),
    c = i(821609),
    d = i(885574),
    o = i(834730),
    u = i(43990),
    m = i(359778),
    A = i(534514),
    p = i(139286),
    g = i(872725),
    x = i(920050),
    N = i(792656),
    E = i(985603),
    h = i(777376),
    f = i(185797),
    R = i(652215),
    _ = i(788868),
    C = i(237146),
    I = i(985018),
    T = i(74776);
function b() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("16848"), i.e("30221"), i.e("10622"), i.e("77632")]).then(
            i.bind(i, 836291),
        );
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
function S() {
    let e = (0, f.F)();
    if (e.kind === f.L.SUBSCRIBE)
        return (0, s.jsxs)("div", {
            className: T.R$,
            children: [
                (0, s.jsx)(N.A, {
                    defaultTextOverride: e.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: _.pe.TIER_2,
                }),
                (0, s.jsx)(c.$, { variant: "secondary", size: "md", text: I.intl.string(I.t.hvVgAZ), onClick: b }),
            ],
        });
    let t =
        e.claimStatus === h.p1.CLAIMED
            ? { text: I.intl.string(C.default.Plwzgf) }
            : { text: I.intl.string(I.t.hvVgAZ) };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: T.R$,
                children: [
                    (0, s.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: e.text,
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        onClick: e.onClick,
                        disabled: e.disabled,
                        loading: e.loading,
                    }),
                    (0, s.jsx)(c.$, {
                        variant: "secondary",
                        size: "md",
                        ...t,
                        onClick: b,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === h.p1.CLAIM_IN_PROGRESS &&
                (0, s.jsxs)("div", {
                    className: T.ed,
                    children: [
                        (0, s.jsx)(d.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, s.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: I.intl.string(C.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function j(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, p.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: x.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: E.FZ },
        }),
        (0, s.jsx)(u.N, {
            theme: R.NJ8.DARKER,
            children: (e) =>
                (0, s.jsx)("div", {
                    className: n()(e, T.kL),
                    children: (0, s.jsx)(g.A, {
                        cardType: m.s.CUSTOM,
                        cardClassName: T.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: T.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: T.j,
                                    children: [
                                        (0, s.jsx)("div", { className: T._g }),
                                        (0, s.jsx)("div", { className: T.$h }),
                                        (0, s.jsx)("div", { className: T.Rv }),
                                        (0, s.jsx)("div", { className: T.Lw }),
                                        (0, s.jsx)("div", { className: T.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: T.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: T.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(A.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: T.DD,
                                            children: I.intl.string(C.default.RGT513),
                                        }),
                                        (0, s.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: T.h_,
                                            children: I.intl.string(C.default["+pTnsf"]),
                                        }),
                                        (0, s.jsx)(S, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
