_.d(e, { o: () => E });
var a = _(622916),
    r = _(967752),
    n = _(617726),
    o = _(939747);
function E(t, e) {
    a.kg.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
    let _ = t.getDsn(),
        E = (function (t, e, _, a) {
            let E = { sent_at: new Date().toISOString() };
            _ &&
                _.sdk &&
                (E.sdk = {
                    name: _.sdk.name,
                    version: _.sdk.version,
                }),
                a && e && (E.dsn = (0, r.RA)(e));
            let i = (function (t) {
                let e = (0, o.uv)(t);
                return [
                    {
                        type: "statsd",
                        length: e.length,
                    },
                    e,
                ];
            })(t);
            return (0, n.Jd)(E, [i]);
        })(e, _, t.getSdkMetadata(), t.getOptions().tunnel);
    t.sendEnvelope(E);
}
