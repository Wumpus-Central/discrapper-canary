"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(287809),
    s = n(985018);
function a() {
    return (0, r.bG)([i.default], () => {
        let e = i.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
        return null == e
            ? null
            : new Intl.DateTimeFormat(s.intl.currentLocale, {
                  hour: "numeric",
                  minute: "2-digit",
                  weekday: "long",
              }).format(e);
    });
}
