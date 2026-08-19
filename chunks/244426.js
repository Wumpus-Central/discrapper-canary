"use strict";
r.d(t, { v: () => a });
let n = new Map(),
    o = new Set();
function i() {
    if ("u" < typeof window) return;
    function e(e) {
        return "propertyName" in e;
    }
    let t = (r) => {
        if (!e(r) || !r.target) return;
        let i = n.get(r.target);
        if (
            i &&
            (i.delete(r.propertyName),
            0 === i.size && (r.target.removeEventListener("transitioncancel", t), n.delete(r.target)),
            0 === n.size)
        ) {
            for (let e of o) e();
            o.clear();
        }
    };
    document.body.addEventListener("transitionrun", (r) => {
        if (!e(r) || !r.target) return;
        let o = n.get(r.target);
        o || ((o = new Set()), n.set(r.target, o), r.target.addEventListener("transitioncancel", t, { once: !0 })),
            o.add(r.propertyName);
    }),
        document.body.addEventListener("transitionend", t);
}
function a(e) {
    requestAnimationFrame(() => {
        for (let [e] of n) "isConnected" in e && !e.isConnected && n.delete(e);
        0 === n.size ? e() : o.add(e);
    });
}
"u" > typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i));
