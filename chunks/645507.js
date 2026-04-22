t.d(e, { A: () => a });
var n = t(403918),
    i = t(985018);
function a(l) {
    let e = null != l && l.size > 0 ? n.P2.filter((e) => !l.has(e.value)) : n.P2;
    if (0 === e.length) return { value: n.W_.ADD_STATUS, label: () => i.intl.string(i.t.Vq4UmS) };
    let t = Math.floor(Math.random() * e.length);
    return e[t];
}
