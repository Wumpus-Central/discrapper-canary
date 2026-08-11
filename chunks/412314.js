e.d(n, { M: () => v });
var i = e(477900),
    r = e(582128),
    l = e(772707),
    a = e(683071),
    s = e(289873),
    o = e(403581),
    u = e(834730),
    c = e(975571),
    d = e(158045),
    m = e(816252),
    f = e(473702),
    p = e(916974),
    C = e(202541),
    g = e(652215),
    h = e(375708),
    x = e(299183),
    y = e(303930),
    P = e(398932);
let v = () => {
    let {
            transitionState: t,
            onClose: n,
            premiumType: e,
            premiumSubscription: v,
            setStep: E,
            applyOffer: D,
            churnUserDiscountOffer: j,
            discountedPrice: S,
            fullPrice: T,
        } = (0, p.X)(),
        [A, N] = (0, r.useState)(!1),
        [b, M] = (0, r.useState)(!1);
    async function I() {
        if (null === j) return void M(!0);
        N(!0), M(!1);
        try {
            await D(), E(f.g.DISCOUNT_APPLIED);
        } catch (t) {
            M(!0), N(!1);
        }
    }
    if (null === j || null === S) return (0, i.jsx)("div", { className: x.dc, children: (0, i.jsx)(s.y, {}) });
    let R = e === C.PremiumTypes.TIER_2,
        L = [
            { text: h.intl.string(h.t.zl7LZp), onClick: () => n(), variant: "secondary", disabled: A },
            {
                text: h.intl.string(h.t.CKSuZJ),
                onClick: () => I(),
                variant: "primary",
                icon: o.t,
                loading: A,
                disabled: A,
            },
        ];
    return (0, i.jsxs)(l.k, {
        graphic: { type: "image", src: R ? P.A : y },
        gradientColor: R ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            v.status === g.Dmq.CANCELED
                ? h.intl.string(h.t["2Otzti"])
                : `${h.intl.format(h.t.q9Vxu4, { percent: j.discount.amount })}`,
        actions: L,
        onClose: async () => n(),
        children: [
            (0, i.jsx)("div", {
                className: x.TA,
                children: (0, i.jsx)(m._, { userDiscountOffer: j, offerState: m.b.CONFIRMING }),
            }),
            (0, i.jsx)("div", {
                className: x.V6,
                children: (0, i.jsx)(u.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        v.status === g.Dmq.CANCELED
                            ? h.intl.format(h.t.mY3ysK, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: T,
                                  paidURL: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjG, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: T,
                                  helpdeskArticle: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              }),
                }),
            }),
            b ? (0, i.jsx)(a.w, { type: "critical", children: h.intl.string(h.t["5mlOCW"]) }) : null,
        ],
    });
};
