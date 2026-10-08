(n.d(t, { W: () => i }), n(323874), n(14289), n(35956));
var r = n(884868);
function i(e, t, n, i) {
    let o = e.contentWindow;
    if (null == o) return Promise.reject(Error("preview frame not ready"));
    let a = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == a) return Promise.reject(Error("preview frame has no resolvable origin"));
    let u = `vibegrations-${t}`,
        s = `${u}-result`,
        d = `${u}-ack`,
        c = i.sourceMatch ?? "window",
        f = i.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let w = 0,
            p = o,
            m = window.setTimeout(() => {
                (b(), h(new r.fq(t, i.timeoutMs)));
            }, i.timeoutMs),
            g = null != i.retryMs ? window.setInterval(y, i.retryMs) : null;
        function v() {
            null != g && window.clearInterval(g);
        }
        function b() {
            (window.clearTimeout(m), v(), window.removeEventListener("message", M));
        }
        function y() {
            (w += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: i.label ?? t,
                    id: f,
                    attempt: w,
                });
            let r = { type: u, id: f, ...n };
            ((p = e.contentWindow), e.contentWindow?.postMessage(r, a));
        }
        function M(e) {
            ("window" === c ? e.source !== p : e.origin !== a) ||
                ((0, r.YX)(e.data, d, f) ? v() : (0, r.YX)(e.data, s, f) && (b(), l(e.data)));
        }
        (window.addEventListener("message", M), y());
    });
}
let l = 0;
