r.d(e, { A: () => u });
var n = r(477900),
    s = r(821609),
    i = r(783420),
    c = r(938973);
let u = function (t) {
    let {
            subscriptionTier: e,
            onClick: r,
            postSuccessGuild: u,
            onSubscribeModalClose: p,
            premiumModalAnalyticsLocation: a,
            applicationId: o,
            confirmationFooter: d,
            buttonTextOverride: h,
            defaultTextOverride: l,
            iconOverride: k,
            variantOverride: b,
            ...v
        } = t,
        { subscribeButtonProps: x } = (0, c.B)({
            subscriptionTier: e,
            buttonTextOverride: h,
            defaultTextOverride: l,
            iconOverride: k,
            variantOverride: b,
        });
    return (0, n.jsx)(i.A, {
        onClick: r,
        subscriptionTier: e,
        postSuccessGuild: u,
        onSubscribeModalClose: p,
        premiumModalAnalyticsLocation: a,
        applicationId: o,
        confirmationFooter: d,
        children: (t) => {
            let { onClick: e } = t;
            return (0, n.jsx)(s.$, { onClick: e, ...x, ...v });
        },
    });
};
