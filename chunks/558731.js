n.d(t, { I: () => s });
var r = n(951288),
    i = n(540863),
    l = n(534542),
    o = n(481060),
    a = n(524987);
function s(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: s, useSubtitle: u, useVariant: c, useDisabled: d, onClick: g } = t,
        f = s(),
        y = null == u ? void 0 : u(),
        O = n(),
        E = null == c ? void 0 : c(),
        v = null == d ? void 0 : d();
    return (0, r.jsx)(i.x, {
        title: f,
        className: a.settingButtonContainer,
        children: (0, r.jsxs)("div", {
            className: a.settingButtonContent,
            children: [
                null != y &&
                    (0, r.jsx)(l.R, {
                        type: l.g.DESCRIPTION,
                        children: y,
                    }),
                (0, r.jsx)(o.zxk, {
                    onClick: g,
                    text: O,
                    variant: E,
                    disabled: v,
                }),
            ],
        }),
    });
}
