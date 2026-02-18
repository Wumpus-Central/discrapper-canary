l.d(t, { W: () => s });
var a = l(64700),
    n = l(311907),
    r = l(786953),
    i = l(505274);
function s() {
    let {
        balance: e,
        isFetching: t,
        error: l,
    } = (0, n.cf)([i.A], () => ({
        balance: i.A.balance,
        isFetching: i.A.isFetchingBalance,
        error: i.A.fetchBalanceError,
    }));
    return (
        (0, a.useEffect)(() => {
            null !== e || null !== l || t || (0, r.Bf)();
        }, [e, l, t]),
        { balance: e, isFetching: t, error: l }
    );
}
