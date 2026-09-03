n.d(t, { _: () => a });
var i = n(375708);
function r(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function a(e) {
    let t = new Date(Number(e)),
        n = r(t, new Date()),
        a = new Date();
    a.setDate(a.getDate() + 1);
    let s = r(t, a),
        l = i.intl.data.formatTime(t, { format: "short" });
    return n
        ? { kind: "today", dateString: i.intl.data.formatRelativeTime(0, "day", { numeric: "auto" }), timeString: l }
        : s
          ? {
                kind: "tomorrow",
                dateString: i.intl.data.formatRelativeTime(1, "day", { numeric: "auto" }),
                timeString: l,
            }
          : { kind: "date", dateString: i.intl.data.formatDate(t, { dateStyle: "short" }), timeString: l };
}
