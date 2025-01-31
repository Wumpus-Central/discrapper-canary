n.d(t, { Z: () => o });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(703656),
    a = n(981631);
let o = l.forwardRef(function (e, t) {
    let { href: n, children: o, onClick: d, onKeyPress: u, focusProps: c, ...h } = e,
        g = l.useCallback(
            (e) => {
                !e.repeat && ((e.charCode === a.yXg.SPACE || e.charCode === a.yXg.ENTER) && (e.preventDefault(), null != n && (0, s.uL)(n), null == d || d()), null == u || u(e));
            },
            [n, u, d]
        ),
        C = l.useCallback(
            (e) => {
                !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.uL)(n), null == d || d());
            },
            [n, d]
        ),
        f = (0, i.jsx)('a', {
            ref: t,
            href: n,
            onClick: C,
            onKeyPress: g,
            ...h,
            children: o
        });
    return (0, i.jsx)(r.tEY, {
        ...c,
        children: f
    });
});
