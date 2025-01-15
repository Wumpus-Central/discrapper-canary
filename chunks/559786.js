n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(990547),
    l = n(481060),
    o = n(301938),
    a = n(806701),
    c = n(808993),
    d = n(720196);
function u(e) {
    let { transitionTo: t, token: n, width: u } = e,
        [h, g] = r.useState(d.n.START),
        [m, f] = r.useState(null),
        [p, x] = r.useState(''),
        _ = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, i.jsx)('div', {
        style: { margin: '8px' },
        children: (0, i.jsxs)(l.Slides, {
            activeSlide: h,
            width: u,
            onSlideReady: f,
            children: [
                (0, i.jsx)(l.Slide, {
                    id: d.n.START,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, i.jsx)(a.Z, {
                        setSlide: g,
                        transitionTo: t
                    })
                }),
                (0, i.jsx)(l.Slide, {
                    id: d.n.PASSWORD,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, i.jsx)(o.Z, {
                        setOriginalEmail: x,
                        setSlide: g,
                        transitionTo: t,
                        ready: m === d.n.PASSWORD,
                        token: n
                    })
                }),
                (0, i.jsx)(l.Slide, {
                    id: d.n.SUCCESS,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, i.jsx)(c.Z, { email: p })
                })
            ]
        })
    });
}
