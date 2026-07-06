"use strict";
n.d(t, { Py: () => c, Ul: () => u, uR: () => l });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(66834),
    a = n(652215),
    o = n(231723);
function l(e) {
    let { eventId: t, recurrenceId: s } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("58846"),
            n.e("85948"),
            n.e("12940"),
            n.e("52443"),
            n.e("4278"),
            n.e("4676"),
            n.e("11266"),
            n.e("12124"),
            n.e("89881"),
            n.e("7960"),
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
        return (n) => (0, i.jsx)(e, { guildScheduledEventId: t, initialRecurrenceId: s, ...n });
    });
}
async function u(e, t) {
    let { guild_id: n } = e;
    await s.A.transitionToGuildSync(n, t), l({ eventId: e.id, event: e });
}
function c(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("43267"), n.e("34526")]).then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === a.BRT.POPOUT ? o.KX : o.SY },
    );
}
