n.d(t, { A: () => u });
var s = n(17928),
    r = n(228366);
let i = {},
    a = new Set();
class l extends s.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return i[e] ?? null;
    }
    getIsFetching(e) {
        return a.has(e);
    }
}
let u = new l(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (a = new Set(a)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (a = new Set(a)).delete(e.paymentSourceId),
            (i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (a = new Set(a)).delete(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        (i = {}), (a = new Set());
    },
});
