n.d(t, {
    i: function () {
        return o;
    }
});
var i,
    o,
    a = n(200651);
n(192379);
var r = n(442837),
    c = n(780384),
    d = n(481060),
    s = n(410030),
    l = n(594174),
    f = n(388032),
    u = n(259319),
    p = n(982240),
    _ = n(533854);
((i = o || (o = {}))[(i.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (i[(i.GIFT_MODAL = 1)] = 'GIFT_MODAL');
t.Z = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: i } = e,
        o = (0, s.ZP)(),
        b = (0, r.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        x = 1 === n ? u.giftModalContainer : u.shopPageContainer,
        g = 1 === n ? f.intl.string(f.t['+2QBZW']) : f.intl.string(f.t.LuhKs7);
    return (0, a.jsxs)('div', {
        className: x,
        children: [
            (0, a.jsx)('img', {
                className: u.__invalid_loadIssueImg,
                src: (0, c.wj)(o) ? p : _,
                alt: ''
            }),
            (0, a.jsx)(d.Heading, {
                className: u.heading1,
                variant: 'heading-xl/semibold',
                children: f.intl.string(f.t['i5SQ7+'])
            }),
            (0, a.jsx)(d.Text, {
                className: u.description,
                variant: 'text-md/normal',
                children: g
            }),
            b &&
                null != i &&
                (0, a.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, a.jsx)(d.Button, {
                className: u.reload,
                size: d.Button.Sizes.MEDIUM,
                color: d.Button.Colors.BRAND,
                onClick: t,
                children: f.intl.string(f.t['+hivLS'])
            })
        ]
    });
};
