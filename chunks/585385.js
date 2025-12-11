n.d(t, { D: () => a }), n(997841);
var l = n(54381),
    i = n(775086),
    s = n(948851),
    r = n(388032);
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
            isRoleAssignmentEnabled: I,
            assignableRoles: m,
            onToggleRole: S,
        } = e,
        { maxAgeOptions: f, maxAge: x, maxUses: y, temporary: E, flags: _, roleIds: b } = n;
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
        children: (0, l.jsx)(s.Z, {
            shouldHideTemporaryInviteToggle: a,
            maxAgeOptions: f,
            maxAge: x,
            maxUses: y,
            temporary: E,
            onToggleTemporary: u,
            onSelectMaxAge: d,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: _,
            isRoleAssignmentEnabled: I,
            assignableRoles: m,
            selectedRoleIds: b,
            onToggleRole: S,
        }),
    });
};
