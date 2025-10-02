n.d(t, { I: () => s });
var r = n(951288),
    l = n(540863),
    o = n(534542),
    i = n(481060),
    a = n(188639);
function s(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: s, useSubtitle: c, useVariant: u, useDisabled: d, onClick: f } = t,
        b = s(),
        m = null == c ? void 0 : c(),
        p = n(),
        j = null == u ? void 0 : u(),
        x = null == d ? void 0 : d();
    return (0, r.jsx)(l.x, {
        title: b,
        className: a.settingButtonContainer,
        children: (0, r.jsxs)("div", {
            className: a.settingButtonContent,
            children: [
                null != m &&
                    (0, r.jsx)(o.R, {
                        type: o.g.DESCRIPTION,
                        children: m,
                    }),
                (0, r.jsx)(i.zxk, {
                    onClick: f,
                    text: p,
                    variant: j,
                    disabled: x,
                }),
            ],
        }),
    });
}
