n.d(t, { Q: () => x, e: () => T });
var l = n(627968);
n(64700);
var r = n(417597),
    i = n(318254),
    s = n(289873),
    a = n(93159),
    o = n(241989),
    u = n(623373),
    d = n(132198),
    c = n(252293),
    C = n(800132),
    p = n(319820),
    m = n(67480),
    E = n(310829),
    A = n(758836),
    h = n(985018),
    f = n(327105),
    _ = n(200766);
let g = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: r, isSocialLayerGameItem: s } = (0, p.AO)({ sku: t }),
            a = (0, C.oO)(r);
        s ? (a = h.intl.string(f.default.qwSlCO)) : (0, u.Ab)(r) && (a = h.intl.string(h.t["0TmQRG"]));
        let c = (0, C.dL)(t),
            m =
                t.id === A.Dp.FRACTIONAL_PREMIUM
                    ? d.m[A.Dp.FRACTIONAL_PREMIUM].render({ className: _.$ })
                    : (0, l.jsx)(o.WH, { sku: t, product: r });
        return (0, l.jsx)(o.f7, {
            label: c,
            description: a,
            graphic: m,
            price: null != n ? `${n}` : "",
            PriceIcon: i.C,
        });
    },
    T = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, c.A)({
            applicationId: (0, E.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let i = (0, r.bG)([m.A], () => m.A.get(t), [t]);
        return null == i
            ? (0, l.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS })
            : (0, l.jsx)(g, { sku: i, orbPriceAmount: n });
    },
    x = (e) => {
        let { orbBalance: t } = e;
        return (0, l.jsx)(a.vW, { label: h.intl.string(h.t.y0WGqP), value: null != t ? `${t}` : "", Icon: i.C });
    };
