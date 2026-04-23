"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    d = n(939249),
    c = n(194261),
    _ = n(653523),
    f = n(350972),
    E = n(677056),
    h = n(635917),
    p = n(652215),
    m = n(985018),
    g = n(841453);
function A(e) {
    let {
            id: t,
            className: n,
            style: s,
            onSelect: o,
            isSelected: E = !1,
            tabIndex: A,
            children: I,
            locked: T = !1,
            disabled: S = !1,
        } = e,
        [y, N] = i.useState((0, h.gG)(t).name),
        O = t === f.Ic.PIRATE;
    return (0, r.jsx)(u.m, {
        text: y,
        onTooltipShow: () =>
            O &&
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
                (0, r.jsx)(d.D, {
                    role: "radio",
                    "aria-label": y,
                    "aria-checked": E,
                    "aria-disabled": S,
                    tabIndex: A ?? (E ? 0 : -1),
                    className: a()(g.Ni, { [g.wH]: E }, n),
                    onClick: E ? p.tEg : () => o?.(t),
                    children: I,
                }),
                E && (0, r.jsx)(_.H$, {}),
                T &&
                    (0, r.jsx)("div", {
                        className: g.RK,
                        children: (0, r.jsx)(c.X, { className: g.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function I(e) {
    let { size: t = h.N8.SIZE_60, icon: n, isSelected: s, disabled: a, tabIndex: o, onSelect: l, locked: u } = e,
        d = i.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, r.jsx)(A, {
        style: d,
        onSelect: a ? void 0 : l,
        isSelected: s,
        id: n.id,
        className: a ? g.r9 : void 0,
        tabIndex: o,
        locked: u,
        disabled: a,
        children: (0, r.jsx)(E.A, { id: n.id, size: t }),
    });
}
