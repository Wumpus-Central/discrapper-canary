t.d(n, {
    H: function () {
        return u;
    }
}),
    t(47120);
var o = t(200651),
    i = t(192379),
    r = t(120356),
    c = t.n(r),
    l = t(481060),
    s = t(572004),
    a = t(388032),
    d = t(66050);
function u(e) {
    let { chunks: n, className: t, onCopy: r, ...u } = e,
        h = i.useMemo(() => (null == n ? void 0 : n.join(' ')), [n]),
        [f, x] = i.useState(!1),
        m = i.useCallback(() => {
            x(!0), (0, s.JG)(h), null == r || r();
        }, [r, h]),
        p = f ? l.CircleCheckIcon : l.CopyIcon;
    return (0, o.jsx)(l.Clickable, {
        className: c()(d.container, t),
        onClick: m,
        children: (0, o.jsx)(l.Tooltip, {
            text: f ? a.intl.string(a.t['t5VZ8/']) : a.intl.string(a.t.OpuAlJ),
            children: (e) =>
                (0, o.jsx)(p, {
                    ...u,
                    ...e,
                    size: 'xxs',
                    color: f ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.INTERACTIVE_NORMAL
                })
        })
    });
}
