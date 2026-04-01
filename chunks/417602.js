"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(158954),
    s = n(311907),
    a = n(133636),
    o = n(905228),
    l = n(790225),
    u = n(155571),
    c = n(224323),
    d = n(311600),
    _ = n(772306),
    f = n(208623),
    p = n(198580),
    h = n(264379),
    m = n(346640),
    E = n(429311),
    g = n(985018),
    A = n(457007),
    I = n(260405),
    T = n(649747),
    S = n(47588),
    y = n(755117),
    v = n(338958);
let C = 500,
    N = [S.A, y.A, v.A];
function R(e) {
    let { setScreen: t } = e,
        {
            canCraft: n,
            canFight: S,
            craftingClass: y,
            combatClass: v,
        } = (0, s.cf)([a.A], () => {
            let e = a.A.getCraftingClass(),
                t = a.A.getCombatClass();
            return {
                canCraft: null != e && m.zX[e].consumesFrom.every((e) => a.A.getCounter(e).currentCount > 0),
                canFight: null != t && m.P6[t].consumesFrom.every((e) => a.A.getCounter(e).currentCount > 0),
                craftingClass: e,
                combatClass: t,
            };
        }),
        R = () => {
            (0, l.PT)(o.R.TWENTY, 1);
        };
    return (0, r.jsx)("div", {
        className: A.iW,
        children: (0, r.jsxs)("div", {
            className: A.kL,
            children: [
                (0, r.jsx)(_.A, {}),
                (0, r.jsxs)("div", {
                    className: A.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.ES,
                            children: [
                                (0, r.jsx)(p.A, {
                                    label: g.intl.string(E.default["eKL6+6"]),
                                    resources: [m.EC.MAGIC, m.EC.ARMOR, m.EC.WEAPON],
                                }),
                                (0, r.jsx)(p.A, {
                                    label: g.intl.string(E.default.Xs0p95),
                                    resources: [m.EC.LEATHER, m.EC.METAL, m.EC.WOOD],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: A.to,
                            children: [
                                (0, r.jsx)(u.A, {
                                    className: A.m9,
                                    srcs: N,
                                    alt: g.intl.string(E.default.GWYxMh),
                                    updateInterval: C,
                                }),
                                (0, r.jsx)(c.A, {}),
                                (0, r.jsx)(i.DUT, { className: A.Wj, "aria-label": "", onClick: R }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: A.ES,
                            children: (0, r.jsx)(p.A, {
                                label: g.intl.string(E.default.fCieSS),
                                resources: [m.EC.HEALERS, m.EC.TANKS],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: A.o1,
                    children: [
                        (0, r.jsx)(f.A, { setScreen: t }),
                        (0, r.jsxs)("div", {
                            className: A.SJ,
                            children: [
                                (0, r.jsx)(h.A, {}),
                                (0, r.jsx)(d.A, {
                                    activity: m.$p.CRAFTING,
                                    text: g.intl.string(E.default.DWkAjh),
                                    asset: null != y ? m.zX[y].asset : I.A,
                                    onClick: () => t(m.Q0.CRAFTING),
                                    disabled: !n,
                                }),
                                (0, r.jsx)(d.A, {
                                    activity: m.$p.COMBAT,
                                    text: g.intl.string(E.default.YU5pl5),
                                    asset: null != v ? m.P6[v].asset : T.A,
                                    disabled: !S,
                                    onClick: () => t(m.Q0.COMBAT),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
