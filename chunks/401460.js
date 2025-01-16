r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(481060),
    f = r(583901),
    _ = r(997945),
    h = r(630117),
    p = r(441319),
    m = r(981631),
    g = r(388032),
    E = r(138363);
let v = () => [g.intl.string(g.t.EgWTY2), g.intl.string(g.t.umBn5e), g.intl.string(g.t.dG1wDw), g.intl.string(g.t.SesI4e), g.intl.string(g.t.RnMLvr)],
    I = () => {
        var e;
        return null !== (e = c().sample(v())) && void 0 !== e ? e : g.intl.string(g.t.EgWTY2);
    };
function T(e) {
    let { id: n, className: r, onSelect: i, isSelected: o = !1, tabIndex: u, children: c, locked: h = !1 } = e,
        [g, v] = s.useState((0, p.aW)(n).name),
        T = n === _.Ru.PIRATE,
        b = (0, d.useRadioItem)({
            label: g,
            isSelected: o
        });
    return (0, a.jsx)(d.Tooltip, {
        text: g,
        onTooltipShow: () => T && v(I()),
        children: (e) =>
            (0, a.jsxs)('div', {
                className: E.appIconSelectionContainer,
                children: [
                    (0, a.jsx)(d.Clickable, {
                        ...e,
                        ...b,
                        tabIndex: null != u ? u : b.tabIndex,
                        className: l()(E.appIconSelection, { [E.selected]: o }, r),
                        onClick: o ? m.dG4 : () => (null == i ? void 0 : i(n)),
                        children: c
                    }),
                    o && (0, a.jsx)(f.oK, {}),
                    h &&
                        (0, a.jsx)('div', {
                            className: E.lockedBadgeContainer,
                            children: (0, a.jsx)(d.LockIcon, {
                                className: E.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function b(e) {
    let { icon: n, isSelected: r, disabled: i, tabIndex: s, onSelect: o, locked: l } = e;
    return (0, a.jsx)(T, {
        onSelect: i ? void 0 : o,
        isSelected: r,
        id: n.id,
        className: i ? E.disabled : void 0,
        tabIndex: s,
        locked: l,
        children: (0, a.jsx)(h.Z, {
            id: n.id,
            width: p.M9
        })
    });
}
