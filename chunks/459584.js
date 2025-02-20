var r = n(458340),
    i = n(957578).Buffer,
    o = n(764900),
    a = n(689118),
    s = n(285844),
    l = n(257693),
    c = n(875115);
function u(e, t) {
    var n = 0;
    e.length !== t.length && n++;
    for (var r = Math.min(e.length, t.length), i = 0; i < r; ++i) n += e[i] ^ t[i];
    return n;
}
function d(e, t, n) {
    if (12 === t.length) return (e._finID = i.concat([t, i.from([0, 0, 0, 1])])), i.concat([t, i.from([0, 0, 0, 2])]);
    var r = new s(n),
        o = t.length,
        a = o % 16;
    r.update(t), a && ((a = 16 - a), r.update(i.alloc(a, 0))), r.update(i.alloc(8, 0));
    var l = 8 * o,
        u = i.alloc(8);
    u.writeUIntBE(l, 0, 8), r.update(u), (e._finID = r.state);
    var d = i.from(e._finID);
    return c(d), d;
}
function f(e, t, n, a) {
    o.call(this);
    var l = i.alloc(4, 0);
    this._cipher = new r.AES(t);
    var c = this._cipher.encryptBlock(l);
    (this._ghash = new s(c)), (n = d(this, n, c)), (this._prev = i.from(n)), (this._cache = i.allocUnsafe(0)), (this._secCache = i.allocUnsafe(0)), (this._decrypt = a), (this._alen = 0), (this._len = 0), (this._mode = e), (this._authTag = null), (this._called = !1);
}
a(f, o),
    (f.prototype._update = function (e) {
        if (!this._called && this._alen) {
            var t = 16 - (this._alen % 16);
            t < 16 && ((t = i.alloc(t, 0)), this._ghash.update(t));
        }
        this._called = !0;
        var n = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), (this._len += e.length), n;
    }),
    (f.prototype._final = function () {
        if (this._decrypt && !this._authTag) throw Error('Unsupported state or unable to authenticate data');
        var e = l(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && u(e, this._authTag)) throw Error('Unsupported state or unable to authenticate data');
        (this._authTag = e), this._cipher.scrub();
    }),
    (f.prototype.getAuthTag = function () {
        if (this._decrypt || !i.isBuffer(this._authTag)) throw Error('Attempting to get auth tag in unsupported state');
        return this._authTag;
    }),
    (f.prototype.setAuthTag = function (e) {
        if (!this._decrypt) throw Error('Attempting to set auth tag in unsupported state');
        this._authTag = e;
    }),
    (f.prototype.setAAD = function (e) {
        if (this._called) throw Error('Attempting to set AAD in unsupported state');
        this._ghash.update(e), (this._alen += e.length);
    }),
    (e.exports = f);
