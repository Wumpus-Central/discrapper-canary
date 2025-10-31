n.d(t, {
    Mn: () => m,
    OD: () => h,
    W9: () => p,
}),
    n(388685),
    n(997841);
var r = n(442837),
    i = n(798140),
    l = n(9156),
    a = n(630388),
    o = n(709054),
    s = n(981631),
    c = n(969943),
    u = n(526761),
    d = n(388032);
function p() {
    return [
        {
            label: d.intl.string(d.t["8ot6gv"]),
            value: c.Oe.MINUTES_15,
        },
        {
            label: d.intl.string(d.t.UMWBZr),
            value: c.Oe.HOURS_1,
        },
        {
            label: d.intl.string(d.t.QmYWtu),
            value: c.Oe.HOURS_3,
        },
        {
            label: d.intl.string(d.t.EpAXPC),
            value: c.Oe.HOURS_8,
        },
        {
            label: d.intl.string(d.t["755t4q"]),
            value: c.Oe.HOURS_24,
        },
        {
            label: d.intl.string(d.t.r3LawO),
            value: c.Oe.ALWAYS,
        },
    ];
}
let f = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
    return o.default.keys(e).filter((n) => {
        var r, l;
        let o = e[n].message_notifications !== s.bL.NULL,
            c =
                a.yE(null != (r = e[n].flags) ? r : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                a.yE(null != (l = e[n].flags) ? l : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && c) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, i.m$)(e[n]))
        );
    });
}
function m(e) {
    return (0, r.e7)([l.ZP], () => l.ZP.useNewNotifications);
}
