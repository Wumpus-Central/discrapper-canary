n.d(t, { k: () => a });
var r = n(388032);
function i(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function a(e) {
    let t = new Date(Number(e)),
        n = i(t, new Date()),
        a = new Date();
    a.setDate(a.getDate() + 1);
    let o = i(t, a),
        s = r.intl.data.formatTime(t, { format: "short" });
    return n
        ? {
              kind: "today",
              dateString: r.intl.data.formatRelativeTime(0, "day", { numeric: "auto" }),
              timeString: s,
          }
        : o
          ? {
                kind: "tomorrow",
                dateString: r.intl.data.formatRelativeTime(1, "day", { numeric: "auto" }),
                timeString: s,
            }
          : {
                kind: "date",
                dateString: r.intl.data.formatDate(t, { dateStyle: "short" }),
                timeString: s,
            };
}
