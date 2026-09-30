l.d(e, { A: () => s });
var t = l(439818),
    n = l(696016);
function s(a, e) {
    let l = (0, t.A)((0, n.cM)(a.createdAt)),
        s = (0, t.A)(null != a.name && "" !== a.name ? a.name : l),
        i = "" !== s ? s : l;
    return `${i}.${e}`;
}
