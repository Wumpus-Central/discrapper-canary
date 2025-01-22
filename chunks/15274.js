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
    o = r(749210),
    s = r(981631),
    l = r(602091);
function u(e) {
    let { eventId: n, parentGuildId: o, recurrenceId: s } = e;
    (0, a.ZD)(async () => {
        let { default: e } = await Promise.all([r.e('18543'), r.e('95393'), r.e('22347'), r.e('3202')]).then(r.bind(r, 697849));
        return (r) =>
            (0, i.jsx)(e, {
                guildScheduledEventId: n,
                parentGuildId: o,
                initialRecurrenceId: s,
                ...r
            });
    });
}
async function c(e, n) {
    let { guild_id: r } = e;
    await o.Z.transitionToGuildSync(r, n),
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
        { contextKey: n === s.IlC.POPOUT ? l.u1 : l.z1 }
    );
}
