n.d(t, {
    Mn: () => f,
    OD: () => m,
    W9: () => g
}),
    n(388685),
    n(997841);
var r = n(442837),
    i = n(798140),
    l = n(9156),
    o = n(630388),
    a = n(709054),
    s = n(312400),
    c = n(981631),
    u = n(969943),
    d = n(526761),
    h = n(388032);
function g() {
    return [
        {
            label: h.intl.string(h.t['8ot6go']),
            value: u.Oe.MINUTES_15
        },
        {
            label: h.intl.string(h.t.UMWBZm),
            value: u.Oe.HOURS_1
        },
        {
            label: h.intl.string(h.t.QmYWtr),
            value: u.Oe.HOURS_3
        },
        {
            label: h.intl.string(h.t.EpAXPD),
            value: u.Oe.HOURS_8
        },
        {
            label: h.intl.string(h.t['755t4u']),
            value: u.Oe.HOURS_24
        },
        {
            label: h.intl.string(h.t.r3LawM),
            value: u.Oe.ALWAYS
        }
    ];
}
let p = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return a.default.keys(e).filter((n) => {
        var r, l;
        let a = e[n].message_notifications !== c.bL.NULL,
            s = o.yE(null != (r = e[n].flags) ? r : 0, d.ic.UNREADS_ALL_MESSAGES) || o.yE(null != (l = e[n].flags) ? l : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && a) || (!t.ignoreMute && (0, i.m$)(e[n]));
    });
}
function f(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
