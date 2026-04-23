"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(430690),
    a = n(585541),
    o = n(163698),
    c = n(528685),
    d = n(524832);
function u(e) {
    let { transitionTo: t, token: n, width: u } = e,
        [_, h] = s.useState(d.k.START),
        [m, g] = s.useState(null),
        [p, A] = s.useState(""),
        f = { impression_group: r.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, i.jsx)("div", {
        style: { margin: "8px" },
        children: (0, i.jsxs)(l.t, {
            activeSlide: _,
            width: u,
            onSlideReady: g,
            children: [
                (0, i.jsx)(l.q, {
                    id: d.k.START,
                    impressionProperties: f,
                    impressionName: r.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, i.jsx)(o.A, { setSlide: h, transitionTo: t }),
                }),
                (0, i.jsx)(l.q, {
                    id: d.k.PASSWORD,
                    impressionProperties: f,
                    impressionName: r.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, i.jsx)(a.A, {
                        setOriginalEmail: A,
                        setSlide: h,
                        transitionTo: t,
                        ready: m === d.k.PASSWORD,
                        token: n,
                    }),
                }),
                (0, i.jsx)(l.q, {
                    id: d.k.SUCCESS,
                    impressionProperties: f,
                    impressionName: r.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, i.jsx)(c.A, { email: p }),
                }),
            ],
        }),
    });
}
