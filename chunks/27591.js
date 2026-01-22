n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(596719),
    a = n(371794),
    c = n(836923),
    o = n(317547),
    d = n(985018),
    u = n(165683),
    f = n(921503);
let g = [
        {
            key: "tier_name",
            cellClassName: u.Cg,
            renderHeader: () => d.intl.string(d.t["2Uiha2"]),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e =
                        (null == n ? void 0 : n.image_asset) == null
                            ? void 0
                            : (0, a.YE)(n.application_id, n.image_asset, 128);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", {
                                src: e,
                                alt: "",
                                className: u.ah,
                            }),
                            n.name,
                        ],
                    });
                }
                return (0, r.jsx)(o.fh, {
                    className: u.uR,
                    children: t,
                });
            },
        },
        {
            key: "subscribers",
            cellClassName: l()(u.wC, f.WI),
            renderHeader: () => d.intl.string(d.t.zu8go1),
            render: (e) => (0, r.jsx)(o.MD, { children: e.roleMemberCount }),
        },
        {
            key: "price",
            cellClassName: l()(u.k1, f.WI),
            renderHeader: () => d.intl.string(d.t.NcrbWI),
            render(e) {
                let { subscriptionListing: t } = e,
                    n = null == t ? void 0 : t.subscription_plans[0],
                    i = null == n ? void 0 : n.price;
                return (0, r.jsx)(o.Kh, { children: i });
            },
        },
    ],
    b = (e) => {
        let { totalPayoutsForPeriod: t, guildId: n, className: i } = e,
            a = (0, c.A)(n, t);
        return (0, r.jsx)("div", {
            className: l()(f.CZ, i),
            children: (0, r.jsx)(s.A, {
                columns: g,
                data: a,
                className: l()(f.tp, u.tp),
                rowClassName: u.nM,
                headerClassName: l()(f.wx, u.wx),
            }),
        });
    };
