var r = n(737372),
    i = n(459584),
    o = n(957578).Buffer,
    a = n(222822),
    s = n(764900),
    l = n(458340),
    c = n(245413);
function u(e, t, n) {
    s.call(this), (this._cache = new f()), (this._cipher = new l.AES(t)), (this._prev = o.from(n)), (this._mode = e), (this._autopadding = !0);
}
n(689118)(u, s),
    (u.prototype._update = function (e) {
        this._cache.add(e);
        for (var t, n, r = []; (t = this._cache.get()); ) (n = this._mode.encrypt(this, t)), r.push(n);
        return o.concat(r);
    });
var d = o.alloc(16, 16);
function f() {
    this.cache = o.allocUnsafe(0);
}
function p(e, t, n) {
    var s = r[e.toLowerCase()];
    if (!s) throw TypeError('invalid suite type');
    if (('string' == typeof t && (t = o.from(t)), t.length !== s.key / 8)) throw TypeError('invalid key length ' + t.length);
    if (('string' == typeof n && (n = o.from(n)), 'GCM' !== s.mode && n.length !== s.iv)) throw TypeError('invalid iv length ' + n.length);
    return 'stream' === s.type ? new a(s.module, t, n) : 'auth' === s.type ? new i(s.module, t, n) : new u(s.module, t, n);
}
function _(e, t) {
    var n = r[e.toLowerCase()];
    if (!n) throw TypeError('invalid suite type');
    var i = c(t, !1, n.key, n.iv);
    return p(e, i.key, i.iv);
}
(u.prototype._final = function () {
    var e = this._cache.flush();
    if (this._autopadding) return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
    if (!e.equals(d)) throw (this._cipher.scrub(), Error('data not multiple of block length'));
}),
    (u.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
    }),
    (f.prototype.add = function (e) {
        this.cache = o.concat([this.cache, e]);
    }),
    (f.prototype.get = function () {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), e;
        }
        return null;
    }),
    (f.prototype.flush = function () {
        for (var e = 16 - this.cache.length, t = o.allocUnsafe(e), n = -1; ++n < e; ) t.writeUInt8(e, n);
        return o.concat([this.cache, t]);
    }),
    (t.createCipheriv = p),
    (t.createCipher = _);
