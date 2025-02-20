i.d(t, { default: () => o });
var s = i(200651),
    n = i(192379),
    c = i(481060),
    a = i(239091),
    l = i(547280),
    d = i(388032);
let o = function (e) {
    let { signupTarget: t, onSelect: i } = e,
        o = n.useCallback(() => {
            (0, l.b)(t.key, t.dismissibleContent);
        }, [t]);
    return (0, s.jsx)(c.v2r, {
        navId: 'signup-button-context',
        onClose: a.Zy,
        'aria-label': d.NW.string(d.t.WAI6xs),
        onSelect: i,
        children: (0, s.jsx)(c.kSQ, {
            children: (0, s.jsx)(c.sNh, {
                id: 'dismiss',
                label: d.NW.string(d.t.WAI6xs),
                action: o
            })
        })
    });
};
