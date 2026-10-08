s.d(t, { A: () => u });
var n = s(17928),
    r = s(73153);
let a = {},
    i = new Set(),
    l = new Set();
function o(e) {
    ((i = new Set(i)).delete(e), (l = new Set(l)).add(e));
}
class c extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return a[e] ?? null;
    }
    getIsFetching(e) {
        return i.has(e);
    }
    hasSettled(e) {
        return l.has(e);
    }
}
let u = new c(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (i = new Set(i)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (o(e.paymentSourceId), (a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } }));
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        o(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        a = { ...a, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        ((a = {}), (i = new Set()), (l = new Set()));
    },
});
