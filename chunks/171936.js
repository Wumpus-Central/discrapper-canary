"use strict";
n.d(t, { EA: () => s, J8: () => a, ZW: () => l, mn: () => r }), n(321073);
let i = new Map();
function r(e, t) {
    let n = i.get(e) ?? [];
    return (
        n.push(t),
        i.set(e, n),
        () => {
            let n = i.get(e);
            if (null == n) return;
            let r = n.indexOf(t);
            -1 !== r && n.splice(r, 1), 0 === n.length && i.delete(e);
        }
    );
}
function a(e) {
    let t = i.get(e);
    if (null == t) return null;
    for (let n = t.length - 1; n >= 0; n--)
        try {
            let e = t[n]();
            if (null != e && null != e.contentWindow) return e;
        } catch (t) {
            console.debug("[vibegrations] preview frame lookup threw", { projectId: e, err: t });
        }
    return null;
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
