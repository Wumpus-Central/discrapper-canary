n.d(t, { A: () => p });
var l = n(627968),
    i = n(64700),
    a = n(821418),
    s = n(665260),
    r = n(545442),
    o = n(783878),
    d = n(243721),
    u = n(735547),
    c = n(652215),
    g = n(985018),
    h = n(938365);
let A = u.Ay.getMaxUsesOptions;
function p(e) {
    let {
            shouldHideTemporaryInviteToggle: t,
            maxAgeOptions: n,
            maxAge: p,
            maxUses: I,
            temporary: x,
            onToggleTemporary: m,
            onSelectMaxAge: S,
            onSelectMaxUses: v,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: y,
            onSetInviteFlags: E,
            isRoleAssignmentEnabled: _,
            assignableRoles: C,
            selectedRoleIds: T,
            onToggleRole: N,
        } = e,
        b = u.Ay.getMaxAgeOptionByValue(p),
        M = A.find((e) => e.value === I),
        j = i.useMemo(
            () =>
                C.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, l.jsx)(r.W, {
                            color: e.colorString ?? c.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [C],
        ),
        G = i.useCallback(
            (e) => {
                let t = Array.from(T),
                    n = e ?? [],
                    l = n.find((e) => !t.includes(e)),
                    i = t.find((e) => !n.includes(e));
                null != l ? N(l) : null != i && N(i);
            },
            [T, N],
        );
    return (0, l.jsxs)("div", {
        className: h.z1,
        children: [
            (0, l.jsx)(o.Z, {
                label: g.intl.string(g.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: b?.value ?? n[0].value,
                onSelectionChange: S,
                selectionMode: "single",
            }),
            (0, l.jsx)(o.Z, {
                label: g.intl.string(g.t.jDqWHW),
                options: A,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: M?.value,
                onSelectionChange: v,
                selectionMode: "single",
            }),
            _ &&
                C.length > 0 &&
                (0, l.jsx)(o.Z, {
                    label: g.intl.string(g.t.rPYJxL),
                    placeholder: g.intl.string(g.t["/djIh7"]),
                    options: j,
                    value: Array.from(T),
                    onSelectionChange: G,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: x,
                }),
            !t &&
                (0, l.jsx)(d.d, {
                    checked: x,
                    onChange: (e) => m(e),
                    description: g.intl.string(g.t.UN5IRX),
                    label: g.intl.string(g.t["wE+9dr"]),
                    disabled: T.size > 0,
                }),
            f &&
                (0, l.jsx)(d.d, {
                    checked: (0, s.Lt)(y, a.Q.IS_GUEST_INVITE),
                    onChange: (e) => E((0, s.lA)(y, a.Q.IS_GUEST_INVITE, e)),
                    description: g.intl.string(g.t["/FeTK6"]),
                    label: g.intl.string(g.t.siexRS),
                }),
        ],
    });
}
