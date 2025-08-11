n.d(t, { I: () => r });
var i = n(255367),
    l = n(540863),
    s = n(534542),
    o = n(481060),
    a = n(855256);
function r(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: r, useSubtitle: u, useVariant: c, useDisabled: d, onClick: f } = t,
        g = r(),
        m = null == u ? void 0 : u(),
        v = n(),
        b = null == c ? void 0 : c(),
        x = null == d ? void 0 : d();
    return (0, i.jsx)(l.x, {
        title: g,
        className: a.settingButtonContainer,
        children: (0, i.jsxs)("div", {
            className: a.settingButtonContent,
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
