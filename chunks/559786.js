n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(990547),
    l = n(481060),
    a = n(301938),
    o = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, g] = i.useState(u.n.START),
        [m, p] = i.useState(null),
        [f, _] = i.useState(""),
        x = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, r.jsx)("div", {
        style: { margin: "8px" },
        children: (0, r.jsxs)(l.MyZ, {
            activeSlide: h,
            width: d,
            onSlideReady: p,
            children: [
                (0, r.jsx)(l.Mi4, {
                    id: u.n.START,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, r.jsx)(o.Z, {
                        setSlide: g,
                        transitionTo: t,
                    }),
                }),
                (0, r.jsx)(l.Mi4, {
                    id: u.n.PASSWORD,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(a.Z, {
                        setOriginalEmail: _,
                        setSlide: g,
                        transitionTo: t,
                        ready: m === u.n.PASSWORD,
                        token: n,
                    }),
                }),
                (0, r.jsx)(l.Mi4, {
                    id: u.n.SUCCESS,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, r.jsx)(c.Z, { email: f }),
                }),
            ],
        }),
    });
}
