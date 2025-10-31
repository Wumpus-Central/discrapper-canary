n.d(t, { Z: () => H }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
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
    g = n(527379),
    j = n(285173),
    x = n(388032),
    v = n(115491),
    y = n(266631);
let O = new Set();
function H(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, f.BG)(t),
        a = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()),
        [c, d] = l.useState(a.selectedRoleIds),
        H = (0, p.h)(t, O, !0),
        _ = (e, n) => {
            let { record: l } = e;
            return (0, r.jsx)(
                b.lo1,
                {
                    value: l.id,
                    children: (0, r.jsxs)("div", {
                        className: v.roleNameContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: v.roleLabel,
                                children: [
                                    (0, r.jsx)("div", { className: o()(v.labelBackground, n && v.selected) }),
                                    (0, r.jsx)(b.lo1.Label, {
                                        children: (0, r.jsx)(
                                            j.Z,
                                            {
                                                className: y.roleTooltipItem,
                                                role: l,
                                                guildId: t,
                                            },
                                            l.id,
                                        ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: v.checkboxContainer,
                                children: (0, r.jsx)(b.lo1.Checkbox, { checked: n }),
                            }),
                        ],
                    }),
                },
                l.id,
            );
        },
        w = l.useCallback(
            (e) => {
                (0, g.Dr)(t, { selectedRoleIds: e }), i(e);
            },
            [t, i],
        ),
        S = l.useMemo(() => u()(w, 300), [w]),
        Z = l.useCallback(
            (e) => {
                let t;
                d((t = new Set(c.has(e) ? [...c].filter((t) => t !== e) : [...c, e]))), S(t);
            },
            [c, S],
        );
    return (0, r.jsx)(b.DBG, {
        className: v.rolePopout,
        placeholder: x.intl.string(x.t.ZveC7e),
        value: c,
        onChange: Z,
        onClose: () => {
            n();
        },
        multiSelect: !0,
        autoFocus: !0,
        children: (e) =>
            H.reduce((t, n) => {
                let { record: r } = n,
                    l = c.has(r.id);
                return s()(e.toLowerCase(), r.name.toLowerCase()) ? t.push(_(n, l)) : l && t.push(_(n, l)), t;
            }, []),
    });
}
