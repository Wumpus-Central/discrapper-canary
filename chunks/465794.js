var i = n(477900),
    r = n(821609),
    a = n(783420),
    s = n(938973);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    subscriptionTier: t,
                    onClick: n,
                    postSuccessGuild: l,
                    onSubscribeModalClose: o,
                    premiumModalAnalyticsLocation: d,
                    applicationId: c,
                    confirmationFooter: u,
                    buttonTextOverride: _,
                    defaultTextOverride: E,
                    iconOverride: A,
                    variantOverride: f,
                    enableMarketingSubscribeCopyTest: h = !1,
                    disabled: I,
                    ...p
                } = e,
                { subscribeButtonProps: m } = (0, s.B)({
                    subscriptionTier: t,
                    buttonTextOverride: _,
                    defaultTextOverride: E,
                    iconOverride: A,
                    variantOverride: f,
                    enableMarketingSubscribeCopyTest: h,
                });
            return (0, i.jsx)(a.A, {
                onClick: n,
                subscriptionTier: t,
                postSuccessGuild: l,
                onSubscribeModalClose: o,
                premiumModalAnalyticsLocation: d,
                applicationId: c,
                confirmationFooter: u,
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)(r.$, { onClick: t, ...m, ...p, disabled: !0 === m.disabled || !0 === I });
                },
            });
        },
    },
);
