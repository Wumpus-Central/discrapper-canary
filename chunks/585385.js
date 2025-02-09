n.d(t, { D: () => g }), n(789020);
var l = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    r = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(575126),
    h = n(814632);
let g = (e) => {
    let { handleDone: t, headerId: n, modalState: i, shouldHideTemporaryInviteToggle: g, onGenerateNewLink: v, onToggleTemporary: m, onSelectMaxAge: x, onSelectMaxUses: I, isGuestInviteCreationToggleEnabled: p, onSetInviteFlags: S } = e,
        N = (0, r.ZP)(),
        { maxAge: E, maxUses: T, temporary: C, flags: _ } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.xBx, {
                children: [
                    (0, l.jsx)('div', {
                        className: c.closeButton,
                        children: (0, l.jsx)(a.olH, { onClick: t })
                    }),
                    (0, l.jsx)('div', {
                        className: c.headerContainer,
                        children: (0, l.jsx)(a.vwX, {
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
                maxAge: E,
                maxUses: T,
                temporary: C,
                onToggleTemporary: m,
                onSelectMaxAge: x,
                onSelectMaxUses: I,
                onGenerateNewLink: v,
                isGuestInviteCreationToggleEnabled: p,
                onSetInviteFlags: S,
                inviteFlags: _
            }),
            (0, l.jsx)(a.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(d.Z, {
                    theme: N,
                    onConfirm: () => {
                        v(), t();
                    },
                    onDismiss: t
                })
            })
        ]
    });
};
