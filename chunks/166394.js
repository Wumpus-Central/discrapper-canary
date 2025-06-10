a.d(e, {
    CC: () => i,
    GY: () => o
});
var r = a(899517);
let _ = new Map(),
    n = new Set();
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
                                if (!n.has(e)) {
                                    for (let r of (n.add(e), t(e).reverse()))
                                        if (r.filename) {
                                            _.set(r.filename, a);
                                            break;
                                        }
                                }
                            }
                        return _.get(e);
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
