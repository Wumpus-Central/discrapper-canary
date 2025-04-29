i.d(t, { default: () => o });
var n = i(255367),
    s = i(73800),
    l = i(481060),
    c = i(239091),
    a = i(547280),
    d = i(388032);
let o = function (e) {
    let { signupTarget: t, onSelect: i } = e,
        o = s.useCallback(() => {
            (0, a.b)(t.key, t.dismissibleContent);
        }, [t]);
    return (0, n.jsx)(l.v2r, {
        navId: 'signup-button-context',
        onClose: c.Zy,
        'aria-label': d.intl.string(d.t.WAI6xs),
        onSelect: i,
        children: (0, n.jsx)(l.kSQ, {
            children: (0, n.jsx)(l.sNh, {
                id: 'dismiss',
                label: d.intl.string(d.t.WAI6xs),
                action: o
            })
        })
    });
};
