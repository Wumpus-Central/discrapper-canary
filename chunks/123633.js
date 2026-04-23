"use strict";
n.d(t, { A: () => a });
var i = n(17928),
    r = n(228366);
class s extends i.Ay.Store {
    static displayName = "OrderStore";
    _isCreatingOrder = !1;
    _isUpdatingOrder = !1;
    _order = null;
    constructor() {
        super(r.h, {
            ORDER_CREATE_START: (e) => this.handleOrderCreateStart(e),
            ORDER_CREATE_SUCCESS: (e) => this.handleOrderCreateSuccess(e),
            ORDER_CREATE_FAIL: (e) => this.handleOrderCreateFail(e),
            ORDER_UPDATE_START: (e) => this.handleOrderUpdateStart(e),
            ORDER_UPDATE_SUCCESS: (e) => this.handleOrderUpdateSuccess(e),
            ORDER_UPDATE_FAIL: (e) => this.handleOrderUpdateFail(e),
            ORDER_DISCARD_SUCCESS: (e) => this.handleOrderDiscardSuccess(e),
            PAYMENT_MODAL_OPEN: (e) => this.handlePaymentModalOpen(e),
        });
    }
    get isCreatingOrder() {
        return this._isCreatingOrder;
    }
    get currentOrderId() {
        return this._order?.id ?? null;
    }
    get currentOrder() {
        return this._order;
    }
    get currentPaymentGateway() {
        return this._order?.billing_facet?.payment_gateway ?? null;
    }
    handleOrderCreateStart(e) {
        let {} = e;
        this._isCreatingOrder = !0;
    }
    handleOrderCreateSuccess(e) {
        let { orderId: t, order: n } = e;
        (this._isCreatingOrder = !1), (this._order = n ?? null);
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
        let { orderId: t } = e;
        if (this._order?.id !== t) return !1;
        this._order = null;
    }
    handlePaymentModalOpen(e) {
        let {} = e;
        this._order = null;
    }
}
let a = new s();
