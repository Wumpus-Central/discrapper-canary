n.d(t, { A: () => E, h: () => A });
var l,
    i = n(627968);
n(64700);
var r = n(17928),
    a = n(462887),
    s = n(534514),
    o = n(834730),
    u = n(821609),
    c = n(736653),
    d = n(287809),
    p = n(375708),
    m = n(588651),
    h = n(626768),
    C = n(464896),
    E = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
let A = function (e) {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
        E = (0, c.Ay)(),
        A = (0, r.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        f = 1 === n ? m.tV : m.Df,
        S = 1 === n ? p.intl.string(p.t["+2QBZX"]) : p.intl.string(p.t.LuhKs2);
    return (0, i.jsxs)("div", {
        className: f,
        children: [
            (0, i.jsx)("img", { className: m.__invalid_loadIssueImg, src: (0, a.M)(E) ? h : C, alt: "" }),
            (0, i.jsx)(s.D, { className: m.st, variant: "heading-xl/semibold", children: p.intl.string(p.t.i5SQ74) }),
            (0, i.jsx)(o.E, { className: m.h_, variant: "text-md/normal", children: S }),
            A && null != l && (0, i.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.yQ,
                children: (0, i.jsx)(u.$, { variant: "primary", text: p.intl.string(p.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
