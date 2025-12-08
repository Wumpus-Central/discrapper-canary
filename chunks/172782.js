r.d(t, { Z: () => s }), r(388685);
var n = r(473749),
    i = r(80721);
let s = (e) => {
    let { subscriptionId: t, searchQuery: r } = e,
        [s, a] = n.useState([]),
        [o, l] = n.useState(0),
        [c, u] = n.useState(!1),
        [d, f] = n.useState(!1),
        p = async (e) => {
            if (!c && null != e)
                try {
                    u(!0), f(!1);
                    let n = await (0, i.MT)(t, e, r);
                    a((t) => (0 === e ? n.users : [...t, ...n.users])), l(n.nextIndex);
                } catch (e) {
                    f(!0);
                } finally {
                    u(!1);
                }
        };
    return (
        (0, n.useEffect)(() => {
            l(0), p(0);
        }, [t, r]),
        {
            eligibleUsers: s,
            isFetching: c,
            hasError: d,
            getNextRows: () => p(o),
        }
    );
};
