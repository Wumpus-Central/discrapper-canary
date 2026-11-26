var n = i(477900),
    a = i(582128),
    l = i(284009),
    s = i.n(l),
    r = i(855986),
    d = i(189213),
    o = i(27192),
    c = i(683438),
    u = i(71393),
    p = i(200662),
    h = i(631223),
    g = i(523388),
    k = i(792996),
    C = i(490069);
i.d(
    e,
    {},
    {
        default: function (t) {
            let {
                    editPermissions: e,
                    guildId: i,
                    hasMemberSearch: l,
                    headerText: b,
                    onClose: y,
                    overwrittenKeys: x,
                    search: j,
                    searchPlaceholderText: v,
                    selectedPermissionCount: w,
                    transitionState: A,
                } = t,
                E = (0, r.bG)([u.A], () => u.A.getGuild(i), [i]);
            s()(null != E, "");
            let {
                    query: I,
                    setQuery: N,
                    setSearchQuery: T,
                    filteredResults: f,
                    onSelect: m,
                    isSelected: G,
                    submit: H,
                    newSelectedOverwriteCount: O,
                    maximumPermissionsSelected: R,
                } = (0, h.Ay)({
                    editPermissions: e,
                    guildId: i,
                    hasMemberSearch: l,
                    overwrittenKeys: x,
                    search: j,
                    selectedPermissionCount: w,
                }),
                V = a.useCallback(() => {
                    (H(), y());
                }, [H, y]),
                _ = a.useCallback(
                    (t) => {
                        let e = f[t.rowIndex],
                            i = G(e.id, e.type),
                            a = R && !i;
                        return (0, n.jsx)(
                            "div",
                            {
                                className: C.A,
                                children: (0, n.jsx)(o.Kj, {
                                    type: o.Or.INVERTED,
                                    disabled: a,
                                    value: i,
                                    onChange: () => m(e.id, e.type),
                                    children: (0, n.jsx)(g.A, { guild: E, id: e.id, type: e.type, isLocked: !1 }),
                                }),
                            },
                            (0, p.Eu)(e.id, e.type),
                        );
                    },
                    [f, E, G, R, m],
                );
            return (0, n.jsx)(d.a, {
                "aria-label": k.intl.string(k.t["N+InBa"]),
                transitionState: A,
                title: b,
                subtitle: R ? k.intl.string(k.t["XTwtW/"]) : void 0,
                onClose: y,
                input: (0, n.jsx)(c.I, {
                    query: I,
                    placeholder: v,
                    "aria-label": v,
                    onChange: T,
                    onClear: () => N(""),
                }),
                actions: [
                    { text: k.intl.string(k.t["ETE/oC"]), onClick: y, variant: "secondary" },
                    { text: k.intl.string(k.t.OYkgVk), onClick: V, variant: "primary", disabled: 0 === O },
                ],
                listProps: { renderRow: _, sections: [f.length], rowHeight: 36, sectionHeight: 36 },
            });
        },
    },
);
