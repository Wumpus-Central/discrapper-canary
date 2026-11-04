(n(323874), n(14289), n(35956));
var i = n(884868);
let r = 0;
n.d(
    t,
    {},
    {
        W: function (e, t, n, a) {
            let s = e.contentWindow;
            if (null == s) return Promise.reject(Error("preview frame not ready"));
            let l = (function (e) {
                try {
                    return new URL(e.src, window.location.href).origin;
                } catch {
                    return null;
                }
            })(e);
            if (null == l) return Promise.reject(Error("preview frame has no resolvable origin"));
            let o = (0, i.UL)(t),
                d = a.sourceMatch ?? "window",
                c = a.id ?? `${t}-${++r}-${Date.now()}`;
            return new Promise((r, u) => {
                let _ = 0,
                    E = s,
                    A = window.setTimeout(() => {
                        (I(), u(new i.fq(t, a.timeoutMs)));
                    }, a.timeoutMs),
                    h = null != a.retryMs ? window.setInterval(p, a.retryMs) : null;
                function f() {
                    null != h && window.clearInterval(h);
                }
                function I() {
                    (window.clearTimeout(A), f(), window.removeEventListener("message", m));
                }
                function p() {
                    for (let i of ((_ += 1) > 1 &&
                        console.debug("[conjure] re-offering call to the preview frame", {
                            call: a.label ?? t,
                            id: c,
                            attempt: _,
                        }),
                    (E = e.contentWindow),
                    o.requests)) {
                        let t = { type: i, id: c, ...n };
                        e.contentWindow?.postMessage(t, l);
                    }
                }
                function m(e) {
                    ("window" === d ? e.source !== E : e.origin !== l) ||
                        ((0, i.YX)(e.data, o.acks, c) ? f() : (0, i.YX)(e.data, o.results, c) && (I(), r(e.data)));
                }
                (window.addEventListener("message", m), p());
            });
        },
    },
);
