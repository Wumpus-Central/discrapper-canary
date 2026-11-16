var n = r(582128),
    a = r(855986),
    l = r(786953),
    i = r(505274);
r.d(
    t,
    {},
    {
        W: function (e) {
            let {
                balance: t,
                isFetching: r,
                error: d,
            } = (0, a.cf)([i.A], () => ({
                balance: i.A.balance,
                isFetching: i.A.isFetchingBalance,
                error: i.A.fetchBalanceError,
            }));
            return (
                (0, n.useEffect)(() => {
                    e?.disableFetch || null !== t || null !== d || i.A.isFetchingBalance || (0, l.Bf)();
                }, [t, d, e?.disableFetch]),
                { balance: t, isFetching: r, error: d }
            );
        },
    },
);
