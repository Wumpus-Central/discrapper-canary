n.d(t, { I: () => s });
var i = n(255367),
    o = n(540863),
    l = n(534542),
    r = n(481060),
    a = n(855256);
function s(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: s, useSubtitle: c, useVariant: u, useDisabled: d, onClick: f } = t,
        m = s(),
        x = null == c ? void 0 : c(),
        g = n(),
        v = null == u ? void 0 : u(),
        b = null == d ? void 0 : d();
    return (0, i.jsx)(o.x, {
        title: m,
        className: a.settingButtonContainer,
        children: (0, i.jsxs)("div", {
            className: a.settingButtonContent,
            children: [
                null != x &&
                    (0, i.jsx)(l.R, {
                        type: l.g.DESCRIPTION,
                        children: x,
                    }),
                (0, i.jsx)(r.zxk, {
                    onClick: f,
                    text: g,
                    variant: v,
                    disabled: b,
                }),
            ],
        }),
    });
}
