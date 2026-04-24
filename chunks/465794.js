a.d(t, { A: () => s });
var n = a(627968),
    r = a(821609),
    l = a(783420),
    i = a(938973);
let s = function (e) {
    let {
            subscriptionTier: t,
            onClick: a,
            postSuccessGuild: s,
            onSubscribeModalClose: o,
            premiumModalAnalyticsLocation: c,
            applicationId: d,
            confirmationFooter: u,
            buttonTextOverride: h,
            defaultTextOverride: p,
            iconOverride: m,
            variantOverride: f,
            ...b
        } = e,
        { subscribeButtonProps: _ } = (0, i.B)({
            subscriptionTier: t,
            buttonTextOverride: h,
            defaultTextOverride: p,
            iconOverride: m,
            variantOverride: f,
        });
    return (0, n.jsx)(l.A, {
        onClick: a,
        subscriptionTier: t,
        postSuccessGuild: s,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)(r.$, { onClick: t, ..._, ...b });
        },
    });
};
