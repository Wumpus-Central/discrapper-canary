l.d(t, { A: () => p });
var n = l(627968),
    i = l(64700),
    s = l(91871),
    a = l.n(s),
    r = l(33851),
    C = l.n(r),
    o = l(311907),
    d = l(417597),
    c = l(397927),
    u = l(775602),
    m = l(676608),
    x = l(34457),
    h = l(317525),
    g = l(504049),
    H = l(266047),
    j = l(221950),
    _ = l(652215),
    f = l(985018);
function p(e) {
    let { guildId: t, onClose: l } = e,
        s = (0, g.hs)(t),
        [r, p] = i.useState(""),
        b = (0, d.bG)([H.A], () => H.A.getSearchStateByGuildId(t), [t], C()),
        v = (0, d.bG)([u.A], () => u.A.roleStyle),
        A = (0, c.rdh)(c.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        V = (0, m.jV)(t, null),
        L = (0, o.yK)([h.A], () => h.A.getSortedRoles(t).filter((e) => !(0, x.Oy)(e)), [t]),
        N = i.useMemo(() => ("" === r ? L : L.filter((e) => a()(r.toLowerCase(), e.name.toLowerCase()))), [L, r]),
        R = i.useCallback(
            (e) => {
                let l = new Set(b.selectedRoleIds);
                l.has(e) ? l.delete(e) : l.add(e), (0, j.Ld)(t, { selectedRoleIds: l }), s(l);
            },
            [t, b.selectedRoleIds, s],
        );
    return (0, n.jsx)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": f.intl.string(f.t.ZveC7e),
        onSelect: _.tEg,
        children: (0, n.jsxs)(c.rXV, {
            children: [
                (0, n.jsx)(c.aK1, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, n.jsx)(c.VPO, {
                            ...e,
                            query: r,
                            onChange: p,
                            ref: t,
                            placeholder: f.intl.string(f.t.ZveC7e),
                        }),
                }),
                (0, n.jsx)(c.bXX, {}),
                N.map((e) => {
                    let t = e.colorString ?? A,
                        l =
                            V && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, n.jsx)(
                        c.sLh,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === v ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: b.selectedRoleIds.has(e.id),
                            action: () => R(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
