i.d(t, {
    Z: () => d,
    j: () => m
});
var n = i(200651);
i(192379);
var a = i(913527),
    l = i.n(a),
    r = i(481060),
    s = i(925329),
    o = i(388032),
    c = i(969148);
function u(e) {
    let { application: t, timestamp: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.Z, {
                size: s.Z.Sizes.LARGE,
                game: t
            }),
            (0, n.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, n.jsx)(r.Text, {
                        className: c.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: l()(i).format('LLLL')
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: o.intl.format(o.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { application: t, timestamp: i, children: a } = e;
    return (0, n.jsx)(r.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': o.intl.string(o.t['5nMcv7']),
        tooltipClassName: c.gameMessageTooltip,
        tooltipContentClassName: c.gameMessageTooltipContent,
        text: (0, n.jsx)(u, {
            application: t,
            timestamp: i
        }),
        children: (e) =>
            (0, n.jsx)(r.P3F, {
                tag: 'span',
                ...e,
                children: a
            })
    });
}
function d(e) {
    let { application: t, timestamp: i, compact: a, children: l } = e;
    return (0, n.jsxs)(m, {
        application: t,
        timestamp: i,
        children: [
            a
                ? null
                : (0, n.jsx)(r.iWm, {
                      className: c.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            l
        ]
    });
}
