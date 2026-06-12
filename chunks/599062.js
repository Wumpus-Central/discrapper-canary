n.d(t, { A: () => E, h: () => T });
var l,
    r = n(627968);
n(64700);
var i = n(17928),
    a = n(462887),
    s = n(534514),
    o = n(834730),
    u = n(821609),
    c = n(736653),
    d = n(287809),
    C = n(375708),
    p = n(588651),
    m = n(626768),
    _ = n(464896),
    E = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
let T = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
        E = (0, c.Ay)(),
        T = (0, i.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        I = 1 === n ? p.tV : p.Df,
        S = 1 === n ? C.intl.string(C.t["+2QBZX"]) : C.intl.string(C.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: I,
        children: [
            (0, r.jsx)("img", { className: p.__invalid_loadIssueImg, src: (0, a.M)(E) ? m : _, alt: "" }),
            (0, r.jsx)(s.D, { className: p.st, variant: "heading-xl/semibold", children: C.intl.string(C.t.i5SQ74) }),
            (0, r.jsx)(o.E, { className: p.h_, variant: "text-md/normal", children: S }),
            T && null != l && (0, r.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.yQ,
                children: (0, r.jsx)(u.$, { variant: "primary", text: C.intl.string(C.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
