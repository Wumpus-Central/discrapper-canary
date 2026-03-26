"use strict";
n.d(t, { Q: () => g, e: () => E });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(93159),
    a = n(241989),
    o = n(623373),
    l = n(132198),
    u = n(252293),
    c = n(800132),
    d = n(319820),
    _ = n(310829),
    f = n(758836),
    p = n(985018),
    h = n(391854);
let m = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: s } = (0, d.AO)({ sku: t }),
            u = (0, o.Ab)(s) ? p.intl.string(p.t["0TmQRG"]) : (0, c.oO)(s),
            _ = (0, c.dL)(t),
            m =
                t.id === f.Dp.FRACTIONAL_PREMIUM
                    ? l.m[f.Dp.FRACTIONAL_PREMIUM].render({ className: h.$ })
                    : (0, r.jsx)(a.WH, { sku: t, product: s });
        return (0, r.jsx)(a.f7, {
            label: _,
            description: u,
            graphic: m,
            price: null != n ? `${n}` : "",
            PriceIcon: i.Cp8,
        });
    },
    E = (e) => {
        let { skuId: t, orbPriceAmount: n } = e,
            { skusById: s } = (0, u.A)({
                applicationId: (0, _.p)(t),
                skuIDs: [t],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            a = s[t];
        return void 0 === a
            ? (0, r.jsx)(i.y$y, { type: i.y$y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(m, { sku: a, orbPriceAmount: n });
    },
    g = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(s.vW, { label: p.intl.string(p.t.y0WGqP), value: null != t ? `${t}` : "", Icon: i.Cp8 });
    };
