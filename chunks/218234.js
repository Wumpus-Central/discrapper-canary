a.d(e, { o: () => i });
var r = a(622916),
    _ = a(967752),
    n = a(617726),
    o = a(939747);
function i(t, e) {
    r.kg.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
    let a = t.getDsn(),
        i = (function (t, e, a, r) {
            let i = { sent_at: new Date().toISOString() };
            a &&
                a.sdk &&
                (i.sdk = {
                    name: a.sdk.name,
                    version: a.sdk.version,
                }),
                r && e && (i.dsn = (0, _.RA)(e));
            let E = (function (t) {
                let e = (0, o.uv)(t);
                return [
                    {
                        type: "statsd",
                        length: e.length,
                    },
                    e,
                ];
            })(t);
            return (0, n.Jd)(i, [E]);
        })(e, a, t.getSdkMetadata(), t.getOptions().tunnel);
    t.sendEnvelope(i);
}
