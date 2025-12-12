n.d(t, { V: () => i });
var r = n(864523);
function i(e, t, n = [t], a = "npm") {
    let o = e._metadata || {};
    o.sdk ||
        (o.sdk = {
            name: `sentry.javascript.${t}`,
            packages: n.map((e) => ({
                name: `${a}:@sentry/${e}`,
                version: r.J,
            })),
            version: r.J,
        }),
        (e._metadata = o);
}
