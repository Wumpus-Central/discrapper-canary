"use strict";
n.d(t, { b8: () => d, ct: () => f, os: () => h }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(544743),
    a = n(543465),
    o = n(935208),
    l = n(652215),
    u = n(355097),
    c = n(375708);
function d() {
    return [
        { id: "15-minutes", label: c.intl.string(c.t["8ot6gv"]), value: u.Xx.MINUTES_15 },
        { id: "1-hour", label: c.intl.string(c.t.UMWBZr), value: u.Xx.HOURS_1 },
        { id: "3-hours", label: c.intl.string(c.t.QmYWtu), value: u.Xx.HOURS_3 },
        { id: "8-hours", label: c.intl.string(c.t.EpAXPC), value: u.Xx.HOURS_8 },
        { id: "24-hours", label: c.intl.string(c.t["755t4q"]), value: u.Xx.HOURS_24 },
        { id: "forever", label: c.intl.string(c.t.r3LawO), value: u.Xx.ALWAYS },
    ];
}
let _ = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return o.default.keys(e).filter((n) => {
        let r = e[n].message_notifications !== l.orn.NULL,
            a = i.Lt(e[n].flags ?? 0, u.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, u.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && a) || (!t.ignoreNotificationSetting && r) || (!t.ignoreMute && (0, s.tG)(e[n]))
        );
    });
}
function h(e) {
    return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications);
}
