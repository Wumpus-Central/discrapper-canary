n.d(t, { Z: () => l });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(407881);
function l(e) {
    let { countdownText: t, className: n, showInfoIcon: r } = e,
        l = r
            ? (0, i.jsx)(s.d3s, {
                  size: 'xs',
                  color: 'var(--custom-premium-colors-banner-yellow)',
                  className: o.largePillIcon
              })
            : null;
    return (0, i.jsxs)('div', {
        className: a()(o.largeCountdownPill, n),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/bold',
                className: a()(o.largeCountdownPillText),
                children: t.toUpperCase()
            }),
            l
        ]
    });
}
