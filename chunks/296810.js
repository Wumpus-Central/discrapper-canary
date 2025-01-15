n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(873546),
    l = n(481060),
    o = n(993413),
    c = n(388032),
    d = n(602866);
function u(e) {
    let { children: t, className: n, layoutClassName: r, profilePreview: u, previewTitle: m } = e,
        g = () =>
            (0, i.jsx)(o.Z, {
                title: null != m ? m : c.intl.string(c.t.Zb06yM),
                className: d.preview,
                children: u
            });
    return (0, i.jsx)('div', {
        className: n,
        children: (0, i.jsxs)(l.FormSection, {
            className: d.profileCustomizationSection,
            children: [
                a.tq && g(),
                (0, i.jsxs)('div', {
                    className: s()(d.baseLayout, r),
                    children: [t, !a.tq && g()]
                })
            ]
        })
    });
}
