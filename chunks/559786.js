n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(990547),
    s = n(481060),
    o = n(301938),
    a = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, p] = i.useState(u.n.START),
        [g, f] = i.useState(null),
        [m, _] = i.useState(''),
        x = { impression_group: l.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)('div', {
        style: { margin: '8px' },
        children: (0, r.jsxs)(s.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: f,
            children: [
                (0, r.jsx)(s.Mi4, {
                    id: u.n.START,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(a.Z, {
                        setSlide: p,
                        transitionTo: t
                    })
                }),
                (0, r.jsx)(s.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(o.Z, {
                        setOriginalEmail: _,
                        setSlide: p,
                        transitionTo: t,
                        ready: g === u.n.PASSWORD,
                        token: n
                    })
                }),
                (0, r.jsx)(s.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: m })
                })
            ]
        })
    });
}
