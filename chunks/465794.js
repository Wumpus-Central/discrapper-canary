n.d(t, { A: () => o });
var a = n(627968),
    i = n(821609),
    l = n(783420),
    r = n(938973);
let o = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: o,
            onSubscribeModalClose: s,
            premiumModalAnalyticsLocation: c,
            applicationId: d,
            confirmationFooter: u,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: f,
            variantOverride: h,
            ...m
        } = e,
        { subscribeButtonProps: g } = (0, r.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: f,
            variantOverride: h,
        });
    return (0, a.jsx)(l.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: o,
        onSubscribeModalClose: s,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(i.$, { onClick: t, ...g, ...m });
        },
    });
};
