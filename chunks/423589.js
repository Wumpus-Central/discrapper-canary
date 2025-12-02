n.d(t, {
    Mn: () => g,
    OD: () => b,
    W9: () => _,
}),
    n(388685),
    n(997841);
var i = n(95015),
    a = n(442837),
    l = n(798140),
    c = n(9156),
    o = n(709054),
    r = n(981631),
    s = n(969943),
    u = n(526761),
    d = n(388032);
function _() {
    return [
        {
            label: d.intl.string(d.t["8ot6gv"]),
            value: s.Oe.MINUTES_15,
        },
        {
            label: d.intl.string(d.t.UMWBZr),
            value: s.Oe.HOURS_1,
        },
        {
            label: d.intl.string(d.t.QmYWtu),
            value: s.Oe.HOURS_3,
        },
        {
            label: d.intl.string(d.t.EpAXPC),
            value: s.Oe.HOURS_8,
        },
        {
            label: d.intl.string(d.t["755t4q"]),
            value: s.Oe.HOURS_24,
        },
        {
            label: d.intl.string(d.t.r3LawO),
            value: s.Oe.ALWAYS,
        },
    ];
}
let h = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
    return o.default.keys(e).filter((n) => {
        var a, c;
        let o = e[n].message_notifications !== r.bL.NULL,
            s =
                i.yE(null != (a = e[n].flags) ? a : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                i.yE(null != (c = e[n].flags) ? c : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, l.m$)(e[n]))
        );
    });
}
function g(e) {
    return (0, a.e7)([c.ZP], () => c.ZP.useNewNotifications);
}
