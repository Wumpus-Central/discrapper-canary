var r = n(814033),
    i = n(526808);
function o(e) {
    this.rand = e || new i.Rand();
}
(e.exports = o),
    (o.create = function (e) {
        return new o(e);
    }),
    (o.prototype._randbelow = function (e) {
        var t = Math.ceil(e.bitLength() / 8);
        do var n = new r(this.rand.generate(t));
        while (n.cmp(e) >= 0);
        return n;
    }),
    (o.prototype._randrange = function (e, t) {
        var n = t.sub(e);
        return e.add(this._randbelow(n));
    }),
    (o.prototype.test = function (e, t, n) {
        var i = e.bitLength(),
            o = r.mont(e),
            a = new r(1).toRed(o);
        t || (t = Math.max(1, (i / 48) | 0));
        for (var s = e.subn(1), l = 0; !s.testn(l); l++);
        for (var c = e.shrn(l), u = s.toRed(o), d = !0; t > 0; t--) {
            var f = this._randrange(new r(2), s);
            n && n(f);
            var p = f.toRed(o).redPow(c);
            if (0 !== p.cmp(a) && 0 !== p.cmp(u)) {
                for (var _ = 1; _ < l; _++) {
                    if (0 === (p = p.redSqr()).cmp(a)) return !1;
                    if (0 === p.cmp(u)) break;
                }
                if (_ === l) return !1;
            }
        }
        return d;
    }),
    (o.prototype.getDivisor = function (e, t) {
        var n = e.bitLength(),
            i = r.mont(e),
            o = new r(1).toRed(i);
        t || (t = Math.max(1, (n / 48) | 0));
        for (var a = e.subn(1), s = 0; !a.testn(s); s++);
        for (var l = e.shrn(s), c = a.toRed(i); t > 0; t--) {
            var u = this._randrange(new r(2), a),
                d = e.gcd(u);
            if (0 !== d.cmpn(1)) return d;
            var f = u.toRed(i).redPow(l);
            if (0 !== f.cmp(o) && 0 !== f.cmp(c)) {
                for (var p = 1; p < s; p++) {
                    if (0 === (f = f.redSqr()).cmp(o)) return f.fromRed().subn(1).gcd(e);
                    if (0 === f.cmp(c)) break;
                }
                if (p === s) return (f = f.redSqr()).fromRed().subn(1).gcd(e);
            }
        }
        return !1;
    });
