n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(695676),
    s = n(388032),
    u = n(672425);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, c.hH)(),
        l = r.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(o.P3F, {
        onClick: l,
        className: a()(u.clickable, t),
        'aria-label': s.NW.string(s.t.ybUZqq),
        children: (0, i.jsx)(o.j9r, {
            size: 'sm',
            color: o.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
