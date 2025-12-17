n.d(t, { d: () => i }), n(388685);
var r = n(54381),
    a = n(473749),
    o = n(757853),
    l = n(72214),
    c = n(135102),
    s = n(409805);
let i = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: i,
            channel: u,
            updateSelectShareDestinations: d,
        } = (0, c.C$)(),
        { results: b, updateSearchText: f } = (0, l.s)({
            selectedDestinations: e,
            includeMissingDMs: !0,
        });
    (0, a.useEffect)(() => {
        f(n);
    }, [f, n]);
    let p = (0, a.useCallback)(
            (t) => {
                let n = e.findIndex((e) => {
                    let { type: n, id: r } = e;
                    return n === t.type && r === t.id;
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
        g = e.length >= t;
    return (0, r.jsx)(o.F, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: b,
        message: i,
        originChannel: u,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: g,
        rowClassName: s.rowContainer,
    });
};
