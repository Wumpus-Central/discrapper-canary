(n.d(t, {
    Mn: () => f,
    OD: () => g,
    W9: () => _
}),
    n(388685),
    n(997841));
var a = n(442837),
    i = n(798140),
    o = n(9156),
    r = n(630388),
    l = n(709054),
    c = n(312400),
    s = n(981631),
    d = n(969943),
    u = n(526761),
    p = n(388032);
function _() {
    return [
        {
            label: p.intl.string(p.t['8ot6go']),
            value: d.Oe.MINUTES_15
        },
        {
            label: p.intl.string(p.t.UMWBZm),
            value: d.Oe.HOURS_1
        },
        {
            label: p.intl.string(p.t.QmYWtr),
            value: d.Oe.HOURS_3
        },
        {
            label: p.intl.string(p.t.EpAXPD),
            value: d.Oe.HOURS_8
        },
        {
            label: p.intl.string(p.t['755t4u']),
            value: d.Oe.HOURS_24
        },
        {
            label: p.intl.string(p.t.r3LawM),
            value: d.Oe.ALWAYS
        }
    ];
}
let m = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
    return l.default.keys(e).filter((n) => {
        var a, o;
        let l = e[n].message_notifications !== s.bL.NULL,
            c = r.yE(null != (a = e[n].flags) ? a : 0, u.ic.UNREADS_ALL_MESSAGES) || r.yE(null != (o = e[n].flags) ? o : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && c) || (!t.ignoreNotificationSetting && l) || (!t.ignoreMute && (0, i.m$)(e[n]));
    });
}
function f(e) {
    let t = (0, a.e7)([o.ZP], () => o.ZP.useNewNotifications);
    return c.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
