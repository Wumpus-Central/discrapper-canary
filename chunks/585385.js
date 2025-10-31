n.d(t, { D: () => a }), n(997841);
var i = n(951288),
    l = n(775086),
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
            onClose: v,
            transitionState: p,
        } = e,
        { maxAgeOptions: I, maxAge: m, maxUses: S, temporary: x, flags: f } = n;
    return (0, i.jsx)(l.u, {
        transitionState: p,
        onClose: v,
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
        children: (0, i.jsx)(s.Z, {
            shouldHideTemporaryInviteToggle: a,
            maxAgeOptions: I,
            maxAge: m,
            maxUses: S,
            temporary: x,
            onToggleTemporary: u,
            onSelectMaxAge: d,
            onSelectMaxUses: c,
            onGenerateNewLink: o,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: f,
        }),
    });
};
