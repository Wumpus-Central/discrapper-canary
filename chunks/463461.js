a.d(e, { r: () => o });
var r = a(967752),
    n = a(617726);
function o(t, { metadata: e, tunnel: a, dsn: o }) {
    let _ = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(e &&
                e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                }),
            ...(!!a && !!o && { dsn: (0, r.RA)(o) })
        },
        i = [{ type: 'user_report' }, t];
    return (0, n.Jd)(_, [i]);
}
