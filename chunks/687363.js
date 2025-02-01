var i = n(814033),
    r = n(526808);
function a(e) {
    this.rand = e || new r.Rand();
}
(e.exports = a),
    (a.create = function (e) {
        return new a(e);
    }),
    (a.prototype._randbelow = function (e) {
        var t = Math.ceil(e.bitLength() / 8);
        do var n = new i(this.rand.generate(t));
        while (n.cmp(e) >= 0);
        return n;
    }),
    (a.prototype._randrange = function (e, t) {
        var n = t.sub(e);
        return e.add(this._randbelow(n));
    }),
    (a.prototype.test = function (e, t, n) {
        var r = e.bitLength(),
            a = i.mont(e),
            s = new i(1).toRed(a);
        t || (t = Math.max(1, (r / 48) | 0));
        for (var o = e.subn(1), l = 0; !o.testn(l); l++);
        for (var u = e.shrn(l), c = o.toRed(a), d = !0; t > 0; t--) {
            var f = this._randrange(new i(2), o);
            n && n(f);
            var _ = f.toRed(a).redPow(u);
            if (0 !== _.cmp(s) && 0 !== _.cmp(c)) {
                for (var p = 1; p < l; p++) {
                    if (0 === (_ = _.redSqr()).cmp(s)) return !1;
                    if (0 === _.cmp(c)) break;
                }
                if (p === l) return !1;
            }
        }
        return d;
    }),
    (a.prototype.getDivisor = function (e, t) {
        var n = e.bitLength(),
            r = i.mont(e),
            a = new i(1).toRed(r);
        t || (t = Math.max(1, (n / 48) | 0));
        for (var s = e.subn(1), o = 0; !s.testn(o); o++);
        for (var l = e.shrn(o), u = s.toRed(r); t > 0; t--) {
            var c = this._randrange(new i(2), s),
                d = e.gcd(c);
            if (0 !== d.cmpn(1)) return d;
            var f = c.toRed(r).redPow(l);
            if (0 !== f.cmp(a) && 0 !== f.cmp(u)) {
                for (var _ = 1; _ < o; _++) {
                    if (0 === (f = f.redSqr()).cmp(a)) return f.fromRed().subn(1).gcd(e);
                    if (0 === f.cmp(u)) break;
                }
                if (_ === o) return (f = f.redSqr()).fromRed().subn(1).gcd(e);
            }
        }
        return !1;
    });
