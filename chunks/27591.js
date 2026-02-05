"use strict";
n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(596719),
    a = n(371794),
    o = n(836923),
    d = n(317547),
    c = n(985018),
    u = n(165683),
    m = n(921503);
let g = [
        {
            key: "tier_name",
            cellClassName: u.Cg,
            renderHeader: () => c.intl.string(c.t["2Uiha2"]),
            render(e) {
                let t,
                    { subscriptionListing: n } = e;
                if (null != n) {
                    let e = n?.image_asset == null ? void 0 : (0, a.YE)(n.application_id, n.image_asset, 128);
                    t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("img", { src: e, alt: "", className: u.ah }), n.name],
                    });
                }
                return (0, i.jsx)(d.fh, { className: u.uR, children: t });
            },
        },
        {
            key: "subscribers",
            cellClassName: l()(u.wC, m.WI),
            renderHeader: () => c.intl.string(c.t.zu8go1),
            render: (e) => (0, i.jsx)(d.MD, { children: e.roleMemberCount }),
        },
        {
            key: "price",
            cellClassName: l()(u.k1, m.WI),
            renderHeader: () => c.intl.string(c.t.NcrbWI),
            render(e) {
                let { subscriptionListing: t } = e,
                    n = t?.subscription_plans[0],
                    s = n?.price;
                return (0, i.jsx)(d.Kh, { children: s });
            },
        },
    ],
    x = (e) => {
        let { totalPayoutsForPeriod: t, guildId: n, className: s } = e,
            a = (0, o.A)(n, t);
        return (0, i.jsx)("div", {
            className: l()(m.CZ, s),
            children: (0, i.jsx)(r.A, {
                columns: g,
                data: a,
                className: l()(m.tp, u.tp),
                rowClassName: u.nM,
                headerClassName: l()(m.wx, u.wx),
            }),
        });
    };
