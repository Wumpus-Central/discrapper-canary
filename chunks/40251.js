var i = r(737372),
    a = r(459584),
    o = r(957578).Buffer,
    s = r(222822),
    l = r(764900),
    u = r(458340),
    c = r(245413);
function d(e, n, r) {
    l.call(this), (this._cache = new p()), (this._cipher = new u.AES(n)), (this._prev = o.from(r)), (this._mode = e), (this._autopadding = !0);
}
r(689118)(d, l),
    (d.prototype._update = function (e) {
        this._cache.add(e);
        for (var n, r, i = []; (n = this._cache.get()); ) (r = this._mode.encrypt(this, n)), i.push(r);
        return o.concat(i);
    });
var f = o.alloc(16, 16);
function p() {
    this.cache = o.allocUnsafe(0);
}
function h(e, n, r) {
    var l = i[e.toLowerCase()];
    if (!l) throw TypeError('invalid suite type');
    if (('string' == typeof n && (n = o.from(n)), n.length !== l.key / 8)) throw TypeError('invalid key length ' + n.length);
    if (('string' == typeof r && (r = o.from(r)), 'GCM' !== l.mode && r.length !== l.iv)) throw TypeError('invalid iv length ' + r.length);
    return 'stream' === l.type ? new s(l.module, n, r) : 'auth' === l.type ? new a(l.module, n, r) : new d(l.module, n, r);
}
function _(e, n) {
    var r = i[e.toLowerCase()];
    if (!r) throw TypeError('invalid suite type');
    var a = c(n, !1, r.key, r.iv);
    return h(e, a.key, a.iv);
}
(d.prototype._final = function () {
    var e = this._cache.flush();
    if (this._autopadding) return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
    if (!e.equals(f)) throw (this._cipher.scrub(), Error('data not multiple of block length'));
}),
    (d.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
    }),
    (p.prototype.add = function (e) {
        this.cache = o.concat([this.cache, e]);
    }),
    (p.prototype.get = function () {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), e;
        }
        return null;
    }),
    (p.prototype.flush = function () {
        for (var e = 16 - this.cache.length, n = o.allocUnsafe(e), r = -1; ++r < e; ) n.writeUInt8(e, r);
        return o.concat([this.cache, n]);
    }),
    (n.createCipheriv = h),
    (n.createCipher = _);
