n.d(t, {
    Mn: () => g,
    OD: () => m,
    W9: () => h,
}),
    n(388685),
    n(997841);
var i = n(442837),
    r = n(798140),
    l = n(9156),
    a = n(630388),
    o = n(709054),
    s = n(312400),
    c = n(981631),
    u = n(969943),
    d = n(526761),
    p = n(388032);
function h() {
    return [
        {
            label: p.intl.string(p.t["8ot6go"]),
            value: u.Oe.MINUTES_15,
        },
        {
            label: p.intl.string(p.t.UMWBZm),
            value: u.Oe.HOURS_1,
        },
        {
            label: p.intl.string(p.t.QmYWtr),
            value: u.Oe.HOURS_3,
        },
        {
            label: p.intl.string(p.t.EpAXPD),
            value: u.Oe.HOURS_8,
        },
        {
            label: p.intl.string(p.t["755t4u"]),
            value: u.Oe.HOURS_24,
        },
        {
            label: p.intl.string(p.t.r3LawM),
            value: u.Oe.ALWAYS,
        },
    ];
}
let f = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
    return o.default.keys(e).filter((n) => {
        var i, l;
        let o = e[n].message_notifications !== c.bL.NULL,
            s =
                a.yE(null != (i = e[n].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) ||
                a.yE(null != (l = e[n].flags) ? l : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, r.m$)(e[n]))
        );
    });
}
function g(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
