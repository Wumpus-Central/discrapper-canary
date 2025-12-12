n.d(t, { r: () => a });
var r = n(390873),
    i = n(690889);
function a(e, { metadata: t, tunnel: n, dsn: a }) {
    let o = {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t &&
                t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version,
                    },
                }),
            ...(!!n && !!a && { dsn: (0, r.RA)(a) }),
        },
        _ = [{ type: "user_report" }, e];
    return (0, i.Jd)(o, [_]);
}
