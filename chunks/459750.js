"use strict";
n.d(t, { Q: () => A, e: () => g });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(93159),
    o = n(241989),
    l = n(623373),
    u = n(132198),
    c = n(252293),
    d = n(800132),
    _ = n(319820),
    f = n(310829),
    p = n(758836),
    h = n(985018),
    m = n(504743);
let E = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: a } = (0, _.AO)({ sku: t }),
            c = (0, l.Ab)(a) ? h.intl.string(h.t["0TmQRG"]) : (0, d.oO)(a),
            f = (0, d.dL)(t),
            E = i.useMemo(
                () =>
                    t.id === p.Dp.FRACTIONAL_PREMIUM
                        ? u.m[p.Dp.FRACTIONAL_PREMIUM].render({ className: m.$ })
                        : (0, d.ZM)({ sku: t, product: a }),
                [t, a],
            );
        return (0, r.jsx)(o.f7, {
            label: f,
            description: c,
            graphic: E,
            price: null != n ? `${n}` : "",
            PriceIcon: s.Cp8,
        });
    },
    g = (e) => {
        let { skuId: t, orbPriceAmount: n } = e,
            { skusById: i } = (0, c.A)({
                applicationId: (0, f.p)(t),
                skuIDs: [t],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            a = i[t];
        return void 0 === a
            ? (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(E, { sku: a, orbPriceAmount: n });
    },
    A = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.vW, { label: h.intl.string(h.t.y0WGqP), value: null != t ? `${t}` : "", Icon: s.Cp8 });
    };
