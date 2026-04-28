"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    a = n(821609),
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
            iconOverride: f,
            variantOverride: m,
            ...h
        } = e,
        { subscribeButtonProps: g } = (0, l.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: f,
            variantOverride: m,
        });
    return (0, r.jsx)(i.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: s,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.$, { onClick: t, ...g, ...h });
        },
    });
};
