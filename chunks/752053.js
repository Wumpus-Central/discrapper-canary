r.d(n, {
    i: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(442837),
    s = r(780384),
    l = r(481060),
    u = r(410030),
    c = r(594174),
    d = r(388032),
    f = r(259319),
    p = r(982240),
    h = r(533854);
!(function (e) {
    (e[(e.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (e[(e.GIFT_MODAL = 1)] = 'GIFT_MODAL');
})(i || (i = {}));
let _ = (e) => {
    let { onRetry: n, errorOrigin: r, errorMessage: i } = e,
        _ = (0, u.ZP)(),
        m = (0, o.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        g = 1 === r ? f.giftModalContainer : f.shopPageContainer,
        E = 1 === r ? d.intl.string(d.t['+2QBZW']) : d.intl.string(d.t.LuhKs7);
    return (0, a.jsxs)('div', {
        className: g,
        children: [
            (0, a.jsx)('img', {
                className: f.__invalid_loadIssueImg,
                src: (0, s.wj)(_) ? p : h,
                alt: ''
            }),
            (0, a.jsx)(l.Heading, {
                className: f.heading1,
                variant: 'heading-xl/semibold',
                children: d.intl.string(d.t['i5SQ7+'])
            }),
            (0, a.jsx)(l.Text, {
                className: f.description,
                variant: 'text-md/normal',
                children: E
            }),
            m &&
                null != i &&
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, a.jsx)(l.Button, {
                className: f.reload,
                size: l.Button.Sizes.MEDIUM,
                color: l.Button.Colors.BRAND,
                onClick: n,
                children: d.intl.string(d.t['+hivLS'])
            })
        ]
    });
};
n.Z = _;
