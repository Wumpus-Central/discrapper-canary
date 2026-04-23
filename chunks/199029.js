a.d(t, { o: () => A });
var s = a(627968),
    n = a(64700),
    l = a(77555),
    r = a(151054),
    i = a(457417),
    _ = a(305604);
let A = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: a,
            message: A,
            channel: o,
            updateSelectShareDestinations: u,
        } = (0, i.Vw)(),
        { results: c, updateSearchText: d } = (0, r.R)({ selectedDestinations: e, includeMissingDMs: !0 });
    (0, n.useEffect)(() => {
        d(a);
    }, [d, a]);
    let h = (0, n.useCallback)(
            (t) => {
                let a = e.findIndex((e) => {
                    let { type: a, id: s } = e;
                    return a === t.type && s === t.id;
                });
                if (-1 !== a) {
                    let t = [...e];
                    t.splice(a, 1), u(t);
                    return;
                }
                u([...e, t]);
            },
            [e, u],
        ),
        I = e.length >= t;
    return (0, s.jsx)(l.z, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: c,
        message: A,
        originChannel: o,
        handleToggleDestination: h,
        selectedDestinations: e,
        disableSelection: I,
        rowClassName: _.q,
    });
};
