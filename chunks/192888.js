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
        h = i.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, f) => {
        let w = 0,
            p = o,
            m = window.setTimeout(() => {
                (v(), f(new r.fq(t, i.timeoutMs)));
            }, i.timeoutMs),
            g = null != i.retryMs ? window.setInterval(y, i.retryMs) : null;
        function b() {
            null != g && window.clearInterval(g);
        }
        function v() {
            (window.clearTimeout(m), b(), window.removeEventListener("message", M));
        }
        function y() {
            (w += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: i.label ?? t,
                    id: h,
                    attempt: w,
                });
            let r = { type: u, id: h, ...n };
            ((p = e.contentWindow), e.contentWindow?.postMessage(r, a));
        }
        function M(e) {
            ("window" === c ? e.source !== p : e.origin !== a) ||
                ((0, r.YX)(e.data, d, h) ? b() : (0, r.YX)(e.data, s, h) && (v(), l(e.data)));
        }
        (window.addEventListener("message", M), y());
    });
}
let l = 0;
