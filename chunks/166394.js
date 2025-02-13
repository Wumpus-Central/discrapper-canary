a.d(e, {
    CC: () => i,
    GY: () => _
});
var r = a(899517);
let n = new Map(),
    o = new Set();
function _(t, e) {
    try {
        e.exception.values.forEach((e) => {
            if (e.stacktrace)
                for (let _ of e.stacktrace.frames || []) {
                    var a;
                    if (!_.filename || _.module_metadata) continue;
                    let e =
                        ((a = _.filename),
                        !(function (t) {
                            if (r.n._sentryModuleMetadata)
                                for (let e of Object.keys(r.n._sentryModuleMetadata)) {
                                    let a = r.n._sentryModuleMetadata[e];
                                    if (!o.has(e)) {
                                        for (let r of (o.add(e), t(e).reverse()))
                                            if (r.filename) {
                                                n.set(r.filename, a);
                                                break;
                                            }
                                    }
                                }
                        })(t),
                        n.get(a));
                    e && (_.module_metadata = e);
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
