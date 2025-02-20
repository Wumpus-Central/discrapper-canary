n.d(t, {
    FJ: () => s,
    HL: () => d,
    Yc: () => u,
    xe: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(834129),
    o = n(388032),
    l = n(373455);
function s(e) {
    let { message: t, compact: i, onClick: s } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: l.messageContent,
        children: o.NW.format(o.t.bYdG3d, { onClick: s })
    });
}
function c(e) {
    let { message: t, compact: i } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: l.messageContent,
        children: o.NW.string(o.t.tu6tOT)
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
            className: l.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: l.messageContent,
        children: o.NW.string(o.t.vzfXqq)
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
            className: l.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: l.messageContent,
        children: o.NW.string(o.t['/Tfvyc'])
    });
}
