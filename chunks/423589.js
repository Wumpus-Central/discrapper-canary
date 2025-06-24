n.d(e, {
    Mn: () => h,
    OD: () => f,
    W9: () => _
}),
    n(388685),
    n(997841);
var i = n(442837),
    l = n(798140),
    r = n(9156),
    s = n(630388),
    a = n(709054),
    o = n(312400),
    d = n(981631),
    u = n(969943),
    c = n(526761),
    g = n(388032);
function _() {
    return [
        {
            label: g.intl.string(g.t['8ot6go']),
            value: u.Oe.MINUTES_15
        },
        {
            label: g.intl.string(g.t.UMWBZm),
            value: u.Oe.HOURS_1
        },
        {
            label: g.intl.string(g.t.QmYWtr),
            value: u.Oe.HOURS_3
        },
        {
            label: g.intl.string(g.t.EpAXPD),
            value: u.Oe.HOURS_8
        },
        {
            label: g.intl.string(g.t['755t4u']),
            value: u.Oe.HOURS_24
        },
        {
            label: g.intl.string(g.t.r3LawM),
            value: u.Oe.ALWAYS
        }
    ];
}
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function f(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return a.default.keys(t).filter((n) => {
        var i, r;
        let a = t[n].message_notifications !== d.bL.NULL,
            o = s.yE(null != (i = t[n].flags) ? i : 0, c.ic.UNREADS_ALL_MESSAGES) || s.yE(null != (r = t[n].flags) ? r : 0, c.ic.UNREADS_ONLY_MENTIONS);
        return (!e.ignoreUnreadSetting && o) || (!e.ignoreNotificationSetting && a) || (!e.ignoreMute && (0, l.m$)(t[n]));
    });
}
function h(t) {
    let e = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
    return o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && e;
}
