r.d(t, { o: () => _ });
var n = r(622916),
    a = r(967752),
    i = r(617726),
    o = r(939747);
function _(e, t) {
    n.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    let r = e.getDsn(),
        _ = (function (e, t, r, n) {
            let _ = { sent_at: new Date().toISOString() };
            r &&
                r.sdk &&
                (_.sdk = {
                    name: r.sdk.name,
                    version: r.sdk.version,
                }),
                n && t && (_.dsn = (0, a.RA)(t));
            let s = (function (e) {
                let t = (0, o.uv)(e);
                return [
                    {
                        type: "statsd",
                        length: t.length,
                    },
                    t,
                ];
            })(e);
            return (0, i.Jd)(_, [s]);
        })(t, r, e.getSdkMetadata(), e.getOptions().tunnel);
    e.sendEnvelope(_);
}
