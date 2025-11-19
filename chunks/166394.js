_.d(e, {
    CC: () => E,
    GY: () => o,
});
var a = _(899517);
let r = new Map(),
    n = new Set();
function o(t, e) {
    try {
        e.exception.values.forEach((e) => {
            if (e.stacktrace)
                for (let _ of e.stacktrace.frames || []) {
                    if (!_.filename || _.module_metadata) continue;
                    let e = (function (t, e) {
                        if (a.n._sentryModuleMetadata)
                            for (let e of Object.keys(a.n._sentryModuleMetadata)) {
                                let _ = a.n._sentryModuleMetadata[e];
                                if (!n.has(e)) {
                                    for (let a of (n.add(e), t(e).reverse()))
                                        if (a.filename) {
                                            r.set(a.filename, _);
                                            break;
                                        }
                                }
                            }
                        return r.get(e);
                    })(t, _.filename);
                    e && (_.module_metadata = e);
                }
        });
    } catch (t) {}
}
function E(t) {
    try {
        t.exception.values.forEach((t) => {
            if (t.stacktrace) for (let e of t.stacktrace.frames || []) delete e.module_metadata;
        });
    } catch (t) {}
}
