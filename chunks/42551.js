n.d(t, { Z: () => N }), n(47120), n(653041);
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
    y = n(506192),
    v = n(350381);
let O = new Set();
function N(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, f.BG)(t),
        i = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()),
        [c, d] = l.useState(i.selectedRoleIds),
        N = (0, p.h)(t, O, !0),
        _ = (e, n) => {
            let { record: l } = e;
            return (0, r.jsx)(
                b.lo1,
                {
                    value: l.id,
                    children: (0, r.jsxs)('div', {
                        className: y.roleNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: y.roleLabel,
                                children: [
                                    (0, r.jsx)('div', { className: a()(y.labelBackground, n && y.selected) }),
                                    (0, r.jsx)(b.lo1.Label, {
                                        children: (0, r.jsx)(
                                            g.Z,
                                            {
                                                className: v.roleTooltipItem,
                                                role: l,
                                                guildId: t
                                            },
                                            l.id
                                        )
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: y.checkboxContainer,
                                children: (0, r.jsx)(b.lo1.Checkbox, { checked: n })
                            })
                        ]
                    })
                },
                l.id
            );
        },
        H = (e, t) =>
            N.reduce((n, r) => {
                let { record: l } = r,
                    o = e.has(l.id);
                return s()(t.toLowerCase(), l.name.toLowerCase()) ? n.push(_(r, o)) : o && n.push(_(r, o)), n;
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
        className: y.rolePopout,
        placeholder: x.NW.string(x.t.ZveC7e),
        value: c,
        onChange: D,
        onClose: () => {
            n();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => H(c, e)
    });
}
