"use strict";
n.d(t, { A: () => f, h: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(736653),
    l = n(287809),
    u = n(985018),
    c = n(535280),
    d = n(626768),
    _ = n(464896),
    f = (function (e) {
        return (e[(e.SHOP_PAGE = 0)] = "SHOP_PAGE"), (e[(e.GIFT_MODAL = 1)] = "GIFT_MODAL"), e;
    })({});
let p = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: f } = e,
        p = (0, o.Ay)(),
        h = (0, i.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        m = 1 === n ? c.tV : c.Df,
        g = 1 === n ? u.intl.string(u.t["+2QBZX"]) : u.intl.string(u.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: m,
        children: [
            (0, r.jsx)("img", { className: c.__invalid_loadIssueImg, src: (0, a.Mw)(p) ? d : _, alt: "" }),
            (0, r.jsx)(s.Heading, {
                className: c.st,
                variant: "heading-xl/semibold",
                children: u.intl.string(u.t.i5SQ74),
            }),
            (0, r.jsx)(s.Text, { className: c.h_, variant: "text-md/normal", children: g }),
            h && null != f && (0, r.jsx)(s.Text, { variant: "text-md/normal", children: "staff-only debug: " + f }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: c.yQ,
                children: (0, r.jsx)(s.Button, { variant: "primary", text: u.intl.string(u.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
