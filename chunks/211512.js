n.d(t, { I: () => a });
var i = n(951288),
    l = n(540863),
    o = n(534542),
    r = n(481060),
    s = n(188639);
function a(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: a, useSubtitle: u, useVariant: c, useDisabled: d, onClick: f } = t,
        g = a(),
        v = null == u ? void 0 : u(),
        m = n(),
        b = null == c ? void 0 : c(),
        p = null == d ? void 0 : d();
    return (0, i.jsx)(l.x, {
        title: g,
        className: s.settingButtonContainer,
        children: (0, i.jsxs)("div", {
            className: s.settingButtonContent,
            children: [
                null != v &&
                    (0, i.jsx)(o.R, {
                        type: o.g.DESCRIPTION,
                        children: v,
                    }),
                (0, i.jsx)(r.zxk, {
                    onClick: f,
                    text: m,
                    variant: b,
                    disabled: p,
                }),
            ],
        }),
    });
}
