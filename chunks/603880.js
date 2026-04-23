"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(939249),
    d = n(194261),
    _ = n(653523),
    f = n(350972),
    p = n(677056),
    h = n(635917),
    E = n(652215),
    m = n(985018),
    g = n(588525);
function A(e) {
    let {
            id: t,
            className: n,
            style: s,
            onSelect: o,
            isSelected: p = !1,
            tabIndex: A,
            children: I,
            locked: T = !1,
            disabled: S = !1,
        } = e,
        [y, N] = i.useState((0, h.gG)(t).name),
        v = t === f.Ic.PIRATE;
    return (0, r.jsx)(u.m, {
        text: y,
        onTooltipShow: () =>
            v &&
            N(
                l().sample([
                    m.intl.string(m.t["EgWTY+"]),
                    m.intl.string(m.t.umBn5f),
                    m.intl.string(m.t.dG1wD1),
                    m.intl.string(m.t.SesI4S),
                    m.intl.string(m.t.RnMLvl),
                ]) ?? m.intl.string(m.t["EgWTY+"]),
            ),
        children: (0, r.jsxs)("div", {
            className: g.Co,
            style: s,
            children: [
                (0, r.jsx)(c.D, {
                    role: "radio",
                    "aria-label": y,
                    "aria-checked": p,
                    "aria-disabled": S,
                    tabIndex: A ?? (p ? 0 : -1),
                    className: a()(g.Ni, { [g.wH]: p }, n),
                    onClick: p ? E.tEg : () => o?.(t),
                    children: I,
                }),
                p && (0, r.jsx)(_.H$, {}),
                T &&
                    (0, r.jsx)("div", {
                        className: g.RK,
                        children: (0, r.jsx)(d.X, { className: g.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function I(e) {
    let { size: t = h.N8.SIZE_60, icon: n, isSelected: s, disabled: a, tabIndex: o, onSelect: l, locked: u } = e,
        c = i.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, r.jsx)(A, {
        style: c,
        onSelect: a ? void 0 : l,
        isSelected: s,
        id: n.id,
        className: a ? g.r9 : void 0,
        tabIndex: o,
        locked: u,
        disabled: a,
        children: (0, r.jsx)(p.A, { id: n.id, size: t }),
    });
}
