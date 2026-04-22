n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(206248),
    a = n(997509),
    l = n(652215),
    s = n(49999),
    o = n(985018);
function d(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: d } = e;
    return (0, i.jsx)(r.H, {
        targetElementRef: d,
        title: o.intl.string(o.t.gCgirr),
        body: o.intl.string(o.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: o.intl.string(o.t.BQq86h),
            variant: "primary",
            onClick: () => {
                a.A.open(t, l.BEX.ROLE_SUBSCRIPTIONS, void 0, l.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(s.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
