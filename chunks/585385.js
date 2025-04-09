n.d(t, { D: () => g }), n(997841);
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(410030),
    o = n(948851),
    u = n(868728),
    d = n(388032),
    c = n(821022),
    h = n(20493);
let g = (e) => {
    let { handleDone: t, headerId: n, modalState: i, shouldHideTemporaryInviteToggle: g, onGenerateNewLink: m, onToggleTemporary: v, onSelectMaxAge: x, onSelectMaxUses: p, isGuestInviteCreationToggleEnabled: I, onSetInviteFlags: N } = e,
        f = (0, a.ZP)(),
        { maxAge: j, maxUses: S, temporary: E, flags: b } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                children: [
                    (0, l.jsx)('div', {
                        className: c.closeButton,
                        children: (0, l.jsx)(s.olH, { onClick: t })
                    }),
                    (0, l.jsx)('div', {
                        className: c.headerContainer,
                        children: (0, l.jsx)(s.vwX, {
                            id: n,
                            tag: 'h2',
                            className: r()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: d.NW.string(d.t.Atdlys)
                        })
                    })
                ]
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: g,
                maxAge: j,
                maxUses: S,
                temporary: E,
                onToggleTemporary: v,
                onSelectMaxAge: x,
                onSelectMaxUses: p,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: I,
                onSetInviteFlags: N,
                inviteFlags: b
            }),
            (0, l.jsx)(s.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(u.Z, {
                    theme: f,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t
                })
            })
        ]
    });
};
