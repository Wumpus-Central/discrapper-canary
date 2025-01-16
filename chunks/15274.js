r.d(n, {
    P3: function () {
        return c;
    },
    bO: function () {
        return u;
    },
    lC: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(952265),
    s = r(749210),
    o = r(981631),
    l = r(602091);
function u(e) {
    let { eventId: n, parentGuildId: s, recurrenceId: o } = e;
    (0, a.ZD)(async () => {
        let { default: e } = await Promise.all([r.e('18543'), r.e('95393'), r.e('22347'), r.e('3202')]).then(r.bind(r, 697849));
        return (r) =>
            (0, i.jsx)(e, {
                guildScheduledEventId: n,
                parentGuildId: s,
                initialRecurrenceId: o,
                ...r
            });
    });
}
async function c(e, n) {
    let { guild_id: r } = e;
    await s.Z.transitionToGuildSync(r, n),
        u({
            eventId: e.id,
            event: e
        });
}
function d(e, n) {
    (0, a.ZD)(
        async () => {
            let { default: n } = await r.e('21395').then(r.bind(r, 312757));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    channel: e
                });
        },
        { contextKey: n === o.IlC.POPOUT ? l.u1 : l.z1 }
    );
}
