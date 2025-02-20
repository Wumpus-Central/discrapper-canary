n.d(t, { D: () => g }), n(789020);
var l = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    a = n(410030),
    o = n(948851),
    d = n(868728),
    u = n(388032),
    c = n(773444),
    h = n(455812);
let g = (e) => {
    let { handleDone: t, headerId: n, modalState: i, shouldHideTemporaryInviteToggle: g, onGenerateNewLink: v, onToggleTemporary: m, onSelectMaxAge: x, onSelectMaxUses: p, isGuestInviteCreationToggleEnabled: I, onSetInviteFlags: N } = e,
        S = (0, a.ZP)(),
        { maxAge: E, maxUses: f, temporary: j, flags: T } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.xBx, {
                children: [
                    (0, l.jsx)('div', {
                        className: c.closeButton,
                        children: (0, l.jsx)(r.olH, { onClick: t })
                    }),
                    (0, l.jsx)('div', {
                        className: c.headerContainer,
                        children: (0, l.jsx)(r.vwX, {
                            id: n,
                            tag: 'h2',
                            className: s()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: u.NW.string(u.t.Atdlys)
                        })
                    })
                ]
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: g,
                maxAge: E,
                maxUses: f,
                temporary: j,
                onToggleTemporary: m,
                onSelectMaxAge: x,
                onSelectMaxUses: p,
                onGenerateNewLink: v,
                isGuestInviteCreationToggleEnabled: I,
                onSetInviteFlags: N,
                inviteFlags: T
            }),
            (0, l.jsx)(r.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(d.Z, {
                    theme: S,
                    onConfirm: () => {
                        v(), t();
                    },
                    onDismiss: t
                })
            })
        ]
    });
};
