i.d(e, { M: () => v });
var n = i(627968),
    r = i(64700),
    l = i(772707),
    a = i(683071),
    s = i(289873),
    u = i(403581),
    o = i(834730),
    c = i(975571),
    d = i(927578),
    m = i(816252),
    f = i(473702),
    p = i(916974),
    g = i(788868),
    x = i(652215),
    h = i(985018),
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
            churnUserDiscountOffer: _,
            discountedPrice: D,
            fullPrice: N,
        } = (0, p.X)(),
        [S, A] = (0, r.useState)(!1),
        [b, M] = (0, r.useState)(!1),
        T = async () => {
            if (null === _) return void M(!0);
            A(!0), M(!1);
            try {
                await j(), E(f.g.DISCOUNT_APPLIED);
            } catch (t) {
                M(!0), A(!1);
            }
        };
    if (null === _ || null === D) return (0, n.jsx)("div", { className: C.dc, children: (0, n.jsx)(s.y, {}) });
    let I = i === g.PremiumTypes.TIER_2,
        L = [
            { text: h.intl.string(h.t.zl7LZp), onClick: () => e(), variant: "secondary", disabled: S },
            {
                text: h.intl.string(h.t.CKSuZJ),
                onClick: () => T(),
                variant: "primary",
                icon: u.t,
                loading: S,
                disabled: S,
            },
        ];
    return (0, n.jsxs)(l.k, {
        graphic: { type: "image", src: I ? y.A : P },
        gradientColor: I ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            v.status === x.Dmq.CANCELED
                ? h.intl.string(h.t["2Otzti"])
                : `${h.intl.format(h.t.q9Vxu4, { percent: _.discount.amount })}`,
        actions: L,
        onClose: async () => e(),
        children: [
            (0, n.jsx)("div", {
                className: C.TA,
                children: (0, n.jsx)(m._, { userDiscountOffer: _, offerState: m.b.CONFIRMING }),
            }),
            (0, n.jsx)("div", {
                className: C.V6,
                children: (0, n.jsx)(o.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        v.status === x.Dmq.CANCELED
                            ? h.intl.format(h.t.mY3ysK, {
                                  discountedPrice: D,
                                  billingPeriod: (0, d.Ke)(_.discount.user_usage_limit_interval),
                                  numMonths: _.discount.user_usage_limit,
                                  fullPrice: N,
                                  paidURL: c.A.getArticleURL(x.MVz.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjG, {
                                  discountedPrice: D,
                                  billingPeriod: (0, d.Ke)(_.discount.user_usage_limit_interval),
                                  numMonths: _.discount.user_usage_limit,
                                  fullPrice: N,
                                  helpdeskArticle: c.A.getArticleURL(x.MVz.PAID_TERMS),
                              }),
                }),
            }),
            b ? (0, n.jsx)(a.w, { type: "critical", children: h.intl.string(h.t["5mlOCW"]) }) : null,
        ],
    });
};
