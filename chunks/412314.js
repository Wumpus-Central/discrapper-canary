n.d(e, { M: () => E });
var i = n(627968),
    r = n(64700),
    l = n(772707),
    a = n(683071),
    s = n(289873),
    o = n(403581),
    u = n(834730),
    c = n(975571),
    d = n(428262),
    m = n(816252),
    f = n(473702),
    g = n(916974),
    p = n(788868),
    h = n(652215),
    x = n(375708),
    P = n(476791),
    C = n(303930),
    y = n(398932);
let E = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            premiumSubscription: E,
            setStep: v,
            applyOffer: D,
            churnUserDiscountOffer: j,
            discountedPrice: S,
            fullPrice: A,
        } = (0, g.X)(),
        [N, L] = (0, r.useState)(!1),
        [T, b] = (0, r.useState)(!1);
    async function M() {
        if (null === j) return void b(!0);
        L(!0), b(!1);
        try {
            await D(), v(f.g.DISCOUNT_APPLIED);
        } catch (t) {
            b(!0), L(!1);
        }
    }
    if (null === j || null === S) return (0, i.jsx)("div", { className: P.dc, children: (0, i.jsx)(s.y, {}) });
    let I = n === p.PremiumTypes.TIER_2,
        U = [
            { text: x.intl.string(x.t.zl7LZp), onClick: () => e(), variant: "secondary", disabled: N },
            {
                text: x.intl.string(x.t.CKSuZJ),
                onClick: () => M(),
                variant: "primary",
                icon: o.t,
                loading: N,
                disabled: N,
            },
        ];
    return (0, i.jsxs)(l.k, {
        graphic: { type: "image", src: I ? y.A : C },
        gradientColor: I ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            E.status === h.Dmq.CANCELED
                ? x.intl.string(x.t["2Otzti"])
                : `${x.intl.format(x.t.q9Vxu4, { percent: j.discount.amount })}`,
        actions: U,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: P.TA,
                children: (0, i.jsx)(m._, { userDiscountOffer: j, offerState: m.b.CONFIRMING }),
            }),
            (0, i.jsx)("div", {
                className: P.V6,
                children: (0, i.jsx)(u.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        E.status === h.Dmq.CANCELED
                            ? x.intl.format(x.t.mY3ysK, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.userUsageLimitInterval),
                                  numMonths: j.discount.userUsageLimit,
                                  fullPrice: A,
                                  paidURL: c.A.getArticleURL(h.MVz.PAID_TERMS),
                              })
                            : x.intl.format(x.t.hrGTjG, {
                                  discountedPrice: S,
                                  billingPeriod: (0, d.Ke)(j.discount.userUsageLimitInterval),
                                  numMonths: j.discount.userUsageLimit,
                                  fullPrice: A,
                                  helpdeskArticle: c.A.getArticleURL(h.MVz.PAID_TERMS),
                              }),
                }),
            }),
            T ? (0, i.jsx)(a.w, { type: "critical", children: x.intl.string(x.t["5mlOCW"]) }) : null,
        ],
    });
};
