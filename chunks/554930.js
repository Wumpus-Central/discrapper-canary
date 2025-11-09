n.d(t, { C: () => c });
var r = n(951288),
    i = n(793030),
    a = n(717739),
    o = n(469165),
    s = n(388032),
    l = n(55604);
let c = (e) => {
    let { percentage: t } = e,
        n = new Date(),
        c = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
    return (0, r.jsxs)("div", {
        className: l.container,
        children: [
            (0, r.jsx)(i.xvT, {
                variant: "text-sm/normal",
                color: "text-primary",
                children: s.intl.format(s.t["43kZKL"], { days: c - n.getDate() }),
            }),
            (0, r.jsx)(o.gu, { percentage: t }),
            (0, r.jsx)(a.D, {}),
        ],
    });
};
