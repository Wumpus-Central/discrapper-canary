n.d(t, {
    Mn: () => b,
    OD: () => m,
    W9: () => p,
}),
    n(388685),
    n(997841);
var a = n(442837),
    i = n(798140),
    o = n(9156),
    c = n(630388),
    r = n(709054),
    l = n(312400),
    s = n(981631),
    d = n(969943),
    u = n(526761),
    _ = n(388032);
function p() {
    return [
        {
            label: _.intl.string(_.t["8ot6go"]),
            value: d.Oe.MINUTES_15,
        },
        {
            label: _.intl.string(_.t.UMWBZm),
            value: d.Oe.HOURS_1,
        },
        {
            label: _.intl.string(_.t.QmYWtr),
            value: d.Oe.HOURS_3,
        },
        {
            label: _.intl.string(_.t.EpAXPD),
            value: d.Oe.HOURS_8,
        },
        {
            label: _.intl.string(_.t["755t4u"]),
            value: d.Oe.HOURS_24,
        },
        {
            label: _.intl.string(_.t.r3LawM),
            value: d.Oe.ALWAYS,
        },
    ];
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return r.default.keys(e).filter((n) => {
        var a, o;
        let r = e[n].message_notifications !== s.bL.NULL,
            l =
                c.yE(null != (a = e[n].flags) ? a : 0, u.ic.UNREADS_ALL_MESSAGES) ||
                c.yE(null != (o = e[n].flags) ? o : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && l) || (!t.ignoreNotificationSetting && r) || (!t.ignoreMute && (0, i.m$)(e[n]))
        );
    });
}
function b(e) {
    let t = (0, a.e7)([o.ZP], () => o.ZP.useNewNotifications);
    return l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
