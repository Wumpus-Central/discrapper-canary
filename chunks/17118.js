n.d(t, { v: () => o });
let r = new Map(),
    i = new Set();
function a() {
    if ("u" < typeof window) return;
    function e(e) {
        return "propertyName" in e;
    }
    let t = (t) => {
            if (!e(t) || !t.target) return;
            let i = r.get(t.target);
            i || ((i = new Set()), r.set(t.target, i), t.target.addEventListener("transitioncancel", n, { once: !0 })),
                i.add(t.propertyName);
        },
        n = (t) => {
            if (!e(t) || !t.target) return;
            let a = r.get(t.target);
            if (
                a &&
                (a.delete(t.propertyName),
                0 === a.size && (t.target.removeEventListener("transitioncancel", n), r.delete(t.target)),
                0 === r.size)
            ) {
                for (let e of i) e();
                i.clear();
            }
        };
    document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
function s() {
    for (let [e] of r) "isConnected" in e && !e.isConnected && r.delete(e);
}
function o(e) {
    requestAnimationFrame(() => {
        s(), 0 === r.size ? e() : i.add(e);
    });
}
"u" > typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a));
