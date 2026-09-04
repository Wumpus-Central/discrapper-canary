t.d(s, { A: () => c });
var n = t(17928),
    r = t(228366);
let a = {},
    i = new Set();
class l extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return a[e] ?? null;
    }
    getIsFetching(e) {
        return i.has(e);
    }
}
let c = new l(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (i = new Set(i)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (i = new Set(i)).delete(e.paymentSourceId),
            (a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (i = new Set(i)).delete(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        (a = {}), (i = new Set());
    },
});
