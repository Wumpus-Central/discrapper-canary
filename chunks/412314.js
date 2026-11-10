var i = e(477900),
    r = e(582128),
    l = e(289873),
    a = e(403581),
    s = e(772707),
    o = e(834730),
    u = e(683071),
    c = e(975571),
    d = e(448645),
    m = e(816252),
    f = e(473702),
    p = e(916974),
    C = e(682901),
    g = e(652215),
    y = e(792996),
    h = e(871710),
    P = e(303930),
    x = e(398932);
e.d(
    n,
    {},
    {
        M: () => {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    premiumSubscription: v,
                    setStep: E,
                    applyOffer: D,
                    churnUserDiscountOffer: j,
                    discountedPrice: b,
                    fullPrice: N,
                } = (0, p.X)(),
                [S, T] = (0, r.useState)(!1),
                [A, M] = (0, r.useState)(!1);
            if (null === j || null === b) return (0, i.jsx)("div", { className: h.dc, children: (0, i.jsx)(l.y, {}) });
            let I = e === C.PremiumTypes.TIER_2,
                R = [
                    { text: y.intl.string(y.t.zl7LZp), onClick: () => n(), variant: "secondary", disabled: S },
                    {
                        text: y.intl.string(y.t.CKSuZJ),
                        onClick: () =>
                            (async function () {
                                if (null === j) return void M(!0);
                                (T(!0), M(!1));
                                try {
                                    (await D(), E(f.g.DISCOUNT_APPLIED));
                                } catch (t) {
                                    (M(!0), T(!1));
                                }
                            })(),
                        variant: "primary",
                        icon: a.NitroWheelIcon,
                        loading: S,
                        disabled: S,
                    },
                ];
            return (0, i.jsxs)(s.k, {
                graphic: { type: "image", src: I ? x.A : P },
                gradientColor: I ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title:
                    v.status === g.Dmq.CANCELED
                        ? y.intl.string(y.t["2Otzti"])
                        : `${y.intl.format(y.t.q9Vxu4, { percent: j.discount.amount })}`,
                actions: R,
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
                                          fullPrice: N,
                                          paidURL: c.A.getArticleURL(g.MVz.PAID_TERMS),
                                      })
                                    : y.intl.format(y.t.hrGTjG, {
                                          discountedPrice: b,
                                          billingPeriod: (0, d.Ke)(j.discount.intervalType),
                                          numMonths: j.discount.intervalCount,
                                          fullPrice: N,
                                          helpdeskArticle: c.A.getArticleURL(g.MVz.PAID_TERMS),
                                      }),
                        }),
                    }),
                    A
                        ? (0, i.jsx)(u.w, { type: "critical", message: y.intl.string(y.t["5mlOCW"]), role: "alert" })
                        : null,
                ],
            });
        },
    },
);
