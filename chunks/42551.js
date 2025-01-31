l.d(t, { Z: () => N }), l(47120), l(724458), l(653041);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(658722),
    r = l.n(s),
    c = l(954955),
    C = l.n(c),
    d = l(498607),
    u = l.n(d),
    m = l(399606),
    h = l(481060),
    x = l(563115),
    g = l(910693),
    H = l(893966),
    b = l(527379),
    p = l(285173),
    _ = l(388032),
    j = l(137899),
    f = l(216412);
let v = new Set();
function N(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, g.BG)(t),
        s = (0, m.e7)([H.Z], () => H.Z.getSearchStateByGuildId(t), [t], u()),
        [c, d] = a.useState(s.selectedRoleIds),
        N = (0, x.h)(t, v, !0),
        Z = (e, l) => {
            let { record: a } = e;
            return (0, n.jsx)(
                h.lo1,
                {
                    value: a.id,
                    children: (0, n.jsxs)('div', {
                        className: o()(j.roleNameContainer),
                        children: [
                            (0, n.jsxs)('div', {
                                className: o()(j.roleLabel),
                                children: [
                                    (0, n.jsx)('div', { className: o()(j.labelBackground, l && j.selected) }),
                                    (0, n.jsx)(h.lo1.Label, {
                                        children: (0, n.jsx)(
                                            p.Z,
                                            {
                                                className: o()(f.roleTooltipItem),
                                                role: a,
                                                guildId: t
                                            },
                                            a.id
                                        )
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: j.checkboxContainer,
                                children: (0, n.jsx)(h.lo1.Checkbox, { checked: l })
                            })
                        ]
                    })
                },
                a.id
            );
        },
        L = (e, t) =>
            N.reduce((l, n) => {
                let { record: a } = n,
                    i = e.has(a.id);
                return r()(t.toLowerCase(), a.name.toLowerCase()) ? l.push(Z(n, i)) : i && l.push(Z(n, i)), l;
            }, []),
        R = a.useCallback(
            (e) => {
                (0, b.Dr)(t, { selectedRoleIds: e }), i(e);
            },
            [t, i]
        ),
        M = a.useMemo(() => C()(R, 300), [R]),
        I = a.useCallback(
            (e) => {
                let t;
                d((t = new Set(c.has(e) ? [...c].filter((t) => t !== e) : [...c, e]))), M(t);
            },
            [c, M]
        );
    return (0, n.jsx)(h.DBG, {
        className: o()(j.rolePopout),
        placeholder: _.intl.string(_.t.ZveC7e),
        value: c,
        onChange: I,
        onClose: () => {
            l();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => L(c, e)
    });
}
