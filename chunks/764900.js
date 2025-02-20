var r = n(957578).Buffer,
    i = n(63523).Transform,
    o = n(2682).StringDecoder;
function a(e) {
    i.call(this), (this.hashMode = 'string' == typeof e), this.hashMode ? (this[e] = this._finalOrDigest) : (this.final = this._finalOrDigest), this._final && ((this.__final = this._final), (this._final = null)), (this._decoder = null), (this._encoding = null);
}
n(689118)(a, i),
    (a.prototype.update = function (e, t, n) {
        'string' == typeof e && (e = r.from(e, t));
        var i = this._update(e);
        return this.hashMode ? this : (n && (i = this._toString(i, n)), i);
    }),
    (a.prototype.setAutoPadding = function () {}),
    (a.prototype.getAuthTag = function () {
        throw Error('trying to get auth tag in unsupported state');
    }),
    (a.prototype.setAuthTag = function () {
        throw Error('trying to set auth tag in unsupported state');
    }),
    (a.prototype.setAAD = function () {
        throw Error('trying to set aad in unsupported state');
    }),
    (a.prototype._transform = function (e, t, n) {
        var r;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
        } catch (e) {
            r = e;
        } finally {
            n(r);
        }
    }),
    (a.prototype._flush = function (e) {
        var t;
        try {
            this.push(this.__final());
        } catch (e) {
            t = e;
        }
        e(t);
    }),
    (a.prototype._finalOrDigest = function (e) {
        var t = this.__final() || r.alloc(0);
        return e && (t = this._toString(t, e, !0)), t;
    }),
    (a.prototype._toString = function (e, t, n) {
        if ((this._decoder || ((this._decoder = new o(t)), (this._encoding = t)), this._encoding !== t)) throw Error("can't switch encodings");
        var r = this._decoder.write(e);
        return n && (r += this._decoder.end()), r;
    }),
    (e.exports = a);
