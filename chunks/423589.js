n.d(e, {
    Mn: () => S,
    OD: () => f,
    W9: () => g,
}),
    n(388685),
    n(997841);
var i = n(95015),
    l = n(442837),
    a = n(798140),
    s = n(9156),
    r = n(709054),
    o = n(981631),
    d = n(969943),
    u = n(526761),
    c = n(388032);
function g() {
    return [
        {
            id: "15-minutes",
            label: c.intl.string(c.t["8ot6gv"]),
            value: d.Oe.MINUTES_15,
        },
        {
            id: "1-hour",
            label: c.intl.string(c.t.UMWBZr),
            value: d.Oe.HOURS_1,
        },
        {
            id: "3-hours",
            label: c.intl.string(c.t.QmYWtu),
            value: d.Oe.HOURS_3,
        },
        {
            id: "8-hours",
            label: c.intl.string(c.t.EpAXPC),
            value: d.Oe.HOURS_8,
        },
        {
            id: "24-hours",
            label: c.intl.string(c.t["755t4q"]),
            value: d.Oe.HOURS_24,
        },
        {
            id: "forever",
            label: c.intl.string(c.t.r3LawO),
            value: d.Oe.ALWAYS,
        },
    ];
}
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function f(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return r.default.keys(t).filter((n) => {
        var l, s;
        let r = t[n].message_notifications !== o.bL.NULL,
            d =
                i.yE(null != (l = t[n].flags) ? l : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                i.yE(null != (s = t[n].flags) ? s : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!e.ignoreUnreadSetting && d) || (!e.ignoreNotificationSetting && r) || (!e.ignoreMute && (0, a.m$)(t[n]))
        );
    });
}
function S(t) {
    return (0, l.e7)([s.ZP], () => s.ZP.useNewNotifications);
}
