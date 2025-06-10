a.d(e, { r: () => n });
var r = a(967752),
    _ = a(617726);
function n(t, { metadata: e, tunnel: a, dsn: n }) {
    let o = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(e &&
                e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                }),
            ...(!!a && !!n && { dsn: (0, r.RA)(n) })
        },
        i = [{ type: 'user_report' }, t];
    return (0, _.Jd)(o, [i]);
}
