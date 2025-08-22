n.d(t, {
    Mn: () => h,
    OD: () => g,
    W9: () => b,
}),
    n(388685),
    n(997841);
var i = n(442837),
    l = n(798140),
    a = n(9156),
    r = n(630388),
    o = n(709054),
    c = n(312400),
    u = n(981631),
    d = n(969943),
    s = n(526761),
    f = n(388032);
function b() {
    return [
        {
            label: f.intl.string(f.t["8ot6go"]),
            value: d.Oe.MINUTES_15,
        },
        {
            label: f.intl.string(f.t.UMWBZm),
            value: d.Oe.HOURS_1,
        },
        {
            label: f.intl.string(f.t.QmYWtr),
            value: d.Oe.HOURS_3,
        },
        {
            label: f.intl.string(f.t.EpAXPD),
            value: d.Oe.HOURS_8,
        },
        {
            label: f.intl.string(f.t["755t4u"]),
            value: d.Oe.HOURS_24,
        },
        {
            label: f.intl.string(f.t.r3LawM),
            value: d.Oe.ALWAYS,
        },
    ];
}
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return o.default.keys(e).filter((n) => {
        var i, a;
        let o = e[n].message_notifications !== u.bL.NULL,
            c =
                r.yE(null != (i = e[n].flags) ? i : 0, s.ic.UNREADS_ALL_MESSAGES) ||
                r.yE(null != (a = e[n].flags) ? a : 0, s.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && c) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, l.m$)(e[n]))
        );
    });
}
function h(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
    return c.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
