var i;
function r(e) {
    this.rand = e;
}
if (
    ((e.exports = function (e) {
        return i || (i = new r(null)), i.generate(e);
    }),
    (e.exports.Rand = r),
    (r.prototype.generate = function (e) {
        return this._rand(e);
    }),
    (r.prototype._rand = function (e) {
        if (this.rand.getBytes) return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = this.rand.getByte();
        return t;
    }),
    'object' == typeof self)
)
    self.crypto && self.crypto.getRandomValues
        ? (r.prototype._rand = function (e) {
              var t = new Uint8Array(e);
              return self.crypto.getRandomValues(t), t;
          })
        : self.msCrypto && self.msCrypto.getRandomValues
          ? (r.prototype._rand = function (e) {
                var t = new Uint8Array(e);
                return self.msCrypto.getRandomValues(t), t;
            })
          : 'object' == typeof window &&
            (r.prototype._rand = function () {
                throw Error('Not implemented yet');
            });
else
    try {
        var a = n(865605);
        if ('function' != typeof a.randomBytes) throw Error('Not supported');
        r.prototype._rand = function (e) {
            return a.randomBytes(e);
        };
    } catch (e) {}
