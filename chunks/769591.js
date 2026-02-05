"use strict";
n.d(t, { b8: () => d, ct: () => g, os: () => S }), n(938796);
var i = n(665260),
    r = n(311907),
    a = n(544743),
    o = n(543465),
    l = n(661191),
    s = n(652215),
    _ = n(815968),
    c = n(355097),
    u = n(985018);
function d() {
    return [
        { id: "15-minutes", label: u.intl.string(u.t["8ot6gv"]), value: _.Xx.MINUTES_15 },
        { id: "1-hour", label: u.intl.string(u.t.UMWBZr), value: _.Xx.HOURS_1 },
        { id: "3-hours", label: u.intl.string(u.t.QmYWtu), value: _.Xx.HOURS_3 },
        { id: "8-hours", label: u.intl.string(u.t.EpAXPC), value: _.Xx.HOURS_8 },
        { id: "24-hours", label: u.intl.string(u.t["755t4q"]), value: _.Xx.HOURS_24 },
        { id: "forever", label: u.intl.string(u.t.r3LawO), value: _.Xx.ALWAYS },
    ];
}
let b = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return l.default.keys(e).filter((n) => {
        let r = e[n].message_notifications !== s.orn.NULL,
            o = i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && o) || (!t.ignoreNotificationSetting && r) || (!t.ignoreMute && (0, a.tG)(e[n]))
        );
    });
}
function S(e) {
    return (0, r.bG)([o.Ay], () => o.Ay.useNewNotifications);
}
