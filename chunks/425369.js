n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(512969),
    o = n(410575),
    a = n(765717),
    s = n(252618),
    c = n(108427),
    u = n(895991),
    d = n(993977),
    p = n(981631),
    h = n(388032),
    g = n(655898);
function f() {
    return (0, r.jsxs)(l.rs, {
        children: [
            (0, r.jsx)(a.Z, {
                path: p.Z5c.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, r.jsxs)(o.Z, {
                    page: p.ZY5.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, r.jsx)(s.yY, { subsection: h.NW.string(h.t['3D5yo6']) }), (0, r.jsx)(d.Z, {})]
                })
            }),
            (0, r.jsx)(a.Z, {
                path: p.Z5c.APPLICATION_LIBRARY,
                children: (0, r.jsxs)(o.Z, {
                    page: p.ZY5.LIBRARY,
                    root: !0,
                    children: [(0, r.jsx)(s.yY, { subsection: h.NW.string(h.t.p7ARTE) }), (0, r.jsx)(u.Z, {})]
                })
            })
        ]
    });
}
let m = i.memo(function () {
    return (
        i.useEffect(() => {
            (0, c.e)('application_library');
        }, []),
        (0, r.jsxs)('div', {
            className: g.container,
            children: [(0, r.jsx)(s.yY, { location: h.NW.string(h.t.cw57am) }), (0, r.jsx)(f, {})]
        })
    );
});
