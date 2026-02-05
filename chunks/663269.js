n.d(t, { h: () => r }), n(938796);
var i = n(627968),
    l = n(189213),
    s = n(167596),
    a = n(985018);
let r = (e) => {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: r,
            onGenerateNewLink: o,
            onToggleTemporary: d,
            onSelectMaxAge: u,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            onClose: A,
            transitionState: p,
            isRoleAssignmentEnabled: I,
            assignableRoles: m,
            onToggleRole: x,
        } = e,
        { maxAgeOptions: v, maxAge: S, maxUses: y, temporary: E, flags: C, roleIds: f } = n;
    return (0, i.jsx)(l.Modal, {
        transitionState: p,
        onClose: A,
        title: a.intl.string(a.t.Atdlyu),
        actions: [
            { variant: "secondary", text: a.intl.string(a.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: a.intl.string(a.t.pz1lRG),
                onClick: () => {
                    o(), t();
                },
            },
        ],
        children: (0, i.jsx)(s.A, {
            shouldHideTemporaryInviteToggle: r,
            maxAgeOptions: v,
            maxAge: S,
            maxUses: y,
            temporary: E,
            onToggleTemporary: d,
            onSelectMaxAge: u,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: C,
            isRoleAssignmentEnabled: I,
            assignableRoles: m,
            selectedRoleIds: f,
            onToggleRole: x,
        }),
    });
};
