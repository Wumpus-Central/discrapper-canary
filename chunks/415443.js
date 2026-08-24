n.d(t, { A: () => r });
var i = n(58703),
    l = n(375708);
function r(e, t) {
    if (null == e || "" === e.trim()) return null;
    let n = Number(e);
    if (!Number.isFinite(n)) return null;
    let r = new Date(n);
    if (Number.isNaN(r.getTime())) return null;
    if (t) return (0, i.mk)(r, !0);
    let s = { dateStyle: "short", timeStyle: "short" };
    try {
        return r.toLocaleString(l.intl.currentLocale, s);
    } catch {
        return r.toLocaleString(void 0, s);
    }
}
