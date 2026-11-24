var i = n(477900),
    r = n(331322),
    a = n(805251),
    s = n(834730),
    l = n(465794),
    o = n(976860),
    d = n(448645),
    c = n(11029),
    u = n(652215),
    _ = n(682901),
    E = n(792996);
n.d(
    t,
    {},
    {
        W: function () {
            return (0, i.jsxs)(r.B, {
                gap: 8,
                children: [
                    (0, i.jsx)(a.E, { type: "free_trial", variant: "expressive" }),
                    (0, i.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: E.intl.format(E.t["5KMAnK"], {
                            onClick: () => {
                                ((0, o.pX)(u.BVt.APPLICATION_STORE), (0, c.DS)());
                            },
                        }),
                    }),
                ],
            });
        },
        r: function (e) {
            let { trialOffer: t, ...n } = e;
            return (0, i.jsx)(l.A, {
                ...n,
                subscriptionTier: _.pe.TIER_2,
                buttonTextOverride: (0, d.FY)({
                    intervalType: t.subscriptionTrial?.interval,
                    intervalCount: t.subscriptionTrial?.intervalCount,
                }),
                fullWidth: !0,
            });
        },
    },
);
