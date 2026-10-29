n.d(t, { A: () => r });
var i = n(403918),
    s = n(105292);
function r(e) {
    let t = null != e && e.size > 0 ? i.P2.filter((t) => !e.has(t.value)) : i.P2;
    if (0 === t.length) return { value: i.W_.ADD_STATUS, label: () => s.intl.string(s.t.Vq4UmS) };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
}
