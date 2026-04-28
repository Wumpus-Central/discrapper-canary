i.d(t, { A: () => T });
var a = i(627968);
i(64700);
var s = i(503698),
    n = i.n(s),
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
    x = i(920050);
i(985603);
var h = i(777376),
    N = i(185797),
    f = i(652215),
    E = i(237146),
    R = i(985018),
    _ = i(74776);
function C() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            i.e("16848"),
            i.e("30221"),
            i.e("10622"),
            i.e("46101"),
            i.e("77632"),
        ]).then(i.bind(i, 836291));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function I() {
    let e = (0, N.F)(),
        t =
            e.claimStatus === h.p1.CLAIMED
                ? { text: R.intl.string(E.default.Plwzgf) }
                : { text: R.intl.string(R.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: _.R$,
                children: [
                    (0, a.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: e.text,
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        onClick: e.onClick,
                        disabled: e.disabled,
                        loading: e.loading,
                    }),
                    (0, a.jsx)(c.$, {
                        variant: "secondary",
                        size: "md",
                        ...t,
                        onClick: C,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === h.p1.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: _.ed,
                    children: [
                        (0, a.jsx)(d.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: R.intl.string(E.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function T(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, p.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: x.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
        }),
        (0, a.jsx)(u.N, {
            theme: f.NJ8.DARKER,
            children: (e) =>
                (0, a.jsx)("div", {
                    className: n()(e, _.kL),
                    children: (0, a.jsx)(g.A, {
                        cardType: m.s.CUSTOM,
                        cardClassName: _.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, a.jsxs)("div", {
                            className: _.XF,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: _.j,
                                    children: [
                                        (0, a.jsx)("div", { className: _._g }),
                                        (0, a.jsx)("div", { className: _.$h }),
                                        (0, a.jsx)("div", { className: _.Rv }),
                                        (0, a.jsx)("div", { className: _.Lw }),
                                        (0, a.jsx)("div", { className: _.mR }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: _.Qs,
                                    children: [
                                        (0, a.jsx)("img", {
                                            className: _.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, a.jsx)(A.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: _.DD,
                                            children: R.intl.string(E.default.RGT513),
                                        }),
                                        (0, a.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: _.h_,
                                            children: R.intl.string(E.default["+pTnsf"]),
                                        }),
                                        (0, a.jsx)(I, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
