n.d(t, {
    Mn: () => g,
    OD: () => b,
    W9: () => u,
}),
    n(388685),
    n(997841);
var i = n(442837),
    a = n(798140),
    l = n(9156),
    c = n(630388),
    o = n(709054),
    r = n(981631),
    s = n(969943),
    d = n(526761),
    _ = n(388032);
function u() {
    return [
        {
            label: _.intl.string(_.t["8ot6gv"]),
            value: s.Oe.MINUTES_15,
        },
        {
            label: _.intl.string(_.t.UMWBZr),
            value: s.Oe.HOURS_1,
        },
        {
            label: _.intl.string(_.t.QmYWtu),
            value: s.Oe.HOURS_3,
        },
        {
            label: _.intl.string(_.t.EpAXPC),
            value: s.Oe.HOURS_8,
        },
        {
            label: _.intl.string(_.t["755t4q"]),
            value: s.Oe.HOURS_24,
        },
        {
            label: _.intl.string(_.t.r3LawO),
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
        var i, l;
        let o = e[n].message_notifications !== r.bL.NULL,
            s =
                c.yE(null != (i = e[n].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) ||
                c.yE(null != (l = e[n].flags) ? l : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, a.m$)(e[n]))
        );
    });
}
function g(e) {
    return (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
}
