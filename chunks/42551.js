n.d(t, { Z: () => _ }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(658722),
    s = n.n(a),
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
    v = n(506192),
    O = n(350381);
let y = new Set();
function _(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, f.BG)(t),
        a = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()),
        [c, d] = l.useState(a.selectedRoleIds),
        _ = (0, p.h)(t, y, !0),
        H = (e, n) => {
            let { record: l } = e;
            return (0, r.jsx)(
                b.lo1,
                {
                    value: l.id,
                    children: (0, r.jsxs)('div', {
                        className: v.roleNameContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.roleLabel,
                                children: [
                                    (0, r.jsx)('div', { className: i()(v.labelBackground, n && v.selected) }),
                                    (0, r.jsx)(b.lo1.Label, {
                                        children: (0, r.jsx)(
                                            g.Z,
                                            {
                                                className: O.roleTooltipItem,
                                                role: l,
                                                guildId: t
                                            },
                                            l.id
                                        )
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: v.checkboxContainer,
                                children: (0, r.jsx)(b.lo1.Checkbox, { checked: n })
                            })
                        ]
                    })
                },
                l.id
            );
        },
        w = (e, t) =>
            _.reduce((n, r) => {
                let { record: l } = r,
                    o = e.has(l.id);
                return s()(t.toLowerCase(), l.name.toLowerCase()) ? n.push(H(r, o)) : o && n.push(H(r, o)), n;
            }, []),
        N = l.useCallback(
            (e) => {
                (0, j.Dr)(t, { selectedRoleIds: e }), o(e);
            },
            [t, o]
        ),
        S = l.useMemo(() => u()(N, 300), [N]),
        D = l.useCallback(
            (e) => {
                let t;
                d((t = new Set(c.has(e) ? [...c].filter((t) => t !== e) : [...c, e]))), S(t);
            },
            [c, S]
        );
    return (0, r.jsx)(b.DBG, {
        className: v.rolePopout,
        placeholder: x.intl.string(x.t.ZveC7e),
        value: c,
        onChange: D,
        onClose: () => {
            n();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: (e) => w(c, e)
    });
}
