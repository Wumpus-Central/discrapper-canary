n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(990547),
    a = n(481060),
    l = n(301938),
    s = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, p] = i.useState(u.n.START),
        [_, g] = i.useState(null),
        [f, m] = i.useState(''),
        b = { impression_group: o.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)('div', {
        style: { margin: '8px' },
        children: (0, r.jsxs)(a.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: g,
            children: [
                (0, r.jsx)(a.Mi4, {
                    id: u.n.START,
                    impressionProperties: b,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(s.Z, {
                        setSlide: p,
                        transitionTo: t
                    })
                }),
                (0, r.jsx)(a.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: b,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(l.Z, {
                        setOriginalEmail: m,
                        setSlide: p,
                        transitionTo: t,
                        ready: _ === u.n.PASSWORD,
                        token: n
                    })
                }),
                (0, r.jsx)(a.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: b,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: f })
                })
            ]
        })
    });
}
