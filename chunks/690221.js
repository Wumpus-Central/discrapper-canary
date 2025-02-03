t.d(n, { Z: () => c });
var i = t(200651),
    a = t(192379),
    o = t(481060),
    s = t(703656),
    r = t(981631);
let c = a.forwardRef(function (e, n) {
    let { href: t, children: c, onClick: d, onKeyPress: l, focusProps: _, ...g } = e,
        u = a.useCallback(
            (e) => {
                !e.repeat && ((e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) && (e.preventDefault(), null != t && (0, s.uL)(t), null == d || d()), null == l || l(e));
            },
            [t, l, d]
        ),
        h = a.useCallback(
            (e) => {
                !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != t && (0, s.uL)(t), null == d || d());
            },
            [t, d]
        ),
        S = (0, i.jsx)('a', {
            ref: n,
            href: t,
            onClick: h,
            onKeyPress: u,
            ...g,
            children: c
        });
    return (0, i.jsx)(o.tEY, {
        ..._,
        children: S
    });
});
