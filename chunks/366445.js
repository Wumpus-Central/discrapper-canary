let i = r(318655),
    a = r(728734),
    o = r(689118);
function s(e, n) {
    (this.name = e), (this.body = n), (this.decoders = {}), (this.encoders = {});
}
(n.define = function (e, n) {
    return new s(e, n);
}),
    (s.prototype._createNamed = function (e) {
        let n = this.name;
        function r(e) {
            this._initNamed(e, n);
        }
        return (
            o(r, e),
            (r.prototype._initNamed = function (n, r) {
                e.call(this, n, r);
            }),
            new r(this)
        );
    }),
    (s.prototype._getDecoder = function (e) {
        return (e = e || 'der'), !this.decoders.hasOwnProperty(e) && (this.decoders[e] = this._createNamed(a[e])), this.decoders[e];
    }),
    (s.prototype.decode = function (e, n, r) {
        return this._getDecoder(n).decode(e, r);
    }),
    (s.prototype._getEncoder = function (e) {
        return (e = e || 'der'), !this.encoders.hasOwnProperty(e) && (this.encoders[e] = this._createNamed(i[e])), this.encoders[e];
    }),
    (s.prototype.encode = function (e, n, r) {
        return this._getEncoder(n).encode(e, r);
    });
