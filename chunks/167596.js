n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(821418),
    a = n(665260),
    r = n(397927),
    o = n(735547),
    d = n(652215),
    u = n(985018),
    c = n(901462);
let g = o.Ay.getMaxUsesOptions;
function h(e) {
    let {
            shouldHideTemporaryInviteToggle: t,
            maxAgeOptions: n,
            maxAge: h,
            maxUses: A,
            temporary: p,
            onToggleTemporary: I,
            onSelectMaxAge: m,
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: v,
            inviteFlags: S,
            onSetInviteFlags: y,
            isRoleAssignmentEnabled: E,
            assignableRoles: C,
            selectedRoleIds: f,
            onToggleRole: _,
        } = e,
        T = o.Ay.getMaxAgeOptionByValue(h),
        b = g.find((e) => e.value === A),
        N = l.useMemo(
            () =>
                C.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, i.jsx)(r.WYI, {
                            color: e.colorString ?? d.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [C],
        ),
        M = l.useCallback(
            (e) => {
                let t = Array.from(f),
                    n = e ?? [],
                    i = n.find((e) => !t.includes(e)),
                    l = t.find((e) => !n.includes(e));
                null != i ? _(i) : null != l && _(l);
            },
            [f, _],
        );
    return (0, i.jsxs)("div", {
        className: c.z1,
        children: [
            (0, i.jsx)(r.ZiE, {
                label: u.intl.string(u.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: T?.value ?? n[0].value,
                onSelectionChange: m,
                selectionMode: "single",
            }),
            (0, i.jsx)(r.ZiE, {
                label: u.intl.string(u.t.jDqWHW),
                options: g,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: b?.value,
                onSelectionChange: x,
                selectionMode: "single",
            }),
            E &&
                C.length > 0 &&
                (0, i.jsx)(r.ZiE, {
                    label: u.intl.string(u.t.rPYJxL),
                    placeholder: u.intl.string(u.t["/djIh7"]),
                    options: N,
                    value: Array.from(f),
                    onSelectionChange: M,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                }),
            !t &&
                (0, i.jsx)(r.dOG, {
                    checked: p,
                    onChange: (e) => I(e),
                    description: u.intl.string(u.t.UN5IRX),
                    label: u.intl.string(u.t["wE+9dr"]),
                }),
            v &&
                (0, i.jsx)(r.dOG, {
                    checked: (0, a.Lt)(S, s.Q.IS_GUEST_INVITE),
                    onChange: (e) => y((0, a.lA)(S, s.Q.IS_GUEST_INVITE, e)),
                    description: u.intl.string(u.t["/FeTK6"]),
                    label: u.intl.string(u.t.siexRS),
                }),
        ],
    });
}
