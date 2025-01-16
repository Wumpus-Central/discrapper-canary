n.d(t, {
    D: function () {
        return g;
    }
});
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(546820),
    h = n(275477);
let g = (e) => {
    let { handleDone: t, headerId: n, modalState: i, shouldHideTemporaryInviteToggle: g, onGenerateNewLink: m, onToggleTemporary: v, onSelectMaxAge: p, onSelectMaxUses: x } = e,
        I = (0, a.ZP)(),
        { maxAge: S, maxUses: T, temporary: N } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.ModalHeader, {
                children: [
                    (0, l.jsx)('div', {
                        className: c.closeButton,
                        children: (0, l.jsx)(s.ModalCloseButton, { onClick: t })
                    }),
                    (0, l.jsx)('div', {
                        className: c.headerContainer,
                        children: (0, l.jsx)(s.FormTitle, {
                            id: n,
                            tag: 'h2',
                            className: r()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.intl.string(u.t.Atdlys)
                        })
                    })
                ]
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: g,
                maxAge: S,
                maxUses: T,
                temporary: N,
                onToggleTemporary: v,
                onSelectMaxAge: p,
                onSelectMaxUses: x,
                onGenerateNewLink: m
            }),
            (0, l.jsx)(s.ModalFooter, {
                className: c.settingsFooter,
                children: (0, l.jsx)(d.Z, {
                    theme: I,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t
                })
            })
        ]
    });
};
