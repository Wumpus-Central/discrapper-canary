r.d(t, { r: () => i });
var n = r(967752),
    a = r(617726);
function i(e, { metadata: t, tunnel: r, dsn: i }) {
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
            ...(!!r && !!i && { dsn: (0, n.RA)(i) }),
        },
        _ = [{ type: "user_report" }, e];
    return (0, a.Jd)(o, [_]);
}
