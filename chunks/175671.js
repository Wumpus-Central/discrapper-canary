var i = r(814033),
    a = r(685053).assert;
function o(e, n) {
    (this.ec = e), (this.priv = null), (this.pub = null), n.priv && this._importPrivate(n.priv, n.privEnc), n.pub && this._importPublic(n.pub, n.pubEnc);
}
(e.exports = o),
    (o.fromPublic = function (e, n, r) {
        return n instanceof o
            ? n
            : new o(e, {
                  pub: n,
                  pubEnc: r
              });
    }),
    (o.fromPrivate = function (e, n, r) {
        return n instanceof o
            ? n
            : new o(e, {
                  priv: n,
                  privEnc: r
              });
    }),
    (o.prototype.validate = function () {
        var e = this.getPublic();
        return e.isInfinity()
            ? {
                  result: !1,
                  reason: 'Invalid public key'
              }
            : e.validate()
              ? e.mul(this.ec.curve.n).isInfinity()
                  ? {
                        result: !0,
                        reason: null
                    }
                  : {
                        result: !1,
                        reason: 'Public key * N != O'
                    }
              : {
                    result: !1,
                    reason: 'Public key is not a point'
                };
    }),
    (o.prototype.getPublic = function (e, n) {
        return ('string' == typeof e && ((n = e), (e = null)), !this.pub && (this.pub = this.ec.g.mul(this.priv)), n) ? this.pub.encode(n, e) : this.pub;
    }),
    (o.prototype.getPrivate = function (e) {
        return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
    }),
    (o.prototype._importPrivate = function (e, n) {
        (this.priv = new i(e, n || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
    }),
    (o.prototype._importPublic = function (e, n) {
        if (e.x || e.y) {
            'mont' === this.ec.curve.type ? a(e.x, 'Need x coordinate') : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) && a(e.x && e.y, 'Need both x and y coordinate'), (this.pub = this.ec.curve.point(e.x, e.y));
            return;
        }
        this.pub = this.ec.curve.decodePoint(e, n);
    }),
    (o.prototype.derive = function (e) {
        return !e.validate() && a(e.validate(), 'public point not validated'), e.mul(this.priv).getX();
    }),
    (o.prototype.sign = function (e, n, r) {
        return this.ec.sign(e, this, n, r);
    }),
    (o.prototype.verify = function (e, n) {
        return this.ec.verify(e, n, this);
    }),
    (o.prototype.inspect = function () {
        return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
    });
