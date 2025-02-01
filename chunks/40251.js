var i = n(737372),
    r = n(459584),
    a = n(957578).Buffer,
    s = n(222822),
    o = n(764900),
    l = n(458340),
    u = n(245413);
function c(e, t, n) {
    o.call(this), (this._cache = new f()), (this._cipher = new l.AES(t)), (this._prev = a.from(n)), (this._mode = e), (this._autopadding = !0);
}
n(689118)(c, o),
    (c.prototype._update = function (e) {
        this._cache.add(e);
        for (var t, n, i = []; (t = this._cache.get()); ) (n = this._mode.encrypt(this, t)), i.push(n);
        return a.concat(i);
    });
var d = a.alloc(16, 16);
function f() {
    this.cache = a.allocUnsafe(0);
}
function _(e, t, n) {
    var o = i[e.toLowerCase()];
    if (!o) throw TypeError('invalid suite type');
    if (('string' == typeof t && (t = a.from(t)), t.length !== o.key / 8)) throw TypeError('invalid key length ' + t.length);
    if (('string' == typeof n && (n = a.from(n)), 'GCM' !== o.mode && n.length !== o.iv)) throw TypeError('invalid iv length ' + n.length);
    return 'stream' === o.type ? new s(o.module, t, n) : 'auth' === o.type ? new r(o.module, t, n) : new c(o.module, t, n);
}
function p(e, t) {
    var n = i[e.toLowerCase()];
    if (!n) throw TypeError('invalid suite type');
    var r = u(t, !1, n.key, n.iv);
    return _(e, r.key, r.iv);
}
(c.prototype._final = function () {
    var e = this._cache.flush();
    if (this._autopadding) return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
    if (!e.equals(d)) throw (this._cipher.scrub(), Error('data not multiple of block length'));
}),
    (c.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
    }),
    (f.prototype.add = function (e) {
        this.cache = a.concat([this.cache, e]);
    }),
    (f.prototype.get = function () {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), e;
        }
        return null;
    }),
    (f.prototype.flush = function () {
        for (var e = 16 - this.cache.length, t = a.allocUnsafe(e), n = -1; ++n < e; ) t.writeUInt8(e, n);
        return a.concat([this.cache, t]);
    }),
    (t.createCipheriv = _),
    (t.createCipher = p);
