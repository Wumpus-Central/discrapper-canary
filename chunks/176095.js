"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153);
let s = {},
    a = new Set();
function o(e) {
    (a = new Set(a)).add(e.paymentSourceId);
}
function l(e) {
    (a = new Set(a)).delete(e.paymentSourceId),
        (s = { ...s, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
}
function u(e) {
    (a = new Set(a)).delete(e.paymentSourceId);
}
function c() {
    (s = {}), (a = new Set());
}
class d extends r.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return s[e] ?? null;
    }
    getIsFetching(e) {
        return a.has(e);
    }
}
let _ = new d(i.h, {
    BILLING_WALLET_BALANCE_FETCH_START: o,
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: l,
    BILLING_WALLET_BALANCE_FETCH_FAIL: u,
    LOGOUT: c,
});
