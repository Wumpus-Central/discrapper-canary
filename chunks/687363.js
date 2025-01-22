var i = r(814033),
    a = r(526808);
function o(e) {
    this.rand = e || new a.Rand();
}
(e.exports = o),
    (o.create = function (e) {
        return new o(e);
    }),
    (o.prototype._randbelow = function (e) {
        var n = Math.ceil(e.bitLength() / 8);
        do var r = new i(this.rand.generate(n));
        while (r.cmp(e) >= 0);
        return r;
    }),
    (o.prototype._randrange = function (e, n) {
        var r = n.sub(e);
        return e.add(this._randbelow(r));
    }),
    (o.prototype.test = function (e, n, r) {
        var a = e.bitLength(),
            o = i.mont(e),
            s = new i(1).toRed(o);
        !n && (n = Math.max(1, (a / 48) | 0));
        for (var l = e.subn(1), u = 0; !l.testn(u); u++);
        for (var c = e.shrn(u), d = l.toRed(o), f = !0; n > 0; n--) {
            var p = this._randrange(new i(2), l);
            r && r(p);
            var h = p.toRed(o).redPow(c);
            if (0 !== h.cmp(s) && 0 !== h.cmp(d)) {
                for (var _ = 1; _ < u; _++) {
                    if (0 === (h = h.redSqr()).cmp(s)) return !1;
                    if (0 === h.cmp(d)) break;
                }
                if (_ === u) return !1;
            }
        }
        return f;
    }),
    (o.prototype.getDivisor = function (e, n) {
        var r = e.bitLength(),
            a = i.mont(e),
            o = new i(1).toRed(a);
        !n && (n = Math.max(1, (r / 48) | 0));
        for (var s = e.subn(1), l = 0; !s.testn(l); l++);
        for (var u = e.shrn(l), c = s.toRed(a); n > 0; n--) {
            var d = this._randrange(new i(2), s),
                f = e.gcd(d);
            if (0 !== f.cmpn(1)) return f;
            var p = d.toRed(a).redPow(u);
            if (0 !== p.cmp(o) && 0 !== p.cmp(c)) {
                for (var h = 1; h < l; h++) {
                    if (0 === (p = p.redSqr()).cmp(o)) return p.fromRed().subn(1).gcd(e);
                    if (0 === p.cmp(c)) break;
                }
                if (h === l) return (p = p.redSqr()).fromRed().subn(1).gcd(e);
            }
        }
        return !1;
    });
