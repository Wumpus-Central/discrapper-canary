(e.d(i, { b8: () => S, ct: () => v, os: () => c }), e(938796));
var n = e(665260),
    r = e(17928),
    l = e(544743),
    a = e(543465),
    o = e(935208),
    u = e(652215),
    s = e(355097),
    g = e(105292);
function S() {
    return [
        { id: "15-minutes", label: g.intl.string(g.t["8ot6gv"]), value: s.Xx.MINUTES_15 },
        { id: "1-hour", label: g.intl.string(g.t.UMWBZr), value: s.Xx.HOURS_1 },
        { id: "3-hours", label: g.intl.string(g.t.QmYWtu), value: s.Xx.HOURS_3 },
        { id: "8-hours", label: g.intl.string(g.t.EpAXPC), value: s.Xx.HOURS_8 },
        { id: "24-hours", label: g.intl.string(g.t["755t4q"]), value: s.Xx.HOURS_24 },
        { id: "forever", label: g.intl.string(g.t.r3LawO), value: s.Xx.ALWAYS },
    ];
}
let d = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
function v(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
    return o.default.keys(t).filter((e) => {
        let r = t[e].message_notifications !== u.orn.NULL,
            a = n.Lt(t[e].flags ?? 0, s.vv.UNREADS_ALL_MESSAGES) || n.Lt(t[e].flags ?? 0, s.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!i.ignoreUnreadSetting && a) || (!i.ignoreNotificationSetting && r) || (!i.ignoreMute && (0, l.tG)(t[e]))
        );
    });
}
function c(t) {
    return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications);
}
