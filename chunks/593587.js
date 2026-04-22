n.d(t, { A: () => r });
var i = n(627968),
    l = n(821609),
    a = n(890687),
    s = n(985018);
let r = function (e) {
    let { quest: t, size: n } = e,
        r = (0, a.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return (0, i.jsx)(l.$, {
        variant: "secondary",
        disabled: !0,
        fullWidth: !0,
        size: n,
        text: s.intl.format(s.t["6p8BZx"], { expiryDate: r }),
    });
};
