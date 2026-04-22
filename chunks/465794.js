"use strict";
a.d(t, { A: () => s });
var r = a(627968),
    l = a(821609),
    n = a(783420),
    i = a(938973);
let s = function (e) {
    let {
            subscriptionTier: t,
            onClick: a,
            postSuccessGuild: s,
            onSubscribeModalClose: o,
            premiumModalAnalyticsLocation: d,
            applicationId: c,
            confirmationFooter: u,
            buttonTextOverride: h,
            defaultTextOverride: p,
            iconOverride: _,
            variantOverride: m,
            ...b
        } = e,
        { subscribeButtonProps: g } = (0, i.B)({
            subscriptionTier: t,
            buttonTextOverride: h,
            defaultTextOverride: p,
            iconOverride: _,
            variantOverride: m,
        });
    return (0, r.jsx)(n.A, {
        onClick: a,
        subscriptionTier: t,
        postSuccessGuild: s,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: d,
        applicationId: c,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(l.$, { onClick: t, ...g, ...b });
        },
    });
};
