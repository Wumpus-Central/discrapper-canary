n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(556012),
    a = n(466745);
function l(e) {
    var t;
    let { action: n, actionType: l, triggerType: o } = e,
        c = (0, s.c)(null != (t = null == n ? void 0 : n.type) ? t : l, n, o);
    if (null == c) return null;
    let { headerText: d, helperText: u, icon: m } = c;
    return (0, r.jsxs)('div', {
        className: a.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: a.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: a.actionIcon
                })
            }),
            (0, r.jsx)('div', {
                className: a.actionTextContainer,
                children: (0, r.jsxs)(i.Text, {
                    className: a.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        d,
                        null != u &&
                            (0, r.jsx)(i.Text, {
                                className: a.actionTextHelper,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                tag: 'span',
                                children: u
                            })
                    ]
                })
            })
        ]
    });
}
