t.d(a, { A: () => s });
var n = t(439818),
    l = t(696016);
function s(e, a) {
    let t = (0, n.A)((0, l.cM)(e.createdAt)),
        s = (0, n.A)(null != e.name && "" !== e.name ? e.name : t),
        i = "" !== s ? s : t;
    return `${i}.${a}`;
}
