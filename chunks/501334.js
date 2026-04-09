"use strict";
n.d(t, { u: () => c });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(887324),
    a = n(985018),
    o = n(109974);
let c = () => {
    let { goToStep: e } = (0, r.nqW)(),
        t = s.useCallback(() => {
            e(l.IK.DSA);
        }, [e]),
        n = s.useCallback(() => {
            e(l.IK.TIDA);
        }, [e]);
    return (0, i.jsxs)(r.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(r.Text, { variant: "text-md/normal", children: a.intl.string(a.t.bd1h5T) }),
            (0, i.jsxs)("div", {
                className: o.k,
                children: [
                    (0, i.jsxs)(r.DUT, {
                        className: o.b,
                        onClick: t,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        children: a.intl.string(a.t["AszWL/"]),
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: a.intl.string(a.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.uhT, { size: "sm" }),
                        ],
                    }),
                    (0, i.jsxs)(r.DUT, {
                        className: o.b,
                        onClick: n,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        children: a.intl.string(a.t.jMSjZL),
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: a.intl.string(a.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.uhT, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
