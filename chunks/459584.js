var i = n(458340),
    r = n(957578).Buffer,
    a = n(764900),
    s = n(689118),
    o = n(285844),
    l = n(257693),
    u = n(875115);
function c(e, t) {
    var n = 0;
    e.length !== t.length && n++;
    for (var i = Math.min(e.length, t.length), r = 0; r < i; ++r) n += e[r] ^ t[r];
    return n;
}
function d(e, t, n) {
    if (12 === t.length) return (e._finID = r.concat([t, r.from([0, 0, 0, 1])])), r.concat([t, r.from([0, 0, 0, 2])]);
    var i = new o(n),
        a = t.length,
        s = a % 16;
    i.update(t), s && ((s = 16 - s), i.update(r.alloc(s, 0))), i.update(r.alloc(8, 0));
    var l = 8 * a,
        c = r.alloc(8);
    c.writeUIntBE(l, 0, 8), i.update(c), (e._finID = i.state);
    var d = r.from(e._finID);
    return u(d), d;
}
function f(e, t, n, s) {
    a.call(this);
    var l = r.alloc(4, 0);
    this._cipher = new i.AES(t);
    var u = this._cipher.encryptBlock(l);
    (this._ghash = new o(u)), (n = d(this, n, u)), (this._prev = r.from(n)), (this._cache = r.allocUnsafe(0)), (this._secCache = r.allocUnsafe(0)), (this._decrypt = s), (this._alen = 0), (this._len = 0), (this._mode = e), (this._authTag = null), (this._called = !1);
}
s(f, a),
    (f.prototype._update = function (e) {
        if (!this._called && this._alen) {
            var t = 16 - (this._alen % 16);
            t < 16 && ((t = r.alloc(t, 0)), this._ghash.update(t));
        }
        this._called = !0;
        var n = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), (this._len += e.length), n;
    }),
    (f.prototype._final = function () {
        if (this._decrypt && !this._authTag) throw Error('Unsupported state or unable to authenticate data');
        var e = l(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && c(e, this._authTag)) throw Error('Unsupported state or unable to authenticate data');
        (this._authTag = e), this._cipher.scrub();
    }),
    (f.prototype.getAuthTag = function () {
        if (this._decrypt || !r.isBuffer(this._authTag)) throw Error('Attempting to get auth tag in unsupported state');
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
