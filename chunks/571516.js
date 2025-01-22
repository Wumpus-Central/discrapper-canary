var i = r(572657),
    a = r(670097),
    o = r(429296),
    s = r(675717);
function l(e, n, r) {
    if (!(0, s.Z)(r)) return !1;
    var l = typeof n;
    return ('number' == l ? !!((0, a.Z)(r) && (0, o.Z)(n, r.length)) : 'string' == l && n in r) && (0, i.Z)(r[n], e);
}
n.Z = l;
