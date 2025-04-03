n.d(t, {
    FJ: () => s,
    HL: () => u,
    Yc: () => d,
    xe: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(834129),
    l = n(388032),
    o = n(794446);
function s(e) {
    let { message: t, compact: i, onClick: s } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: o.messageContent,
        children: l.NW.format(l.t.bYdG3d, { onClick: s })
    });
}
function c(e) {
    let { message: t, compact: i } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: o.messageContent,
        children: l.NW.string(l.t.tu6tOT)
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.P4T, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: o.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: o.messageContent,
        children: l.NW.string(l.t.vzfXqq)
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.P4T, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: o.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: o.messageContent,
        children: l.NW.string(l.t['/Tfvyc'])
    });
}
