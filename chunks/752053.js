n.d(t, {
    Z: () => p,
    i: () => _
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(410030),
    l = n(594174),
    u = n(388032),
    c = n(341640),
    d = n(982240),
    f = n(533854),
    _ = (function (e) {
        return (e[(e.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (e[(e.GIFT_MODAL = 1)] = 'GIFT_MODAL'), e;
    })({});
let p = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: _ } = e,
        p = (0, o.ZP)(),
        h = (0, r.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        m = 1 === n ? c.giftModalContainer : c.shopPageContainer,
        g = 1 === n ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, i.jsxs)('div', {
        className: m,
        children: [
            (0, i.jsx)('img', {
                className: c.__invalid_loadIssueImg,
                src: (0, a.wj)(p) ? d : f,
                alt: ''
            }),
            (0, i.jsx)(s.X6q, {
                className: c.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, i.jsx)(s.Text, {
                className: c.description,
                variant: 'text-md/normal',
                children: g
            }),
            h &&
                null != _ &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + _
                }),
            (0, i.jsx)(s.zxk, {
                className: c.reload,
                size: s.zxk.Sizes.MEDIUM,
                color: s.zxk.Colors.BRAND,
                onClick: t,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
