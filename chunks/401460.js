r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(481060),
    f = r(583901),
    p = r(997945),
    h = r(630117),
    _ = r(441319),
    m = r(981631),
    g = r(388032),
    E = r(138363);
let v = () => [g.intl.string(g.t.EgWTY2), g.intl.string(g.t.umBn5e), g.intl.string(g.t.dG1wDw), g.intl.string(g.t.SesI4e), g.intl.string(g.t.RnMLvr)],
    y = () => {
        var e;
        return null !== (e = c().sample(v())) && void 0 !== e ? e : g.intl.string(g.t.EgWTY2);
    };
function b(e) {
    let { id: n, className: r, onSelect: i, isSelected: s = !1, tabIndex: u, children: c, locked: h = !1 } = e,
        [g, v] = o.useState((0, _.aW)(n).name),
        b = n === p.Ru.PIRATE,
        I = (0, d.useRadioItem)({
            label: g,
            isSelected: s
        });
    return (0, a.jsx)(d.Tooltip, {
        text: g,
        onTooltipShow: () => b && v(y()),
        children: (e) =>
            (0, a.jsxs)('div', {
                className: E.appIconSelectionContainer,
                children: [
                    (0, a.jsx)(d.Clickable, {
                        ...e,
                        ...I,
                        tabIndex: null != u ? u : I.tabIndex,
                        className: l()(E.appIconSelection, { [E.selected]: s }, r),
                        onClick: s ? m.dG4 : () => (null == i ? void 0 : i(n)),
                        children: c
                    }),
                    s && (0, a.jsx)(f.oK, {}),
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
function I(e) {
    let { icon: n, isSelected: r, disabled: i, tabIndex: o, onSelect: s, locked: l } = e;
    return (0, a.jsx)(b, {
        onSelect: i ? void 0 : s,
        isSelected: r,
        id: n.id,
        className: i ? E.disabled : void 0,
        tabIndex: o,
        locked: l,
        children: (0, a.jsx)(h.Z, {
            id: n.id,
            width: _.M9
        })
    });
}
