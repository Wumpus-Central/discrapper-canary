n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    o = n(481060),
    s = n(301938),
    a = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, f] = i.useState(u.n.START),
        [p, g] = i.useState(null),
        [m, _] = i.useState(""),
        x = { impression_group: l.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)("div", {
        style: { margin: "8px" },
        children: (0, r.jsxs)(o.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: g,
            children: [
                (0, r.jsx)(o.Mi4, {
                    id: u.n.START,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(a.Z, {
                        setSlide: f,
                        transitionTo: t,
                    }),
                }),
                (0, r.jsx)(o.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(s.Z, {
                        setOriginalEmail: _,
                        setSlide: f,
                        transitionTo: t,
                        ready: p === u.n.PASSWORD,
                        token: n,
                    }),
                }),
                (0, r.jsx)(o.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: x,
                    impressionName: l.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: m }),
                }),
            ],
        }),
    });
}
