let i;
n.d(t, { A: () => A });
var r = n(626584),
    a = n(111162),
    l = n(84002),
    s = n(538665),
    o = n(546983),
    d = n(233959),
    u = n(652215);
let c = new r.A("RPCServer:PostMessage"),
    A =
        ((i = new s.A(o.j7, c, d.A, (e, t, n) => {
            (a.default.isLoggingOverlayEvents || e.cmd !== u.e$_.OVERLAY) &&
                t.info(`Socket Message: ${n.id}`, (0, l.A)(e));
        })),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void c.error("Unknown event source");
            let t = e.source,
                n = e.data,
                r = e.origin;
            i.handleMessage(n, r, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        i);
