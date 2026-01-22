n.d(t, { W: () => o });
var r = n(64700),
    i = n(311907),
    a = n(786953),
    s = n(505274);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: n,
    } = (0, i.cf)([s.A], () => ({
        balance: s.A.balance,
        isFetching: s.A.isFetchingBalance,
        error: s.A.fetchBalanceError,
    }));
    return (
        (0, r.useEffect)(() => {
            null !== e || null !== n || t || (0, a.Bf)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n,
        }
    );
}
