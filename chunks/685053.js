var r = t,
    i = n(814033),
    o = n(21841),
    a = n(847651);
function s(e, t, n) {
    var r = Array(Math.max(e.bitLength(), n) + 1);
    r.fill(0);
    for (var i = 1 << (t + 1), o = e.clone(), a = 0; a < r.length; a++) {
        var s,
            l = o.andln(i - 1);
        o.isOdd() ? ((s = l > (i >> 1) - 1 ? (i >> 1) - l : l), o.isubn(s)) : (s = 0), (r[a] = s), o.iushrn(1);
    }
    return r;
}
function l(e, t) {
    var n = [[], []];
    (e = e.clone()), (t = t.clone());
    for (var r = 0, i = 0; e.cmpn(-r) > 0 || t.cmpn(-i) > 0; ) {
        var o,
            a,
            s,
            l = (e.andln(3) + r) & 3,
            c = (t.andln(3) + i) & 3;
        3 === l && (l = -1), 3 === c && (c = -1), (a = (1 & l) == 0 ? 0 : (3 == (o = (e.andln(7) + r) & 7) || 5 === o) && 2 === c ? -l : l), n[0].push(a), (s = (1 & c) == 0 ? 0 : (3 == (o = (t.andln(7) + i) & 7) || 5 === o) && 2 === l ? -c : c), n[1].push(s), 2 * r === a + 1 && (r = 1 - r), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1);
    }
    return n;
}
function c(e, t, n) {
    var r = '_' + t;
    e.prototype[t] = function () {
        return void 0 !== this[r] ? this[r] : (this[r] = n.call(this));
    };
}
function u(e) {
    return 'string' == typeof e ? r.toArray(e, 'hex') : e;
}
function d(e) {
    return new i(e, 'hex', 'le');
}
(r.assert = o), (r.toArray = a.toArray), (r.zero2 = a.zero2), (r.toHex = a.toHex), (r.encode = a.encode), (r.getNAF = s), (r.getJSF = l), (r.cachedProperty = c), (r.parseBytes = u), (r.intFromLE = d);
