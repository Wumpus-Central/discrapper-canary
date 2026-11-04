var i = e(477900),
    r = e(821609),
    t = e(783420),
    c = e(938973);
e.d(
    d,
    {},
    {
        A: function (s) {
            let {
                    subscriptionTier: d,
                    onClick: e,
                    postSuccessGuild: n,
                    onSubscribeModalClose: a,
                    premiumModalAnalyticsLocation: p,
                    applicationId: u,
                    confirmationFooter: h,
                    buttonTextOverride: l,
                    defaultTextOverride: k,
                    iconOverride: b,
                    variantOverride: o,
                    disabled: C,
                    ...j
                } = s,
                { subscribeButtonProps: w } = (0, c.B)({
                    subscriptionTier: d,
                    buttonTextOverride: l,
                    defaultTextOverride: k,
                    iconOverride: b,
                    variantOverride: o,
                });
            return (0, i.jsx)(t.A, {
                onClick: e,
                subscriptionTier: d,
                postSuccessGuild: n,
                onSubscribeModalClose: a,
                premiumModalAnalyticsLocation: p,
                applicationId: u,
                confirmationFooter: h,
                children: (s) => {
                    let { onClick: d } = s;
                    return (0, i.jsx)(r.$, { onClick: d, ...w, ...j, disabled: !0 === w.disabled || !0 === C });
                },
            });
        },
    },
);
