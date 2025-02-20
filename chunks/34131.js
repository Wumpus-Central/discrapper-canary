n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(70097),
    l = n(434404),
    o = n(970731),
    a = n(981631),
    s = n(388032),
    c = n(813293);
function u(e) {
    let { guildId: t, markAsDismissed: n } = e;
    return (0, r.jsx)('div', {
        className: c.container,
        children: (0, r.jsx)(o.ZP, {
            header: s.NW.string(s.t.gCgirq),
            content: s.NW.string(s.t.fLMZFx),
            asset: (0, r.jsx)(i.Z, {
                className: c.video,
                src: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                autoPlay: !0,
                loop: !0
            }),
            buttonCTA: s.NW.string(s.t.BQq86u),
            onClick: () => {
                l.Z.open(t, a.pNK.ROLE_SUBSCRIPTIONS, void 0, a.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
            secondaryButtonCTA: s.NW.string(s.t.WAI6xs),
            markAsDismissed: n
        })
    });
}
