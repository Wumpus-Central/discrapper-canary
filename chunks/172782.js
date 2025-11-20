n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(80721);
let a = (e) => {
    let { subscriptionId: t, searchQuery: n } = e,
        [a, s] = r.useState([]),
        [o, l] = r.useState(!1),
        [c, u] = r.useState(!1);
    return (
        (0, r.useEffect)(() => {
            (async () => {
                try {
                    l(!0);
                    let e = await (0, i.MT)(t);
                    s(e);
                } catch (e) {
                    u(!0);
                } finally {
                    l(!1);
                }
            })();
        }, [t, n]),
        {
            eligibleUsers: a,
            isFetching: o,
            hasError: c,
            fetchUsers: () => {},
        }
    );
};
