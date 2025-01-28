t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(481060),
    s = t(695676),
    c = t(388032),
    d = t(660954);
function u(e) {
    let { className: n } = e,
        { goBack: t } = (0, s.hH)(),
        a = l.useCallback(() => {
            t();
        }, [t]);
    return (0, i.jsx)(r.Clickable, {
        onClick: a,
        className: o()(d.clickable, n),
        'aria-label': c.intl.string(c.t.ybUZqq),
        children: (0, i.jsx)(r.ArrowLargeLeftIcon, {
            size: 'sm',
            color: r.tokens.colors.INTERACTIVE_ACTIVE
        })
    });
}
