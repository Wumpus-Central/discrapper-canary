n.d(t, { d: () => u }), n(388685);
var a = n(951288),
    o = n(647438),
    r = n(757853),
    s = n(72214),
    l = n(135102),
    i = n(475495);
let u = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: u,
            channel: c,
            updateSelectShareDestinations: d,
        } = (0, l.C$)(),
        { results: _, updateSearchText: f } = (0, s.s)({
            selectedDestinations: e,
            includeMissingDMs: !0,
        });
    (0, o.useEffect)(() => {
        f(n);
    }, [f, n]);
    let p = (0, o.useCallback)(
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
        b = e.length >= t;
    return (0, a.jsx)(r.F, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: _,
        rowMode: r.G.TOGGLE,
        message: u,
        originChannel: c,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: b,
        rowClassName: i.rowContainer,
    });
};
