l.d(t, { Z: () => N }), l(47120), l(724458), l(653041);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(658722),
    r = l.n(s),
    c = l(954955),
    d = l.n(c),
    C = l(498607),
    u = l.n(C),
    m = l(399606),
    h = l(481060),
    x = l(563115),
    g = l(910693),
    p = l(893966),
    _ = l(527379),
    b = l(285173),
    f = l(388032),
    j = l(277963),
    H = l(697301);
let v = new Set();
function N(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, g.BG)(t),
        s = (0, m.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], u()),
        [c, C] = a.useState(s.selectedRoleIds),
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
                                            b.Z,
                                            {
                                                className: o()(H.roleTooltipItem),
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
                (0, _.Dr)(t, { selectedRoleIds: e }), i(e);
            },
            [t, i]
        ),
        I = a.useMemo(() => d()(R, 300), [R]),
        M = a.useCallback(
            (e) => {
                let t;
                C((t = new Set(c.has(e) ? [...c].filter((t) => t !== e) : [...c, e]))), I(t);
            },
            [c, I]
        );
    return (0, n.jsx)(h.DBG, {
        className: o()(j.rolePopout),
        placeholder: f.intl.string(f.t.ZveC7e),
        value: c,
        onChange: M,
        onClose: () => {
            l();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => L(c, e)
    });
}
