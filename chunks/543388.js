r.d(n, {
    Z: function () {
        return p;
    },
    j: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(913527),
    o = r.n(a),
    s = r(481060),
    l = r(925329),
    u = r(388032),
    c = r(319900);
function d(e) {
    let { application: n, timestamp: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Z, {
                size: l.Z.Sizes.LARGE,
                game: n
            }),
            (0, i.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: c.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: o()(r).format('LLLL')
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: u.intl.format(u.t.J3s8JC, { applicationName: n.name })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { application: n, timestamp: r, children: a } = e;
    return (0, i.jsx)(s.Tooltip, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': u.intl.string(u.t['5nMcv7']),
        tooltipClassName: c.gameMessageTooltip,
        tooltipContentClassName: c.gameMessageTooltipContent,
        text: (0, i.jsx)(d, {
            application: n,
            timestamp: r
        }),
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                tag: 'span',
                ...e,
                children: a
            })
    });
}
function p(e) {
    let { application: n, timestamp: r, compact: a, children: o } = e;
    return (0, i.jsxs)(f, {
        application: n,
        timestamp: r,
        children: [
            a
                ? null
                : (0, i.jsx)(s.GameControllerIcon, {
                      className: c.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            o
        ]
    });
}
