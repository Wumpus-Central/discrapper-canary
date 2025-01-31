n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(873546),
    a = n(481060),
    o = n(993413),
    c = n(388032),
    d = n(953727);
function u(e) {
    let { children: t, className: n, layoutClassName: s, profilePreview: u, previewTitle: m } = e,
        h = () =>
            (0, i.jsx)(o.Z, {
                title: null != m ? m : c.intl.string(c.t.Zb06yM),
                className: d.preview,
                children: u
            });
    return (0, i.jsx)('div', {
        className: n,
        children: (0, i.jsxs)(a.hjN, {
            className: d.profileCustomizationSection,
            children: [
                l.tq && h(),
                (0, i.jsxs)('div', {
                    className: r()(d.baseLayout, s),
                    children: [t, !l.tq && h()]
                })
            ]
        })
    });
}
