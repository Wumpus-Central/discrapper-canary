n.d(t, { Z: () => d });
var r = n(200651),
    i = n(481060),
    o = n(688465),
    a = n(328908),
    s = n(992970),
    l = n(921944),
    c = n(388032),
    u = n(580613);
function d(e) {
    let { dismissContent: t, channelId: n } = e;
    return (0, r.jsxs)('div', {
        className: u.upsell,
        children: [
            (0, r.jsx)(i.P3F, {
                onClick: () => t(l.L.USER_DISMISS),
                className: u.icon,
                children: (0, r.jsx)(i.Dio, { name: 'confetti' })
            }),
            (0, r.jsx)(o.Z, { className: u.beta }),
            (0, r.jsx)(i.X6q, {
                color: 'always-white',
                className: u.heading,
                variant: 'heading-md/semibold',
                children: c.NW.string(c.t['WsTf4+'])
            }),
            (0, r.jsx)(i.Text, {
                color: 'always-white',
                variant: 'text-sm/medium',
                children: c.NW.string(c.t['7wH9GB'])
            }),
            (0, r.jsx)(i.zxk, {
                onClick: () => {
                    (0, a.Ne)(n, s.MG.ConfettiUpsell), t(l.L.TAKE_ACTION);
                },
                className: u.cta,
                children: c.NW.string(c.t['a+udJy'])
            }),
            (0, r.jsx)(f, { className: u.caret })
        ]
    });
}
function f(e) {
    let { className: t } = e;
    return (0, r.jsx)('svg', {
        className: t,
        width: '12',
        height: '9',
        viewBox: '0 0 12 9',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', {
            id: 'Caret',
            d: 'M-3.49691e-07 0.790039L12 0.790039L6 8.79004L-3.49691e-07 0.790039Z',
            fill: '#111214'
        })
    });
}
