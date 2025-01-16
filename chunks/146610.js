var i,
    r,
    l = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    o = n(167533),
    c = n(73346),
    d = n(169903),
    u = n(67152),
    m = n(388032),
    h = n(294843),
    g = n(641991);
((i = r || (r = {})).TIER_NAME = 'tier_name'), (i.SUBSCRIBERS = 'subscribers'), (i.AMOUNT = 'amount'), (i.PRICE = 'price');
let x = [
    {
        key: 'tier_name',
        cellClassName: h.tierNameColumn,
        renderHeader: () => m.intl.string(m.t['2Uiha2']),
        render(e) {
            let t,
                { subscriptionListing: n } = e;
            if (null != n) {
                let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, c._W)(n.application_id, n.image_asset, 128);
                t = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)('img', {
                            src: e,
                            alt: '',
                            className: h.tierImage
                        }),
                        n.name
                    ]
                });
            }
            return (0, l.jsx)(u.bL, {
                className: h.tierNameCell,
                children: t
            });
        }
    },
    {
        key: 'subscribers',
        cellClassName: a()(h.subscribersColumn, g.cellAlignRight),
        renderHeader: () => m.intl.string(m.t.zu8go6),
        render: (e) => (0, l.jsx)(u.av, { children: e.roleMemberCount })
    },
    {
        key: 'price',
        cellClassName: a()(h.priceColumn, g.cellAlignRight),
        renderHeader: () => m.intl.string(m.t.NcrbWF),
        render(e) {
            let { subscriptionListing: t } = e,
                n = null == t ? void 0 : t.subscription_plans[0],
                i = null == n ? void 0 : n.price;
            return (0, l.jsx)(u.kA, { children: i });
        }
    }
];
t.Z = (e) => {
    let { totalPayoutsForPeriod: t, guildId: n, className: i } = e,
        r = (0, d.Z)(n, t);
    return (0, l.jsx)('div', {
        className: a()(g.tableContainer, i),
        children: (0, l.jsx)(o.Z, {
            columns: x,
            data: r,
            className: a()(g.table, h.table),
            rowClassName: h.row,
            headerClassName: a()(g.header, h.header)
        })
    });
};
