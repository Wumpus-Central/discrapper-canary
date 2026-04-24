"use strict";
n.d(t, { A: () => s });
var a = n(627968),
    r = n(821609),
    i = n(783420),
    l = n(938973);
let s = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: s,
            onSubscribeModalClose: o,
            premiumModalAnalyticsLocation: c,
            applicationId: d,
            confirmationFooter: u,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: m,
            variantOverride: h,
            ...f
        } = e,
        { subscribeButtonProps: g } = (0, l.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: m,
            variantOverride: h,
        });
    return (0, a.jsx)(i.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: s,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(r.$, { onClick: t, ...g, ...f });
        },
    });
};
