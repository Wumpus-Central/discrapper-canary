r.d(t, { Z: () => l });
var n = r(572657),
    o = r(670097),
    a = r(429296),
    i = r(675717);
let l = function (e, t, r) {
    if (!(0, i.Z)(r)) return !1;
    var l = typeof t;
    return ('number' == l ? !!((0, o.Z)(r) && (0, a.Z)(t, r.length)) : 'string' == l && t in r) && (0, n.Z)(r[t], e);
};
