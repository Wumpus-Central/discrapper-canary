n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(556012),
    a = n(986371);
function s(e) {
    var t;
    let { action: n, actionType: s, triggerType: o } = e,
        c = (0, l.c)(null !== (t = null == n ? void 0 : n.type) && void 0 !== t ? t : s, n, o);
    if (null == c) return null;
    let { headerText: d, helperText: u, icon: m } = c;
    return (0, i.jsxs)('div', {
        className: a.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: a.actionIconContainer,
                children: (0, i.jsx)(m, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14,
                    className: a.actionIcon
                })
            }),
            (0, i.jsx)('div', {
                className: a.actionTextContainer,
                children: (0, i.jsxs)(r.Text, {
                    className: a.actionTextHeader,
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: [
                        d,
                        null != u &&
                            (0, i.jsx)(r.Text, {
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
