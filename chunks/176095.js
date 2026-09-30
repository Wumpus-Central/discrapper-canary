s.d(t, { A: () => c });
var n = s(17928),
    r = s(228366);
let a = {},
    l = new Set();
class i extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return a[e] ?? null;
    }
    getIsFetching(e) {
        return l.has(e);
    }
}
let c = new i(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (l = new Set(l)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        ((l = new Set(l)).delete(e.paymentSourceId),
            (a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } }));
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (l = new Set(l)).delete(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        ((a = {}), (l = new Set()));
    },
});
