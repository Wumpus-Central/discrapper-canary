n.d(e, {
    Mn: () => v,
    OD: () => _,
    W9: () => E
}),
    n(47120),
    n(789020);
var i = n(442837),
    a = n(798140),
    l = n(9156),
    r = n(630388),
    u = n(709054),
    o = n(312400),
    s = n(981631),
    d = n(969943),
    c = n(526761),
    f = n(388032);
function E() {
    return [
        {
            label: f.intl.string(f.t['8ot6go']),
            value: d.Oe.MINUTES_15
        },
        {
            label: f.intl.string(f.t.UMWBZm),
            value: d.Oe.HOURS_1
        },
        {
            label: f.intl.string(f.t.QmYWtr),
            value: d.Oe.HOURS_3
        },
        {
            label: f.intl.string(f.t.EpAXPD),
            value: d.Oe.HOURS_8
        },
        {
            label: f.intl.string(f.t['755t4u']),
            value: d.Oe.HOURS_24
        },
        {
            label: f.intl.string(f.t.r3LawM),
            value: d.Oe.ALWAYS
        }
    ];
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function _(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return u.default.keys(t).filter((n) => {
        var i, l;
        let u = t[n].message_notifications !== s.bL.NULL,
            o = r.yE(null !== (i = t[n].flags) && void 0 !== i ? i : 0, c.ic.UNREADS_ALL_MESSAGES) || r.yE(null !== (l = t[n].flags) && void 0 !== l ? l : 0, c.ic.UNREADS_ONLY_MENTIONS);
        return (!e.ignoreUnreadSetting && o) || (!e.ignoreNotificationSetting && u) || (!e.ignoreMute && (0, a.m$)(t[n]));
    });
}
function v(t) {
    let e = (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
    return o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && e;
}
