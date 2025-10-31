n.d(t, { d: () => c }), n(388685);
var r = n(951288),
    a = n(647438),
    o = n(757853),
    l = n(72214),
    s = n(135102),
    i = n(727350);
let c = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: c,
            channel: u,
            updateSelectShareDestinations: d,
        } = (0, s.C$)(),
        { results: f, updateSearchText: b } = (0, l.s)({
            selectedDestinations: e,
            includeMissingDMs: !0,
        });
    (0, a.useEffect)(() => {
        b(n);
    }, [b, n]);
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
        rowData: f,
        message: c,
        originChannel: u,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: g,
        rowClassName: i.rowContainer,
    });
};
