n.d(t, { A: () => _, h: () => E });
var l,
    r = n(627968);
n(64700);
var i = n(17928),
    a = n(462887),
    s = n(534514),
    o = n(834730),
    u = n(821609),
    d = n(736653),
    c = n(287809),
    C = n(985018),
    p = n(588651),
    m = n(626768),
    h = n(464896),
    _ = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
let E = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
        _ = (0, d.Ay)(),
        E = (0, i.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        A = 1 === n ? p.tV : p.Df,
        g = 1 === n ? C.intl.string(C.t["+2QBZX"]) : C.intl.string(C.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: A,
        children: [
            (0, r.jsx)("img", { className: p.__invalid_loadIssueImg, src: (0, a.M)(_) ? m : h, alt: "" }),
            (0, r.jsx)(s.D, { className: p.st, variant: "heading-xl/semibold", children: C.intl.string(C.t.i5SQ74) }),
            (0, r.jsx)(o.E, { className: p.h_, variant: "text-md/normal", children: g }),
            E && null != l && (0, r.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.yQ,
                children: (0, r.jsx)(u.$, { variant: "primary", text: C.intl.string(C.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
