n.d(t, {
    FJ: function () {
        return s;
    },
    HL: function () {
        return u;
    },
    Yc: function () {
        return d;
    },
    xe: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(834129),
    a = n(388032),
    o = n(507833);
function s(e) {
    let { message: t, compact: r, onClick: s } = e;
    return (0, i.jsx)(l.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: o.messageContent,
        children: a.intl.format(a.t.bYdG3d, { onClick: s })
    });
}
function c(e) {
    let { message: t, compact: r } = e;
    return (0, i.jsx)(l.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: o.messageContent,
        children: a.intl.string(a.t.tu6tOT)
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(l.Z, {
        iconNode: (0, i.jsx)(r.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: o.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: o.messageContent,
        children: a.intl.string(a.t.vzfXqq)
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(l.Z, {
        iconNode: (0, i.jsx)(r.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: o.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: o.messageContent,
        children: a.intl.string(a.t['/Tfvyc'])
    });
}
