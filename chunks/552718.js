var i = n(957578).Buffer,
    r = n(108381),
    a = n(477260),
    s = n(689118),
    o = n(510838),
    l = n(517145),
    u = n(873213);
function c(e) {
    a.Writable.call(this);
    var t = u[e];
    if (!t) throw Error('Unknown message digest');
    (this._hashType = t.hash), (this._hash = r(t.hash)), (this._tag = t.id), (this._signType = t.sign);
}
function d(e) {
    a.Writable.call(this);
    var t = u[e];
    if (!t) throw Error('Unknown message digest');
    (this._hash = r(t.hash)), (this._tag = t.id), (this._signType = t.sign);
}
function f(e) {
    return new c(e);
}
function _(e) {
    return new d(e);
}
Object.keys(u).forEach(function (e) {
    (u[e].id = i.from(u[e].id, 'hex')), (u[e.toLowerCase()] = u[e]);
}),
    s(c, a.Writable),
    (c.prototype._write = function (e, t, n) {
        this._hash.update(e), n();
    }),
    (c.prototype.update = function (e, t) {
        return 'string' == typeof e && (e = i.from(e, t)), this._hash.update(e), this;
    }),
    (c.prototype.sign = function (e, t) {
        this.end();
        var n = o(this._hash.digest(), e, this._hashType, this._signType, this._tag);
        return t ? n.toString(t) : n;
    }),
    s(d, a.Writable),
    (d.prototype._write = function (e, t, n) {
        this._hash.update(e), n();
    }),
    (d.prototype.update = function (e, t) {
        return 'string' == typeof e && (e = i.from(e, t)), this._hash.update(e), this;
    }),
    (d.prototype.verify = function (e, t, n) {
        return 'string' == typeof t && (t = i.from(t, n)), this.end(), l(t, this._hash.digest(), e, this._signType, this._tag);
    }),
    (e.exports = {
        Sign: f,
        Verify: _,
        createSign: f,
        createVerify: _
    });
