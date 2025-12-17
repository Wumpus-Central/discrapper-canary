n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(990547),
    a = n(481060),
    l = n(301938),
    o = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, f] = i.useState(u.n.START),
        [g, m] = i.useState(null),
        [p, x] = i.useState(""),
        _ = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)("div", {
        style: { margin: "8px" },
        children: (0, r.jsxs)(a.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: m,
            children: [
                (0, r.jsx)(a.Mi4, {
                    id: u.n.START,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(o.Z, {
                        setSlide: f,
                        transitionTo: t,
                    }),
                }),
                (0, r.jsx)(a.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(l.Z, {
                        setOriginalEmail: x,
                        setSlide: f,
                        transitionTo: t,
                        ready: g === u.n.PASSWORD,
                        token: n,
                    }),
                }),
                (0, r.jsx)(a.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: _,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: p }),
                }),
            ],
        }),
    });
}
