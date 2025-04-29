n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(873546),
    a = n(481060),
    o = n(993413),
    c = n(388032),
    d = n(775853);
function u(e) {
    let { children: t, className: n, layoutClassName: r, profilePreview: u, previewTitle: m } = e,
        p = () =>
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
                l.tq && p(),
                (0, i.jsxs)('div', {
                    className: s()(d.baseLayout, r),
                    children: [t, !l.tq && p()]
                })
            ]
        })
    });
}
