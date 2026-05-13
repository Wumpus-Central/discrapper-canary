i.d(e, { M: () => v });
var n = i(627968),
    r = i(64700),
    l = i(772707),
    a = i(683071),
    s = i(289873),
    o = i(403581),
    u = i(834730),
    c = i(975571),
    d = i(927578),
    m = i(816252),
    f = i(473702),
    g = i(916974),
    p = i(788868),
    x = i(652215),
    h = i(375708),
    C = i(476791),
    P = i(303930),
    y = i(398932);
let v = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: i,
            premiumSubscription: v,
            setStep: E,
            applyOffer: j,
            churnUserDiscountOffer: D,
            discountedPrice: N,
            fullPrice: S,
        } = (0, g.X)(),
        [A, L] = (0, r.useState)(!1),
        [M, T] = (0, r.useState)(!1),
        I = async () => {
            if (null === D) return void T(!0);
            L(!0), T(!1);
            try {
                await j(), E(f.g.DISCOUNT_APPLIED);
            } catch (t) {
                T(!0), L(!1);
            }
        };
    if (null === D || null === N) return (0, n.jsx)("div", { className: C.dc, children: (0, n.jsx)(s.y, {}) });
    let b = i === p.PremiumTypes.TIER_2,
        U = [
            { text: h.intl.string(h.t.zl7LZp), onClick: () => e(), variant: "secondary", disabled: A },
            {
                text: h.intl.string(h.t.CKSuZJ),
                onClick: () => I(),
                variant: "primary",
                icon: o.t,
                loading: A,
                disabled: A,
            },
        ];
    return (0, n.jsxs)(l.k, {
        graphic: { type: "image", src: b ? y.A : P },
        gradientColor: b ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            v.status === x.Dmq.CANCELED
                ? h.intl.string(h.t["2Otzti"])
                : `${h.intl.format(h.t.q9Vxu4, { percent: D.discount.amount })}`,
        actions: U,
        onClose: async () => e(),
        children: [
            (0, n.jsx)("div", {
                className: C.TA,
                children: (0, n.jsx)(m._, { userDiscountOffer: D, offerState: m.b.CONFIRMING }),
            }),
            (0, n.jsx)("div", {
                className: C.V6,
                children: (0, n.jsx)(u.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        v.status === x.Dmq.CANCELED
                            ? h.intl.format(h.t.mY3ysK, {
                                  discountedPrice: N,
                                  billingPeriod: (0, d.Ke)(D.discount.userUsageLimitInterval),
                                  numMonths: D.discount.userUsageLimit,
                                  fullPrice: S,
                                  paidURL: c.A.getArticleURL(x.MVz.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjG, {
                                  discountedPrice: N,
                                  billingPeriod: (0, d.Ke)(D.discount.userUsageLimitInterval),
                                  numMonths: D.discount.userUsageLimit,
                                  fullPrice: S,
                                  helpdeskArticle: c.A.getArticleURL(x.MVz.PAID_TERMS),
                              }),
                }),
            }),
            M ? (0, n.jsx)(a.w, { type: "critical", children: h.intl.string(h.t["5mlOCW"]) }) : null,
        ],
    });
};
