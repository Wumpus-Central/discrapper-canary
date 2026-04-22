l.d(t, { A: () => V });
var n = l(627968),
    i = l(64700),
    a = l(91871),
    s = l.n(a),
    C = l(33851),
    r = l.n(C),
    o = l(311907),
    d = l(417597),
    c = l(602853),
    u = l(827734),
    m = l(861672),
    h = l(477782),
    x = l(583650),
    g = l(775602),
    H = l(676608),
    _ = l(34457),
    p = l(317525),
    f = l(504049),
    j = l(266047),
    b = l(221950),
    A = l(652215),
    v = l(985018);
function V(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, f.hs)(t),
        [C, V] = i.useState(""),
        L = (0, d.bG)([j.A], () => j.A.getSearchStateByGuildId(t), [t], r()),
        D = (0, d.bG)([g.A], () => g.A.roleStyle),
        R = (0, c.r)(u.A.unsafe_rawColors.PRIMARY_300).hex(),
        M = (0, H.jV)(t, null),
        E = (0, o.yK)([p.A], () => p.A.getSortedRoles(t).filter((e) => !(0, _.Oy)(e)), [t]),
        N = i.useMemo(() => ("" === C ? E : E.filter((e) => s()(C.toLowerCase(), e.name.toLowerCase()))), [E, C]),
        I = i.useCallback(
            (e) => {
                let l = new Set(L.selectedRoleIds);
                l.has(e) ? l.delete(e) : l.add(e), (0, b.Ld)(t, { selectedRoleIds: l }), a(l);
            },
            [t, L.selectedRoleIds, a],
        );
    return (0, n.jsx)(m.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": v.intl.string(v.t.ZveC7e),
        onSelect: A.tEg,
        children: (0, n.jsxs)(h.rX, {
            children: [
                (0, n.jsx)(h.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, n.jsx)(x.V, {
                            ...e,
                            query: C,
                            onChange: V,
                            ref: t,
                            placeholder: v.intl.string(v.t.ZveC7e),
                        }),
                }),
                (0, n.jsx)(h.bX, {}),
                N.map((e) => {
                    let t = e.colorString ?? R,
                        l =
                            M && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, n.jsx)(
                        h.sL,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === D ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: L.selectedRoleIds.has(e.id),
                            action: () => I(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
