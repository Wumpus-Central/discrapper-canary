n.d(t, { C: () => d });
var r = n(54381),
    i = n(793030),
    a = n(442837),
    o = n(594174),
    s = n(717739),
    l = n(469165),
    c = n(388032),
    u = n(587015);
let d = (e) => {
    let { percentage: t } = e,
        n = new Date(),
        d = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(),
        f = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        p = null == f ? void 0 : f.isFractionalPremiumWithNoSubscription();
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)(i.xvT, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: p ? c.intl.string(c.t.E1ONHQ) : c.intl.format(c.t["43kZKL"], { days: d - n.getDate() }),
            }),
            !1 === p && (0, r.jsx)(l.gu, { percentage: t }),
            (0, r.jsx)(s.D, {}),
        ],
    });
};
