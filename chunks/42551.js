n.d(t, { Z: () => N }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(658722),
    s = n.n(i),
    c = n(954955),
    u = n.n(c),
    d = n(498607),
    C = n.n(d),
    m = n(399606),
    b = n(481060),
    p = n(563115),
    f = n(910693),
    h = n(893966),
    j = n(527379),
    g = n(285173),
    x = n(388032),
    O = n(506192),
    y = n(350381);
let v = new Set();
function N(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, f.BG)(t),
        i = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()),
        [c, d] = l.useState(i.selectedRoleIds),
        N = (0, p.h)(t, v, !0),
        H = (e, n) => {
            let { record: l } = e;
            return (0, r.jsx)(
                b.lo1,
                {
                    value: l.id,
                    children: (0, r.jsxs)('div', {
                        className: O.roleNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: O.roleLabel,
                                children: [
                                    (0, r.jsx)('div', { className: a()(O.labelBackground, n && O.selected) }),
                                    (0, r.jsx)(b.lo1.Label, {
                                        children: (0, r.jsx)(
                                            g.Z,
                                            {
                                                className: y.roleTooltipItem,
                                                role: l,
                                                guildId: t
                                            },
                                            l.id
                                        )
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: O.checkboxContainer,
                                children: (0, r.jsx)(b.lo1.Checkbox, { checked: n })
                            })
                        ]
                    })
                },
                l.id
            );
        },
        _ = (e, t) =>
            N.reduce((n, r) => {
                let { record: l } = r,
                    o = e.has(l.id);
                return s()(t.toLowerCase(), l.name.toLowerCase()) ? n.push(H(r, o)) : o && n.push(H(r, o)), n;
            }, []),
        w = l.useCallback(
            (e) => {
                (0, j.Dr)(t, { selectedRoleIds: e }), o(e);
            },
            [t, o]
        ),
        S = l.useMemo(() => u()(w, 300), [w]),
        D = l.useCallback(
            (e) => {
                let t;
                d((t = new Set(c.has(e) ? [...c].filter((t) => t !== e) : [...c, e]))), S(t);
            },
            [c, S]
        );
    return (0, r.jsx)(b.DBG, {
        className: O.rolePopout,
        placeholder: x.NW.string(x.t.ZveC7e),
        value: c,
        onChange: D,
        onClose: () => {
            n();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => _(c, e)
    });
}
