n.d(t, { Z: () => l });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(546034);
function l(e) {
    let { countdownText: t, className: n, showInfoIcon: i } = e,
        l = i
            ? (0, r.jsx)(a.d3s, {
                  size: 'xs',
                  color: 'var(--custom-premium-colors-banner-yellow)',
                  className: s.largePillIcon
              })
            : null;
    return (0, r.jsxs)('div', {
        className: o()(s.largeCountdownPill, n),
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/bold',
                className: s.largeCountdownPillText,
                children: t.toUpperCase()
            }),
            l
        ]
    });
}
