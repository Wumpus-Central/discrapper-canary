n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(28664),
    u = n(481060),
    d = n(583901),
    f = n(997945),
    p = n(630117),
    _ = n(441319),
    m = n(981631),
    h = n(388032),
    g = n(63224);
let E = () => [
        h.intl.string(h.t["EgWTY+"]),
        h.intl.string(h.t.umBn5f),
        h.intl.string(h.t.dG1wD1),
        h.intl.string(h.t.SesI4S),
        h.intl.string(h.t.RnMLvl),
    ],
    b = () => {
        var e;
        return null != (e = l().sample(E())) ? e : h.intl.string(h.t["EgWTY+"]);
    };
function y(e) {
    let { id: t, className: n, onSelect: o, isSelected: s = !1, tabIndex: l, children: p, locked: h = !1 } = e,
        [E, y] = i.useState((0, _.aW)(t).name),
        O = t === f.Ru.PIRATE;
    return (0, r.jsx)(c.u, {
        text: E,
        onTooltipShow: () => O && y(b()),
        children: (0, r.jsxs)("div", {
            className: g.appIconSelectionContainer,
            children: [
                (0, r.jsx)(u.P3F, {
                    role: "radio",
                    "aria-label": E,
                    "aria-checked": s,
                    tabIndex: null != l ? l : s ? 0 : -1,
                    className: a()(g.appIconSelection, { [g.selected]: s }, n),
                    onClick: s ? m.dG4 : () => (null == o ? void 0 : o(t)),
                    children: p,
                }),
                s && (0, r.jsx)(d.oK, {}),
                h &&
                    (0, r.jsx)("div", {
                        className: g.lockedBadgeContainer,
                        children: (0, r.jsx)(u.mBM, {
                            className: g.lockedBadge,
                            color: "currentColor",
                        }),
                    }),
            ],
        }),
    });
}
function O(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: o, onSelect: a, locked: s } = e;
    return (0, r.jsx)(y, {
        onSelect: i ? void 0 : a,
        isSelected: n,
        id: t.id,
        className: i ? g.disabled : void 0,
        tabIndex: o,
        locked: s,
        children: (0, r.jsx)(p.Z, {
            id: t.id,
            width: _.M9,
        }),
    });
}
