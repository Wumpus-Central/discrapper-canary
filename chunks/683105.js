"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(287809),
    s = n(985018);
function a(e) {
    return new Intl.DateTimeFormat(s.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        weekday: "long",
    }).format(e);
}
function o() {
    return (0, r.bG)([i.default], () => {
        let e = i.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
        return null == e ? null : a(e);
    });
}
