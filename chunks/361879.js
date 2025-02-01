var i = n(814033),
    r = n(685053),
    a = r.assert;
function s(e, t) {
    if (e instanceof s) return e;
    this._importDER(e, t) || (a(e.r && e.s, 'Signature without r or s'), (this.r = new i(e.r, 16)), (this.s = new i(e.s, 16)), void 0 === e.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = e.recoveryParam));
}
function o() {
    this.place = 0;
}
function l(e, t) {
    var n = e[t.place++];
    if (!(128 & n)) return n;
    var i = 15 & n;
    if (0 === i || i > 4) return !1;
    for (var r = 0, a = 0, s = t.place; a < i; a++, s++) (r <<= 8), (r |= e[s]), (r >>>= 0);
    return !(r <= 127) && ((t.place = s), r);
}
function u(e) {
    for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n; ) t++;
    return 0 === t ? e : e.slice(t);
}
function c(e, t) {
    if (t < 128) {
        e.push(t);
        return;
    }
    var n = 1 + ((Math.log(t) / Math.LN2) >>> 3);
    for (e.push(128 | n); --n; ) e.push((t >>> (n << 3)) & 255);
    e.push(t);
}
(e.exports = s),
    (s.prototype._importDER = function (e, t) {
        e = r.toArray(e, t);
        var n = new o();
        if (48 !== e[n.place++]) return !1;
        var a = l(e, n);
        if (!1 === a || a + n.place !== e.length || 2 !== e[n.place++]) return !1;
        var s = l(e, n);
        if (!1 === s) return !1;
        var u = e.slice(n.place, s + n.place);
        if (((n.place += s), 2 !== e[n.place++])) return !1;
        var c = l(e, n);
        if (!1 === c || e.length !== c + n.place) return !1;
        var d = e.slice(n.place, c + n.place);
        if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
        }
        if (0 === d[0]) {
            if (!(128 & d[1])) return !1;
            d = d.slice(1);
        }
        return (this.r = new i(u)), (this.s = new i(d)), (this.recoveryParam = null), !0;
    }),
    (s.prototype.toDER = function (e) {
        var t = this.r.toArray(),
            n = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = u(t), n = u(n); !n[0] && !(128 & n[1]); ) n = n.slice(1);
        var i = [2];
        c(i, t.length), (i = i.concat(t)).push(2), c(i, n.length);
        var a = i.concat(n),
            s = [48];
        return c(s, a.length), (s = s.concat(a)), r.encode(s, e);
    });
