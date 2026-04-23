"use strict";
n.d(t, { b8: () => u, ct: () => g, os: () => h }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(544743),
    l = n(543465),
    s = n(935208),
    o = n(652215),
    d = n(355097),
    c = n(985018);
function u() {
    return [
        { id: "15-minutes", label: c.intl.string(c.t["8ot6gv"]), value: d.Xx.MINUTES_15 },
        { id: "1-hour", label: c.intl.string(c.t.UMWBZr), value: d.Xx.HOURS_1 },
        { id: "3-hours", label: c.intl.string(c.t.QmYWtu), value: d.Xx.HOURS_3 },
        { id: "8-hours", label: c.intl.string(c.t.EpAXPC), value: d.Xx.HOURS_8 },
        { id: "24-hours", label: c.intl.string(c.t["755t4q"]), value: d.Xx.HOURS_24 },
        { id: "forever", label: c.intl.string(c.t.r3LawO), value: d.Xx.ALWAYS },
    ];
}
let _ = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return s.default.keys(e).filter((n) => {
        let r = e[n].message_notifications !== o.orn.NULL,
            l = i.Lt(e[n].flags ?? 0, d.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, d.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && l) || (!t.ignoreNotificationSetting && r) || (!t.ignoreMute && (0, a.tG)(e[n]))
        );
    });
}
function h(e) {
    return (0, r.bG)([l.Ay], () => l.Ay.useNewNotifications);
}
