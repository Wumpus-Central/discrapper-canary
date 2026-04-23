"use strict";
n.d(t, { Py: () => c, Ul: () => u, uR: () => l });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(686956),
    a = n(652215),
    o = n(231723);
function l(e) {
    let { eventId: t, recurrenceId: s } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("48330"), n.e("51354"), n.e("41447")]).then(n.bind(n, 324584));
        return (n) => (0, r.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: s, ...n });
    });
}
async function u(e, t) {
    let { guild_id: n } = e;
    await s.A.transitionToGuildSync(n, t), l({ eventId: e.id, event: e });
}
function c(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, r.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === a.BRT.POPOUT ? o.KX : o.SY },
    );
}
