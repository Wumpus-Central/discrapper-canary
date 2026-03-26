s.d(t, { A: () => i });
var a = s(64700),
    r = s(677185);
let i = (e) => {
    let { subscriptionId: t, searchQuery: s } = e,
        [i, n] = a.useState([]),
        [l, c] = a.useState(0),
        [_, d] = a.useState(!1),
        [u, E] = a.useState(!1),
        m = async (e) => {
            if (!_ && null != e)
                try {
                    d(!0), E(!1);
                    let a = await (0, r.EQ)(t, e, s);
                    n((t) => (0 === e ? a.users : [...t, ...a.users])), c(a.nextIndex);
                } catch (e) {
                    E(!0);
                } finally {
                    d(!1);
                }
        };
    return (
        (0, a.useEffect)(() => {
            c(0), m(0);
        }, [t, s]),
        { eligibleUsers: i, isFetching: _, hasError: u, getNextRows: () => m(l) }
    );
};
