"use strict";
n.d(t, { b8: () => _, ct: () => g, os: () => m }), n(938796);
var i = n(665260),
    r = n(311907),
    a = n(544743),
    l = n(543465),
    s = n(661191),
    o = n(652215),
    c = n(355097),
    d = n(985018);
function _() {
    return [
        { id: "15-minutes", label: d.intl.string(d.t["8ot6gv"]), value: c.Xx.MINUTES_15 },
        { id: "1-hour", label: d.intl.string(d.t.UMWBZr), value: c.Xx.HOURS_1 },
        { id: "3-hours", label: d.intl.string(d.t.QmYWtu), value: c.Xx.HOURS_3 },
        { id: "8-hours", label: d.intl.string(d.t.EpAXPC), value: c.Xx.HOURS_8 },
        { id: "24-hours", label: d.intl.string(d.t["755t4q"]), value: c.Xx.HOURS_24 },
        { id: "forever", label: d.intl.string(d.t.r3LawO), value: c.Xx.ALWAYS },
    ];
}
let u = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
    return s.default.keys(e).filter((n) => {
        let r = e[n].message_notifications !== o.orn.NULL,
            l = i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ALL_MESSAGES) || i.Lt(e[n].flags ?? 0, c.vv.UNREADS_ONLY_MENTIONS);
        return (
            (!t.ignoreUnreadSetting && l) || (!t.ignoreNotificationSetting && r) || (!t.ignoreMute && (0, a.tG)(e[n]))
        );
    });
}
function m(e) {
    return (0, r.bG)([l.Ay], () => l.Ay.useNewNotifications);
}
