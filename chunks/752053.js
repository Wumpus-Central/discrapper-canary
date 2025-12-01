n.d(t, {
    Z: () => _,
    i: () => p,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    l = n(594174),
    c = n(388032),
    u = n(388013),
    d = n(982240),
    f = n(533854),
    p = (function (e) {
        return (e[(e.SHOP_PAGE = 0)] = "SHOP_PAGE"), (e[(e.GIFT_MODAL = 1)] = "GIFT_MODAL"), e;
    })({});
let _ = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: p } = e,
        _ = (0, s.ZP)(),
        m = (0, i.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        h = 1 === n ? u.giftModalContainer : u.shopPageContainer,
        g = 1 === n ? c.intl.string(c.t["+2QBZX"]) : c.intl.string(c.t.LuhKs2);
    return (0, r.jsxs)("div", {
        className: h,
        children: [
            (0, r.jsx)("img", {
                className: u.__invalid_loadIssueImg,
                src: (0, a.wj)(_) ? d : f,
                alt: "",
            }),
            (0, r.jsx)(o.Heading, {
                className: u.heading1,
                variant: "heading-xl/semibold",
                children: c.intl.string(c.t.i5SQ74),
            }),
            (0, r.jsx)(o.Text, {
                className: u.description,
                variant: "text-md/normal",
                children: g,
            }),
            m &&
                null != p &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: "staff-only debug: " + p,
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: u.reload,
                children: (0, r.jsx)(o.Button, {
                    variant: "primary",
                    text: c.intl.string(c.t["+hivLW"]),
                    onClick: t,
                }),
            }),
        ],
    });
};
