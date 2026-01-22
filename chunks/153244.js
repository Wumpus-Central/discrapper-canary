n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(820284),
    s = n(549711),
    o = n(726249),
    c = n(210714),
    u = n(802999),
    d = n(104440),
    p = n(652215),
    f = n(985018),
    h = n(509826);

function A() {
    return (0, r.jsxs)(l.dO, {
        children: [
            (0, r.jsx)(s.A, {
                path: p.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, r.jsxs)(a.A, {
                    page: p.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [
                        (0, r.jsx)(o.HI, {
                            subsection: f.intl.string(f.t["3D5yo/"]),
                        }),
                        (0, r.jsx)(d.A, {}),
                    ],
                }),
            }),
            (0, r.jsx)(s.A, {
                path: p.BVt.APPLICATION_LIBRARY,
                children: (0, r.jsxs)(a.A, {
                    page: p.liQ.LIBRARY,
                    root: !0,
                    children: [
                        (0, r.jsx)(o.HI, {
                            subsection: f.intl.string(f.t.p7ARTB),
                        }),
                        (0, r.jsx)(u.A, {}),
                    ],
                }),
            }),
        ],
    });
}
let g = i.memo(function () {
    return (
        i.useEffect(() => {
            (0, c.d)("application_library");
        }, []),
        (0, r.jsxs)("div", {
            className: h.k,
            children: [
                (0, r.jsx)(o.HI, {
                    location: f.intl.string(f.t.cw57ar),
                }),
                (0, r.jsx)(A, {}),
            ],
        })
    );
});
