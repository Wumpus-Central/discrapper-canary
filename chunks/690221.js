var i = t(200651),
    a = t(192379),
    c = t(481060),
    o = t(703656),
    r = t(981631);
n.Z = a.forwardRef(function (e, n) {
    let { href: t, children: s, onClick: l, onKeyPress: d, focusProps: u, ..._ } = e,
        g = a.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) && (e.preventDefault(), null != t && (0, o.uL)(t), null == l || l()), null == d || d(e);
            },
            [t, d, l]
        ),
        S = a.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != t && (0, o.uL)(t), null == l || l();
            },
            [t, l]
        ),
        h = (0, i.jsx)('a', {
            ref: n,
            href: t,
            onClick: S,
            onKeyPress: g,
            ..._,
            children: s
        });
    return (0, i.jsx)(c.FocusRing, {
        ...u,
        children: h
    });
});
