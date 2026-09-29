r.d(t, { W: () => s });
var n = r(582128),
    a = r(17928),
    i = r(786953),
    l = r(505274);
function s(e) {
    let {
        balance: t,
        isFetching: r,
        error: s,
    } = (0, a.cf)([l.A], () => ({
        balance: l.A.balance,
        isFetching: l.A.isFetchingBalance,
        error: l.A.fetchBalanceError,
    }));
    return (
        (0, n.useEffect)(() => {
            e?.disableFetch || null !== t || null !== s || l.A.isFetchingBalance || (0, i.Bf)();
        }, [t, s, e?.disableFetch]),
        { balance: t, isFetching: r, error: s }
    );
}
