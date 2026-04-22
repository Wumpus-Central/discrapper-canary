n.d(t, { A: () => A, h: () => h });
var l,
    r = n(627968);
n(64700);
var i = n(311907),
    s = n(462887),
    a = n(534514),
    o = n(834730),
    u = n(821609),
    d = n(736653),
    c = n(287809),
    C = n(985018),
    p = n(588651),
    m = n(626768),
    E = n(464896),
    A = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
let h = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
        A = (0, d.Ay)(),
        h = (0, i.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        f = 1 === n ? p.tV : p.Df,
        _ = 1 === n ? C.intl.string(C.t["+2QBZX"]) : C.intl.string(C.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: f,
        children: [
            (0, r.jsx)("img", { className: p.__invalid_loadIssueImg, src: (0, s.M)(A) ? m : E, alt: "" }),
            (0, r.jsx)(a.D, { className: p.st, variant: "heading-xl/semibold", children: C.intl.string(C.t.i5SQ74) }),
            (0, r.jsx)(o.E, { className: p.h_, variant: "text-md/normal", children: _ }),
            h && null != l && (0, r.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.yQ,
                children: (0, r.jsx)(u.$, { variant: "primary", text: C.intl.string(C.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
