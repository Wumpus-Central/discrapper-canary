a.d(t, { z: () => c });
var i = a(627968),
    r = a(64700),
    l = a(837381),
    n = a(475825),
    s = a(928039),
    o = a(61916);
function c(e) {
    let {
            rowData: t,
            message: a,
            originChannel: c,
            selectedDestinations: d,
            handleToggleDestination: _,
            disableSelection: u,
            rowClassName: h,
            ...A
        } = e,
        {
            sections: p,
            sectionHeight: g,
            renderRow: E,
            rowHeight: I,
        } = (0, o.s)({
            rowData: t,
            message: a,
            originChannel: c,
            selectedDestinations: d,
            handleToggleDestination: _,
            disableSelection: u,
            rowClassName: h,
        }),
        f = r.useRef(null),
        m = (0, s.A)("forward-modal", f);
    return (0, i.jsx)(l.hD, {
        navigator: m,
        children: (0, i.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...a } = e;
                return (0, i.jsx)(n.OZ, {
                    ref: (e) => {
                        (f.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...a,
                    ...A,
                    sections: p,
                    sectionHeight: g,
                    renderRow: E,
                    rowHeight: I,
                });
            },
        }),
    });
}
