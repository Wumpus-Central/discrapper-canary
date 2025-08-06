n.d(t, { I: () => s });
var i = n(255367),
    o = n(540863),
    l = n(534542),
    a = n(481060),
    r = n(855256);
function s(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: s, useSubtitle: c, useVariant: u, useDisabled: d, onClick: f } = t,
        m = s(),
        b = null == c ? void 0 : c(),
        v = n(),
        g = null == u ? void 0 : u(),
        x = null == d ? void 0 : d();
    return (0, i.jsx)(o.x, {
        title: m,
        className: r.settingButtonContainer,
        children: (0, i.jsxs)("div", {
            className: r.settingButtonContent,
            children: [
                null != b &&
                    (0, i.jsx)(l.R, {
                        type: l.g.DESCRIPTION,
                        children: b,
                    }),
                (0, i.jsx)(a.zxk, {
                    onClick: f,
                    text: v,
                    variant: g,
                    disabled: x,
                }),
            ],
        }),
    });
}
