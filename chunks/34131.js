n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(907862),
    l = n(434404),
    a = n(981631),
    s = n(921944),
    o = n(388032);
function c(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: c } = e;
    return (0, r.jsx)(i.Mb, {
        targetElementRef: c,
        title: o.intl.string(o.t.gCgirr),
        body: o.intl.string(o.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: o.intl.string(o.t.BQq86h),
            variant: "primary",
            onClick: () => {
                l.Z.open(t, a.pNK.ROLE_SUBSCRIPTIONS, void 0, a.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(s.L.USER_DISMISS),
        position: "bottom",
        caretConfig: {
            position: "top",
            align: "center",
        },
    });
}
