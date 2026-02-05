n.d(t, { o: () => c });
var a = n(627968),
    l = n(64700),
    r = n(77555),
    s = n(151054),
    o = n(457417),
    i = n(848193);
let c = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: c,
            channel: u,
            updateSelectShareDestinations: d,
        } = (0, o.Vw)(),
        { results: _, updateSearchText: h } = (0, s.R)({ selectedDestinations: e, includeMissingDMs: !0 });
    (0, l.useEffect)(() => {
        h(n);
    }, [h, n]);
    let f = (0, l.useCallback)(
            (t) => {
                let n = e.findIndex((e) => {
                    let { type: n, id: a } = e;
                    return n === t.type && a === t.id;
                });
                if (-1 !== n) {
                    let t = [...e];
                    t.splice(n, 1), d(t);
                    return;
                }
                d([...e, t]);
            },
            [e, d],
        ),
        p = e.length >= t;
    return (0, a.jsx)(r.z, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: _,
        message: c,
        originChannel: u,
        handleToggleDestination: f,
        selectedDestinations: e,
        disableSelection: p,
        rowClassName: i.q,
    });
};
