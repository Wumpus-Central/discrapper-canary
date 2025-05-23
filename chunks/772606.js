n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    c = n(695676),
    s = n(388032),
    u = n(23948);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, c.hH)(),
        l = r.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(a.P3F, {
        onClick: l,
        className: o()(u.clickable, t),
        'aria-label': s.intl.string(s.t.ybUZqq),
        children: (0, i.jsx)(a.j9r, {
            size: 'sm',
            color: a.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
