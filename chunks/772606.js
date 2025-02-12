n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    r = n(695676),
    c = n(388032),
    d = n(869466);
function u(e) {
    let { className: t } = e,
        { goBack: n } = (0, r.hH)(),
        a = l.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(s.P3F, {
        onClick: a,
        className: o()(d.clickable, t),
        'aria-label': c.intl.string(c.t.ybUZqq),
        children: (0, i.jsx)(s.j9r, {
            size: 'sm',
            color: s.TVs.colors.INTERACTIVE_ACTIVE
        })
    });
}
