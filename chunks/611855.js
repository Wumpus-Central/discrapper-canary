n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(388032),
    u = n(896810);
let d = function (e) {
    let { className: t, color: n = "header-primary", textOpacity: i = 0.9 } = e,
        d = (0, l.Fg)(),
        f = (0, o.wj)(d) ? 0.2 : 0.08;
    return (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: n,
        className: a()(u.promotedTag, t),
        children: [
            (0, r.jsx)("span", {
                className: u.promotedTagBackground,
                style: { backgroundColor: "rgba(0, 0, 0, ".concat(f, ")") },
            }),
            (0, r.jsx)("span", {
                style: { opacity: i },
                children: c.intl.string(c.t.o6FLcF),
            }),
        ],
    });
};
