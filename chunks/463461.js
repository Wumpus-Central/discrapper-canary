_.d(e, { r: () => n });
var a = _(967752),
    r = _(617726);
function n(t, { metadata: e, tunnel: _, dsn: n }) {
    let o = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(e &&
                e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version,
                    },
                }),
            ...(!!_ && !!n && { dsn: (0, a.RA)(n) }),
        },
        E = [{ type: "user_report" }, t];
    return (0, r.Jd)(o, [E]);
}
