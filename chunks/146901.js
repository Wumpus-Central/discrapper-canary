"use strict";
n.d(t, { _: () => s });
var i = n(375708);
function r(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function s(e) {
    let t = new Date(Number(e)),
        n = r(t, new Date()),
        s = new Date();
    s.setDate(s.getDate() + 1);
    let a = r(t, s),
        o = i.intl.data.formatTime(t, { format: "short" });
    return n
        ? { kind: "today", dateString: i.intl.data.formatRelativeTime(0, "day", { numeric: "auto" }), timeString: o }
        : a
          ? {
                kind: "tomorrow",
                dateString: i.intl.data.formatRelativeTime(1, "day", { numeric: "auto" }),
                timeString: o,
            }
          : { kind: "date", dateString: i.intl.data.formatDate(t, { dateStyle: "short" }), timeString: o };
}
