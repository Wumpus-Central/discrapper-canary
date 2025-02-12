n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(167533),
    a = n(73346),
    o = n(169903),
    c = n(67152),
    d = n(388032),
    u = n(639963),
    m = n(478881);
let h = [
        {
            key: 'tier_name',
            cellClassName: u.tierNameColumn,
            renderHeader: () => d.intl.string(d.t['2Uiha2']),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, a._W)(n.application_id, n.image_asset, 128);
                    t = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: e,
                                alt: '',
                                className: u.tierImage
                            }),
                            n.name
                        ]
                    });
                }
                return (0, i.jsx)(c.bL, {
                    className: u.tierNameCell,
                    children: t
                });
            }
        },
        {
            key: 'subscribers',
            cellClassName: l()(u.subscribersColumn, m.cellAlignRight),
            renderHeader: () => d.intl.string(d.t.zu8go6),
            render: (e) => (0, i.jsx)(c.av, { children: e.roleMemberCount })
        },
        {
            key: 'price',
            cellClassName: l()(u.priceColumn, m.cellAlignRight),
            renderHeader: () => d.intl.string(d.t.NcrbWF),
            render(e) {
                let { subscriptionListing: t } = e,
                    n = null == t ? void 0 : t.subscription_plans[0],
                    r = null == n ? void 0 : n.price;
                return (0, i.jsx)(c.kA, { children: r });
            }
        }
    ],
    g = (e) => {
        let { totalPayoutsForPeriod: t, guildId: n, className: r } = e,
            a = (0, o.Z)(n, t);
        return (0, i.jsx)('div', {
            className: l()(m.tableContainer, r),
            children: (0, i.jsx)(s.Z, {
                columns: h,
                data: a,
                className: l()(m.table, u.table),
                rowClassName: u.row,
                headerClassName: l()(m.header, u.header)
            })
        });
    };
