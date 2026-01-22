n.d(t, {
    A: () => a,
});
var r = n(989349),
    l = n.n(r),
    i = n(686956);
let a = {
    async setCommunicationDisabledDuration(e, t, n, r, a, o) {
        let u = null != n ? l()().add(n, "s").toISOString() : null;
        await i.A.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: r,
            location: a,
            moderatorReportId: o,
        });
    },
};
