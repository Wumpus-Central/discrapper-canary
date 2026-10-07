t.d(s, { A: () => o });
var n = t(17928),
    r = t(73153);
let i = {},
    a = new Set(),
    l = new Set();
function c(e) {
    ((a = new Set(a)).delete(e), (l = new Set(l)).add(e));
}
class u extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return i[e] ?? null;
    }
    getIsFetching(e) {
        return a.has(e);
    }
    hasSettled(e) {
        return l.has(e);
    }
}
let o = new u(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (a = new Set(a)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (c(e.paymentSourceId), (i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } }));
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        c(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
        i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
        ((i = {}), (a = new Set()), (l = new Set()));
    },
});
