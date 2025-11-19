n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(167533),
    s = n(73346),
    o = n(169903),
    c = n(67152),
    d = n(388032),
    u = n(710905),
    g = n(896519);
let m = [
        {
            key: "tier_name",
            cellClassName: u.tierNameColumn,
            renderHeader: () => d.intl.string(d.t["2Uiha2"]),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e =
                        (null == n ? void 0 : n.image_asset) == null
                            ? void 0
                            : (0, s._W)(n.application_id, n.image_asset, 128);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", {
                                src: e,
                                alt: "",
                                className: u.tierImage,
                            }),
                            n.name,
                        ],
                    });
                }
                return (0, r.jsx)(c.bL, {
                    className: u.tierNameCell,
                    children: t,
                });
            },
        },
        {
            key: "subscribers",
            cellClassName: l()(u.subscribersColumn, g.cellAlignRight),
            renderHeader: () => d.intl.string(d.t.zu8go1),
            render: (e) => (0, r.jsx)(c.av, { children: e.roleMemberCount }),
        },
        {
            key: "price",
            cellClassName: l()(u.priceColumn, g.cellAlignRight),
            renderHeader: () => d.intl.string(d.t.NcrbWI),
            render(e) {
                let { subscriptionListing: t } = e,
                    n = null == t ? void 0 : t.subscription_plans[0],
                    i = null == n ? void 0 : n.price;
                return (0, r.jsx)(c.kA, { children: i });
            },
        },
    ],
    p = (e) => {
        let { totalPayoutsForPeriod: t, guildId: n, className: i } = e,
            s = (0, o.Z)(n, t);
        return (0, r.jsx)("div", {
            className: l()(g.tableContainer, i),
            children: (0, r.jsx)(a.Z, {
                columns: m,
                data: s,
                className: l()(g.table, u.table),
                rowClassName: u.row,
                headerClassName: l()(g.header, u.header),
            }),
        });
    };
