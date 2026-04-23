a.d(t, { z: () => A });
var s = a(627968),
    n = a(64700),
    l = a(837381),
    r = a(475825),
    i = a(928039),
    _ = a(61916);
function A(e) {
    let {
            rowData: t,
            message: a,
            originChannel: A,
            selectedDestinations: o,
            handleToggleDestination: u,
            disableSelection: c,
            rowClassName: d,
            ...h
        } = e,
        {
            sections: I,
            sectionHeight: E,
            renderRow: C,
            rowHeight: L,
        } = (0, _.s)({
            rowData: t,
            message: a,
            originChannel: A,
            selectedDestinations: o,
            handleToggleDestination: u,
            disableSelection: c,
            rowClassName: d,
        }),
        N = n.useRef(null),
        b = (0, i.A)("forward-modal", N);
    return (0, s.jsx)(l.hD, {
        navigator: b,
        children: (0, s.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...a } = e;
                return (0, s.jsx)(r.OZ, {
                    ref: (e) => {
                        (N.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...a,
                    ...h,
                    sections: I,
                    sectionHeight: E,
                    renderRow: C,
                    rowHeight: L,
                });
            },
        }),
    });
}
