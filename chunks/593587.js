n.d(e, { A: () => r });
var s = n(627968),
    i = n(821609),
    l = n(890687),
    a = n(985018);
let r = function (t) {
    let { quest: e, size: n } = t,
        r = (0, l.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
    return (0, s.jsx)(i.$, {
        variant: "secondary",
        disabled: !0,
        fullWidth: !0,
        size: n,
        text: a.intl.format(a.t["6p8BZx"], { expiryDate: r }),
    });
};
