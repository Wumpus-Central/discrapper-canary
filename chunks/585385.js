n.d(t, {
    D: function () {
        return g;
    }
}),
    n(789020);
var l = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    a = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(755527),
    h = n(232186);
let g = (e) => {
    let { handleDone: t, headerId: n, modalState: i, shouldHideTemporaryInviteToggle: g, onGenerateNewLink: m, onToggleTemporary: v, onSelectMaxAge: I, onSelectMaxUses: x, isGuestInviteCreationToggleEnabled: p, onSetInviteFlags: S } = e,
        N = (0, a.ZP)(),
        { maxAge: C, maxUses: E, temporary: f, flags: T } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                children: [
                    (0, l.jsx)('div', {
                        className: c.closeButton,
                        children: (0, l.jsx)(r.ModalCloseButton, { onClick: t })
                    }),
                    (0, l.jsx)('div', {
                        className: c.headerContainer,
                        children: (0, l.jsx)(r.FormTitle, {
                            id: n,
                            tag: 'h2',
                            className: s()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.intl.string(u.t.Atdlys)
                        })
                    })
                ]
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: g,
                maxAge: C,
                maxUses: E,
                temporary: f,
                onToggleTemporary: v,
                onSelectMaxAge: I,
                onSelectMaxUses: x,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: p,
                onSetInviteFlags: S,
                inviteFlags: T
            }),
            (0, l.jsx)(r.ModalFooter, {
                className: c.settingsFooter,
                children: (0, l.jsx)(d.Z, {
                    theme: N,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t
                })
            })
        ]
    });
};
