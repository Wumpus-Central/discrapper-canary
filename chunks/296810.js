n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(873546),
    l = n(481060),
    o = n(993413),
    c = n(388032),
    d = n(775853);
function u(e) {
    let { children: t, className: n, layoutClassName: i, profilePreview: u, previewTitle: m } = e,
        g = () =>
            (0, r.jsx)(o.Z, {
                title: null != m ? m : c.NW.string(c.t.Zb06yM),
                className: d.preview,
                children: u
            });
    return (0, r.jsx)('div', {
        className: n,
        children: (0, r.jsxs)(l.hjN, {
            className: d.profileCustomizationSection,
            children: [
                a.tq && g(),
                (0, r.jsxs)('div', {
                    className: s()(d.baseLayout, i),
                    children: [t, !a.tq && g()]
                })
            ]
        })
    });
}
