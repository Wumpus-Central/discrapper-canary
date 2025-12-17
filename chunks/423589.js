t.d(n, {
    Mn: () => g,
    OD: () => b,
    W9: () => f,
}),
    t(388685),
    t(997841);
var i = t(95015),
    c = t(442837),
    l = t(798140),
    a = t(9156),
    r = t(709054),
    o = t(981631),
    s = t(969943),
    u = t(526761),
    d = t(388032);
function f() {
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
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return r.default.keys(e).filter((t) => {
        var c, a;
        let r = e[t].message_notifications !== o.bL.NULL,
            s =
                i.yE(null != (c = e[t].flags) ? c : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                i.yE(null != (a = e[t].flags) ? a : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!n.ignoreUnreadSetting && s) || (!n.ignoreNotificationSetting && r) || (!n.ignoreMute && (0, l.m$)(e[t]))
        );
    });
}
function g(e) {
    return (0, c.e7)([a.ZP], () => a.ZP.useNewNotifications);
}
