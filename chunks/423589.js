n.d(t, {
    Mn: () => g,
    OD: () => f,
    W9: () => _
}),
    n(388685),
    n(997841);
var a = n(442837),
    i = n(798140),
    r = n(9156),
    l = n(630388),
    o = n(709054),
    c = n(312400),
    s = n(981631),
    u = n(969943),
    d = n(526761),
    m = n(388032);
function _() {
    return [
        {
            label: m.intl.string(m.t['8ot6go']),
            value: u.Oe.MINUTES_15
        },
        {
            label: m.intl.string(m.t.UMWBZm),
            value: u.Oe.HOURS_1
        },
        {
            label: m.intl.string(m.t.QmYWtr),
            value: u.Oe.HOURS_3
        },
        {
            label: m.intl.string(m.t.EpAXPD),
            value: u.Oe.HOURS_8
        },
        {
            label: m.intl.string(m.t['755t4u']),
            value: u.Oe.HOURS_24
        },
        {
            label: m.intl.string(m.t.r3LawM),
            value: u.Oe.ALWAYS
        }
    ];
}
let p = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return o.default.keys(e).filter((n) => {
        var a, r;
        let o = e[n].message_notifications !== s.bL.NULL,
            c = l.yE(null != (a = e[n].flags) ? a : 0, d.ic.UNREADS_ALL_MESSAGES) || l.yE(null != (r = e[n].flags) ? r : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && c) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, i.m$)(e[n]));
    });
}
function g(e) {
    let t = (0, a.e7)([r.ZP], () => r.ZP.useNewNotifications);
    return c.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
