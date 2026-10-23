n.d(e, { M: () => v });
var i = n(477900),
    r = n(582128),
    l = n(289873),
    a = n(403581),
    s = n(772707),
    o = n(834730),
    u = n(683071),
    c = n(975571),
    d = n(927578),
    m = n(816252),
    f = n(473702),
    p = n(916974),
    C = n(202541),
    g = n(652215),
    x = n(105292),
    h = n(871710),
    y = n(303930),
    P = n(398932);
let v = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
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
        (N(!0), M(!1));
        try {
            (await D(), E(f.g.DISCOUNT_APPLIED));
        } catch (t) {
            (M(!0), N(!1));
        }
    }
    if (null === j || null === S) return (0, i.jsx)("div", { className: h.dc, children: (0, i.jsx)(l.y, {}) });
    let R = n === C.PremiumTypes.TIER_2,
        L = [
            { text: x.intl.string(x.t.zl7LZp), onClick: () => e(), variant: "secondary", disabled: A },
            {
                text: x.intl.string(x.t.CKSuZJ),
                onClick: () => I(),
                variant: "primary",
                icon: a.t,
                loading: A,
                disabled: A,
            },
        ];
    return (0, i.jsxs)(s.k, {
        graphic: { type: "image", src: R ? P.A : y },
        gradientColor: R ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            v.status === g.Dmq.CANCELED
                ? x.intl.string(x.t["2Otzti"])
                : `${x.intl.format(x.t.q9Vxu4, { percent: j.discount.amount })}`,
        actions: L,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: h.TA,
                children: (0, i.jsx)(m._, { userDiscountOffer: j, offerState: m.b.CONFIRMING }),
            }),
            (0, i.jsx)("div", {
                className: h.V6,
                children: (0, i.jsx)(o.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        v.status === g.Dmq.CANCELED
                            ? x.intl.format(x.t.mY3ysK, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: T,
                                  paidURL: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              })
                            : x.intl.format(x.t.hrGTjG, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                  numMonths: j.discount.intervalCount,
                                  fullPrice: T,
                                  helpdeskArticle: c.A.getArticleURL(g.MVz.PAID_TERMS),
                              }),
                }),
            }),
            b ? (0, i.jsx)(u.w, { type: "critical", message: x.intl.string(x.t["5mlOCW"]), role: "alert" }) : null,
        ],
    });
};
