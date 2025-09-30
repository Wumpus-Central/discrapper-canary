n.d(t, { D: () => h }), n(997841);
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(410030),
    o = n(948851),
    u = n(868728),
    d = n(388032),
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
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: I,
            onSetInviteFlags: f,
        } = e,
        j = (0, s.ZP)(),
        { maxAgeOptions: N, maxAge: _, maxUses: E, temporary: S, flags: b } = i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.xBx, {
                children: [
                    (0, l.jsx)("div", {
                        className: c.closeButton,
                        children: (0, l.jsx)(a.olH, { onClick: t }),
                    }),
                    (0, l.jsx)("div", {
                        className: c.headerContainer,
                        children: (0, l.jsx)(a.vwX, {
                            id: n,
                            tag: "h2",
                            className: r()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: d.intl.string(d.t.Atdlys),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: h,
                maxAgeOptions: N,
                maxAge: _,
                maxUses: E,
                temporary: S,
                onToggleTemporary: p,
                onSelectMaxAge: v,
                onSelectMaxUses: x,
                onGenerateNewLink: m,
                isGuestInviteCreationToggleEnabled: I,
                onSetInviteFlags: f,
                inviteFlags: b,
            }),
            (0, l.jsx)(a.mzw, {
                className: c.settingsFooter,
                children: (0, l.jsx)(u.Z, {
                    theme: j,
                    onConfirm: () => {
                        m(), t();
                    },
                    onDismiss: t,
                }),
            }),
        ],
    });
};
