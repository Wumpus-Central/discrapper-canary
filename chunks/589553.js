a.d(n, { A: () => s });
var t = a(439818),
    l = a(696016);
function s(e, n) {
    let a = (0, t.A)((0, l.cM)(e.createdAt)),
        s = (0, t.A)(null != e.name && "" !== e.name ? e.name : a),
        i = "" !== s ? s : a;
    return `${i}.${n}`;
}
