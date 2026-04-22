"use strict";
n.d(t, { wP: () => c }), n(321073);
var r = n(306173),
    i = n(279234),
    s = n(626584),
    a = n(954571),
    o = n(548965),
    l = n(652215);
let u = new s.A("libdiscore"),
    d = !1;
async function c() {
    if (!d) {
        try {
            let e;
            await (0, i.P)();
            let t = (0, r.t7)(6, 7);
            u.info("The answer for life the universe and everything is:", t),
                (e = []),
                o.ML.forEach((t) => {
                    let n = t.getEnabledFeatureName();
                    null != n && e.push(n);
                }),
                a.default.track(l.HAw.LIBDISCORE_LOADED, { success: !0, experimental_features: e });
        } catch (e) {
            !(function (e) {
                let t, n;
                u.error("Failed to execute smoke test:", e);
                let r =
                    ((t = ""),
                    (n = null),
                    (e instanceof Error
                        ? ((t = e.message), (n = e.name))
                        : (t = null != e ? String(e) : "Unknown error"),
                    t.length > 1e3 && (t = t.substring(0, 997) + "..."),
                    null != n)
                        ? `${n}: ${t}`
                        : t);
                a.default.track(l.HAw.LIBDISCORE_LOADED, { success: !1, error: r });
            })(e);
        }
        d = !0;
    }
}
