n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    l = n(80721);
let a = (e) => {
    let { subscriptionId: t, searchQuery: n } = e,
        [a, s] = r.useState([]),
        [i, o] = r.useState(0),
        [c, u] = r.useState(!1),
        [p, f] = r.useState(!1),
        h = async (e) => {
            if (!c && null != e)
                try {
                    u(!0), f(!1);
                    let r = await (0, l.MT)(t, e, n);
                    s((t) => (0 === e ? r.users : [...t, ...r.users])), o(r.nextIndex);
                } catch (e) {
                    f(!0);
                } finally {
                    u(!1);
                }
        };
    return (
        (0, r.useEffect)(() => {
            o(0), h(0);
        }, [t, n]),
        {
            eligibleUsers: a,
            isFetching: c,
            hasError: p,
            getNextRows: () => h(i),
        }
    );
};
