var i = r(957578).Buffer,
    a = r(63523).Transform,
    o = r(2682).StringDecoder;
function s(e) {
    a.call(this), (this.hashMode = 'string' == typeof e), this.hashMode ? (this[e] = this._finalOrDigest) : (this.final = this._finalOrDigest), this._final && ((this.__final = this._final), (this._final = null)), (this._decoder = null), (this._encoding = null);
}
r(689118)(s, a),
    (s.prototype.update = function (e, n, r) {
        'string' == typeof e && (e = i.from(e, n));
        var a = this._update(e);
        return this.hashMode ? this : (r && (a = this._toString(a, r)), a);
    }),
    (s.prototype.setAutoPadding = function () {}),
    (s.prototype.getAuthTag = function () {
        throw Error('trying to get auth tag in unsupported state');
    }),
    (s.prototype.setAuthTag = function () {
        throw Error('trying to set auth tag in unsupported state');
    }),
    (s.prototype.setAAD = function () {
        throw Error('trying to set aad in unsupported state');
    }),
    (s.prototype._transform = function (e, n, r) {
        var i;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
        } catch (e) {
            i = e;
        } finally {
            r(i);
        }
    }),
    (s.prototype._flush = function (e) {
        var n;
        try {
            this.push(this.__final());
        } catch (e) {
            n = e;
        }
        e(n);
    }),
    (s.prototype._finalOrDigest = function (e) {
        var n = this.__final() || i.alloc(0);
        return e && (n = this._toString(n, e, !0)), n;
    }),
    (s.prototype._toString = function (e, n, r) {
        if ((!this._decoder && ((this._decoder = new o(n)), (this._encoding = n)), this._encoding !== n)) throw Error("can't switch encodings");
        var i = this._decoder.write(e);
        return r && (i += this._decoder.end()), i;
    }),
    (e.exports = s);
