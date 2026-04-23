s.d(t, { A: () => l });
var a = s(64700),
    i = s(677185);
let l = (e) => {
    let { subscriptionId: t, searchQuery: s } = e,
        [l, r] = a.useState([]),
        [n, c] = a.useState(0),
        [d, u] = a.useState(!1),
        [o, m] = a.useState(!1),
        f = async (e) => {
            if (!d && null != e)
                try {
                    u(!0), m(!1);
                    let a = await (0, i.EQ)(t, e, s);
                    r((t) => (0 === e ? a.users : [...t, ...a.users])), c(a.nextIndex);
                } catch (e) {
                    m(!0);
                } finally {
                    u(!1);
                }
        };
    return (
        (0, a.useEffect)(() => {
            c(0), f(0);
        }, [t, s]),
        { eligibleUsers: l, isFetching: d, hasError: o, getNextRows: () => f(n) }
    );
};
