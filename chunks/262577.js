i.d(a, { A: () => e });
var n = i(989349),
    s = i.n(n),
    d = i(66834);
let e = {
    async setCommunicationDisabledDuration(t, a, i, n, e, o) {
        let l = null != i ? s()().add(i, "s").toISOString() : null;
        await d.A.setCommunicationDisabledUntil({
            guildId: t,
            userId: a,
            communicationDisabledUntilTimestamp: l,
            duration: i,
            reason: n,
            location: e,
            moderatorReportId: o,
        });
    },
};
