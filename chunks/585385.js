n.d(t, { D: () => g }), n(997841);
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(410030),
    o = n(948851),
    u = n(868728),
    d = n(388032),
    c = n(451964),
    h = n(197571);
let g = (e) => {
    let {
            handleDone: t,
            headerId: n,
            modalState: i,
            shouldHideTemporaryInviteToggle: g,
            onGenerateNewLink: m,
            onToggleTemporary: p,
            onSelectMaxAge: v,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: x,
            onSetInviteFlags: f,
        } = e,
        N = (0, a.ZP)(),
        { maxAge: j, maxUses: _, temporary: E, flags: S } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                children: [
                    (0, l.jsx)("div", {
                        className: c.closeButton,
                        children: (0, l.jsx)(s.olH, { onClick: t }),
                    }),
                    (0, l.jsx)("div", {
                        className: c.headerContainer,
                        children: (0, l.jsx)(s.vwX, {
                            id: n,
                            tag: "h2",
                            className: r()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: d.intl.string(d.t.Atdlys),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: g,
                maxAge: j,
                maxUses: _,
                temporary: E,
                onToggleTemporary: p,
                onSelectMaxAge: v,
                onSelectMaxUses: I,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: x,
                onSetInviteFlags: f,
                inviteFlags: S,
            }),
            (0, l.jsx)(s.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(u.Z, {
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
