"use strict";
n.d(t, { Py: () => d, Ul: () => u, uR: () => l });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(686956),
    a = n(652215),
    o = n(231723);
function l(e) {
    let { eventId: t, recurrenceId: s } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("70474"),
            n.e("76640"),
            n.e("7175"),
            n.e("55202"),
            n.e("23353"),
            n.e("73667"),
            n.e("11250"),
            n.e("14138"),
            n.e("3442"),
            n.e("85071"),
            n.e("88017"),
            n.e("70994"),
            n.e("17239"),
            n.e("24267"),
            n.e("51793"),
            n.e("58164"),
            n.e("81645"),
            n.e("36682"),
            n.e("63070"),
            n.e("25370"),
            n.e("96313"),
            n.e("48330"),
            n.e("51354"),
            n.e("75319"),
            n.e("77330"),
        ]).then(n.bind(n, 324584));
        return (n) => (0, r.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: s, ...n });
    });
}
async function u(e, t) {
    let { guild_id: n } = e;
    await s.A.transitionToGuildSync(n, t), l({ eventId: e.id, event: e });
}
function d(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, r.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === a.BRT.POPOUT ? o.KX : o.SY },
    );
}
