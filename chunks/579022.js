var i = n(200651);
n(192379);
var r = n(481060),
    l = n(388032),
    a = n(278495);
let s = Math.ceil(2 * Math.PI * 20);
t.Z = (e) => {
    let { total: t, used: n } = e,
        o = Math.max(0, Math.min(1, n / t)),
        c = ''.concat(Math.floor(100 * o), '%');
    return (0, i.jsx)(r.Tooltip, {
        text: l.intl.formatToPlainString(l.t['2eoRMj'], { used: c }),
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a.wrapper,
                role: 'progressbar',
                'aria-label': l.intl.formatToPlainString(l.t['2eoRMj'], { used: c }),
                ...e,
                children: [
                    (0, i.jsxs)('svg', {
                        viewBox: '25 25 50 50',
                        className: a.svg,
                        'aria-hidden': !0,
                        children: [
                            (0, i.jsx)('circle', {
                                className: a.background,
                                cx: '50',
                                cy: '50',
                                r: 20
                            }),
                            (0, i.jsx)('circle', {
                                className: a.foreground,
                                cx: '50',
                                cy: '50',
                                r: 20,
                                stroke: (function (e) {
                                    let t = Math.round(-85 * e + 199),
                                        n = Math.round(-71 * e + 208),
                                        i = Math.round(-22 * e + 240);
                                    return 'rgb('.concat(t, ', ').concat(n, ', ').concat(i, ')');
                                })(o),
                                strokeDasharray: (function (e) {
                                    let t = Math.floor(s * e);
                                    return ''.concat(t, ', ').concat(s);
                                })(o)
                            })
                        ]
                    }),
                    (0, i.jsx)('aside', {
                        className: a.usageInfo,
                        'aria-hidden': !0,
                        children: c
                    })
                ]
            })
    });
};
