n.d(t, { I: () => a });
var i = n(951288),
    l = n(540863),
    s = n(534542),
    o = n(481060),
    r = n(188639);
function a(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: a, useSubtitle: u, useVariant: c, useDisabled: d, onClick: f } = t,
        g = a(),
        m = null == u ? void 0 : u(),
        v = n(),
        b = null == c ? void 0 : c(),
        x = null == d ? void 0 : d();
    return (0, i.jsx)(l.x, {
        title: g,
        className: r.settingButtonContainer,
        children: (0, i.jsxs)("div", {
            className: r.settingButtonContent,
            children: [
                null != m &&
                    (0, i.jsx)(s.R, {
                        type: s.g.DESCRIPTION,
                        children: m,
                    }),
                (0, i.jsx)(o.zxk, {
                    onClick: f,
                    text: v,
                    variant: b,
                    disabled: x,
                }),
            ],
        }),
    });
}
