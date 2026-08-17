"use strict";
n.d(t, { EA: () => s, ZW: () => l, mn: () => r });
let i = new Map();
function r(e, t) {
    return (
        i.set(e, t),
        () => {
            i.get(e) === t && i.delete(e);
        }
    );
}
function a(e) {
    let t = i.get(e);
    if (null == t) return null;
    try {
        let e = t();
        return null != e && null != e.contentWindow ? e : null;
    } catch (t) {
        return console.debug("[vibegrations] preview frame lookup threw", { projectId: e, err: t }), null;
    }
}
function s(e) {
    return i.has(e);
}
function l(e, t, n) {
    let i = a(e);
    return null != i
        ? Promise.resolve(i)
        : s(e) && n?.aborted !== !0
          ? (console.debug("[vibegrations] preview frame not ready, waiting", { projectId: e, timeoutMs: t }),
            new Promise((i) => {
                let r = Date.now(),
                    l = r + t;
                function o(t) {
                    window.clearInterval(c),
                        n?.removeEventListener("abort", d),
                        console.debug("[vibegrations] preview frame wait finished", {
                            projectId: e,
                            found: null != t,
                            ms: Date.now() - r,
                        }),
                        i(t);
                }
                function d() {
                    o(null);
                }
                let c = window.setInterval(() => {
                    let t = a(e);
                    (null != t || Date.now() >= l || !s(e)) && o(t);
                }, 100);
                n?.addEventListener("abort", d, { once: !0 });
            }))
          : Promise.resolve(null);
}
