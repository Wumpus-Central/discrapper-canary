n.d(t, { A: () => i });
var r = n(613057);
function i(e, t) {
    if (null == t) return !0;
    if ("string" == typeof t) return e.includes(t);
    if ("object" != typeof t) return !1;
    let n = t[r.sm.ANY],
        i = t[r.sm.ALL];
    return !!(
        (Array.isArray(n) && n.some((t) => e.includes(t))) ||
        (Array.isArray(i) && i.every((t) => e.includes(t)))
    );
}
