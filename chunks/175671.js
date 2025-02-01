var i = n(814033),
    r = n(685053).assert;
function a(e, t) {
    (this.ec = e), (this.priv = null), (this.pub = null), t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
(e.exports = a),
    (a.fromPublic = function (e, t, n) {
        return t instanceof a
            ? t
            : new a(e, {
                  pub: t,
                  pubEnc: n
              });
    }),
    (a.fromPrivate = function (e, t, n) {
        return t instanceof a
            ? t
            : new a(e, {
                  priv: t,
                  privEnc: n
              });
    }),
    (a.prototype.validate = function () {
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
    (a.prototype.getPublic = function (e, t) {
        return ('string' == typeof e && ((t = e), (e = null)), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub;
    }),
    (a.prototype.getPrivate = function (e) {
        return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
    }),
    (a.prototype._importPrivate = function (e, t) {
        (this.priv = new i(e, t || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
    }),
    (a.prototype._importPublic = function (e, t) {
        if (e.x || e.y) {
            'mont' === this.ec.curve.type ? r(e.x, 'Need x coordinate') : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) && r(e.x && e.y, 'Need both x and y coordinate'), (this.pub = this.ec.curve.point(e.x, e.y));
            return;
        }
        this.pub = this.ec.curve.decodePoint(e, t);
    }),
    (a.prototype.derive = function (e) {
        return e.validate() || r(e.validate(), 'public point not validated'), e.mul(this.priv).getX();
    }),
    (a.prototype.sign = function (e, t, n) {
        return this.ec.sign(e, this, t, n);
    }),
    (a.prototype.verify = function (e, t) {
        return this.ec.verify(e, t, this);
    }),
    (a.prototype.inspect = function () {
        return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
    });
