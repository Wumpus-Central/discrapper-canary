r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651),
    a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(574804);
function u(e) {
    let { countdownText: n, className: r, showInfoIcon: a } = e,
        u = a
            ? (0, i.jsx)(s.CircleInformationIcon, {
                  size: 'xs',
                  color: 'var(--custom-premium-colors-banner-yellow)',
                  className: l.largePillIcon
              })
            : null;
    return (0, i.jsxs)('div', {
        className: o()(l.largeCountdownPill, r),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/bold',
                className: o()(l.largeCountdownPillText),
                children: n.toUpperCase()
            }),
            u
        ]
    });
}
