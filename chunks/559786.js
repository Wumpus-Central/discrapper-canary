n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(481060),
    s = n(301938),
    o = n(806701),
    c = n(808993),
    d = n(720196);
function u(e) {
    let { transitionTo: t, token: n, width: u } = e,
        [h, _] = r.useState(d.n.START),
        [m, g] = r.useState(null),
        [p, f] = r.useState(''),
        x = { impression_group: a.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, i.jsx)('div', {
        style: { margin: '8px' },
        children: (0, i.jsxs)(l.MyZ, {
            activeSlide: h,
            width: u,
            onSlideReady: g,
            children: [
                (0, i.jsx)(l.Mi4, {
                    id: d.n.START,
                    impressionProperties: x,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, i.jsx)(o.Z, {
                        setSlide: _,
                        transitionTo: t
                    })
                }),
                (0, i.jsx)(l.Mi4, {
                    id: d.n.PASSWORD,
                    impressionProperties: x,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, i.jsx)(s.Z, {
                        setOriginalEmail: f,
                        setSlide: _,
                        transitionTo: t,
                        ready: m === d.n.PASSWORD,
                        token: n
                    })
                }),
                (0, i.jsx)(l.Mi4, {
                    id: d.n.SUCCESS,
                    impressionProperties: x,
                    impressionName: a.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, i.jsx)(c.Z, { email: p })
                })
            ]
        })
    });
}
