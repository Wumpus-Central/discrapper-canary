e.d(n, { A: () => i });
var l = e(573648);
function i(t) {
    if (null == t || !t.startsWith("h:")) return null;
    let [n] = t.slice(2).split(",");
    if (null == n || 0 === n.length) return null;
    let e = l.A.get(n);
    return null != e && e.enabled ? e : null;
}
