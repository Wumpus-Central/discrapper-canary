n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(873546),
    l = n(481060),
    o = n(993413),
    c = n(388032),
    d = n(953727);
function u(e) {
    let { children: t, className: n, layoutClassName: s, profilePreview: u, previewTitle: m } = e,
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
                    className: r()(d.baseLayout, s),
                    children: [t, !a.tq && g()]
                })
            ]
        })
    });
}
