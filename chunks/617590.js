"use strict";
n.d(t, { wP: () => d }), n(321073);
var r = n(306173),
    i = n(279234),
    a = n(626584),
    s = n(954571),
    o = n(548965),
    l = n(652215);
let u = new a.A("libdiscore"),
    c = !1;
async function d() {
    if (!c) {
        try {
            await (0, i.P)();
            let e = (0, r.t7)(6, 7);
            u.info("The answer for life the universe and everything is:", e), _();
        } catch (e) {
            p(e);
        }
        c = !0;
    }
}
function _() {
    let e = [];
    o.ML.forEach((t) => {
        let n = t.getEnabledFeatureName();
        null != n && e.push(n);
    }),
        s.default.track(l.HAw.LIBDISCORE_LOADED, { success: !0, experimental_features: e });
}
function f(e) {
    let t = "",
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : "Unknown error"),
    t.length > 1e3 && (t = t.substring(0, 997) + "..."),
    null != n)
        ? `${n}: ${t}`
        : t;
}
function p(e) {
    u.error("Failed to execute smoke test:", e);
    let t = f(e);
    s.default.track(l.HAw.LIBDISCORE_LOADED, { success: !1, error: t });
}
