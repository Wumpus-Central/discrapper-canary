"use strict";
r.d(t, { A: () => l });
var n = r(627968),
    i = r(821609),
    a = r(783420),
    s = r(938973);
let l = function (e) {
    let {
            subscriptionTier: t,
            onClick: r,
            postSuccessGuild: l,
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
        { subscribeButtonProps: g } = (0, s.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: p,
            iconOverride: f,
            variantOverride: m,
        });
    return (0, n.jsx)(a.A, {
        onClick: r,
        subscriptionTier: t,
        postSuccessGuild: l,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: c,
        applicationId: d,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)(i.$, { onClick: t, ...g, ...h });
        },
    });
};
