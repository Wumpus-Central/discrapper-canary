r.d(t, {
    CC: () => _,
    GY: () => o,
});
var n = r(899517);
let a = new Map(),
    i = new Set();
function o(e, t) {
    try {
        t.exception.values.forEach((t) => {
            if (t.stacktrace)
                for (let r of t.stacktrace.frames || []) {
                    if (!r.filename || r.module_metadata) continue;
                    let t = (function (e, t) {
                        if (n.n._sentryModuleMetadata)
                            for (let t of Object.keys(n.n._sentryModuleMetadata)) {
                                let r = n.n._sentryModuleMetadata[t];
                                if (!i.has(t)) {
                                    for (let n of (i.add(t), e(t).reverse()))
                                        if (n.filename) {
                                            a.set(n.filename, r);
                                            break;
                                        }
                                }
                            }
                        return a.get(t);
                    })(e, r.filename);
                    t && (r.module_metadata = t);
                }
        });
    } catch (e) {}
}
function _(e) {
    try {
        e.exception.values.forEach((e) => {
            if (e.stacktrace) for (let t of e.stacktrace.frames || []) delete t.module_metadata;
        });
    } catch (e) {}
}
