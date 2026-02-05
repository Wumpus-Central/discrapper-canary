n.d(t, { A: () => r });
var l = n(989349),
    i = n.n(l),
    a = n(686956);
let r = {
    async setCommunicationDisabledDuration(e, t, n, l, r, d) {
        let o = null != n ? i()().add(n, "s").toISOString() : null;
        await a.A.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: o,
            duration: n,
            reason: l,
            location: r,
            moderatorReportId: d,
        });
    },
};
