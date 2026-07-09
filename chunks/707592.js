"use strict";
n.d(t, { Py: () => c, Ul: () => d, uR: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(66834),
    s = n(652215),
    l = n(231723);
function o(e) {
    let { eventId: t, recurrenceId: a } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("46494"),
            n.e("53176"),
            n.e("78092"),
            n.e("45563"),
            n.e("38314"),
            n.e("75580"),
            n.e("16034"),
            n.e("67388"),
            n.e("85709"),
            n.e("83695"),
            n.e("32191"),
            n.e("47626"),
            n.e("32756"),
            n.e("48330"),
            n.e("49644"),
            n.e("80007"),
            n.e("22744"),
            n.e("1922"),
            n.e("49347"),
            n.e("64287"),
            n.e("53934"),
            n.e("68248"),
            n.e("69647"),
            n.e("98354"),
            n.e("37475"),
            n.e("85285"),
        ]).then(n.bind(n, 640132));
        return (n) => (0, i.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: a, ...n });
    });
}
async function d(e, t) {
    let { guild_id: n } = e;
    await a.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
}
function c(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("43267"), n.e("34526")]).then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === s.BRT.POPOUT ? l.KX : l.SY },
    );
}
