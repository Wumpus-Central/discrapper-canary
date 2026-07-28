"use strict";
n.d(t, { v: () => o });
let r = new Map(),
    i = new Set();
function a() {
    if ("u" < typeof window) return;
    function e(e) {
        return "propertyName" in e;
    }
    let t = (n) => {
        if (!e(n) || !n.target) return;
        let a = r.get(n.target);
        if (
            a &&
            (a.delete(n.propertyName),
            0 === a.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)),
            0 === r.size)
        ) {
            for (let e of i) e();
            i.clear();
        }
    };
    document.body.addEventListener("transitionrun", (n) => {
        if (!e(n) || !n.target) return;
        let i = r.get(n.target);
        i || ((i = new Set()), r.set(n.target, i), n.target.addEventListener("transitioncancel", t, { once: !0 })),
            i.add(n.propertyName);
    }),
        document.body.addEventListener("transitionend", t);
}
function o(e) {
    requestAnimationFrame(() => {
        for (let [e] of r) "isConnected" in e && !e.isConnected && r.delete(e);
        0 === r.size ? e() : i.add(e);
    });
}
"u" > typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a));
