"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(554146),
    a = n(397927),
    r = n(442433),
    o = n(826673),
    c = n(508654),
    d = n(222823),
    u = n(543465),
    h = n(652793),
    A = n(790782),
    m = n(985018),
    _ = n(567431);
function p(e) {
    let { guild: t, selected: p } = e,
        { hasUnread: g, mentionCount: f } = (0, s.cf)(
            [d.Ay],
            () => ({
                hasUnread: d.Ay.hasUnread(t.id, A.P.GUILD_EVENT),
                mentionCount: d.Ay.getMentionCount(t.id, A.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        x = (0, s.bG)([u.Ay], () => u.Ay.isMuteScheduledEventsEnabled(t.id));
    async function E() {
        await (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("9561")]).then(n.bind(n, 926956));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, o.Dr)(l.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let C = (0, c.Ay)(t.id),
        I = C.length > 0 ? m.intl.formatToPlainString(m.t.IBdqSu, { number: C.length }) : m.intl.string(m.t.tlopTM);
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
        showUnread: g && !x,
        trailing: !x && f > 0 ? (0, i.jsx)(a.hVq, { className: _.Do, disableColor: !0, count: f }) : null,
    });
}
