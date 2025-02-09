n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(70097),
    r = n(434404),
    a = n(970731),
    s = n(981631),
    o = n(388032),
    c = n(312678);
function d(e) {
    let { guildId: t, markAsDismissed: n } = e;
    return (0, i.jsx)('div', {
        className: c.container,
        children: (0, i.jsx)(a.ZP, {
            header: o.intl.string(o.t.gCgirq),
            content: o.intl.string(o.t.fLMZFx),
            asset: (0, i.jsx)(l.Z, {
                className: c.video,
                src: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                autoPlay: !0,
                loop: !0
            }),
            buttonCTA: o.intl.string(o.t.BQq86u),
            onClick: () => {
                r.Z.open(t, s.pNK.ROLE_SUBSCRIPTIONS, void 0, s.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
            secondaryButtonCTA: o.intl.string(o.t.WAI6xs),
            markAsDismissed: n
        })
    });
}
