a.d(e, {
    Ak: () => o,
    QC: () => i,
    t$: () => c,
    zb: () => s
});
var r = a(176984),
    n = a(622916);
let _ = a(899517).n;
function o() {
    if (!('fetch' in _)) return !1;
    try {
        return new Headers(), new Request('http://www.example.com'), new Response(), !0;
    } catch (t) {
        return !1;
    }
}
function i(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function c() {
    if ('string' == typeof EdgeRuntime) return !0;
    if (!o()) return !1;
    if (i(_.fetch)) return !0;
    let t = !1,
        e = _.document;
    if (e && 'function' == typeof e.createElement)
        try {
            let a = e.createElement('iframe');
            (a.hidden = !0), e.head.appendChild(a), a.contentWindow && a.contentWindow.fetch && (t = i(a.contentWindow.fetch)), e.head.removeChild(a);
        } catch (t) {
            r.X && n.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t);
        }
    return t;
}
function s() {
    return 'ReportingObserver' in _;
}
