"use strict";
n.d(t, { A: () => f, h: () => g });
var i,
    r = n(627968);
n(64700);
var s = n(17928),
    a = n(462887),
    o = n(534514),
    l = n(834730),
    d = n(821609),
    _ = n(736653),
    u = n(287809),
    c = n(985018),
    E = n(588651),
    h = n(626768),
    m = n(464896),
    f = (((i = {})[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"), (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL"), i);
let g = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: i } = e,
        f = (0, _.Ay)(),
        g = (0, s.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        p = 1 === n ? E.tV : E.Df,
        A = 1 === n ? c.intl.string(c.t["+2QBZX"]) : c.intl.string(c.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: p,
        children: [
            (0, r.jsx)("img", { className: E.__invalid_loadIssueImg, src: (0, a.M)(f) ? h : m, alt: "" }),
            (0, r.jsx)(o.D, { className: E.st, variant: "heading-xl/semibold", children: c.intl.string(c.t.i5SQ74) }),
            (0, r.jsx)(l.E, { className: E.h_, variant: "text-md/normal", children: A }),
            g && null != i && (0, r.jsx)(l.E, { variant: "text-md/normal", children: "staff-only debug: " + i }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: E.yQ,
                children: (0, r.jsx)(d.$, { variant: "primary", text: c.intl.string(c.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
