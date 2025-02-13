n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(704215),
    o = n(481060),
    a = n(239091),
    s = n(605236),
    c = n(554747),
    d = n(306680),
    u = n(9156),
    h = n(434479),
    p = n(490897),
    m = n(388032),
    g = n(703545);
function f(e) {
    let { guild: t, selected: f } = e,
        { hasUnread: _, mentionCount: v } = (0, l.cj)(
            [d.ZP],
            () => ({
                hasUnread: d.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
                mentionCount: d.ZP.getMentionCount(t.id, p.W.GUILD_EVENT)
            }),
            [t.id]
        ),
        C = (0, l.e7)([u.ZP], () => u.ZP.isMuteScheduledEventsEnabled(t.id));
    async function x() {
        await (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('1752')]).then(n.bind(n, 17671));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    guildId: t.id
                });
        }),
            (0, s.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
    }
    let I = (0, c.ZP)(t.id),
        Z = I.length > 0 ? m.intl.formatToPlainString(m.t.IBdqSk, { number: I.length }) : m.intl.string(m.t.tlopTE);
    return (0, i.jsx)(h.m, {
        id: 'upcoming-events-'.concat(t.id),
        renderIcon: (e) =>
            (0, i.jsx)(o.Que, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: Z,
        selected: f,
        onClick: x,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await n.e('95307').then(n.bind(n, 867757));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id
                    });
            });
        },
        showUnread: _ && !C,
        trailing:
            !C && v > 0
                ? (0, i.jsx)(o.mAB, {
                      className: g.numberBadge,
                      disableColor: !0,
                      count: v
                  })
                : null
    });
}
