n.d(t, { A: () => f, h: () => E });
var l,
    i = n(477900);
n(582128);
var r = n(17928),
    a = n(462887),
    s = n(297264),
    o = n(834730),
    u = n(821609),
    c = n(736653),
    d = n(287809),
    m = n(375708),
    p = n(634090),
    C = n(626768),
    h = n(464896),
    f = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
let E = function (e) {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
        f = (0, c.Ay)(),
        E = (0, r.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        S = 1 === n ? p.tV : p.Df,
        y = 1 === n ? m.intl.string(m.t["+2QBZX"]) : m.intl.string(m.t.LuhKs2);
    return (0, i.jsxs)("div", {
        className: S,
        children: [
            (0, i.jsx)("img", { className: p.__invalid_loadIssueImg, src: (0, a.M)(f) ? C : h, alt: "" }),
            (0, i.jsx)(s.D, { className: p.st, variant: "heading-xl/semibold", children: m.intl.string(m.t.i5SQ74) }),
            (0, i.jsx)(o.E, { className: p.h_, variant: "text-md/normal", children: y }),
            E && null != l && (0, i.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.yQ,
                children: (0, i.jsx)(u.$, { variant: "primary", text: m.intl.string(m.t["+hivLW"]), onClick: t }),
            }),
        ],
    });
};
