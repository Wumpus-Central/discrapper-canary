(n.d(t, {
    Mn: () => m,
    OD: () => h,
    W9: () => _
}),
    n(388685),
    n(997841));
var r = n(442837),
    i = n(798140),
    a = n(9156),
    o = n(630388),
    s = n(709054),
    l = n(312400),
    c = n(981631),
    u = n(969943),
    d = n(526761),
    f = n(388032);
function _() {
    return [
        {
            label: f.intl.string(f.t['8ot6go']),
            value: u.Oe.MINUTES_15
        },
        {
            label: f.intl.string(f.t.UMWBZm),
            value: u.Oe.HOURS_1
        },
        {
            label: f.intl.string(f.t.QmYWtr),
            value: u.Oe.HOURS_3
        },
        {
            label: f.intl.string(f.t.EpAXPD),
            value: u.Oe.HOURS_8
        },
        {
            label: f.intl.string(f.t['755t4u']),
            value: u.Oe.HOURS_24
        },
        {
            label: f.intl.string(f.t.r3LawM),
            value: u.Oe.ALWAYS
        }
    ];
}
let p = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return s.default.keys(e).filter((n) => {
        var r, a;
        let s = e[n].message_notifications !== c.bL.NULL,
            l = o.yE(null != (r = e[n].flags) ? r : 0, d.ic.UNREADS_ALL_MESSAGES) || o.yE(null != (a = e[n].flags) ? a : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && l) || (!t.ignoreNotificationSetting && s) || (!t.ignoreMute && (0, i.m$)(e[n]));
    });
}
function m(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.useNewNotifications);
    return l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
