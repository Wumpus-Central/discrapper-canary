r.d(t, { Z: () => c });
var n = r(776914),
    o = r(97445),
    a = r(315162),
    i = r(532455),
    l = r(429296),
    s = r(676067),
    u = Object.prototype.hasOwnProperty;
let c = function (e, t) {
    var r = (0, a.Z)(e),
        c = !r && (0, o.Z)(e),
        p = !r && !c && (0, i.Z)(e),
        f = !r && !c && !p && (0, s.Z)(e),
        d = r || c || p || f,
        h = d ? (0, n.Z)(e.length, String) : [],
        b = h.length;
    for (var v in e) (t || u.call(e, v)) && !(d && ('length' == v || (p && ('offset' == v || 'parent' == v)) || (f && ('buffer' == v || 'byteLength' == v || 'byteOffset' == v)) || (0, l.Z)(v, b))) && h.push(v);
    return h;
};
