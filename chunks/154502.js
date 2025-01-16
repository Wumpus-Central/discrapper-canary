n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(556012),
    s = n(986371);
function a(e) {
    var t;
    let { action: n, actionType: a, triggerType: o } = e,
        c = (0, l.c)(null !== (t = null == n ? void 0 : n.type) && void 0 !== t ? t : a, n, o);
    if (null == c) return null;
    let { headerText: d, helperText: u, icon: m } = c;
    return (0, i.jsxs)('div', {
        className: s.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: s.actionIconContainer,
                children: (0, i.jsx)(m, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: s.actionIcon
                })
            }),
            (0, i.jsx)('div', {
                className: s.actionTextContainer,
                children: (0, i.jsxs)(r.Text, {
                    className: s.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        d,
                        null != u &&
                            (0, i.jsx)(r.Text, {
                                className: s.actionTextHelper,
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
