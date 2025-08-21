t.d(n, {
    Mn: () => b,
    OD: () => h,
    W9: () => u,
}),
    t(388685),
    t(997841);
var i = t(442837),
    a = t(798140),
    o = t(9156),
    s = t(630388),
    _ = t(709054),
    r = t(312400),
    c = t(981631),
    l = t(969943),
    d = t(526761),
    g = t(388032);
function u() {
    return [
        {
            label: g.intl.string(g.t["8ot6go"]),
            value: l.Oe.MINUTES_15,
        },
        {
            label: g.intl.string(g.t.UMWBZm),
            value: l.Oe.HOURS_1,
        },
        {
            label: g.intl.string(g.t.QmYWtr),
            value: l.Oe.HOURS_3,
        },
        {
            label: g.intl.string(g.t.EpAXPD),
            value: l.Oe.HOURS_8,
        },
        {
            label: g.intl.string(g.t["755t4u"]),
            value: l.Oe.HOURS_24,
        },
        {
            label: g.intl.string(g.t.r3LawM),
            value: l.Oe.ALWAYS,
        },
    ];
}
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return _.default.keys(e).filter((t) => {
        var i, o;
        let _ = e[t].message_notifications !== c.bL.NULL,
            r =
                s.yE(null != (i = e[t].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) ||
                s.yE(null != (o = e[t].flags) ? o : 0, d.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!n.ignoreUnreadSetting && r) || (!n.ignoreNotificationSetting && _) || (!n.ignoreMute && (0, a.m$)(e[t]))
        );
    });
}
function b(e) {
    let n = (0, i.e7)([o.ZP], () => o.ZP.useNewNotifications);
    return r.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && n;
}
