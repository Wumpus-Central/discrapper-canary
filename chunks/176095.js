n.d(t, { A: () => c });
var r = n(17928),
    a = n(228366);
let s = {},
    l = new Set();
class i extends r.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return s[e] ?? null;
    }
    getIsFetching(e) {
        return l.has(e);
    }
}
let c = new i(a.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (l = new Set(l)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (l = new Set(l)).delete(e.paymentSourceId),
            (s = { ...s, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (l = new Set(l)).delete(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        s = { ...s, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        (s = {}), (l = new Set());
    },
});
