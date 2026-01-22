n.d(e, {
    b8: () => g,
    ct: () => A,
    os: () => S,
}),
    n(896048),
    n(938796);
var i = n(665260),
    r = n(311907),
    l = n(544743),
    a = n(543465),
    s = n(661191),
    o = n(652215),
    d = n(815968),
    u = n(355097),
    c = n(985018);

function g() {
    return [
        {
            id: "15-minutes",
            label: c.intl.string(c.t["8ot6gv"]),
            value: d.Xx.MINUTES_15,
        },
        {
            id: "1-hour",
            label: c.intl.string(c.t.UMWBZr),
            value: d.Xx.HOURS_1,
        },
        {
            id: "3-hours",
            label: c.intl.string(c.t.QmYWtu),
            value: d.Xx.HOURS_3,
        },
        {
            id: "8-hours",
            label: c.intl.string(c.t.EpAXPC),
            value: d.Xx.HOURS_8,
        },
        {
            id: "24-hours",
            label: c.intl.string(c.t["755t4q"]),
            value: d.Xx.HOURS_24,
        },
        {
            id: "forever",
            label: c.intl.string(c.t.r3LawO),
            value: d.Xx.ALWAYS,
        },
    ];
}
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1,
};

function A(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return s.default.keys(t).filter((n) => {
        var r, a;
        let s = t[n].message_notifications !== o.orn.NULL,
            d =
                i.Lt(null != (r = t[n].flags) ? r : 0, u.vv.UNREADS_ALL_MESSAGES) ||
                i.Lt(null != (a = t[n].flags) ? a : 0, u.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!e.ignoreUnreadSetting && d) || (!e.ignoreNotificationSetting && s) || (!e.ignoreMute && (0, l.tG)(t[n]))
        );
    });
}

function S(t) {
    return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications);
}
