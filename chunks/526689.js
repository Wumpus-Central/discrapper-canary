n.d(t, { d: () => c }), n(388685);
var a = n(951288),
    l = n(647438),
    s = n(757853),
    r = n(72214),
    o = n(135102),
    i = n(924585);
let c = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: c,
            channel: u,
            updateSelectShareDestinations: d,
        } = (0, o.C$)(),
        { results: _, updateSearchText: f } = (0, r.s)({
            selectedDestinations: e,
            includeMissingDMs: !0,
        });
    (0, l.useEffect)(() => {
        f(n);
    }, [f, n]);
    let b = (0, l.useCallback)(
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
    return (0, a.jsx)(s.F, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: _,
        message: c,
        originChannel: u,
        handleToggleDestination: b,
        selectedDestinations: e,
        disableSelection: p,
        rowClassName: i.rowContainer,
    });
};
