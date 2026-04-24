n.d(t, { A: () => N });
var a = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(192308),
    l = n(821609),
    c = n(885574),
    o = n(834730),
    d = n(43990),
    u = n(359778),
    _ = n(534514),
    m = n(872725),
    p = n(777376),
    f = n(185797),
    A = n(652215),
    g = n(237146),
    h = n(985018),
    x = n(74776);
function b() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await n.e("77632").then(n.bind(n, 836291));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function C() {
    let e = (0, f.F)(),
        t =
            e.claimStatus === p.p1.CLAIMED
                ? { text: h.intl.string(g.default.Plwzgf) }
                : { text: h.intl.string(h.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: x.R$,
                children: [
                    (0, a.jsx)(l.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: e.text,
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        onClick: e.onClick,
                        disabled: e.disabled,
                        loading: e.loading,
                    }),
                    (0, a.jsx)(l.$, {
                        variant: "secondary",
                        size: "md",
                        ...t,
                        onClick: b,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === p.p1.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: x.ed,
                    children: [
                        (0, a.jsx)(c.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: h.intl.string(g.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function N(e) {
    let { glowing: t = !1 } = e;
    return (0, a.jsx)(d.N, {
        theme: A.NJ8.DARKER,
        children: (e) =>
            (0, a.jsx)("div", {
                className: r()(e, x.kL),
                children: (0, a.jsx)(m.A, {
                    cardType: u.s.CUSTOM,
                    cardClassName: x.Nr,
                    glowing: t,
                    hueRotate: 25,
                    glowAmount: 2,
                    blurAmount: 10,
                    children: (0, a.jsxs)("div", {
                        className: x.XF,
                        children: [
                            (0, a.jsxs)("div", {
                                className: x.j,
                                children: [
                                    (0, a.jsx)("div", { className: x._g }),
                                    (0, a.jsx)("div", { className: x.$h }),
                                    (0, a.jsx)("div", { className: x.Rv }),
                                    (0, a.jsx)("div", { className: x.Lw }),
                                    (0, a.jsx)("div", { className: x.mR }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: x.Qs,
                                children: [
                                    (0, a.jsx)("img", {
                                        className: x.wm,
                                        src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                        alt: "Xbox Game Pass",
                                    }),
                                    (0, a.jsx)(_.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: x.DD,
                                        children: h.intl.string(g.default.RGT513),
                                    }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        className: x.h_,
                                        children: h.intl.string(g.default["+pTnsf"]),
                                    }),
                                    (0, a.jsx)(C, {}),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
    });
}
