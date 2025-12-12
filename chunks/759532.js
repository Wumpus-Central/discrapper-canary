n.d(t, { o: () => _ });
var r = n(98076),
    i = n(390873),
    a = n(690889),
    o = n(588957);
function _(e, t) {
    r.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    let n = e.getDsn(),
        _ = (function (e, t, n, r) {
            let _ = { sent_at: new Date().toISOString() };
            n &&
                n.sdk &&
                (_.sdk = {
                    name: n.sdk.name,
                    version: n.sdk.version,
                }),
                r && t && (_.dsn = (0, i.RA)(t));
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
            return (0, a.Jd)(_, [s]);
        })(t, n, e.getSdkMetadata(), e.getOptions().tunnel);
    e.sendEnvelope(_);
}
