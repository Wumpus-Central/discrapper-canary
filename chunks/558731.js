n.d(t, { I: () => a });
var r = n(951288),
    i = n(540863),
    l = n(534542),
    o = n(481060),
    s = n(524987);
function a(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: a, useSubtitle: u, useVariant: c, useDisabled: d, onClick: f } = t,
        g = a(),
        O = null == u ? void 0 : u(),
        y = n(),
        E = null == c ? void 0 : c(),
        b = null == d ? void 0 : d();
    return (0, r.jsx)(i.x, {
        title: g,
        className: s.settingButtonContainer,
        children: (0, r.jsxs)("div", {
            className: s.settingButtonContent,
            children: [
                null != O &&
                    (0, r.jsx)(l.R, {
                        type: l.g.DESCRIPTION,
                        children: O,
                    }),
                (0, r.jsx)(o.zxk, {
                    onClick: f,
                    text: y,
                    variant: E,
                    disabled: b,
                }),
            ],
        }),
    });
}
