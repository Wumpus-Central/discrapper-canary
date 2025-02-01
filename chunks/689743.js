var i = n(814033),
    r = n(689118),
    a = n(806981),
    s = n(685053);
function o(e) {
    a.call(this, 'mont', e), (this.a = new i(e.a, 16).toRed(this.red)), (this.b = new i(e.b, 16).toRed(this.red)), (this.i4 = new i(4).toRed(this.red).redInvm()), (this.two = new i(2).toRed(this.red)), (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
}
function l(e, t, n) {
    a.BasePoint.call(this, e, 'projective'), null === t && null === n ? ((this.x = this.curve.one), (this.z = this.curve.zero)) : ((this.x = new i(t, 16)), (this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
}
r(o, a),
    (e.exports = o),
    (o.prototype.validate = function (e) {
        var t = e.normalize().x,
            n = t.redSqr(),
            i = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
        return 0 === i.redSqrt().redSqr().cmp(i);
    }),
    r(l, a.BasePoint),
    (o.prototype.decodePoint = function (e, t) {
        return this.point(s.toArray(e, t), 1);
    }),
    (o.prototype.point = function (e, t) {
        return new l(this, e, t);
    }),
    (o.prototype.pointFromJSON = function (e) {
        return l.fromJSON(this, e);
    }),
    (l.prototype.precompute = function () {}),
    (l.prototype._encode = function () {
        return this.getX().toArray('be', this.curve.p.byteLength());
    }),
    (l.fromJSON = function (e, t) {
        return new l(e, t[0], t[1] || e.one);
    }),
    (l.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (l.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    }),
    (l.prototype.dbl = function () {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            n = e.redSub(t),
            i = e.redMul(t),
            r = n.redMul(t.redAdd(this.curve.a24.redMul(n)));
        return this.curve.point(i, r);
    }),
    (l.prototype.add = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.diffAdd = function (e, t) {
        var n = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            r = e.x.redAdd(e.z),
            a = e.x.redSub(e.z).redMul(n),
            s = r.redMul(i),
            o = t.z.redMul(a.redAdd(s).redSqr()),
            l = t.x.redMul(a.redISub(s).redSqr());
        return this.curve.point(o, l);
    }),
    (l.prototype.mul = function (e) {
        for (var t = e.clone(), n = this, i = this.curve.point(null, null), r = this, a = []; 0 !== t.cmpn(0); t.iushrn(1)) a.push(t.andln(1));
        for (var s = a.length - 1; s >= 0; s--) 0 === a[s] ? ((n = n.diffAdd(i, r)), (i = i.dbl())) : ((i = n.diffAdd(i, r)), (n = n.dbl()));
        return i;
    }),
    (l.prototype.mulAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.jumlAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.eq = function (e) {
        return 0 === this.getX().cmp(e.getX());
    }),
    (l.prototype.normalize = function () {
        return (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this;
    }),
    (l.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    });
