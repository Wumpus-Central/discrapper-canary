var i = e(477900),
    r = e(582128),
    l = e(289873),
    a = e(403581),
    s = e(772707),
    o = e(834730),
    u = e(136857),
    c = e(975571),
    d = e(448645),
    m = e(816252),
    f = e(473702),
    y = e(916974),
    p = e(682901),
    C = e(652215),
    g = e(792996),
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
                    churnUserDiscountOffer: b,
                    discountedPrice: A,
                    fullPrice: N,
                } = (0, y.X)(),
                [j, S] = (0, r.useState)(!1),
                [T, M] = (0, r.useState)(null);
            if (null === b || null === A) return (0, i.jsx)("div", { className: h.dc, children: (0, i.jsx)(l.y, {}) });
            let I = e === p.PremiumTypes.TIER_2,
                R = [
                    { text: g.intl.string(g.t.zl7LZp), onClick: () => n(), variant: "secondary", disabled: j },
                    {
                        text: g.intl.string(g.t.CKSuZJ),
                        onClick: () =>
                            (async function () {
                                if (null === b) return void M(new u.Ay("", u.Ay.ErrorCodes.UNKNOWN));
                                (S(!0), M(null));
                                try {
                                    (await D(), E(f.g.DISCOUNT_APPLIED));
                                } catch (t) {
                                    M(t instanceof u.Ay ? t : new u.Ay(t));
                                } finally {
                                    S(!1);
                                }
                            })(),
                        variant: "primary",
                        icon: a.NitroWheelIcon,
                        loading: j,
                        disabled: j,
                    },
                ];
            return (0, i.jsxs)(s.k, {
                graphic: { type: "image", src: I ? x.A : P },
                gradientColor: I ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title:
                    v.status === C.Dmq.CANCELED
                        ? g.intl.string(g.t["2Otzti"])
                        : `${g.intl.format(g.t.q9Vxu4, { percent: b.discount.amount })}`,
                actions: R,
                onClose: async () => n(),
                children: [
                    (0, i.jsx)("div", {
                        className: h.TA,
                        children: (0, i.jsx)(m._, { userDiscountOffer: b, offerState: m.b.CONFIRMING }),
                    }),
                    (0, i.jsx)("div", {
                        className: h.V6,
                        children: (0, i.jsx)(o.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children:
                                v.status === C.Dmq.CANCELED
                                    ? g.intl.format(g.t.mY3ysK, {
                                          discountedPrice: A,
                                          billingPeriod: (0, d.Ke)(b.discount.intervalType),
                                          numMonths: b.discount.intervalCount,
                                          fullPrice: N,
                                          paidURL: c.A.getArticleURL(C.MVz.PAID_TERMS),
                                      })
                                    : g.intl.format(g.t.hrGTjG, {
                                          discountedPrice: A,
                                          billingPeriod: (0, d.Ke)(b.discount.intervalType),
                                          numMonths: b.discount.intervalCount,
                                          fullPrice: N,
                                          helpdeskArticle: c.A.getArticleURL(C.MVz.PAID_TERMS),
                                      }),
                        }),
                    }),
                    null != T
                        ? (0, i.jsx)(o.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: T.message,
                          })
                        : null,
                ],
            });
        },
    },
);
