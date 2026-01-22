n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(342494),
    l = n(997509),
    a = n(652215),
    s = n(49999),
    o = n(985018);

function c(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: c } = e;
    return (0, r.jsx)(i.HZ, {
        targetElementRef: c,
        title: o.intl.string(o.t.gCgirr),
        body: o.intl.string(o.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: o.intl.string(o.t.BQq86h),
            variant: "primary",
            onClick: () => {
                l.A.open(t, a.BEX.ROLE_SUBSCRIPTIONS, void 0, a.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(s.i.USER_DISMISS),
        position: "bottom",
        caretConfig: {
            align: "center",
        },
    });
}
