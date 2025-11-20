e.d(i, {
    Mn: () => L,
    OD: () => S,
    W9: () => g,
}),
    e(388685),
    e(997841);
var n = e(95015),
    l = e(442837),
    s = e(798140),
    a = e(9156),
    r = e(709054),
    d = e(981631),
    o = e(969943),
    c = e(526761),
    u = e(388032);
function g() {
    return [
        {
            label: u.intl.string(u.t["8ot6gv"]),
            value: o.Oe.MINUTES_15,
        },
        {
            label: u.intl.string(u.t.UMWBZr),
            value: o.Oe.HOURS_1,
        },
        {
            label: u.intl.string(u.t.QmYWtu),
            value: o.Oe.HOURS_3,
        },
        {
            label: u.intl.string(u.t.EpAXPC),
            value: o.Oe.HOURS_8,
        },
        {
            label: u.intl.string(u.t["755t4q"]),
            value: o.Oe.HOURS_24,
        },
        {
            label: u.intl.string(u.t.r3LawO),
            value: o.Oe.ALWAYS,
        },
    ];
}
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function S(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return r.default.keys(t).filter((e) => {
        var l, a;
        let r = t[e].message_notifications !== d.bL.NULL,
            o =
                n.yE(null != (l = t[e].flags) ? l : 0, c.ic.UNREADS_ALL_MESSAGES) ||
                n.yE(null != (a = t[e].flags) ? a : 0, c.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!i.ignoreUnreadSetting && o) || (!i.ignoreNotificationSetting && r) || (!i.ignoreMute && (0, s.m$)(t[e]))
        );
    });
}
function L(t) {
    return (0, l.e7)([a.ZP], () => a.ZP.useNewNotifications);
}
