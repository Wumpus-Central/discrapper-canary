"use strict";
function r(e) {
    return "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log";
}
n.d(t, { t: () => r });
