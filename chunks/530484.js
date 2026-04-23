n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(554146),
    a = n(192308),
    r = n(81466),
    o = n(777666),
    d = n(442433),
    c = n(826673),
    u = n(508654),
    h = n(222823),
    A = n(543465),
    _ = n(652793),
    m = n(790782),
    g = n(985018),
    p = n(645591);
function f(e) {
    let { guild: t, selected: f } = e,
        { hasUnread: E, mentionCount: x } = (0, l.cf)(
            [h.Ay],
            () => ({
                hasUnread: h.Ay.hasUnread(t.id, m.P.GUILD_EVENT),
                mentionCount: h.Ay.getMentionCount(t.id, m.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        I = (0, l.bG)([A.Ay], () => A.Ay.isMuteScheduledEventsEnabled(t.id));
    async function C() {
        await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("25372")]).then(n.bind(n, 926956));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, c.Dr)(s.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let b = (0, u.Ay)(t.id),
        N = b.length > 0 ? g.intl.formatToPlainString(g.t.IBdqSu, { number: b.length }) : g.intl.string(g.t.tlopTM);
    return (0, i.jsx)(_.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, i.jsx)(r.C, { size: "md", color: "currentColor", className: e }),
        text: N,
        selected: f,
        onClick: C,
        onContextMenu: (e) => {
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("71742").then(n.bind(n, 502029));
                return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: E && !I,
        trailing: !I && x > 0 ? (0, i.jsx)(o.hV, { className: p.Do, disableColor: !0, count: x }) : null,
    });
}
