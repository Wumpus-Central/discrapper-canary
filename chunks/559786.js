n.d(t, { Z: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(990547),
    l = n(481060),
    o = n(301938),
    a = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, p] = i.useState(u.n.START),
        [g, f] = i.useState(null),
        [m, _] = i.useState(''),
        N = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)('div', {
        style: { margin: '8px' },
        children: (0, r.jsxs)(l.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: f,
            children: [
                (0, r.jsx)(l.Mi4, {
                    id: u.n.START,
                    impressionProperties: N,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(a.Z, {
                        setSlide: p,
                        transitionTo: t
                    })
                }),
                (0, r.jsx)(l.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: N,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(o.Z, {
                        setOriginalEmail: _,
                        setSlide: p,
                        transitionTo: t,
                        ready: g === u.n.PASSWORD,
                        token: n
                    })
                }),
                (0, r.jsx)(l.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: N,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: m })
                })
            ]
        })
    });
}
