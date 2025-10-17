n.d(t, {
    Mn: () => m,
    OD: () => f,
    W9: () => p,
}),
    n(388685),
    n(997841);
var i = n(442837),
    r = n(798140),
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
            label: d.intl.string(d.t["8ot6go"]),
            value: c.Oe.MINUTES_15,
        },
        {
            label: d.intl.string(d.t.UMWBZm),
            value: c.Oe.HOURS_1,
        },
        {
            label: d.intl.string(d.t.QmYWtr),
            value: c.Oe.HOURS_3,
        },
        {
            label: d.intl.string(d.t.EpAXPD),
            value: c.Oe.HOURS_8,
        },
        {
            label: d.intl.string(d.t["755t4u"]),
            value: c.Oe.HOURS_24,
        },
        {
            label: d.intl.string(d.t.r3LawM),
            value: c.Oe.ALWAYS,
        },
    ];
}
let h = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
    return o.default.keys(e).filter((n) => {
        var i, l;
        let o = e[n].message_notifications !== s.bL.NULL,
            c =
                a.yE(null != (i = e[n].flags) ? i : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                a.yE(null != (l = e[n].flags) ? l : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && c) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, r.m$)(e[n]))
        );
    });
}
function m(e) {
    return (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
}
