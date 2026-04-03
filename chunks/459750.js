"use strict";
n.d(t, { Q: () => I, e: () => A });
var r = n(627968);
n(64700);
var i = n(417597),
    s = n(397927),
    a = n(93159),
    o = n(241989),
    l = n(623373),
    u = n(132198),
    c = n(252293),
    d = n(800132),
    _ = n(319820),
    f = n(67480),
    p = n(310829),
    h = n(758836),
    m = n(985018),
    E = n(391854);
let g = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i } = (0, _.AO)({ sku: t }),
            a = (0, l.Ab)(i) ? m.intl.string(m.t["0TmQRG"]) : (0, d.oO)(i),
            c = (0, d.dL)(t),
            f =
                t.id === h.Dp.FRACTIONAL_PREMIUM
                    ? u.m[h.Dp.FRACTIONAL_PREMIUM].render({ className: E.$ })
                    : (0, r.jsx)(o.WH, { sku: t, product: i });
        return (0, r.jsx)(o.f7, {
            label: c,
            description: a,
            graphic: f,
            price: null != n ? `${n}` : "",
            PriceIcon: s.Cp8,
        });
    },
    A = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, c.A)({
            applicationId: (0, p.p)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let a = (0, i.bG)([f.A], () => f.A.get(t), [t]);
        return null == a
            ? (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(g, { sku: a, orbPriceAmount: n });
    },
    I = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.vW, { label: m.intl.string(m.t.y0WGqP), value: null != t ? `${t}` : "", Icon: s.Cp8 });
    };
