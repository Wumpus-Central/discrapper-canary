"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(397927),
    d = n(653523),
    _ = n(350972),
    f = n(677056),
    p = n(635917),
    h = n(652215),
    m = n(985018),
    E = n(461917);
let g = () => [
        m.intl.string(m.t["EgWTY+"]),
        m.intl.string(m.t.umBn5f),
        m.intl.string(m.t.dG1wD1),
        m.intl.string(m.t.SesI4S),
        m.intl.string(m.t.RnMLvl),
    ],
    A = () => l().sample(g()) ?? m.intl.string(m.t["EgWTY+"]);
function I(e) {
    let {
            id: t,
            className: n,
            style: s,
            onSelect: o,
            isSelected: l = !1,
            tabIndex: f,
            children: m,
            locked: g = !1,
        } = e,
        [I, T] = i.useState((0, p.gG)(t).name),
        S = t === _.Ic.PIRATE;
    return (0, r.jsx)(u.m, {
        text: I,
        onTooltipShow: () => S && T(A()),
        children: (0, r.jsxs)("div", {
            className: E.Co,
            style: s,
            children: [
                (0, r.jsx)(c.DUT, {
                    role: "radio",
                    "aria-label": I,
                    "aria-checked": l,
                    tabIndex: f ?? (l ? 0 : -1),
                    className: a()(E.Ni, { [E.wH]: l }, n),
                    onClick: l ? h.tEg : () => o?.(t),
                    children: m,
                }),
                l && (0, r.jsx)(d.H$, {}),
                g &&
                    (0, r.jsx)("div", {
                        className: E.RK,
                        children: (0, r.jsx)(c.XAi, { className: E.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function T(e) {
    let { size: t = p.N8.SIZE_60, icon: n, isSelected: s, disabled: a, tabIndex: o, onSelect: l, locked: u } = e,
        c = i.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, r.jsx)(I, {
        style: c,
        onSelect: a ? void 0 : l,
        isSelected: s,
        id: n.id,
        className: a ? E.r9 : void 0,
        tabIndex: o,
        locked: u,
        children: (0, r.jsx)(f.A, { id: n.id, size: t }),
    });
}
