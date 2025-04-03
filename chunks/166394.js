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
                for (let a of e.stacktrace.frames || []) {
                    if (!a.filename || a.module_metadata) continue;
                    let e = (function (t, e) {
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
                        return n.get(e);
                    })(t, a.filename);
                    e && (a.module_metadata = e);
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
