"use strict";
n.r(t), n.d(t, { default: () => g });
var i = n(627968),
    s = n(64700),
    l = n(873263),
    r = n(820284),
    a = n(549711),
    o = n(726249),
    c = n(210714),
    d = n(802999),
    h = n(104440),
    u = n(652215),
    p = n(985018),
    A = n(536813);
function m() {
    return (0, i.jsxs)(l.dO, {
        children: [
            (0, i.jsx)(a.A, {
                path: u.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, i.jsxs)(r.A, {
                    page: u.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: p.intl.string(p.t["3D5yo/"]) }), (0, i.jsx)(h.A, {})],
                }),
            }),
            (0, i.jsx)(a.A, {
                path: u.BVt.APPLICATION_LIBRARY,
                children: (0, i.jsxs)(r.A, {
                    page: u.liQ.LIBRARY,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: p.intl.string(p.t.p7ARTB) }), (0, i.jsx)(d.A, {})],
                }),
            }),
        ],
    });
}
let g = s.memo(function () {
    return (
        s.useEffect(() => {
            (0, c.d)("application_library");
        }, []),
        (0, i.jsxs)("div", {
            className: A.k,
            children: [(0, i.jsx)(o.HI, { location: p.intl.string(p.t.cw57ar) }), (0, i.jsx)(m, {})],
        })
    );
});
