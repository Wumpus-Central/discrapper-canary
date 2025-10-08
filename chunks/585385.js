n.d(t, { D: () => h }), n(997841);
var l = n(951288);
n(647438);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    a = n(410030),
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
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: x,
            onSetInviteFlags: f,
        } = e,
        N = (0, a.ZP)(),
        { maxAgeOptions: S, maxAge: _, maxUses: j, temporary: b, flags: E } = i;
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
                        children: (0, l.jsx)(r.vwX, {
                            id: n,
                            tag: "h2",
                            className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
                            children: d.intl.string(d.t.Atdlys),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(o.Z, {
                shouldHideTemporaryInviteToggle: h,
                maxAgeOptions: S,
                maxAge: _,
                maxUses: j,
                temporary: b,
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
