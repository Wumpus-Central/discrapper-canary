"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(88001),
    d = n(519412),
    _ = n(985018),
    f = n(810758);
let p = (e) => {
    let { alwaysWhite: t = !1 } = e,
        n = (0, u.DP)(),
        i = (0, o.qB)(n);
    return (0, r.jsx)(s.m, {
        text: _.intl.formatToPlainString(d.default["5xN/C1"], { premiumGroupProductName: (0, c.DP)() }),
        children: (0, r.jsx)("div", {
            className: a()(f.bE, { [f._k]: !t && i }),
            children: (0, r.jsx)(l.Text, {
                variant: "eyebrow",
                color: t ? "always-white" : void 0,
                className: f.gp,
                children: _.intl.string(_.t["5nrJDO"]),
            }),
        }),
    });
};
