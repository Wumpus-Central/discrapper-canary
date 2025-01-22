var i = r(814033),
    a = r(689118),
    o = r(806981),
    s = r(685053);
function l(e) {
    o.call(this, 'mont', e), (this.a = new i(e.a, 16).toRed(this.red)), (this.b = new i(e.b, 16).toRed(this.red)), (this.i4 = new i(4).toRed(this.red).redInvm()), (this.two = new i(2).toRed(this.red)), (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
}
function u(e, n, r) {
    o.BasePoint.call(this, e, 'projective'), null === n && null === r ? ((this.x = this.curve.one), (this.z = this.curve.zero)) : ((this.x = new i(n, 16)), (this.z = new i(r, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)));
}
a(l, o),
    (e.exports = l),
    (l.prototype.validate = function (e) {
        var n = e.normalize().x,
            r = n.redSqr(),
            i = r.redMul(n).redAdd(r.redMul(this.a)).redAdd(n);
        return 0 === i.redSqrt().redSqr().cmp(i);
    }),
    a(u, o.BasePoint),
    (l.prototype.decodePoint = function (e, n) {
        return this.point(s.toArray(e, n), 1);
    }),
    (l.prototype.point = function (e, n) {
        return new u(this, e, n);
    }),
    (l.prototype.pointFromJSON = function (e) {
        return u.fromJSON(this, e);
    }),
    (u.prototype.precompute = function () {}),
    (u.prototype._encode = function () {
        return this.getX().toArray('be', this.curve.p.byteLength());
    }),
    (u.fromJSON = function (e, n) {
        return new u(e, n[0], n[1] || e.one);
    }),
    (u.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (u.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    }),
    (u.prototype.dbl = function () {
        var e = this.x.redAdd(this.z).redSqr(),
            n = this.x.redSub(this.z).redSqr(),
            r = e.redSub(n),
            i = e.redMul(n),
            a = r.redMul(n.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(i, a);
    }),
    (u.prototype.add = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (u.prototype.diffAdd = function (e, n) {
        var r = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            a = e.x.redAdd(e.z),
            o = e.x.redSub(e.z).redMul(r),
            s = a.redMul(i),
            l = n.z.redMul(o.redAdd(s).redSqr()),
            u = n.x.redMul(o.redISub(s).redSqr());
        return this.curve.point(l, u);
    }),
    (u.prototype.mul = function (e) {
        for (var n = e.clone(), r = this, i = this.curve.point(null, null), a = this, o = []; 0 !== n.cmpn(0); n.iushrn(1)) o.push(n.andln(1));
        for (var s = o.length - 1; s >= 0; s--) 0 === o[s] ? ((r = r.diffAdd(i, a)), (i = i.dbl())) : ((i = r.diffAdd(i, a)), (r = r.dbl()));
        return i;
    }),
    (u.prototype.mulAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (u.prototype.jumlAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (u.prototype.eq = function (e) {
        return 0 === this.getX().cmp(e.getX());
    }),
    (u.prototype.normalize = function () {
        return (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this;
    }),
    (u.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    });
