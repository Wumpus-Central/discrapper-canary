var n = i(536637),
    s = i.n(n),
    d = i(778858);
i.d(
    a,
    {},
    {
        A: {
            async setCommunicationDisabledDuration(t, a, i, n, o, e) {
                let r = null != i ? s()().add(i, "s").toISOString() : null;
                await d.A.setCommunicationDisabledUntil({
                    guildId: t,
                    userId: a,
                    communicationDisabledUntilTimestamp: r,
                    duration: i,
                    reason: n,
                    location: o,
                    moderatorReportId: e,
                });
            },
        },
    },
);
