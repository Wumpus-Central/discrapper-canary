n.d(t, {
    wP: () => d,
}),
    n(321073),
    n(65821);
var r = n(306173),
    i = n(279234),
    a = n(626584),
    s = n(954571),
    o = n(548965),
    l = n(652215);
let c = new a.A("libdiscore"),
    u = !1;
async function d() {
    if (!u) {
        try {
            await (0, i.P)();
            let e = (0, r.t7)(6, 7);
            c.info("The answer for life the universe and everything is:", e), f();
        } catch (e) {
            _(e);
        }
        u = !0;
    }
}

function f() {
    let e = [];
    o.ML.forEach((t) => {
        let n = t.getEnabledFeatureName();
        null != n && e.push(n);
    }),
        s.default.track(l.HAw.LIBDISCORE_LOADED, {
            success: !0,
            experimental_features: e,
        });
}

function p(e) {
    let t = "",
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : "Unknown error"),
    t.length > 1e3 && (t = t.substring(0, 997) + "..."),
    null != n)
        ? "".concat(n, ": ").concat(t)
        : t;
}

function _(e) {
    c.error("Failed to execute smoke test:", e);
    let t = p(e);
    s.default.track(l.HAw.LIBDISCORE_LOADED, {
        success: !1,
        error: t,
    });
}
