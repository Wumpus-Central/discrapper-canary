var r = n(608768),
    i = n(847745);
n.d(
    t,
    {},
    {
        L: function (e, { metadata: t, tunnel: n, dsn: o }) {
            let a = {
                    event_id: e.event_id,
                    sent_at: new Date().toISOString(),
                    ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
                    ...(!!n && !!o && { dsn: (0, r.SB)(o) }),
                },
                s = [{ type: "user_report" }, e];
            return (0, i.h4)(a, [s]);
        },
    },
);
