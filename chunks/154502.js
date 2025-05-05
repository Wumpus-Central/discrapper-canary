n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(556012),
    s = n(466745);
function a(e) {
    var t;
    let { action: n, actionType: a, triggerType: o } = e,
        c = (0, l.c)(null != (t = null == n ? void 0 : n.type) ? t : a, n, o);
    if (null == c) return null;
    let { headerText: u, helperText: d, icon: m } = c;
    return (0, r.jsxs)('div', {
        className: s.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: s.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: s.actionIcon
                })
            }),
            (0, r.jsx)('div', {
                className: s.actionTextContainer,
                children: (0, r.jsxs)(i.Text, {
                    className: s.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        u,
                        null != d &&
                            (0, r.jsx)(i.Text, {
                                className: s.actionTextHelper,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                tag: 'span',
                                children: d
                            })
                    ]
                })
            })
        ]
    });
}
