a.d(t, { A: () => s });
var n = a(627968),
    l = a(821609),
    r = a(783420),
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
            ..._
        } = e,
        { subscribeButtonProps: b } = (0, i.B)({
            subscriptionTier: t,
            buttonTextOverride: h,
            defaultTextOverride: p,
            iconOverride: m,
            variantOverride: f,
        });
    return (0, n.jsx)(r.A, {
        onClick: a,
        subscriptionTier: t,
        postSuccessGuild: s,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)(l.$, { onClick: t, ...b, ..._ });
        },
    });
};
