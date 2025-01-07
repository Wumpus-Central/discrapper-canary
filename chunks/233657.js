n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(704215),
    a = n(481060),
    o = n(239091),
    s = n(605236),
    c = n(554747),
    u = n(306680),
    d = n(9156),
    h = n(434479),
    p = n(490897),
    f = n(388032),
    m = n(193877);
function g(e) {
    let { guild: t, selected: g } = e,
        { hasUnread: v, mentionCount: C } = (0, l.cj)(
            [u.ZP],
            () => ({
                hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
                mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT)
            }),
            [t.id]
        ),
        x = (0, l.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
    async function I() {
        await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('22506')]).then(n.bind(n, 17671));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    guildId: t.id
                });
        }),
            (0, s.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
    }
    let _ = (0, c.ZP)(t.id),
        Z = _.length > 0 ? f.intl.formatToPlainString(f.t.IBdqSk, { number: _.length }) : f.intl.string(f.t.tlopTE);
    return (0, i.jsx)(h.m, {
        id: 'upcoming-events-'.concat(t.id),
        renderIcon: (e) =>
            (0, i.jsx)(a.CalendarIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: Z,
        selected: g,
        onClick: I,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await n.e('95307').then(n.bind(n, 867757));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id
                    });
            });
        },
        showUnread: v && !x,
        trailing:
            !x && C > 0
                ? (0, i.jsx)(a.NumberBadge, {
                      className: m.numberBadge,
                      disableColor: !0,
                      count: C
                  })
                : null
    });
}
