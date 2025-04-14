n.d(t, {
    Mn: () => f,
    OD: () => m,
    W9: () => h
}),
    n(388685),
    n(997841);
var r = n(442837),
    i = n(798140),
    o = n(9156),
    a = n(630388),
    l = n(709054),
    s = n(312400),
    c = n(981631),
    u = n(969943),
    d = n(526761),
    p = n(388032);
function h() {
    return [
        {
            label: p.NW.string(p.t['8ot6go']),
            value: u.Oe.MINUTES_15
        },
        {
            label: p.NW.string(p.t.UMWBZm),
            value: u.Oe.HOURS_1
        },
        {
            label: p.NW.string(p.t.QmYWtr),
            value: u.Oe.HOURS_3
        },
        {
            label: p.NW.string(p.t.EpAXPD),
            value: u.Oe.HOURS_8
        },
        {
            label: p.NW.string(p.t['755t4u']),
            value: u.Oe.HOURS_24
        },
        {
            label: p.NW.string(p.t.r3LawM),
            value: u.Oe.ALWAYS
        }
    ];
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return l.default.keys(e).filter((n) => {
        var r, o;
        let l = e[n].message_notifications !== c.bL.NULL,
            s = a.yE(null != (r = e[n].flags) ? r : 0, d.ic.UNREADS_ALL_MESSAGES) || a.yE(null != (o = e[n].flags) ? o : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && l) || (!t.ignoreMute && (0, i.m$)(e[n]));
    });
}
function f(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
