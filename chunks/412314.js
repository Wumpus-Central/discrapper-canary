e.d(n, { M: () => v });
var i = e(477900),
    r = e(582128),
    l = e(289873),
    a = e(403581),
    s = e(772707),
    o = e(834730),
    u = e(683071),
    c = e(975571),
    d = e(24482),
    m = e(816252),
    f = e(473702),
    p = e(916974),
    C = e(202541),
    g = e(652215),
    y = e(105292),
    h = e(871710),
    P = e(303930),
    x = e(398932);
let v = () => {
    let {
            transitionState: t,
            onClose: n,
            premiumType: e,
            premiumSubscription: v,
            setStep: E,
            applyOffer: D,
            churnUserDiscountOffer: j,
            discountedPrice: b,
            fullPrice: S,
        } = (0, p.X)(),
        [T, A] = (0, r.useState)(!1),
        [N, M] = (0, r.useState)(!1);
    async function I() {
        if (null === j) return void M(!0);
        (A(!0), M(!1));
        try {
            (await D(), E(f.g.DISCOUNT_APPLIED));
        } catch (t) {
            (M(!0), A(!1));
        }
    }
    if (null === j || null === b) return (0, i.jsx)("div", { className: h.dc, children: (0, i.jsx)(l.y, {}) });
    let R = e === C.PremiumTypes.TIER_2,
        L = [
            { text: y.intl.string(y.t.zl7LZp), onClick: () => n(), variant: "secondary", disabled: T },
            {
                text: y.intl.string(y.t.CKSuZJ),
                onClick: () => I(),
                variant: "primary",
                icon: a.t,
                loading: T,
                disabled: T,
            },
        ];
    return (0, i.jsxs)(s.k, {
        graphic: { type: "image", src: R ? x.A : P },
        gradientColor: R ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            v.status === g.Dmq.CANCELED
                ? y.intl.string(y.t["2Otzti"])
                : `${y.intl.format(y.t.q9Vxu4, { percent: j.discount.amount })}`,
        actions: L,
        onClose: async () => n(),
        children: [
            (0, i.jsx)("div", {
                className: h.TA,
                children: (0, i.jsx)(m._, { userDiscountOffer: j, offerState: m.b.CONFIRMING }),
            }),
            (0, i.jsx)("div", {
                className: h.V6,
                children: (0, i.jsx)(o.E, {
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    children:
                        v.status === g.Dmq.CANCELED
                            ? y.intl.format(y.t.mY3ysK, {
                                  discountedPrice: b,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: S,
                                  paidURL: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              })
                            : y.intl.format(y.t.hrGTjG, {
                                  discountedPrice: b,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: S,
                                  helpdeskArticle: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              }),
                }),
            }),
            N ? (0, i.jsx)(u.w, { type: "critical", message: y.intl.string(y.t["5mlOCW"]), role: "alert" }) : null,
        ],
    });
};
