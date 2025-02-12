n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(583901),
    d = n(997945),
    f = n(630117),
    _ = n(441319),
    p = n(981631),
    h = n(388032),
    m = n(707079);
let g = () => [h.intl.string(h.t.EgWTY2), h.intl.string(h.t.umBn5e), h.intl.string(h.t.dG1wDw), h.intl.string(h.t.SesI4e), h.intl.string(h.t.RnMLvr)],
    E = () => {
        var e;
        return null !== (e = l().sample(g())) && void 0 !== e ? e : h.intl.string(h.t.EgWTY2);
    };
function v(e) {
    let { id: t, className: n, onSelect: a, isSelected: o = !1, tabIndex: l, children: f, locked: h = !1 } = e,
        [g, v] = r.useState((0, _.aW)(t).name),
        y = t === d.Ru.PIRATE,
        I = (0, u.xUy)({
            label: g,
            isSelected: o
        });
    return (0, i.jsx)(u.ua7, {
        text: g,
        onTooltipShow: () => y && v(E()),
        children: (e) =>
            (0, i.jsxs)('div', {
                className: m.appIconSelectionContainer,
                children: [
                    (0, i.jsx)(u.P3F, {
                        ...e,
                        ...I,
                        tabIndex: null != l ? l : I.tabIndex,
                        className: s()(m.appIconSelection, { [m.selected]: o }, n),
                        onClick: o ? p.dG4 : () => (null == a ? void 0 : a(t)),
                        children: f
                    }),
                    o && (0, i.jsx)(c.oK, {}),
                    h &&
                        (0, i.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, i.jsx)(u.mBM, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function y(e) {
    let { icon: t, isSelected: n, disabled: r, tabIndex: a, onSelect: s, locked: o } = e;
    return (0, i.jsx)(v, {
        onSelect: r ? void 0 : s,
        isSelected: n,
        id: t.id,
        className: r ? m.disabled : void 0,
        tabIndex: a,
        locked: o,
        children: (0, i.jsx)(f.Z, {
            id: t.id,
            width: _.M9
        })
    });
}
