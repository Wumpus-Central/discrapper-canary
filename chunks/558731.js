n.d(t, { I: () => r });
var i = n(255367),
    a = n(540863),
    o = n(534542),
    s = n(481060),
    l = n(855256);
function r(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: r, useSubtitle: c, useVariant: u, useDisabled: d, onClick: f } = t.data,
        m = r(),
        v = null == c ? void 0 : c(),
        x = n(),
        g = null == u ? void 0 : u(),
        b = null == d ? void 0 : d();
    return (0, i.jsx)(a.x, {
        title: m,
        className: l.settingButtonContainer,
        children: (0, i.jsxs)('div', {
            className: l.settingButtonContent,
            children: [
                null != v &&
                    (0, i.jsx)(o.R, {
                        type: o.g.DESCRIPTION,
                        children: v
                    }),
                (0, i.jsx)(s.zxk, {
                    onClick: f,
                    text: x,
                    variant: g,
                    disabled: b
                })
            ]
        })
    });
}
