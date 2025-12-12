n.d(t, { d: () => c });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    a = n(594961),
    l = n(388032),
    o = n(565038);
let c = (e) => {
    let { onNavigate: t } = e,
        n = i.useCallback(() => {
            t(a.V4.DSA);
        }, [t]),
        c = i.useCallback(() => {
            t(a.V4.TIDA);
        }, [t]);
    return (0, r.jsxs)(s.Kqy, {
        gap: 8,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                children: l.intl.string(l.t.Z11w18),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: l.intl.string(l.t.bd1h5T),
            }),
            (0, r.jsxs)("div", {
                className: o.container,
                children: [
                    (0, r.jsxs)(s.P3F, {
                        className: o.reportButton,
                        onClick: n,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: l.intl.string(l.t["AszWL/"]),
                            }),
                            (0, r.jsx)(s.LJT, { size: "sm" }),
                        ],
                    }),
                    (0, r.jsxs)(s.P3F, {
                        className: o.reportButton,
                        onClick: c,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: l.intl.string(l.t.jMSjZL),
                            }),
                            (0, r.jsx)(s.LJT, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
