n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(481060),
    o = n(301938),
    s = n(806701),
    c = n(808993),
    d = n(720196);
function u(e) {
    let { transitionTo: t, token: n, width: u } = e,
        [h, _] = r.useState(d.n.START),
        [g, m] = r.useState(null),
        [p, f] = r.useState(''),
        E = { impression_group: a.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, i.jsx)('div', {
        style: { margin: '8px' },
        children: (0, i.jsxs)(l.MyZ, {
            activeSlide: h,
            width: u,
            onSlideReady: m,
            children: [
                (0, i.jsx)(l.Mi4, {
                    id: d.n.START,
                    impressionProperties: E,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, i.jsx)(s.Z, {
                        setSlide: _,
                        transitionTo: t
                    })
                }),
                (0, i.jsx)(l.Mi4, {
                    id: d.n.PASSWORD,
                    impressionProperties: E,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, i.jsx)(o.Z, {
                        setOriginalEmail: f,
                        setSlide: _,
                        transitionTo: t,
                        ready: g === d.n.PASSWORD,
                        token: n
                    })
                }),
                (0, i.jsx)(l.Mi4, {
                    id: d.n.SUCCESS,
                    impressionProperties: E,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, i.jsx)(c.Z, { email: p })
                })
            ]
        })
    });
}
