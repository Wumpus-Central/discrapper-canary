n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(695676),
    c = n(388032),
    u = n(664110);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, s.hH)(),
        r = l.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(a.P3F, {
        onClick: r,
        className: o()(u.clickable, t),
        'aria-label': c.NW.string(c.t.ybUZqq),
        children: (0, i.jsx)(a.j9r, {
            size: 'sm',
            color: a.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
