n.d(t, { A: () => l });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
class o extends (r = i.Ay.Store) {
    get isCreatingOrder() {
        return this._isCreatingOrder;
    }
    get currentOrderId() {
        var e, t;
        return null != (e = null == (t = this._order) ? void 0 : t.id) ? e : null;
    }
    get currentOrder() {
        return this._order;
    }
    get currentPaymentGateway() {
        var e, t, n;
        return null != (e = null == (n = this._order) || null == (t = n.billing_facet) ? void 0 : t.payment_gateway)
            ? e
            : null;
    }
    handleOrderCreateStart(e) {
        let {} = e;
        this._isCreatingOrder = !0;
    }
    handleOrderCreateSuccess(e) {
        let { orderId: t, order: n } = e;
        (this._isCreatingOrder = !1), (this._order = null != n ? n : null);
    }
    handleOrderCreateFail(e) {
        let {} = e;
        this._isCreatingOrder = !1;
    }
    handleOrderUpdateStart(e) {
        let {} = e;
        this._isUpdatingOrder = !0;
    }
    handleOrderUpdateSuccess(e) {
        let {} = e;
        this._isUpdatingOrder = !1;
    }
    handleOrderUpdateFail(e) {
        let {} = e;
        this._isUpdatingOrder = !1;
    }
    handleOrderDiscardSuccess(e) {
        var t;
        let { orderId: n } = e;
        if ((null == (t = this._order) ? void 0 : t.id) !== n) return !1;
        this._order = null;
    }
    handlePaymentModalOpen(e) {
        let {} = e;
        this._order = null;
    }
    constructor() {
        super(a.h, {
            ORDER_CREATE_START: (e) => this.handleOrderCreateStart(e),
            ORDER_CREATE_SUCCESS: (e) => this.handleOrderCreateSuccess(e),
            ORDER_CREATE_FAIL: (e) => this.handleOrderCreateFail(e),
            ORDER_UPDATE_START: (e) => this.handleOrderUpdateStart(e),
            ORDER_UPDATE_SUCCESS: (e) => this.handleOrderUpdateSuccess(e),
            ORDER_UPDATE_FAIL: (e) => this.handleOrderUpdateFail(e),
            ORDER_DISCARD_SUCCESS: (e) => this.handleOrderDiscardSuccess(e),
            PAYMENT_MODAL_OPEN: (e) => this.handlePaymentModalOpen(e),
        }),
            s(this, "_isCreatingOrder", !1),
            s(this, "_isUpdatingOrder", !1),
            s(this, "_order", null);
    }
}
s(o, "displayName", "OrderStore");
let l = new o();
