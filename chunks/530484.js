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
    g = n(985018),
    m = n(811094);
function p(e) {
    let { guild: t, selected: p } = e,
        { hasUnread: _, mentionCount: x } = (0, l.cf)(
            [c.Ay],
            () => ({
                hasUnread: c.Ay.hasUnread(t.id, A.P.GUILD_EVENT),
                mentionCount: c.Ay.getMentionCount(t.id, A.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        f = (0, l.bG)([u.Ay], () => u.Ay.isMuteScheduledEventsEnabled(t.id));
    async function E() {
        await (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("90041")]).then(n.bind(n, 926956));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, o.Dr)(s.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let C = (0, d.Ay)(t.id),
        I = C.length > 0 ? g.intl.formatToPlainString(g.t.IBdqSu, { number: C.length }) : g.intl.string(g.t.tlopTM);
    return (0, i.jsx)(h.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, i.jsx)(a.CTc, { size: "md", color: "currentColor", className: e }),
        text: I,
        selected: p,
        onClick: E,
        onContextMenu: (e) => {
            (0, r.L3)(e, async () => {
                let { default: e } = await n.e("71742").then(n.bind(n, 502029));
                return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: _ && !f,
        trailing: !f && x > 0 ? (0, i.jsx)(a.hVq, { className: m.Do, disableColor: !0, count: x }) : null,
    });
}
