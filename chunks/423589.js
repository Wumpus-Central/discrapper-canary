n.d(t, {
    Mn: () => E,
    OD: () => p,
    W9: () => g
}),
    n(47120),
    n(789020);
var i = n(442837),
    r = n(798140),
    a = n(9156),
    l = n(630388),
    o = n(709054),
    u = n(312400),
    s = n(981631),
    c = n(969943),
    d = n(526761),
    f = n(388032);
function g() {
    return [
        {
            label: f.NW.string(f.t['8ot6go']),
            value: c.Oe.MINUTES_15
        },
        {
            label: f.NW.string(f.t.UMWBZm),
            value: c.Oe.HOURS_1
        },
        {
            label: f.NW.string(f.t.QmYWtr),
            value: c.Oe.HOURS_3
        },
        {
            label: f.NW.string(f.t.EpAXPD),
            value: c.Oe.HOURS_8
        },
        {
            label: f.NW.string(f.t['755t4u']),
            value: c.Oe.HOURS_24
        },
        {
            label: f.NW.string(f.t.r3LawM),
            value: c.Oe.ALWAYS
        }
    ];
}
let O = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return o.default.keys(e).filter((n) => {
        var i, a;
        let o = e[n].message_notifications !== s.bL.NULL,
            u = l.yE(null != (i = e[n].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) || l.yE(null != (a = e[n].flags) ? a : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && u) || (!t.ignoreNotificationSetting && o) || (!t.ignoreMute && (0, r.m$)(e[n]));
    });
}
function E(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
    return u.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
