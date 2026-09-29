(n.d(t, { EA: () => o, J8: () => l, ZW: () => s, mn: () => r }), n(321073));
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
            (-1 !== r && n.splice(r, 1), 0 === n.length && i.delete(e));
        }
    );
}
function l(e) {
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
function o(e) {
    return i.has(e);
}
function s(e, t, n) {
    let i = l(e);
    return null != i
        ? Promise.resolve(i)
        : o(e) && n?.aborted !== !0
          ? (console.debug("[vibegrations] preview frame not ready, waiting", { projectId: e, timeoutMs: t }),
            new Promise((i) => {
                let r = Date.now(),
                    s = r + t;
                function u(t) {
                    (window.clearInterval(d),
                        n?.removeEventListener("abort", a),
                        console.debug("[vibegrations] preview frame wait finished", {
                            projectId: e,
                            found: null != t,
                            ms: Date.now() - r,
                        }),
                        i(t));
                }
                function a() {
                    u(null);
                }
                let d = window.setInterval(() => {
                    let t = l(e);
                    (null != t || Date.now() >= s || !o(e)) && u(t);
                }, 100);
                n?.addEventListener("abort", a, { once: !0 });
            }))
          : Promise.resolve(null);
}
