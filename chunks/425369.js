var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(410575),
    s = n(765717),
    o = n(252618),
    c = n(108427),
    d = n(895991),
    u = n(993977),
    h = n(981631),
    m = n(388032),
    p = n(833863);
function g() {
    return (0, i.jsxs)(l.rs, {
        children: [
            (0, i.jsx)(s.Z, {
                path: h.Z5c.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, i.jsxs)(a.Z, {
                    page: h.ZY5.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, i.jsx)(o.yY, { subsection: m.intl.string(m.t['3D5yo6']) }), (0, i.jsx)(u.Z, {})]
                })
            }),
            (0, i.jsx)(s.Z, {
                path: h.Z5c.APPLICATION_LIBRARY,
                children: (0, i.jsxs)(a.Z, {
                    page: h.ZY5.LIBRARY,
                    root: !0,
                    children: [(0, i.jsx)(o.yY, { subsection: m.intl.string(m.t.p7ARTE) }), (0, i.jsx)(d.Z, {})]
                })
            })
        ]
    });
}
t.Z = r.memo(function () {
    return (
        r.useEffect(() => {
            (0, c.e)('application_library');
        }, []),
        (0, i.jsxs)('div', {
            className: p.container,
            children: [(0, i.jsx)(o.yY, { location: m.intl.string(m.t.cw57am) }), (0, i.jsx)(g, {})]
        })
    );
});
