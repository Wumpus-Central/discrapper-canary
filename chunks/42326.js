n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(618158),
    o = n(640495);
function c(e) {
    let { errorMessage: t, className: n } = e;
    return (0, i.jsx)(a.TooltipContainer, {
        className: r()(n, o.root),
        text: t,
        position: 'bottom',
        color: a.TooltipColors.GREY,
        children: (0, i.jsx)(s.Z, {
            children: (0, i.jsx)(a.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                'aria-label': null != t ? t : '',
                className: o.warningIcon
            })
        })
    });
}
