"use strict";
n.d(t, { Q: () => S, e: () => T });
var r = n(627968);
n(64700);
var i = n(417597),
    s = n(318254),
    a = n(289873),
    o = n(93159),
    l = n(241989),
    u = n(623373),
    c = n(132198),
    d = n(252293),
    _ = n(800132),
    f = n(319820),
    p = n(67480),
    h = n(310829),
    E = n(758836),
    m = n(985018),
    g = n(327105),
    A = n(200766);
let I = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: a } = (0, f.AO)({ sku: t }),
            o = (0, _.oO)(i);
        a ? (o = m.intl.string(g.default.qwSlCO)) : (0, u.Ab)(i) && (o = m.intl.string(m.t["0TmQRG"]));
        let d = (0, _.dL)(t),
            p =
                t.id === E.Dp.FRACTIONAL_PREMIUM
                    ? c.m[E.Dp.FRACTIONAL_PREMIUM].render({ className: A.$ })
                    : (0, r.jsx)(l.WH, { sku: t, product: i });
        return (0, r.jsx)(l.f7, {
            label: d,
            description: o,
            graphic: p,
            price: null != n ? `${n}` : "",
            PriceIcon: s.C,
        });
    },
    T = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, d.A)({
            applicationId: (0, h.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let s = (0, i.bG)([p.A], () => p.A.get(t), [t]);
        return null == s
            ? (0, r.jsx)(a.y, { type: a.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(I, { sku: s, orbPriceAmount: n });
    },
    S = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(o.vW, { label: m.intl.string(m.t.y0WGqP), value: null != t ? `${t}` : "", Icon: s.C });
    };
