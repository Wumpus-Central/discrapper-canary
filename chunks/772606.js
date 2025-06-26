n.d(t, { Z: () => d });
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    c = n(695676),
    s = n(388032),
    u = n(672425);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, c.hH)(),
        r = l.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(a.P3F, {
        onClick: r,
        className: o()(u.clickable, t),
        'aria-label': s.intl.string(s.t.ybUZqq),
        children: (0, i.jsx)(a.j9r, {
            size: 'sm',
            color: a.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
