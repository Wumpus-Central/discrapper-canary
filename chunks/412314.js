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
    p = e(916974),
    y = e(682901),
    P = e(652215),
    g = e(483769),
    h = e(792996),
    x = e(871710),
    C = e(303930),
    v = e(398932);
e.d(
    n,
    {},
    {
        M: () => {
            let t,
                {
                    transitionState: n,
                    onClose: e,
                    premiumType: E,
                    isPremiumGroupContinuation: b,
                    premiumSubscription: D,
                    setStep: j,
                    applyOffer: N,
                    churnUserDiscountOffer: A,
                    discountedPrice: S,
                    fullPrice: T,
                } = (0, p.X)(),
                [I, M] = (0, r.useState)(!1),
                [L, R] = (0, r.useState)(null);
            if (null === A || null === S) return (0, i.jsx)("div", { className: x.dc, children: (0, i.jsx)(l.y, {}) });
            let O = E === y.PremiumTypes.TIER_2,
                k = A.discount.amount;
            t = b
                ? h.intl.formatToPlainString(g.default.bu24P7, { percent: k })
                : D.status === P.Dmq.CANCELED
                  ? h.intl.string(h.t["2Otzti"])
                  : h.intl.formatToPlainString(h.t.q9Vxu4, { percent: k });
            let w = [
                { text: h.intl.string(h.t.zl7LZp), onClick: () => e(), variant: "secondary", disabled: I },
                {
                    text: h.intl.string(h.t.CKSuZJ),
                    onClick: () =>
                        (async function () {
                            if (null === A) return void R(new u.Ay("", u.Ay.ErrorCodes.UNKNOWN));
                            (M(!0), R(null));
                            try {
                                (await N(), j(f.g.DISCOUNT_APPLIED));
                            } catch (t) {
                                R(t instanceof u.Ay ? t : new u.Ay(t));
                            } finally {
                                M(!1);
                            }
                        })(),
                    variant: "primary",
                    icon: a.NitroWheelIcon,
                    loading: I,
                    disabled: I,
                },
            ];
            return (0, i.jsxs)(s.k, {
                graphic: { type: "image", src: O ? v.A : C },
                gradientColor: O ? "nitro-pink" : "nitro-green",
                transitionState: n,
                title: t,
                actions: w,
                onClose: async () => e(),
                children: [
                    (0, i.jsx)("div", {
                        className: x.TA,
                        children: (0, i.jsx)(m._, { userDiscountOffer: A, offerState: m.b.CONFIRMING }),
                    }),
                    (0, i.jsx)("div", {
                        className: x.V6,
                        children: (0, i.jsx)(o.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children:
                                D.status === P.Dmq.CANCELED
                                    ? h.intl.format(h.t.mY3ysK, {
                                          discountedPrice: S,
                                          billingPeriod: (0, d.Ke)(A.discount.intervalType),
                                          numMonths: A.discount.intervalCount,
                                          fullPrice: T,
                                          paidURL: c.A.getArticleURL(P.MVz.PAID_TERMS),
                                      })
                                    : h.intl.format(h.t.hrGTjG, {
                                          discountedPrice: S,
                                          billingPeriod: (0, d.Ke)(A.discount.intervalType),
                                          numMonths: A.discount.intervalCount,
                                          fullPrice: T,
                                          helpdeskArticle: c.A.getArticleURL(P.MVz.PAID_TERMS),
                                      }),
                        }),
                    }),
                    null != L
                        ? (0, i.jsx)(o.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: L.message,
                          })
                        : null,
                ],
            });
        },
    },
);
