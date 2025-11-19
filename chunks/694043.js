_.d(e, {
    Ak: () => o,
    QC: () => E,
    t$: () => i,
    zb: () => c,
});
var a = _(176984),
    r = _(622916);
let n = _(899517).n;
function o() {
    if (!("fetch" in n)) return !1;
    try {
        return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch (t) {
        return !1;
    }
}
function E(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function i() {
    if ("string" == typeof EdgeRuntime) return !0;
    if (!o()) return !1;
    if (E(n.fetch)) return !0;
    let t = !1,
        e = n.document;
    if (e && "function" == typeof e.createElement)
        try {
            let _ = e.createElement("iframe");
            (_.hidden = !0),
                e.head.appendChild(_),
                _.contentWindow && _.contentWindow.fetch && (t = E(_.contentWindow.fetch)),
                e.head.removeChild(_);
        } catch (t) {
            a.X && r.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
        }
    return t;
}
function c() {
    return "ReportingObserver" in n;
}
