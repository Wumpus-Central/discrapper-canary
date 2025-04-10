n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(695676),
    c = n(388032),
    d = n(672425);
function u(e) {
    let { className: t } = e,
        { goBack: n } = (0, s.hH)(),
        l = r.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(o.P3F, {
        onClick: l,
        className: a()(d.clickable, t),
        'aria-label': c.NW.string(c.t.ybUZqq),
        children: (0, i.jsx)(o.j9r, {
            size: 'sm',
            color: o.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
