"use strict";
n.d(t, { su: () => l, xl: () => o, F1: () => s }), n(323874), n(14289), n(35956);
class i extends Error {
    constructor(e, t) {
        super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout");
    }
}
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
        c = r.sourceMatch ?? "window",
        u = r.id ?? `${t}-${++a}-${Date.now()}`;
    return new Promise((a, _) => {
        let E = 0,
            A = window.setTimeout(() => {
                I(), _(new i(t, r.timeoutMs));
            }, r.timeoutMs),
            h = null != r.retryMs ? window.setInterval(f, r.retryMs) : null;
        function I() {
            window.clearTimeout(A), null != h && window.clearInterval(h), window.removeEventListener("message", p);
        }
        function f() {
            (E += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: u,
                    attempt: E,
                });
            let i = { type: o, id: u, ...n };
            e.contentWindow?.postMessage(i, l);
        }
        function p(e) {
            var t;
            ("window" === c ? e.source === s : e.origin === l) &&
                ((t = e.data), "object" == typeof t && null != t && t.type === d && t.id === u && (I(), a(e.data)));
        }
        window.addEventListener("message", p), f();
    });
}
let a = 0;
function s(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function l(e, t) {
    return r(e, "capture-region", { rect: t }, { timeoutMs: 15e3, label: "region capture" }).then((e) => {
        if (e.blob instanceof Blob)
            return new File([e.blob], `preview-capture-${Date.now()}.png`, { type: "image/png" });
        throw Error("string" == typeof e.error ? e.error : "capture produced no image");
    });
}
function o(e, t) {
    return r(
        e,
        "capture-now",
        {},
        { id: t, timeoutMs: 8e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) => (
            console.debug("[vibegrations] preview frame answered capture", { id: t, phase: e.phase }),
            "accepted" === e.phase ? "accepted" : "failed"
        ),
        (e) => (e instanceof i ? "failed" : "unavailable"),
    );
}
