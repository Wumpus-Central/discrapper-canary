n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(828700),
    a = n(410575),
    o = n(765717),
    s = n(252618),
    c = n(108427),
    u = n(895991),
    d = n(993977),
    p = n(981631),
    f = n(388032),
    g = n(274235);
function h() {
    return (0, r.jsxs)(l.rs, {
        children: [
            (0, r.jsx)(o.Z, {
                path: p.Z5c.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, r.jsxs)(a.Z, {
                    page: p.ZY5.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, r.jsx)(s.yY, { subsection: f.intl.string(f.t["3D5yo/"]) }), (0, r.jsx)(d.Z, {})],
                }),
            }),
            (0, r.jsx)(o.Z, {
                path: p.Z5c.APPLICATION_LIBRARY,
                children: (0, r.jsxs)(a.Z, {
                    page: p.ZY5.LIBRARY,
                    root: !0,
                    children: [(0, r.jsx)(s.yY, { subsection: f.intl.string(f.t.p7ARTB) }), (0, r.jsx)(u.Z, {})],
                }),
            }),
        ],
    });
}
let m = i.memo(function () {
    return (
        i.useEffect(() => {
            (0, c.e)("application_library");
        }, []),
        (0, r.jsxs)("div", {
            className: g.container,
            children: [(0, r.jsx)(s.yY, { location: f.intl.string(f.t.cw57ar) }), (0, r.jsx)(h, {})],
        })
    );
});
