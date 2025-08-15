n.d(t, {
    Mn: () => b,
    OD: () => S,
    W9: () => u,
}),
    n(388685),
    n(997841);
var i = n(442837),
    a = n(798140),
    r = n(9156),
    o = n(630388),
    c = n(709054),
    s = n(312400),
    l = n(981631),
    d = n(969943),
    _ = n(526761),
    g = n(388032);
function u() {
    return [
        {
            label: g.intl.string(g.t["8ot6go"]),
            value: d.Oe.MINUTES_15,
        },
        {
            label: g.intl.string(g.t.UMWBZm),
            value: d.Oe.HOURS_1,
        },
        {
            label: g.intl.string(g.t.QmYWtr),
            value: d.Oe.HOURS_3,
        },
        {
            label: g.intl.string(g.t.EpAXPD),
            value: d.Oe.HOURS_8,
        },
        {
            label: g.intl.string(g.t["755t4u"]),
            value: d.Oe.HOURS_24,
        },
        {
            label: g.intl.string(g.t.r3LawM),
            value: d.Oe.ALWAYS,
        },
    ];
}
let h = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
    return c.default.keys(e).filter((n) => {
        var i, r;
        let c = e[n].message_notifications !== l.bL.NULL,
            s =
                o.yE(null != (i = e[n].flags) ? i : 0, _.ic.UNREADS_ALL_MESSAGES) ||
                o.yE(null != (r = e[n].flags) ? r : 0, _.ic.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && c) || (!t.ignoreMute && (0, a.m$)(e[n]))
        );
    });
}
function b(e) {
    let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
