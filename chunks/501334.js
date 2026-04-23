"use strict";
n.d(t, { u: () => h });
var i = n(627968),
    s = n(64700),
    r = n(347704),
    l = n(331322),
    a = n(834730),
    o = n(939249),
    c = n(881636),
    d = n(887324),
    u = n(985018),
    _ = n(913951);
let h = () => {
    let { goToStep: e } = (0, r.n)(),
        t = s.useCallback(() => {
            e(d.IK.DSA);
        }, [e]),
        n = s.useCallback(() => {
            e(d.IK.TIDA);
        }, [e]);
    return (0, i.jsxs)(l.B, {
        gap: 8,
        children: [
            (0, i.jsx)(a.E, { variant: "text-md/normal", children: u.intl.string(u.t.bd1h5T) }),
            (0, i.jsxs)("div", {
                className: _.k,
                children: [
                    (0, i.jsxs)(o.D, {
                        className: _.b,
                        onClick: t,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(a.E, {
                                        variant: "text-md/medium",
                                        children: u.intl.string(u.t["AszWL/"]),
                                    }),
                                    (0, i.jsx)(a.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: u.intl.string(u.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.u, { size: "sm" }),
                        ],
                    }),
                    (0, i.jsxs)(o.D, {
                        className: _.b,
                        onClick: n,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(a.E, { variant: "text-md/medium", children: u.intl.string(u.t.jMSjZL) }),
                                    (0, i.jsx)(a.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: u.intl.string(u.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
