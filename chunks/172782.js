n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    s = n(80721);
let l = (e) => {
    let { subscriptionId: t, searchQuery: n } = e,
        [l, a] = r.useState([]),
        [i, o] = r.useState(0),
        [c, u] = r.useState(!1),
        [p, f] = r.useState(!1),
        h = async (e) => {
            if (!c && null != e)
                try {
                    u(!0), f(!1);
                    let r = await (0, s.MT)(t, e, n);
                    a((t) => (0 === e ? r.users : [...t, ...r.users])), o(r.nextIndex);
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
            eligibleUsers: l,
            isFetching: c,
            hasError: p,
            getNextRows: () => h(i),
        }
    );
};
