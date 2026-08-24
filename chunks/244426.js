"use strict";
r.d(t, { v: () => a });
let n = new Map(),
    i = new Set();
function o() {
    if ("u" < typeof window) return;
    function e(e) {
        return "propertyName" in e;
    }
    let t = (r) => {
        if (!e(r) || !r.target) return;
        let o = n.get(r.target);
        if (
            o &&
            (o.delete(r.propertyName),
            0 === o.size && (r.target.removeEventListener("transitioncancel", t), n.delete(r.target)),
            0 === n.size)
        ) {
            for (let e of i) e();
            i.clear();
        }
    };
    document.body.addEventListener("transitionrun", (r) => {
        if (!e(r) || !r.target) return;
        let i = n.get(r.target);
        i || ((i = new Set()), n.set(r.target, i), r.target.addEventListener("transitioncancel", t, { once: !0 })),
            i.add(r.propertyName);
    }),
        document.body.addEventListener("transitionend", t);
}
function a(e) {
    requestAnimationFrame(() => {
        for (let [e] of n) "isConnected" in e && !e.isConnected && n.delete(e);
        0 === n.size ? e() : i.add(e);
    });
}
"u" > typeof document && ("loading" !== document.readyState ? o() : document.addEventListener("DOMContentLoaded", o));
