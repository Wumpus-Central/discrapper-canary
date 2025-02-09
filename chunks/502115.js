n.d(t, {
    FJ: () => o,
    HL: () => d,
    Yc: () => u,
    xe: () => c
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(834129),
    r = n(388032),
    s = n(716099);
function o(e) {
    let { message: t, compact: l, onClick: o } = e;
    return (0, i.jsx)(a.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: l,
        contentClassName: s.messageContent,
        children: r.intl.format(r.t.bYdG3d, { onClick: o })
    });
}
function c(e) {
    let { message: t, compact: l } = e;
    return (0, i.jsx)(a.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: l,
        contentClassName: s.messageContent,
        children: r.intl.string(r.t.tu6tOT)
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(a.Z, {
        iconNode: (0, i.jsx)(l.P4T, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: s.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: r.intl.string(r.t.vzfXqq)
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(a.Z, {
        iconNode: (0, i.jsx)(l.P4T, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: s.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: r.intl.string(r.t['/Tfvyc'])
    });
}
