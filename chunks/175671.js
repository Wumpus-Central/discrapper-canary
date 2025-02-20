var r = n(814033),
    i = n(685053).assert;
function o(e, t) {
    (this.ec = e), (this.priv = null), (this.pub = null), t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
(e.exports = o),
    (o.fromPublic = function (e, t, n) {
        return t instanceof o
            ? t
            : new o(e, {
                  pub: t,
                  pubEnc: n
              });
    }),
    (o.fromPrivate = function (e, t, n) {
        return t instanceof o
            ? t
            : new o(e, {
                  priv: t,
                  privEnc: n
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
    (o.prototype.getPublic = function (e, t) {
        return ('string' == typeof e && ((t = e), (e = null)), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub;
    }),
    (o.prototype.getPrivate = function (e) {
        return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
    }),
    (o.prototype._importPrivate = function (e, t) {
        (this.priv = new r(e, t || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
    }),
    (o.prototype._importPublic = function (e, t) {
        if (e.x || e.y) {
            'mont' === this.ec.curve.type ? i(e.x, 'Need x coordinate') : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) && i(e.x && e.y, 'Need both x and y coordinate'), (this.pub = this.ec.curve.point(e.x, e.y));
            return;
        }
        this.pub = this.ec.curve.decodePoint(e, t);
    }),
    (o.prototype.derive = function (e) {
        return e.validate() || i(e.validate(), 'public point not validated'), e.mul(this.priv).getX();
    }),
    (o.prototype.sign = function (e, t, n) {
        return this.ec.sign(e, this, t, n);
    }),
    (o.prototype.verify = function (e, t) {
        return this.ec.verify(e, t, this);
    }),
    (o.prototype.inspect = function () {
        return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
    });
