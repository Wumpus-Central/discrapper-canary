var i = t,
    r = n(814033),
    a = n(21841),
    s = n(847651);
function o(e, t, n) {
    var i = Array(Math.max(e.bitLength(), n) + 1);
    i.fill(0);
    for (var r = 1 << (t + 1), a = e.clone(), s = 0; s < i.length; s++) {
        var o,
            l = a.andln(r - 1);
        a.isOdd() ? ((o = l > (r >> 1) - 1 ? (r >> 1) - l : l), a.isubn(o)) : (o = 0), (i[s] = o), a.iushrn(1);
    }
    return i;
}
function l(e, t) {
    var n = [[], []];
    (e = e.clone()), (t = t.clone());
    for (var i = 0, r = 0; e.cmpn(-i) > 0 || t.cmpn(-r) > 0; ) {
        var a,
            s,
            o,
            l = (e.andln(3) + i) & 3,
            u = (t.andln(3) + r) & 3;
        3 === l && (l = -1), 3 === u && (u = -1), (s = (1 & l) == 0 ? 0 : (3 == (a = (e.andln(7) + i) & 7) || 5 === a) && 2 === u ? -l : l), n[0].push(s), (o = (1 & u) == 0 ? 0 : (3 == (a = (t.andln(7) + r) & 7) || 5 === a) && 2 === l ? -u : u), n[1].push(o), 2 * i === s + 1 && (i = 1 - i), 2 * r === o + 1 && (r = 1 - r), e.iushrn(1), t.iushrn(1);
    }
    return n;
}
function u(e, t, n) {
    var i = '_' + t;
    e.prototype[t] = function () {
        return void 0 !== this[i] ? this[i] : (this[i] = n.call(this));
    };
}
function c(e) {
    return 'string' == typeof e ? i.toArray(e, 'hex') : e;
}
function d(e) {
    return new r(e, 'hex', 'le');
}
(i.assert = a), (i.toArray = s.toArray), (i.zero2 = s.zero2), (i.toHex = s.toHex), (i.encode = s.encode), (i.getNAF = o), (i.getJSF = l), (i.cachedProperty = u), (i.parseBytes = c), (i.intFromLE = d);
