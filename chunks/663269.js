n.d(t, { h: () => r }), n(938796);
var l = n(627968),
    i = n(189213),
    a = n(167596),
    s = n(985018);
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
            assignableRoles: x,
            onToggleRole: m,
        } = e,
        { maxAgeOptions: S, maxAge: v, maxUses: f, temporary: y, flags: E, roleIds: _ } = n;
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        onClose: A,
        title: s.intl.string(s.t.Atdlyu),
        actions: [
            { variant: "secondary", text: s.intl.string(s.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: s.intl.string(s.t.pz1lRG),
                onClick: () => {
                    o(), t();
                },
            },
        ],
        children: (0, l.jsx)(a.A, {
            shouldHideTemporaryInviteToggle: r,
            maxAgeOptions: S,
            maxAge: v,
            maxUses: f,
            temporary: y,
            onToggleTemporary: d,
            onSelectMaxAge: u,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: E,
            isRoleAssignmentEnabled: I,
            assignableRoles: x,
            selectedRoleIds: _,
            onToggleRole: m,
        }),
    });
};
