n.d(t, { A: () => s });
var i = n(403918),
    l = n(375708);
function s(e) {
    let t = null != e && e.size > 0 ? i.P2.filter((t) => !e.has(t.value)) : i.P2;
    if (0 === t.length) return { value: i.W_.ADD_STATUS, label: () => l.intl.string(l.t.Vq4UmS) };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
}
