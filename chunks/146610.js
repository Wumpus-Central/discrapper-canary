n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(167533),
    l = n(73346),
    o = n(169903),
    c = n(67152),
    d = n(388032),
    u = n(414510),
    m = n(769570);
let g = [
        {
            key: 'tier_name',
            cellClassName: u.tierNameColumn,
            renderHeader: () => d.NW.string(d.t['2Uiha2']),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, l._W)(n.application_id, n.image_asset, 128);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('img', {
                                src: e,
                                alt: '',
                                className: u.tierImage
                            }),
                            n.name
                        ]
                    });
                }
                return (0, r.jsx)(c.bL, {
                    className: u.tierNameCell,
                    children: t
                });
            }
        },
        {
            key: 'subscribers',
            cellClassName: s()(u.subscribersColumn, m.cellAlignRight),
            renderHeader: () => d.NW.string(d.t.zu8go6),
            render: (e) => (0, r.jsx)(c.av, { children: e.roleMemberCount })
        },
        {
            key: 'price',
            cellClassName: s()(u.priceColumn, m.cellAlignRight),
            renderHeader: () => d.NW.string(d.t.NcrbWF),
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
            l = (0, o.Z)(n, t);
        return (0, r.jsx)('div', {
            className: s()(m.tableContainer, i),
            children: (0, r.jsx)(a.Z, {
                columns: g,
                data: l,
                className: s()(m.table, u.table),
                rowClassName: u.row,
                headerClassName: s()(m.header, u.header)
            })
        });
    };
