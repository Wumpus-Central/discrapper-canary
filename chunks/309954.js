l.d(t, { W: () => o });
var a = l(64700),
    n = l(311907),
    r = l(786953),
    i = l(505274);
function o(e) {
    let {
        balance: t,
        isFetching: l,
        error: o,
    } = (0, n.cf)([i.A], () => ({
        balance: i.A.balance,
        isFetching: i.A.isFetchingBalance,
        error: i.A.fetchBalanceError,
    }));
    return (
        (0, a.useEffect)(() => {
            e?.disableFetch || null !== t || null !== o || i.A.isFetchingBalance || (0, r.Bf)();
        }, [t, o, e?.disableFetch]),
        { balance: t, isFetching: l, error: o }
    );
}
