n.d(t, { A: () => a });
var r = n(403918),
    i = n(985018);
function a(e) {
    let t = null != e && e.size > 0 ? r.P2.filter((t) => !e.has(t.value)) : r.P2;
    if (0 === t.length)
        return {
            value: r.W_.ADD_STATUS,
            label: () => i.intl.string(i.t.Vq4UmS),
        };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
}
