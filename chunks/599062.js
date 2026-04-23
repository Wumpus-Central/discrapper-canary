"use strict";
n.d(t, { A: () => E, h: () => m });
var r,
    i = n(627968);
n(64700);
var s = n(311907),
    a = n(462887),
    o = n(534514),
    l = n(834730),
    u = n(821609),
    c = n(736653),
    d = n(287809),
    _ = n(985018),
    f = n(588651),
    p = n(626768),
    h = n(464896),
    E = (((r = {})[(r.SHOP_PAGE = 0)] = "SHOP_PAGE"), (r[(r.GIFT_MODAL = 1)] = "GIFT_MODAL"), r);
let m = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: r } = e,
        E = (0, c.Ay)(),
        m = (0, s.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        g = 1 === n ? f.tV : f.Df,
        A = 1 === n ? _.intl.string(_.t["+2QBZX"]) : _.intl.string(_.t.LuhKs2);
    return (0, i.jsxs)("div", {
        className: g,
        children: [
            (0, i.jsx)("img", { className: f.__invalid_loadIssueImg, src: (0, a.M)(E) ? p : h, alt: "" }),
            (0, i.jsx)(o.D, { className: f.st, variant: "heading-xl/semibold", children: _.intl.string(_.t.i5SQ74) }),
            (0, i.jsx)(l.E, { className: f.h_, variant: "text-md/normal", children: A }),
            m && null != r && (0, i.jsx)(l.E, { variant: "text-md/normal", children: "staff-only debug: " + r }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.yQ,
                children: (0, i.jsx)(u.$, { variant: "primary", text: _.intl.string(_.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
