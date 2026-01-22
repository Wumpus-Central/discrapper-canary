function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { T: () => i });
class i {
    static fromServer(e) {
        return new i(e);
    }
    constructor(e) {
        r(this, "discountId", void 0),
            r(this, "amount", void 0),
            r(this, "expiresAt", void 0),
            (this.discountId = e.discount_id),
            (this.amount = e.amount),
            (this.expiresAt = null != e.expires_at ? new Date(e.expires_at) : void 0);
    }
}
