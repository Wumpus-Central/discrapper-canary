n.d(t, {
    Mn: function () {
        return o;
    },
    WM: function () {
        return d;
    },
    _2: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(389401);
let o = 16;
function c(e) {
    let { description: t, name: n, icon: l, onNavigate: c, className: d, missingNavIcon: u } = e;
    return (0, i.jsxs)(a.Clickable, {
        onClick: c,
        className: r()(s.modInfoItem, null != c && s.modInfoAction, d),
        children: [
            null != l &&
                (0, i.jsx)('div', {
                    className: s.modInfoItemIcon,
                    children: l
                }),
            null != n &&
                (0, i.jsx)('div', {
                    className: s.modInfoItemName,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: s.modInfoItemDescription,
                children: t
            }),
            null != c &&
                (0, i.jsx)('div', {
                    className: s.modInfoItemActionIcon,
                    children: (0, i.jsx)(a.ChevronLargeRightIcon, {
                        size: 'custom',
                        width: o,
                        height: o
                    })
                }),
            null == c &&
                null != u &&
                (0, i.jsx)('div', {
                    className: s.modInfoItemActionIcon,
                    children: u
                })
        ]
    });
}
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: s.modInfoItemContainer,
        children: t
    });
}
