n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(695676),
    c = n(388032),
    u = n(23948);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, s.hH)(),
        l = r.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(a.P3F, {
        onClick: l,
        className: o()(u.clickable, t),
        'aria-label': c.NW.string(c.t.ybUZqq),
        children: (0, i.jsx)(a.j9r, {
            size: 'sm',
            color: a.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
