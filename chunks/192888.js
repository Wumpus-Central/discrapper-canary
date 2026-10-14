(n.d(t, { W: () => r }), n(323874), n(14289), n(35956));
var i = n(884868);
function r(e, t, n, r) {
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
    let o = `vibegrations-${t}`,
        d = `${o}-result`,
        c = `${o}-ack`,
        u = r.sourceMatch ?? "window",
        _ = r.id ?? `${t}-${++a}-${Date.now()}`;
    return new Promise((a, E) => {
        let A = 0,
            h = s,
            f = window.setTimeout(() => {
                (T(), E(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            I = null != r.retryMs ? window.setInterval(m, r.retryMs) : null;
        function p() {
            null != I && window.clearInterval(I);
        }
        function T() {
            (window.clearTimeout(f), p(), window.removeEventListener("message", g));
        }
        function m() {
            (A += 1) > 1 &&
                console.debug("[conjure] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: _,
                    attempt: A,
                });
            let i = { type: o, id: _, ...n };
            ((h = e.contentWindow), e.contentWindow?.postMessage(i, l));
        }
        function g(e) {
            ("window" === u ? e.source !== h : e.origin !== l) ||
                ((0, i.YX)(e.data, c, _) ? p() : (0, i.YX)(e.data, d, _) && (T(), a(e.data)));
        }
        (window.addEventListener("message", g), m());
    });
}
let a = 0;
