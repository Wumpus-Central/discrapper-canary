var i = r(814033),
    a = r(685053),
    o = a.assert;
function s(e, n) {
    if (e instanceof s) return e;
    !this._importDER(e, n) && (o(e.r && e.s, 'Signature without r or s'), (this.r = new i(e.r, 16)), (this.s = new i(e.s, 16)), void 0 === e.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = e.recoveryParam));
}
function l() {
    this.place = 0;
}
function u(e, n) {
    var r = e[n.place++];
    if (!(128 & r)) return r;
    var i = 15 & r;
    if (0 === i || i > 4) return !1;
    for (var a = 0, o = 0, s = n.place; o < i; o++, s++) (a <<= 8), (a |= e[s]), (a >>>= 0);
    return !(a <= 127) && ((n.place = s), a);
}
function c(e) {
    for (var n = 0, r = e.length - 1; !e[n] && !(128 & e[n + 1]) && n < r; ) n++;
    return 0 === n ? e : e.slice(n);
}
function d(e, n) {
    if (n < 128) {
        e.push(n);
        return;
    }
    var r = 1 + ((Math.log(n) / Math.LN2) >>> 3);
    for (e.push(128 | r); --r; ) e.push((n >>> (r << 3)) & 255);
    e.push(n);
}
(e.exports = s),
    (s.prototype._importDER = function (e, n) {
        e = a.toArray(e, n);
        var r = new l();
        if (48 !== e[r.place++]) return !1;
        var o = u(e, r);
        if (!1 === o || o + r.place !== e.length || 2 !== e[r.place++]) return !1;
        var s = u(e, r);
        if (!1 === s) return !1;
        var c = e.slice(r.place, s + r.place);
        if (((r.place += s), 2 !== e[r.place++])) return !1;
        var d = u(e, r);
        if (!1 === d || e.length !== d + r.place) return !1;
        var f = e.slice(r.place, d + r.place);
        if (0 === c[0]) {
            if (!(128 & c[1])) return !1;
            c = c.slice(1);
        }
        if (0 === f[0]) {
            if (!(128 & f[1])) return !1;
            f = f.slice(1);
        }
        return (this.r = new i(c)), (this.s = new i(f)), (this.recoveryParam = null), !0;
    }),
    (s.prototype.toDER = function (e) {
        var n = this.r.toArray(),
            r = this.s.toArray();
        for (128 & n[0] && (n = [0].concat(n)), 128 & r[0] && (r = [0].concat(r)), n = c(n), r = c(r); !r[0] && !(128 & r[1]); ) r = r.slice(1);
        var i = [2];
        d(i, n.length), (i = i.concat(n)).push(2), d(i, r.length);
        var o = i.concat(r),
            s = [48];
        return d(s, o.length), (s = s.concat(o)), a.encode(s, e);
    });
