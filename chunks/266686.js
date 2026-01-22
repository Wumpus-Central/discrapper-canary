let r;
n.d(t, {
    A: () => p,
});
var i = n(626584),
    l = n(111162),
    a = n(84002),
    s = n(538665),
    o = n(546983),
    c = n(233959),
    u = n(652215);
let d = new i.A("RPCServer:PostMessage"),
    p =
        ((r = new s.A(o.j7, d, c.A, (e, t, n) => {
            (l.default.isLoggingOverlayEvents || e.cmd !== u.e$_.OVERLAY) &&
                t.info("Socket Message: ".concat(n.id), (0, a.A)(e));
        })),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void d.error("Unknown event source");
            let t = e.source,
                n = e.data,
                i = e.origin;
            r.handleMessage(n, i, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch (e) {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        r);
