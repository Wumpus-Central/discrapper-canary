n.d(t, { V: () => i });
let r = ["fatal", "error", "warning", "log", "info", "debug"];
function i(e) {
    return "warn" === e ? "warning" : r.includes(e) ? e : "log";
}
