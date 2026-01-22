r.d(t, {
    o: () => i,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    l = r(77555),
    o = r(151054),
    s = r(457417),
    c = r(848193);
let i = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: r,
            message: i,
            channel: u,
            updateSelectShareDestinations: d,
        } = (0, s.Vw)(),
        { results: f, updateSearchText: b } = (0, o.R)({
            selectedDestinations: e,
            includeMissingDMs: !0,
        });
    (0, a.useEffect)(() => {
        b(r);
    }, [b, r]);
    let p = (0, a.useCallback)(
            (t) => {
                let r = e.findIndex((e) => {
                    let { type: r, id: n } = e;
                    return r === t.type && n === t.id;
                });
                if (-1 !== r) {
                    let t = [...e];
                    t.splice(r, 1), d(t);
                    return;
                }
                d([...e, t]);
            },
            [e, d],
        ),
        g = e.length >= t;
    return (0, n.jsx)(l.z, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: f,
        message: i,
        originChannel: u,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: g,
        rowClassName: c.q,
    });
};
