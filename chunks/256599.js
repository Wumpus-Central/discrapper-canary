i.d(t, { A: () => b });
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
    E = i(985603),
    N = i(777376),
    h = i(185797),
    f = i(652215),
    _ = i(237146),
    R = i(985018),
    C = i(74776);
function I() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("16848"), i.e("30221"), i.e("10622"), i.e("77632")]).then(
            i.bind(i, 836291),
        );
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
function T() {
    let e = (0, h.F)(),
        t =
            e.claimStatus === N.p1.CLAIMED
                ? { text: R.intl.string(_.default.Plwzgf) }
                : { text: R.intl.string(R.t.hvVgAZ) };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: C.R$,
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
                        onClick: I,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === N.p1.CLAIM_IN_PROGRESS &&
                (0, s.jsxs)("div", {
                    className: C.ed,
                    children: [
                        (0, s.jsx)(d.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, s.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: R.intl.string(_.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function b(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, p.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: x.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: E.FZ },
        }),
        (0, s.jsx)(u.N, {
            theme: f.NJ8.DARKER,
            children: (e) =>
                (0, s.jsx)("div", {
                    className: n()(e, C.kL),
                    children: (0, s.jsx)(g.A, {
                        cardType: m.s.CUSTOM,
                        cardClassName: C.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: C.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: C.j,
                                    children: [
                                        (0, s.jsx)("div", { className: C._g }),
                                        (0, s.jsx)("div", { className: C.$h }),
                                        (0, s.jsx)("div", { className: C.Rv }),
                                        (0, s.jsx)("div", { className: C.Lw }),
                                        (0, s.jsx)("div", { className: C.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: C.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: C.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(A.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: C.DD,
                                            children: R.intl.string(_.default.RGT513),
                                        }),
                                        (0, s.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: C.h_,
                                            children: R.intl.string(_.default["+pTnsf"]),
                                        }),
                                        (0, s.jsx)(T, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
