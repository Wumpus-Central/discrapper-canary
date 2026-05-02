i.d(t, { A: () => r });
var n = i(403918),
    s = i(375708);
function r(e) {
    let t = null != e && e.size > 0 ? n.P2.filter((t) => !e.has(t.value)) : n.P2;
    if (0 === t.length) return { value: n.W_.ADD_STATUS, label: () => s.intl.string(s.t.Vq4UmS) };
    let i = Math.floor(Math.random() * t.length);
    return t[i];
}
