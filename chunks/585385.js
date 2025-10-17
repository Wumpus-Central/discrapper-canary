n.d(t, { D: () => h }), n(997841);
var i = n(951288),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    r = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(451964),
    g = n(197571);
let h = (e) => {
    let {
            handleDone: t,
            headerId: n,
            modalState: l,
            shouldHideTemporaryInviteToggle: h,
            onGenerateNewLink: m,
            onToggleTemporary: v,
            onSelectMaxAge: p,
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: I,
            onSetInviteFlags: S,
        } = e,
        f = (0, r.ZP)(),
        { maxAgeOptions: E, maxAge: y, maxUses: C, temporary: _, flags: N } = l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                children: [
                    (0, i.jsx)("div", {
                        className: c.closeButton,
                        children: (0, i.jsx)(a.olH, { onClick: t }),
                    }),
                    (0, i.jsx)("div", {
                        className: c.headerContainer,
                        children: (0, i.jsx)(a.Heading, {
                            id: n,
                            variant: "heading-md/semibold",
                            className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.intl.string(u.t.Atdlys),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: h,
                maxAgeOptions: E,
                maxAge: y,
                maxUses: C,
                temporary: _,
                onToggleTemporary: v,
                onSelectMaxAge: p,
                onSelectMaxUses: x,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: I,
                onSetInviteFlags: S,
                inviteFlags: N,
            }),
            (0, i.jsx)(a.mzw, {
                className: c.settingsFooter,
                children: (0, i.jsx)(d.Z, {
                    theme: f,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t,
                }),
            }),
        ],
    });
};
