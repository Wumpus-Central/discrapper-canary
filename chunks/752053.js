n.d(t, {
    i: function () {
        return r;
    }
});
var i,
    r,
    o = n(200651);
n(192379);
var a = n(442837),
    l = n(780384),
    c = n(481060),
    s = n(410030),
    d = n(594174),
    u = n(388032),
    f = n(733983),
    p = n(982240),
    m = n(533854);
((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (i[(i.GIFT_MODAL = 1)] = 'GIFT_MODAL');
t.Z = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: i } = e,
        r = (0, s.ZP)(),
        b = (0, a.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        _ = 1 === n ? f.giftModalContainer : f.shopPageContainer,
        x = 1 === n ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, o.jsxs)('div', {
        className: _,
        children: [
            (0, o.jsx)('img', {
                className: f.__invalid_loadIssueImg,
                src: (0, l.wj)(r) ? p : m,
                alt: ''
            }),
            (0, o.jsx)(c.Heading, {
                className: f.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, o.jsx)(c.Text, {
                className: f.description,
                variant: 'text-md/normal',
                children: x
            }),
            b &&
                null != i &&
                (0, o.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, o.jsx)(c.Button, {
                className: f.reload,
                size: c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.BRAND,
                onClick: t,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
