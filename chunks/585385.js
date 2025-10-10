n.d(t, { D: () => h }), n(997841);
var l = n(951288),
    i = n(120356),
    s = n.n(i),
    r = n(481060),
    a = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(451964),
    g = n(197571);
let h = (e) => {
    let {
            handleDone: t,
            headerId: n,
            modalState: i,
            shouldHideTemporaryInviteToggle: h,
            onGenerateNewLink: m,
            onToggleTemporary: p,
            onSelectMaxAge: v,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: x,
            onSetInviteFlags: f,
        } = e,
        N = (0, a.ZP)(),
        { maxAgeOptions: S, maxAge: _, maxUses: b, temporary: j, flags: E } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.xBx, {
                children: [
                    (0, l.jsx)("div", {
                        className: c.closeButton,
                        children: (0, l.jsx)(r.olH, { onClick: t }),
                    }),
                    (0, l.jsx)("div", {
                        className: c.headerContainer,
                        children: (0, l.jsx)(r.X6q, {
                            id: n,
                            variant: "heading-md/semibold",
                            className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.intl.string(u.t.Atdlys),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: h,
                maxAgeOptions: S,
                maxAge: _,
                maxUses: b,
                temporary: j,
                onToggleTemporary: p,
                onSelectMaxAge: v,
                onSelectMaxUses: I,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: x,
                onSetInviteFlags: f,
                inviteFlags: E,
            }),
            (0, l.jsx)(r.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(d.Z, {
                    theme: N,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t,
                }),
            }),
        ],
    });
};
