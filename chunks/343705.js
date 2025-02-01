n.d(t, { Z: () => c });
var i = n(776914),
    r = n(97445),
    a = n(315162),
    s = n(532455),
    o = n(429296),
    l = n(676067),
    u = Object.prototype.hasOwnProperty;
let c = function (e, t) {
    var n = (0, a.Z)(e),
        c = !n && (0, r.Z)(e),
        d = !n && !c && (0, s.Z)(e),
        f = !n && !c && !d && (0, l.Z)(e),
        _ = n || c || d || f,
        p = _ ? (0, i.Z)(e.length, String) : [],
        h = p.length;
    for (var m in e) (t || u.call(e, m)) && !(_ && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || (0, o.Z)(m, h))) && p.push(m);
    return p;
};
