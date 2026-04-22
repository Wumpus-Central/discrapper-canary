n.d(t, { A: () => o });
var a = n(311907),
    r = n(73153);
let l = {},
    i = new Set();
class s extends a.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
        return l[e] ?? null;
    }
    getIsFetching(e) {
        return i.has(e);
    }
}
let o = new s(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
        (i = new Set(i)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
        (i = new Set(i)).delete(e.paymentSourceId),
            (l = { ...l, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } });
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
        (i = new Set(i)).delete(e.paymentSourceId);
    },
    LOGOUT: function () {
        (l = {}), (i = new Set());
    },
});
