n.d(t, { Py: () => u, Ul: () => d, uR: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(686956),
    a = n(652215),
    s = n(231723);
function o(e) {
    let { eventId: t, recurrenceId: l } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("17637"), n.e("33297"), n.e("22021"), n.e("26558")]).then(
            n.bind(n, 640132),
        );
        return (n) => (0, i.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: l, ...n });
    });
}
async function d(e, t) {
    let { guild_id: n } = e;
    await l.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
}
function u(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === a.BRT.POPOUT ? s.KX : s.SY },
    );
}
