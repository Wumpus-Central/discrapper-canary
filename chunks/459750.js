"use strict";
n.d(t, { Q: () => T, e: () => I });
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
    E = n(756366),
    g = n(391854);
let A = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: a } = (0, _.AO)({ sku: t }),
            c = (0, d.oO)(i);
        a ? (c = m.intl.string(E.default.qwSlCO)) : (0, l.Ab)(i) && (c = m.intl.string(m.t["0TmQRG"]));
        let f = (0, d.dL)(t),
            p =
                t.id === h.Dp.FRACTIONAL_PREMIUM
                    ? u.m[h.Dp.FRACTIONAL_PREMIUM].render({ className: g.$ })
                    : (0, r.jsx)(o.WH, { sku: t, product: i });
        return (0, r.jsx)(o.f7, {
            label: f,
            description: c,
            graphic: p,
            price: null != n ? `${n}` : "",
            PriceIcon: s.Cp8,
        });
    },
    I = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, c.A)({
            applicationId: (0, p.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let a = (0, i.bG)([f.A], () => f.A.get(t), [t]);
        return null == a
            ? (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(A, { sku: a, orbPriceAmount: n });
    },
    T = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.vW, { label: m.intl.string(m.t.y0WGqP), value: null != t ? `${t}` : "", Icon: s.Cp8 });
    };
