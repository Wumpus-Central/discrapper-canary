var i = n,
    a = r(814033),
    o = r(21841),
    s = r(847651);
function l(e, n, r) {
    var i = Array(Math.max(e.bitLength(), r) + 1);
    i.fill(0);
    for (var a = 1 << (n + 1), o = e.clone(), s = 0; s < i.length; s++) {
        var l,
            u = o.andln(a - 1);
        o.isOdd() ? ((l = u > (a >> 1) - 1 ? (a >> 1) - u : u), o.isubn(l)) : (l = 0), (i[s] = l), o.iushrn(1);
    }
    return i;
}
function u(e, n) {
    var r = [[], []];
    (e = e.clone()), (n = n.clone());
    for (var i = 0, a = 0; e.cmpn(-i) > 0 || n.cmpn(-a) > 0; ) {
        var o,
            s,
            l,
            u = (e.andln(3) + i) & 3,
            c = (n.andln(3) + a) & 3;
        3 === u && (u = -1), 3 === c && (c = -1), (s = (1 & u) == 0 ? 0 : (3 == (o = (e.andln(7) + i) & 7) || 5 === o) && 2 === c ? -u : u), r[0].push(s), (l = (1 & c) == 0 ? 0 : (3 == (o = (n.andln(7) + a) & 7) || 5 === o) && 2 === u ? -c : c), r[1].push(l), 2 * i === s + 1 && (i = 1 - i), 2 * a === l + 1 && (a = 1 - a), e.iushrn(1), n.iushrn(1);
    }
    return r;
}
function c(e, n, r) {
    var i = '_' + n;
    e.prototype[n] = function () {
        return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
    };
}
function d(e) {
    return 'string' == typeof e ? i.toArray(e, 'hex') : e;
}
function f(e) {
    return new a(e, 'hex', 'le');
}
(i.assert = o), (i.toArray = s.toArray), (i.zero2 = s.zero2), (i.toHex = s.toHex), (i.encode = s.encode), (i.getNAF = l), (i.getJSF = u), (i.cachedProperty = c), (i.parseBytes = d), (i.intFromLE = f);
