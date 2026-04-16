n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(554146),
    a = n(397927),
    r = n(442433),
    o = n(826673),
    d = n(508654),
    c = n(222823),
    u = n(543465),
    h = n(652793),
    A = n(790782),
    _ = n(985018),
    m = n(645591);
function p(e) {
    let { guild: t, selected: p } = e,
        { hasUnread: g, mentionCount: f } = (0, l.cf)(
            [c.Ay],
            () => ({
                hasUnread: c.Ay.hasUnread(t.id, A.P.GUILD_EVENT),
                mentionCount: c.Ay.getMentionCount(t.id, A.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        E = (0, l.bG)([u.Ay], () => u.Ay.isMuteScheduledEventsEnabled(t.id));
    async function x() {
        await (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("34053")]).then(n.bind(n, 926956));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, o.Dr)(s.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let I = (0, d.Ay)(t.id),
        C = I.length > 0 ? _.intl.formatToPlainString(_.t.IBdqSu, { number: I.length }) : _.intl.string(_.t.tlopTM);
    return (0, i.jsx)(h.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, i.jsx)(a.CTc, { size: "md", color: "currentColor", className: e }),
        text: C,
        selected: p,
        onClick: x,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await n.e("71742").then(n.bind(n, 502029));
                return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: g && !E,
        trailing: !E && f > 0 ? (0, i.jsx)(a.hVq, { className: m.Do, disableColor: !0, count: f }) : null,
    });
}
