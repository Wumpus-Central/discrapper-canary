(n.d(e, {
    Mn: () => E,
    OD: () => S,
    W9: () => _
}),
    n(388685),
    n(997841));
var i = n(442837),
    l = n(798140),
    a = n(9156),
    r = n(630388),
    s = n(709054),
    o = n(312400),
    d = n(981631),
    c = n(969943),
    u = n(526761),
    g = n(388032);
function _() {
    return [
        {
            label: g.intl.string(g.t['8ot6go']),
            value: c.Oe.MINUTES_15
        },
        {
            label: g.intl.string(g.t.UMWBZm),
            value: c.Oe.HOURS_1
        },
        {
            label: g.intl.string(g.t.QmYWtr),
            value: c.Oe.HOURS_3
        },
        {
            label: g.intl.string(g.t.EpAXPD),
            value: c.Oe.HOURS_8
        },
        {
            label: g.intl.string(g.t['755t4u']),
            value: c.Oe.HOURS_24
        },
        {
            label: g.intl.string(g.t.r3LawM),
            value: c.Oe.ALWAYS
        }
    ];
}
let f = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function S(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
    return s.default.keys(t).filter((n) => {
        var i, a;
        let s = t[n].message_notifications !== d.bL.NULL,
            o = r.yE(null != (i = t[n].flags) ? i : 0, u.ic.UNREADS_ALL_MESSAGES) || r.yE(null != (a = t[n].flags) ? a : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (!e.ignoreUnreadSetting && o) || (!e.ignoreNotificationSetting && s) || (!e.ignoreMute && (0, l.m$)(t[n]));
    });
}
function E(t) {
    let e = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
    return o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && e;
}
