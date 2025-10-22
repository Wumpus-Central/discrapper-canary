n.d(t, { D: () => h }), n(997841);
var i = n(951288),
    l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(869306),
    g = n(10198);
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
        f = (0, a.ZP)(),
        { maxAgeOptions: E, maxAge: C, maxUses: y, temporary: _, flags: N } = l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                children: [
                    (0, i.jsx)("div", {
                        className: c.closeButton,
                        children: (0, i.jsx)(r.olH, { onClick: t }),
                    }),
                    (0, i.jsx)("div", {
                        className: c.headerContainer,
                        children: (0, i.jsx)(r.Heading, {
                            id: n,
                            variant: "heading-md/semibold",
                            className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.intl.string(u.t.Atdlyu),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: h,
                maxAgeOptions: E,
                maxAge: C,
                maxUses: y,
                temporary: _,
                onToggleTemporary: v,
                onSelectMaxAge: p,
                onSelectMaxUses: x,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: I,
                onSetInviteFlags: S,
                inviteFlags: N,
            }),
            (0, i.jsx)(r.mzw, {
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
