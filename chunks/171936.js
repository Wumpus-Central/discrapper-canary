n.d(t, { EA: () => s, J8: () => r, ZW: () => o, mn: () => i }), n(321073);
let l = new Map();
function i(e, t) {
    let n = l.get(e) ?? [];
    return (
        n.push(t),
        l.set(e, n),
        () => {
            let n = l.get(e);
            if (null == n) return;
            let i = n.indexOf(t);
            -1 !== i && n.splice(i, 1), 0 === n.length && l.delete(e);
        }
    );
}
function r(e) {
    let t = l.get(e);
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
    return l.has(e);
}
function o(e, t, n) {
    let l = r(e);
    return null != l
        ? Promise.resolve(l)
        : s(e) && n?.aborted !== !0
          ? (console.debug("[vibegrations] preview frame not ready, waiting", { projectId: e, timeoutMs: t }),
            new Promise((l) => {
                let i = Date.now(),
                    o = i + t;
                function u(t) {
                    window.clearInterval(d),
                        n?.removeEventListener("abort", a),
                        console.debug("[vibegrations] preview frame wait finished", {
                            projectId: e,
                            found: null != t,
                            ms: Date.now() - i,
                        }),
                        l(t);
                }
                function a() {
                    u(null);
                }
                let d = window.setInterval(() => {
                    let t = r(e);
                    (null != t || Date.now() >= o || !s(e)) && u(t);
                }, 100);
                n?.addEventListener("abort", a, { once: !0 });
            }))
          : Promise.resolve(null);
}
