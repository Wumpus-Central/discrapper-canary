var i = n(582128),
    r = n(855986),
    a = n(786953),
    s = n(505274);
n.d(
    t,
    {},
    {
        W: function (e) {
            let {
                balance: t,
                isFetching: n,
                error: l,
            } = (0, r.cf)([s.A], () => ({
                balance: s.A.balance,
                isFetching: s.A.isFetchingBalance,
                error: s.A.fetchBalanceError,
            }));
            return (
                (0, i.useEffect)(() => {
                    e?.disableFetch || null !== t || null !== l || s.A.isFetchingBalance || (0, a.Bf)();
                }, [t, l, e?.disableFetch]),
                { balance: t, isFetching: n, error: l }
            );
        },
    },
);
