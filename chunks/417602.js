"use strict";
n.d(t, { A: () => O });
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
    h = n(740908),
    m = n(264379),
    E = n(346640),
    g = n(350601),
    A = n(985018),
    I = n(962906),
    T = n(260405),
    S = n(649747),
    y = n(47588),
    v = n(755117),
    N = n(338958);
let C = 500,
    R = [y.A, v.A, N.A];
function O(e) {
    let { setScreen: t } = e,
        {
            canCraft: n,
            canFight: y,
            craftingClass: v,
            combatClass: N,
        } = (0, s.cf)([a.A], () => {
            let e = a.A.getCraftingClass(),
                t = a.A.getCombatClass();
            return {
                canCraft: null != e && E.zX[e].consumesFrom.every((e) => a.A.getCounter(e).currentCount > 0),
                canFight: null != t && E.P6[t].consumesFrom.every((e) => a.A.getCounter(e).currentCount > 0),
                craftingClass: e,
                combatClass: t,
            };
        }),
        O = () => {
            (0, l.PT)(o.R.TWENTY, 1);
        };
    return (0, r.jsx)("div", {
        className: I.iW,
        children: (0, r.jsxs)("div", {
            className: I.kL,
            children: [
                (0, r.jsx)(_.A, {}),
                (0, r.jsxs)("div", {
                    className: I.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.ES,
                            children: [
                                (0, r.jsx)(p.A, {
                                    label: A.intl.string(g.default["eKL6+6"]),
                                    resources: [E.EC.MAGIC, E.EC.ARMOR, E.EC.WEAPON],
                                }),
                                (0, r.jsx)(p.A, {
                                    label: A.intl.string(g.default.Xs0p95),
                                    resources: [E.EC.LEATHER, E.EC.METAL, E.EC.WOOD],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.to,
                            children: [
                                (0, r.jsx)(u.A, {
                                    className: I.m9,
                                    srcs: R,
                                    alt: A.intl.string(g.default.GWYxMh),
                                    updateInterval: C,
                                }),
                                (0, r.jsx)(c.A, {}),
                                (0, r.jsx)(i.DUT, { className: I.Wj, "aria-label": "", onClick: O }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.ES,
                            children: [
                                (0, r.jsx)(p.A, {
                                    label: A.intl.string(g.default.ecnJXx),
                                    resources: [
                                        E.$6.HEALER,
                                        E.$6.TANK,
                                        E.$6.DPS,
                                        E.xO.MAGIC_CRAFTER,
                                        E.xO.ARMOR_CRAFTER,
                                        E.xO.WEAPON_CRAFTER,
                                    ],
                                    smallIcons: !0,
                                    action: (0, r.jsx)(h.h, {
                                        setScreen: t,
                                        tooltipText: A.intl.string(g.default["sTE/Mu"]),
                                        iconButtonClassName: I.H_,
                                    }),
                                }),
                                (0, r.jsx)(p.A, {
                                    label: A.intl.string(g.default.fCieSS),
                                    resources: [E.EC.HEALERS, E.EC.TANKS],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.o1,
                    children: [
                        (0, r.jsx)(f.A, { setScreen: t }),
                        (0, r.jsxs)("div", {
                            className: I.SJ,
                            children: [
                                (0, r.jsx)(m.A, {}),
                                (0, r.jsx)(d.A, {
                                    activity: E.$p.CRAFTING,
                                    text: A.intl.string(g.default.DWkAjh),
                                    asset: null != v ? E.zX[v].asset : T.A,
                                    onClick: () => t(E.Q0.CRAFTING),
                                    disabled: !n,
                                }),
                                (0, r.jsx)(d.A, {
                                    activity: E.$p.COMBAT,
                                    text: A.intl.string(g.default.YU5pl5),
                                    asset: null != N ? E.P6[N].asset : S.A,
                                    disabled: !y,
                                    onClick: () => t(E.Q0.COMBAT),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
