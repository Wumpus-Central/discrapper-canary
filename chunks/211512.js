n.d(t, { I: () => a });
var i = n(951288),
    l = n(540863),
    r = n(534542),
    o = n(481060),
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
                    (0, i.jsx)(r.R, {
                        type: r.g.DESCRIPTION,
                        children: v,
                    }),
                (0, i.jsx)(o.zxk, {
                    onClick: f,
                    text: m,
                    variant: b,
                    disabled: p,
                }),
            ],
        }),
    });
}
