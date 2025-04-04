a.d(e, { r: () => _ });
var r = a(967752),
    n = a(617726);
function _(t, { metadata: e, tunnel: a, dsn: _ }) {
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
            ...(!!a && !!_ && { dsn: (0, r.RA)(_) })
        },
        i = [{ type: 'user_report' }, t];
    return (0, n.Jd)(o, [i]);
}
