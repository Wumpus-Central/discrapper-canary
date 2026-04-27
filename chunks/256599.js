n.d(t, { A: () => I });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(110259),
    l = n(192308),
    c = n(821609),
    o = n(885574),
    d = n(834730),
    u = n(43990),
    _ = n(359778),
    m = n(534514),
    p = n(139286),
    A = n(872725),
    f = n(920050);
n(985603);
var g = n(777376),
    h = n(185797),
    x = n(652215),
    b = n(237146),
    C = n(985018),
    N = n(74776);
function E() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("77632").then(n.bind(n, 836291));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function R() {
    let e = (0, h.F)(),
        t =
            e.claimStatus === g.p1.CLAIMED
                ? { text: C.intl.string(b.default.Plwzgf) }
                : { text: C.intl.string(C.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: N.R$,
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
                        onClick: E,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === g.p1.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: N.ed,
                    children: [
                        (0, a.jsx)(o.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: C.intl.string(b.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function I(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, p.A)({
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: f.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
        }),
        (0, a.jsx)(u.N, {
            theme: x.NJ8.DARKER,
            children: (e) =>
                (0, a.jsx)("div", {
                    className: i()(e, N.kL),
                    children: (0, a.jsx)(A.A, {
                        cardType: _.s.CUSTOM,
                        cardClassName: N.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, a.jsxs)("div", {
                            className: N.XF,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: N.j,
                                    children: [
                                        (0, a.jsx)("div", { className: N._g }),
                                        (0, a.jsx)("div", { className: N.$h }),
                                        (0, a.jsx)("div", { className: N.Rv }),
                                        (0, a.jsx)("div", { className: N.Lw }),
                                        (0, a.jsx)("div", { className: N.mR }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: N.Qs,
                                    children: [
                                        (0, a.jsx)("img", {
                                            className: N.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, a.jsx)(m.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: N.DD,
                                            children: C.intl.string(b.default.RGT513),
                                        }),
                                        (0, a.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: N.h_,
                                            children: C.intl.string(b.default["+pTnsf"]),
                                        }),
                                        (0, a.jsx)(R, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
