a.d(t, { A: () => i });
var s = a(439818),
    n = a(696016);
function i(e, t) {
    let a = (0, s.A)((0, n.cM)(e.createdAt)),
        i = (0, s.A)(null != e.name && "" !== e.name ? e.name : a),
        r = "" !== i ? i : a;
    return `${r}.${t}`;
}
