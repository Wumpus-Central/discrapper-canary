"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {},
    a = new Set();
class o extends i.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return s[e] ?? null;
    }
    getIsFetching(e) {
        return a.has(e);
    }
}
let l = new o(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (a = new Set(a)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (a = new Set(a)).delete(e.paymentSourceId),
            (s = { ...s, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (a = new Set(a)).delete(e.paymentSourceId);
    },
    LOGOUT: function () {
        (s = {}), (a = new Set());
    },
});
