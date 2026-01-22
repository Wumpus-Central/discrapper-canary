n.d(t, {
    h: () => a,
}),
    n(938796);
var l = n(627968),
    i = n(189213),
    s = n(167596),
    r = n(985018);
let a = (e) => {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: a,
            onGenerateNewLink: o,
            onToggleTemporary: u,
            onSelectMaxAge: d,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            onClose: p,
            transitionState: v,
            isRoleAssignmentEnabled: A,
            assignableRoles: I,
            onToggleRole: m,
        } = e,
        { maxAgeOptions: S, maxAge: x, maxUses: y, temporary: f, flags: E, roleIds: _ } = n;
    return (0, l.jsx)(i.Modal, {
        transitionState: v,
        onClose: p,
        title: r.intl.string(r.t.Atdlyu),
        actions: [
            {
                variant: "secondary",
                text: r.intl.string(r.t["ETE/oC"]),
                onClick: t,
            },
            {
                variant: "primary",
                text: r.intl.string(r.t.pz1lRG),
                onClick: () => {
                    o(), t();
                },
            },
        ],
        children: (0, l.jsx)(s.A, {
            shouldHideTemporaryInviteToggle: a,
            maxAgeOptions: S,
            maxAge: x,
            maxUses: y,
            temporary: f,
            onToggleTemporary: u,
            onSelectMaxAge: d,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: E,
            isRoleAssignmentEnabled: A,
            assignableRoles: I,
            selectedRoleIds: _,
            onToggleRole: m,
        }),
    });
};
