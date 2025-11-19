n.d(t, {
    FJ: () => l,
    HL: () => u,
    Yc: () => d,
    xe: () => c,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(834129),
    o = n(388032),
    s = n(180814);
function l(e) {
    let { message: t, compact: i, onClick: l } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: s.messageContent,
        children: o.intl.format(o.t.bYdG3f, { onClick: l }),
    });
}
function c(e) {
    let { message: t, compact: i } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: s.messageContent,
        children: o.intl.string(o.t.tu6tOR),
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.Mgn, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: s.alertIcon,
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: o.intl.string(o.t.vzfXql),
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.Mgn, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: s.alertIcon,
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: o.intl.string(o.t["/TfvyR"]),
    });
}
