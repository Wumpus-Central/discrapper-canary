n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(167533),
    a = n(73346),
    o = n(169903),
    c = n(67152),
    u = n(388032),
    d = n(414510),
    m = n(769570);
let g = [
        {
            key: 'tier_name',
            cellClassName: d.tierNameColumn,
            renderHeader: () => u.intl.string(u.t['2Uiha2']),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, a._W)(n.application_id, n.image_asset, 128);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('img', {
                                src: e,
                                alt: '',
                                className: d.tierImage
                            }),
                            n.name
                        ]
                    });
                }
                return (0, r.jsx)(c.bL, {
                    className: d.tierNameCell,
                    children: t
                });
            }
        },
        {
            key: 'subscribers',
            cellClassName: l()(d.subscribersColumn, m.cellAlignRight),
            renderHeader: () => u.intl.string(u.t.zu8go6),
            render: (e) => (0, r.jsx)(c.av, { children: e.roleMemberCount })
        },
        {
            key: 'price',
            cellClassName: l()(d.priceColumn, m.cellAlignRight),
            renderHeader: () => u.intl.string(u.t.NcrbWF),
            render(e) {
                let { subscriptionListing: t } = e,
                    n = null == t ? void 0 : t.subscription_plans[0],
                    i = null == n ? void 0 : n.price;
                return (0, r.jsx)(c.kA, { children: i });
            }
        }
    ],
    p = (e) => {
        let { totalPayoutsForPeriod: t, guildId: n, className: i } = e,
            a = (0, o.Z)(n, t);
        return (0, r.jsx)('div', {
            className: l()(m.tableContainer, i),
            children: (0, r.jsx)(s.Z, {
                columns: g,
                data: a,
                className: l()(m.table, d.table),
                rowClassName: d.row,
                headerClassName: l()(m.header, d.header)
            })
        });
    };
