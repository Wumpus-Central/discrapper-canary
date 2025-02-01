var i = n(957578).Buffer,
    r = n(63523).Transform,
    a = n(2682).StringDecoder;
function s(e) {
    r.call(this), (this.hashMode = 'string' == typeof e), this.hashMode ? (this[e] = this._finalOrDigest) : (this.final = this._finalOrDigest), this._final && ((this.__final = this._final), (this._final = null)), (this._decoder = null), (this._encoding = null);
}
n(689118)(s, r),
    (s.prototype.update = function (e, t, n) {
        'string' == typeof e && (e = i.from(e, t));
        var r = this._update(e);
        return this.hashMode ? this : (n && (r = this._toString(r, n)), r);
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
    (s.prototype._transform = function (e, t, n) {
        var i;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
        } catch (e) {
            i = e;
        } finally {
            n(i);
        }
    }),
    (s.prototype._flush = function (e) {
        var t;
        try {
            this.push(this.__final());
        } catch (e) {
            t = e;
        }
        e(t);
    }),
    (s.prototype._finalOrDigest = function (e) {
        var t = this.__final() || i.alloc(0);
        return e && (t = this._toString(t, e, !0)), t;
    }),
    (s.prototype._toString = function (e, t, n) {
        if ((this._decoder || ((this._decoder = new a(t)), (this._encoding = t)), this._encoding !== t)) throw Error("can't switch encodings");
        var i = this._decoder.write(e);
        return n && (i += this._decoder.end()), i;
    }),
    (e.exports = s);
