a.d(e, {
    CC: () => i,
    GY: () => o
});
var r = a(899517);
let n = new Map(),
    _ = new Set();
function o(t, e) {
    try {
        e.exception.values.forEach((e) => {
            if (e.stacktrace)
                for (let o of e.stacktrace.frames || []) {
                    var a;
                    if (!o.filename || o.module_metadata) continue;
                    let e =
                        ((a = o.filename),
                        !(function (t) {
                            if (r.n._sentryModuleMetadata)
                                for (let e of Object.keys(r.n._sentryModuleMetadata)) {
                                    let a = r.n._sentryModuleMetadata[e];
                                    if (!_.has(e)) {
                                        for (let r of (_.add(e), t(e).reverse()))
                                            if (r.filename) {
                                                n.set(r.filename, a);
                                                break;
                                            }
                                    }
                                }
                        })(t),
                        n.get(a));
                    e && (o.module_metadata = e);
                }
        });
    } catch (t) {}
}
function i(t) {
    try {
        t.exception.values.forEach((t) => {
            if (t.stacktrace) for (let e of t.stacktrace.frames || []) delete e.module_metadata;
        });
    } catch (t) {}
}
