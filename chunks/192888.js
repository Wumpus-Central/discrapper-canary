(n.d(t, { W: () => r }), n(323874), n(14289), n(35956));
var i = n(884868);
function r(e, t, n, r) {
    let a = e.contentWindow;
    if (null == a) return Promise.reject(Error("preview frame not ready"));
    let o = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == o) return Promise.reject(Error("preview frame has no resolvable origin"));
    let s = `vibegrations-${t}`,
        u = `${s}-result`,
        d = `${s}-ack`,
        c = r.sourceMatch ?? "window",
        f = r.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let p = 0,
            g = a,
            _ = window.setTimeout(() => {
                (E(), h(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            m = null != r.retryMs ? window.setInterval(A, r.retryMs) : null;
        function w() {
            null != m && window.clearInterval(m);
        }
        function E() {
            (window.clearTimeout(_), w(), window.removeEventListener("message", v));
        }
        function A() {
            (p += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: f,
                    attempt: p,
                });
            let i = { type: s, id: f, ...n };
            ((g = e.contentWindow), e.contentWindow?.postMessage(i, o));
        }
        function v(e) {
            ("window" === c ? e.source !== g : e.origin !== o) ||
                ((0, i.YX)(e.data, d, f) ? w() : (0, i.YX)(e.data, u, f) && (E(), l(e.data)));
        }
        (window.addEventListener("message", v), A());
    });
}
let l = 0;
