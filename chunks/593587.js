n.d(t, { A: () => a });
var i = n(627968),
    l = n(397927),
    s = n(890687),
    r = n(985018);
let a = function (e) {
    let { quest: t, size: n } = e,
        a = (0, s.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return (0, i.jsx)(l.Button, {
        variant: "secondary",
        disabled: !0,
        fullWidth: !0,
        size: n,
        text: r.intl.format(r.t["14o6QY"], { expiryDate: a }),
    });
};
