n.d(e, { A: () => i });
var l = n(573648);
function i(t) {
    if (null == t || !t.startsWith("h:")) return null;
    let [e] = t.slice(2).split(",");
    if (null == e || 0 === e.length) return null;
    let n = l.A.get(e);
    return null != n && n.enabled ? n : null;
}
