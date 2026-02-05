n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(960488),
    l = n(820284),
    s = n(549711),
    o = n(726249),
    d = n(210714),
    c = n(802999),
    u = n(104440),
    A = n(652215),
    h = n(985018),
    _ = n(509826);
function m() {
    return (0, i.jsxs)(a.dO, {
        children: [
            (0, i.jsx)(s.A, {
                path: A.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, i.jsxs)(l.A, {
                    page: A.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: h.intl.string(h.t["3D5yo/"]) }), (0, i.jsx)(u.A, {})],
                }),
            }),
            (0, i.jsx)(s.A, {
                path: A.BVt.APPLICATION_LIBRARY,
                children: (0, i.jsxs)(l.A, {
                    page: A.liQ.LIBRARY,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: h.intl.string(h.t.p7ARTB) }), (0, i.jsx)(c.A, {})],
                }),
            }),
        ],
    });
}
let p = r.memo(function () {
    return (
        r.useEffect(() => {
            (0, d.d)("application_library");
        }, []),
        (0, i.jsxs)("div", {
            className: _.k,
            children: [(0, i.jsx)(o.HI, { location: h.intl.string(h.t.cw57ar) }), (0, i.jsx)(m, {})],
        })
    );
});
