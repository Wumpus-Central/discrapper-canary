n.d(t, {
    Z: () => f,
    j: () => d
});
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    s = n(481060),
    o = n(925329),
    l = n(388032),
    u = n(319900);
function c(e) {
    let { application: t, timestamp: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                size: o.Z.Sizes.LARGE,
                game: t
            }),
            (0, i.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: u.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: a()(n).format('LLLL')
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: l.intl.format(l.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { application: t, timestamp: n, children: r } = e;
    return (0, i.jsx)(s.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': l.intl.string(l.t['5nMcv7']),
        tooltipClassName: u.gameMessageTooltip,
        tooltipContentClassName: u.gameMessageTooltipContent,
        text: (0, i.jsx)(c, {
            application: t,
            timestamp: n
        }),
        children: (e) =>
            (0, i.jsx)(s.P3F, {
                tag: 'span',
                ...e,
                children: r
            })
    });
}
function f(e) {
    let { application: t, timestamp: n, compact: r, children: a } = e;
    return (0, i.jsxs)(d, {
        application: t,
        timestamp: n,
        children: [
            r
                ? null
                : (0, i.jsx)(s.iWm, {
                      className: u.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            a
        ]
    });
}
