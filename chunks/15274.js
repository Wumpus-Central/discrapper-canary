n.d(t, {
    P3: () => u,
    bO: () => l,
    lC: () => c
});
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(749210),
    s = n(981631),
    o = n(602091);
function l(e) {
    let { eventId: t, parentGuildId: a, recurrenceId: s } = e;
    (0, r.ZD)(async () => {
        let { default: e } = await Promise.all([n.e('18543'), n.e('22347'), n.e('96419')]).then(n.bind(n, 697849));
        return (n) =>
            (0, i.jsx)(e, {
                guildScheduledEventId: t,
                parentGuildId: a,
                initialRecurrenceId: s,
                ...n
            });
    });
}
async function u(e, t) {
    let { guild_id: n } = e;
    await a.Z.transitionToGuildSync(n, t),
        l({
            eventId: e.id,
            event: e
        });
}
function c(e, t) {
    (0, r.ZD)(
        async () => {
            let { default: t } = await n.e('21395').then(n.bind(n, 312757));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === s.IlC.POPOUT ? o.u1 : o.z1 }
    );
}
