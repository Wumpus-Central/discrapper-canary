var i = n(200651),
    o = n(192379),
    r = n(481060),
    a = n(703656),
    d = n(981631);
t.Z = o.forwardRef(function (e, t) {
    let { href: n, children: f, onClick: s, onKeyPress: c, focusProps: l, ...u } = e,
        _ = o.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === d.yXg.SPACE || e.charCode === d.yXg.ENTER) && (e.preventDefault(), null != n && (0, a.uL)(n), null == s || s()), null == c || c(e);
            },
            [n, c, s]
        ),
        h = o.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != n && (0, a.uL)(n), null == s || s();
            },
            [n, s]
        ),
        b = (0, i.jsx)('a', {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...u,
            children: f
        });
    return (0, i.jsx)(r.FocusRing, {
        ...l,
        children: b
    });
});
