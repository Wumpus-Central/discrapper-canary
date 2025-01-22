var i;
function a(e) {
    this.rand = e;
}
if (
    ((e.exports = function (e) {
        return !i && (i = new a(null)), i.generate(e);
    }),
    (e.exports.Rand = a),
    (a.prototype.generate = function (e) {
        return this._rand(e);
    }),
    (a.prototype._rand = function (e) {
        if (this.rand.getBytes) return this.rand.getBytes(e);
        for (var n = new Uint8Array(e), r = 0; r < n.length; r++) n[r] = this.rand.getByte();
        return n;
    }),
    'object' == typeof self)
)
    self.crypto && self.crypto.getRandomValues
        ? (a.prototype._rand = function (e) {
              var n = new Uint8Array(e);
              return self.crypto.getRandomValues(n), n;
          })
        : self.msCrypto && self.msCrypto.getRandomValues
          ? (a.prototype._rand = function (e) {
                var n = new Uint8Array(e);
                return self.msCrypto.getRandomValues(n), n;
            })
          : 'object' == typeof window &&
            (a.prototype._rand = function () {
                throw Error('Not implemented yet');
            });
else
    try {
        var o = r(865605);
        if ('function' != typeof o.randomBytes) throw Error('Not supported');
        a.prototype._rand = function (e) {
            return o.randomBytes(e);
        };
    } catch (e) {}
