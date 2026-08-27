"use strict";
r.d(t, { v: () => s });
var n = r(256062);
let i = new Map(),
    o = new Set();
function a() {
    if ("u" < typeof window) return;
    function e(e) {
        return "propertyName" in e;
    }
    let t = (r) => {
        let a = (0, n.wt)(r);
        if (!e(r) || !a) return;
        let s = i.get(a);
        if (
            s &&
            (s.delete(r.propertyName),
            0 === s.size && (a.removeEventListener("transitioncancel", t), i.delete(a)),
            0 === i.size)
        ) {
            for (let e of o) e();
            o.clear();
        }
    };
    document.body.addEventListener("transitionrun", (r) => {
        let o = (0, n.wt)(r);
        if (!e(r) || !o) return;
        let a = i.get(o);
        a || ((a = new Set()), i.set(o, a), o.addEventListener("transitioncancel", t, { once: !0 })),
            a.add(r.propertyName);
    }),
        document.body.addEventListener("transitionend", t);
}
function s(e) {
    requestAnimationFrame(() => {
        for (let [e] of i) "isConnected" in e && !e.isConnected && i.delete(e);
        0 === i.size ? e() : o.add(e);
    });
}
"u" > typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a));
