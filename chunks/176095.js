s.d(t, { A: () => u });
var n = s(17928),
    a = s(73153);
let r = {},
    i = new Set(),
    l = new Set();
function o(e) {
    ((i = new Set(i)).delete(e), (l = new Set(l)).add(e));
}
class c extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return r[e] ?? null;
    }
    getIsFetching(e) {
        return i.has(e);
    }
    hasSettled(e) {
        return l.has(e);
    }
}
let u = new c(a.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (i = new Set(i)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (o(e.paymentSourceId), (r = { ...r, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } }));
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        o(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        r = { ...r, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        ((r = {}), (i = new Set()), (l = new Set()));
    },
});
