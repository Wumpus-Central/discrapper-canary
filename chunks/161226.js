n.d(t, { Z: () => a });
var i = n(778787);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a extends i.q {
    static fromServer(e) {
        let { purchased_at: t, purchase_type: n, expires_at: i, ...r } = e;
        return new a({
            ...super.fromServer(r),
            purchaseType: n,
            purchasedAt: null != t ? new Date(t) : t,
            expiresAt: null != i ? new Date(i) : null
        });
    }
    constructor(e) {
        super(e), r(this, 'purchaseType', void 0), r(this, 'purchasedAt', void 0), r(this, 'expiresAt', void 0), (this.purchasedAt = e.purchasedAt), (this.purchaseType = e.purchaseType), (this.expiresAt = e.expiresAt);
    }
}
