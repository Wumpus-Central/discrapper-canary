n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(907862),
    l = n(434404),
    a = n(981631),
    o = n(921944),
    s = n(388032);
function c(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: c } = e;
    return (0, r.jsx)(i.Mb, {
        targetElementRef: c,
        title: s.intl.string(s.t.gCgirq),
        body: s.intl.string(s.t.fLMZFx),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: s.intl.string(s.t.BQq86u),
            variant: "primary",
            onClick: () => {
                l.Z.open(t, a.pNK.ROLE_SUBSCRIPTIONS, void 0, a.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(o.L.USER_DISMISS),
        position: "bottom",
        caretConfig: {
            position: "top",
            align: "center",
        },
    });
}
