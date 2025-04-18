n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(556012),
    l = n(503384);
function a(e) {
    var t;
    let { action: n, actionType: a, triggerType: o } = e,
        c = (0, s.c)(null != (t = null == n ? void 0 : n.type) ? t : a, n, o);
    if (null == c) return null;
    let { headerText: d, helperText: u, icon: m } = c;
    return (0, r.jsxs)('div', {
        className: l.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: l.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: l.actionIcon
                })
            }),
            (0, r.jsx)('div', {
                className: l.actionTextContainer,
                children: (0, r.jsxs)(i.Text, {
                    className: l.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        d,
                        null != u &&
                            (0, r.jsx)(i.Text, {
                                className: l.actionTextHelper,
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
