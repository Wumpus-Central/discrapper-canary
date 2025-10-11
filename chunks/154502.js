n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(556012),
    a = n(335260);
function s(e) {
    var t;
    let { action: n, actionType: s, triggerType: o } = e,
        c = (0, l.c)(null != (t = null == n ? void 0 : n.type) ? t : s, n, o);
    if (null == c) return null;
    let { headerText: d, helperText: u, icon: g } = c;
    return (0, r.jsxs)("div", {
        className: a.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: a.actionIconContainer,
                children: (0, r.jsx)(g, {
                    size: "custom",
                    color: "currentColor",
                    width: 14,
                    height: 14,
                    className: a.actionIcon,
                }),
            }),
            (0, r.jsx)("div", {
                className: a.actionTextContainer,
                children: (0, r.jsxs)(i.Text, {
                    className: a.actionTextHeader,
                    variant: "text-xs/medium",
                    color: "interactive-normal",
                    children: [
                        d,
                        null != u &&
                            (0, r.jsx)(i.Text, {
                                className: a.actionTextHelper,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                children: u,
                            }),
                    ],
                }),
            }),
        ],
    });
}
