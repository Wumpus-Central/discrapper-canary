"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(821609),
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
            iconOverride: h,
            variantOverride: p,
            ...E
        } = e,
        { subscribeButtonProps: m } = (0, a.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: f,
            iconOverride: h,
            variantOverride: p,
        });
    return (0, i.jsx)(s.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: o,
        onSubscribeModalClose: l,
        premiumModalAnalyticsLocation: u,
        applicationId: c,
        confirmationFooter: d,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(r.$, { onClick: t, ...m, ...E });
        },
    });
};
