n.d(t, {
    A: () => p,
    h: () => _,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(736653),
    l = n(287809),
    c = n(985018),
    u = n(535280),
    d = n(626768),
    f = n(464896),
    p = (function (e) {
        return (e[(e.SHOP_PAGE = 0)] = "SHOP_PAGE"), (e[(e.GIFT_MODAL = 1)] = "GIFT_MODAL"), e;
    })({});
let _ = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: p } = e,
        _ = (0, o.Ay)(),
        h = (0, i.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        m = 1 === n ? u.tV : u.Df,
        g = 1 === n ? c.intl.string(c.t["+2QBZX"]) : c.intl.string(c.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: m,
        children: [
            (0, r.jsx)("img", {
                className: u.__invalid_loadIssueImg,
                src: (0, a.Mw)(_) ? d : f,
                alt: "",
            }),
            (0, r.jsx)(s.Heading, {
                className: u.st,
                variant: "heading-xl/semibold",
                children: c.intl.string(c.t.i5SQ74),
            }),
            (0, r.jsx)(s.Text, {
                className: u.h_,
                variant: "text-md/normal",
                children: g,
            }),
            h &&
                null != p &&
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: "staff-only debug: " + p,
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: u.yQ,
                children: (0, r.jsx)(s.Button, {
                    variant: "primary",
                    text: c.intl.string(c.t["+hivLW"]),
                    onClick: t,
                }),
            }),
        ],
    });
};
