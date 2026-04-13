"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(133636),
    _ = n(905228),
    f = n(790225),
    p = n(381342),
    h = n(816758),
    m = n(471296),
    E = n(178090),
    g = n(547678),
    A = n(346640),
    I = n(75772),
    T = n(985018),
    S = n(302235),
    y = n(648863);
let v = [A.EC.METAL, A.EC.LEATHER, A.EC.WOOD, A.EC.ARMOR, A.EC.MAGIC, A.EC.WEAPON],
    N = [A.$p.GATHERING, A.$p.CRAFTING, A.$p.COMBAT],
    C = {
        [A.$p.GATHERING]: { name: I.default.LOYew8 },
        [A.$p.CRAFTING]: { name: I.default["T9N9+O"] },
        [A.$p.COMBAT]: { name: I.default.RHA67y },
    },
    R = [A.$6.HEALER, A.$6.TANK, A.$6.DPS];
function O(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: S.wR,
        children: [(0, r.jsx)(E.A, { variant: "heading-xxl/normal", children: T.intl.string(t) }), (0, r.jsx)(g.A, {})],
    });
}
function b(e) {
    let { name: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: S.dJ,
        children: [
            (0, r.jsx)(E.A, { variant: "heading-xl/normal", children: T.intl.string(t) }),
            (0, r.jsx)(h.A, {
                children: (0, r.jsx)("div", {
                    className: S.$$,
                    children: (0, r.jsx)(E.A, {
                        color: "none",
                        variant: "heading-xl/normal",
                        className: S.wk,
                        children: n.toString().padStart(6, "0"),
                    }),
                }),
            }),
        ],
    });
}
function D(e) {
    let { label: t, statSource: n, statData: i, statKeys: s } = e;
    return (0, r.jsxs)("div", {
        className: S.Iw,
        children: [(0, r.jsx)(O, { label: t }), s.map((e) => (0, r.jsx)(b, { name: i[e].name, value: n[e] ?? 0 }, e))],
    });
}
function L(e) {
    let { setScreen: t } = e,
        n = (0, u.bG)([d.A], () => d.A.getStats());
    l()(null != n, "Stats cannot be null");
    let [s, o] = (0, i.useState)(!1);
    (0, f.RJ)(_.R.SEVEN), (0, f.Yc)(_.R.EIGHT);
    let h = (e) => {
            o(e.currentTarget.scrollTop > 0);
        },
        E = (0, i.useMemo)(
            () => R.map((e) => ({ name: A.P6[e].statName, value: A.KG[e] * (n.professionCompletion[e] ?? 0) })),
            [n.professionCompletion],
        );
    return (0, r.jsxs)("div", {
        className: S.MY,
        children: [
            (0, r.jsxs)("div", {
                className: a()(S.wx, { [S.am]: s }),
                children: [
                    (0, r.jsx)(p.A, { onClick: () => t(A.Q0.MAIN) }),
                    (0, r.jsxs)(m.A, {
                        className: S.R_,
                        variant: "white",
                        children: [
                            (0, r.jsx)("img", { src: y.A, alt: "", className: S.pS }),
                            T.intl.string(I.default.JRs3DC),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(c.T7Y, {
                className: S.r0,
                onScroll: h,
                children: [
                    (0, r.jsx)(D, {
                        label: I.default.i6Y0Ax,
                        statSource: n.activityCompletion,
                        statKeys: N,
                        statData: C,
                    }),
                    (0, r.jsx)(D, {
                        label: I.default.Jg7n6Y,
                        statSource: n.resourceConsumption,
                        statKeys: v,
                        statData: A.k,
                    }),
                    (0, r.jsxs)("div", {
                        className: S.Iw,
                        children: [
                            (0, r.jsx)(O, { label: I.default.BSJ278 }),
                            E.map((e, t) => (0, r.jsx)(b, { name: e.name, value: e.value }, t)),
                        ],
                    }),
                    (0, r.jsx)(D, {
                        label: I.default.uCMvob,
                        statSource: n.resourceContribution,
                        statKeys: v,
                        statData: A.k,
                    }),
                ],
            }),
        ],
    });
}
