r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(778787);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o extends i.q {
    static fromServer(e) {
        let { purchased_at: n, purchase_type: r, expires_at: i, ...a } = e;
        return new o({
            ...super.fromServer(a),
            purchaseType: r,
            purchasedAt: null != n ? new Date(n) : n,
            expiresAt: null != i ? new Date(i) : null
        });
    }
    constructor(e) {
        super(e), a(this, 'purchaseType', void 0), a(this, 'purchasedAt', void 0), a(this, 'expiresAt', void 0), (this.purchasedAt = e.purchasedAt), (this.purchaseType = e.purchaseType), (this.expiresAt = e.expiresAt);
    }
}
