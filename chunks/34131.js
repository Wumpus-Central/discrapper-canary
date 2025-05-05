n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(70097),
    l = n(434404),
    a = n(970731),
    o = n(981631),
    s = n(388032),
    c = n(401623);
function u(e) {
    let { guildId: t, markAsDismissed: n } = e;
    return (0, r.jsx)('div', {
        className: c.container,
        children: (0, r.jsx)(a.ZP, {
            header: s.intl.string(s.t.gCgirq),
            content: s.intl.string(s.t.fLMZFx),
            asset: (0, r.jsx)(i.Z, {
                className: c.video,
                src: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                autoPlay: !0,
                loop: !0
            }),
            buttonCTA: s.intl.string(s.t.BQq86u),
            onClick: () => {
                l.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
            secondaryButtonCTA: s.intl.string(s.t.WAI6xs),
            markAsDismissed: n
        })
    });
}
