n.d(t, {
    Mn: () => b,
    OD: () => p,
    W9: () => x
}),
    n(388685),
    n(997841);
var r = n(442837),
    a = n(798140),
    l = n(9156),
    i = n(630388),
    o = n(709054),
    s = n(312400),
    c = n(981631),
    d = n(969943),
    u = n(526761),
    m = n(388032);
function x() {
    return [
        {
            label: m.NW.string(m.t['8ot6go']),
            value: d.Oe.MINUTES_15
        },
        {
            label: m.NW.string(m.t.UMWBZm),
            value: d.Oe.HOURS_1
        },
        {
            label: m.NW.string(m.t.QmYWtr),
            value: d.Oe.HOURS_3
        },
        {
            label: m.NW.string(m.t.EpAXPD),
            value: d.Oe.HOURS_8
        },
        {
            label: m.NW.string(m.t['755t4u']),
            value: d.Oe.HOURS_24
        },
        {
            label: m.NW.string(m.t.r3LawM),
            value: d.Oe.ALWAYS
        }
    ];
}
let h = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
    return o.default.keys(e).filter((n) => {
        var r, l;
        let o = e[n].message_notifications !== c.bL.NULL,
            s = i.yE(null != (r = e[n].flags) ? r : 0, u.ic.UNREADS_ALL_MESSAGES) || i.yE(null != (l = e[n].flags) ? l : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, a.m$)(e[n]));
    });
}
function b(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
