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
    let u = `vibegrations-${t}`,
        s = `${u}-result`,
        d = `${u}-ack`,
        c = r.sourceMatch ?? "window",
        f = r.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let p = 0,
            g = a,
            m = window.setTimeout(() => {
                (E(), h(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            w = null != r.retryMs ? window.setInterval(y, r.retryMs) : null;
        function _() {
            null != w && window.clearInterval(w);
        }
        function E() {
            (window.clearTimeout(m), _(), window.removeEventListener("message", b));
        }
        function y() {
            (p += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: f,
                    attempt: p,
                });
            let i = { type: u, id: f, ...n };
            ((g = e.contentWindow), e.contentWindow?.postMessage(i, o));
        }
        function b(e) {
            ("window" === c ? e.source !== g : e.origin !== o) ||
                ((0, i.YX)(e.data, d, f) ? _() : (0, i.YX)(e.data, s, f) && (E(), l(e.data)));
        }
        (window.addEventListener("message", b), y());
    });
}
let l = 0;
