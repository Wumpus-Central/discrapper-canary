"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(649542);
let E = () => [
        m.intl.string(m.t["EgWTY+"]),
        m.intl.string(m.t.umBn5f),
        m.intl.string(m.t.dG1wD1),
        m.intl.string(m.t.SesI4S),
        m.intl.string(m.t.RnMLvl),
    ],
    A = () => l().sample(E()) ?? m.intl.string(m.t["EgWTY+"]);
function I(e) {
    let { id: t, className: n, onSelect: a, isSelected: o = !1, tabIndex: l, children: f, locked: m = !1 } = e,
        [E, I] = i.useState((0, p.gG)(t).name),
        T = t === _.Ic.PIRATE;
    return (0, r.jsx)(u.m, {
        text: E,
        onTooltipShow: () => T && I(A()),
        children: (0, r.jsxs)("div", {
            className: g.Co,
            children: [
                (0, r.jsx)(c.DUT, {
                    role: "radio",
                    "aria-label": E,
                    "aria-checked": o,
                    tabIndex: l ?? (o ? 0 : -1),
                    className: s()(g.Ni, { [g.wH]: o }, n),
                    onClick: o ? h.tEg : () => a?.(t),
                    children: f,
                }),
                o && (0, r.jsx)(d.H$, {}),
                m &&
                    (0, r.jsx)("div", {
                        className: g.RK,
                        children: (0, r.jsx)(c.XAi, { className: g.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function T(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: s, locked: o } = e;
    return (0, r.jsx)(I, {
        onSelect: i ? void 0 : s,
        isSelected: n,
        id: t.id,
        className: i ? g.r9 : void 0,
        tabIndex: a,
        locked: o,
        children: (0, r.jsx)(f.A, { id: t.id, width: p.Kl }),
    });
}
