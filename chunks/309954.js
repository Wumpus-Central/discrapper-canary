n.d(t, { W: () => s });
var r = n(64700),
    i = n(17928),
    a = n(786953),
    l = n(505274);
function s(e) {
    let {
        balance: t,
        isFetching: n,
        error: s,
    } = (0, i.cf)([l.A], () => ({
        balance: l.A.balance,
        isFetching: l.A.isFetchingBalance,
        error: l.A.fetchBalanceError,
    }));
    return (
        (0, r.useEffect)(() => {
            e?.disableFetch || null !== t || null !== s || l.A.isFetchingBalance || (0, a.Bf)();
        }, [t, s, e?.disableFetch]),
        { balance: t, isFetching: n, error: s }
    );
}
