"use strict";
n.d(t, { Py: () => c, Ul: () => d, uR: () => o });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(66834),
    s = n(652215),
    l = n(231723);
function o(e) {
    let { eventId: t, recurrenceId: a } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("73470"),
            n.e("25996"),
            n.e("54948"),
            n.e("85251"),
            n.e("78638"),
            n.e("66756"),
            n.e("28634"),
            n.e("39644"),
            n.e("15462"),
            n.e("70459"),
            n.e("32191"),
            n.e("47626"),
            n.e("32756"),
            n.e("48330"),
            n.e("49644"),
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
