n.d(t, { Py: () => u, Ul: () => d, uR: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(686956),
    l = n(652215),
    s = n(231723);
function o(e) {
    let { eventId: t, recurrenceId: a } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("80527"),
            n.e("58710"),
            n.e("31825"),
            n.e("23353"),
            n.e("7175"),
            n.e("37249"),
            n.e("14138"),
            n.e("8971"),
            n.e("85071"),
            n.e("88017"),
            n.e("1040"),
            n.e("64615"),
            n.e("17239"),
            n.e("66950"),
            n.e("58164"),
            n.e("38229"),
            n.e("20861"),
            n.e("36682"),
            n.e("45723"),
            n.e("56871"),
            n.e("69601"),
            n.e("47511"),
            n.e("51444"),
            n.e("62290"),
            n.e("93312"),
            n.e("80973"),
            n.e("82731"),
            n.e("22021"),
            n.e("37402"),
            n.e("11707"),
        ]).then(n.bind(n, 640132));
        return (n) => (0, i.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: a, ...n });
    });
}
async function d(e, t) {
    let { guild_id: n } = e;
    await a.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
}
function u(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === l.BRT.POPOUT ? s.KX : s.SY },
    );
}
