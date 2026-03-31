"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(732955),
    s = n(783420),
    a = n(938973);
let o = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: o,
            onSubscribeModalClose: l,
            premiumModalAnalyticsLocation: u,
            applicationId: c,
            confirmationFooter: d,
            buttonTextOverride: _,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: h,
            ...m
        } = e,
        E = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: o,
            onSubscribeModalClose: l,
            premiumModalAnalyticsLocation: u,
            applicationId: c,
            confirmationFooter: d,
        },
        { subscribeButtonProps: g } = (0, a.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: h,
        });
    return (0, r.jsx)(s.A, {
        ...E,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(i.$nd, { onClick: t, ...g, ...m });
        },
    });
};
