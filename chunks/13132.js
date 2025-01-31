n.d(t, { Z: () => c });
var i = n(200651),
    r = n(481060),
    a = n(688465),
    s = n(328908),
    o = n(921944),
    l = n(388032),
    u = n(9232);
function c(e) {
    let { dismissContent: t, channelId: n } = e;
    return (0, i.jsxs)('div', {
        className: u.upsell,
        children: [
            (0, i.jsx)(r.P3F, {
                onClick: () => t(o.L.USER_DISMISS),
                className: u.icon,
                children: (0, i.jsx)(r.Dio, { name: 'confetti' })
            }),
            (0, i.jsx)(a.Z, { className: u.beta }),
            (0, i.jsx)(r.X6q, {
                color: 'always-white',
                className: u.heading,
                variant: 'heading-md/semibold',
                children: l.intl.string(l.t['WsTf4+'])
            }),
            (0, i.jsx)(r.Text, {
                color: 'always-white',
                variant: 'text-sm/medium',
                children: l.intl.string(l.t['7wH9GB'])
            }),
            (0, i.jsx)(r.zxk, {
                onClick: () => {
                    (0, s.Ne)(n), t(o.L.TAKE_ACTION);
                },
                className: u.cta,
                children: l.intl.string(l.t['a+udJy'])
            }),
            (0, i.jsx)(d, { className: u.caret })
        ]
    });
}
function d(e) {
    let { className: t } = e;
    return (0, i.jsx)('svg', {
        className: t,
        width: '12',
        height: '9',
        viewBox: '0 0 12 9',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            id: 'Caret',
            d: 'M-3.49691e-07 0.790039L12 0.790039L6 8.79004L-3.49691e-07 0.790039Z',
            fill: '#111214'
        })
    });
}
