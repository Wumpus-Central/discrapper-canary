d.d(s, { A: () => n });
var i = d(477900),
    t = d(821609),
    r = d(783420),
    c = d(938973);
let n = function (e) {
    let {
            subscriptionTier: s,
            onClick: d,
            postSuccessGuild: n,
            onSubscribeModalClose: a,
            premiumModalAnalyticsLocation: l,
            applicationId: p,
            confirmationFooter: u,
            buttonTextOverride: h,
            defaultTextOverride: k,
            iconOverride: b,
            variantOverride: o,
            disabled: C,
            ...j
        } = e,
        { subscribeButtonProps: w } = (0, c.B)({
            subscriptionTier: s,
            buttonTextOverride: h,
            defaultTextOverride: k,
            iconOverride: b,
            variantOverride: o,
        });
    return (0, i.jsx)(r.A, {
        onClick: d,
        subscriptionTier: s,
        postSuccessGuild: n,
        onSubscribeModalClose: a,
        premiumModalAnalyticsLocation: l,
        applicationId: p,
        confirmationFooter: u,
        children: (e) => {
            let { onClick: s } = e;
            return (0, i.jsx)(t.$, { onClick: s, ...w, ...j, disabled: !0 === w.disabled || !0 === C });
        },
    });
};
