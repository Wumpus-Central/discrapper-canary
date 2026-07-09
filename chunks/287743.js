l.d(t, { A: () => a });
var n = l(573648);
function a(e) {
    if (null == e || !e.startsWith("h:")) return null;
    let [t] = e.slice(2).split(",");
    if (null == t || 0 === t.length) return null;
    let l = n.A.get(t);
    return null != l && l.enabled ? l : null;
}
