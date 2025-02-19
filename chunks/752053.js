n.d(t, {
    Z: () => _,
    i: () => p
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(594174),
    c = n(388032),
    u = n(826724),
    d = n(982240),
    f = n(533854),
    p = (function (e) {
        return (e[(e.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (e[(e.GIFT_MODAL = 1)] = 'GIFT_MODAL'), e;
    })({});
let _ = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: p } = e,
        _ = (0, s.ZP)(),
        h = (0, i.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        m = 1 === n ? u.giftModalContainer : u.shopPageContainer,
        g = 1 === n ? c.NW.string(c.t['+2QBZW']) : c.NW.string(c.t.LuhKs7);
    return (0, r.jsxs)('div', {
        className: m,
        children: [
            (0, r.jsx)('img', {
                className: u.__invalid_loadIssueImg,
                src: (0, o.wj)(_) ? d : f,
                alt: ''
            }),
            (0, r.jsx)(a.X6q, {
                className: u.heading1,
                variant: 'heading-xl/semibold',
                children: c.NW.string(c.t['i5SQ7+'])
            }),
            (0, r.jsx)(a.Text, {
                className: u.description,
                variant: 'text-md/normal',
                children: g
            }),
            h &&
                null != p &&
                (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + p
                }),
            (0, r.jsx)(a.zxk, {
                className: u.reload,
                size: a.zxk.Sizes.MEDIUM,
                color: a.zxk.Colors.BRAND,
                onClick: t,
                children: c.NW.string(c.t['+hivLS'])
            })
        ]
    });
};
