n.d(t, { Z: () => d });
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(695676),
    c = n(388032),
    u = n(672425);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, s.hH)(),
        r = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(o.P3F, {
        onClick: r,
        className: a()(u.clickable, t),
        'aria-label': c.intl.string(c.t.ybUZqq),
        children: (0, l.jsx)(o.j9r, {
            size: 'sm',
            color: o.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
