a.d(e, { v: () => _ });
var r = a(899517),
    n = a(679179);
let _ = (0, a(151122)._I)((t = {}) => {
    let e = t.root,
        a = t.prefix || 'app:///',
        _ = 'window' in r.n && void 0 !== r.n.window,
        o =
            t.iteratee ||
            (function ({ isBrowser: t, root: e, prefix: a }) {
                return (r) => {
                    if (!r.filename) return r;
                    let _ = /^[a-zA-Z]:\\/.test(r.filename) || (r.filename.includes('\\') && !r.filename.includes('/')),
                        o = /^\//.test(r.filename);
                    if (t) {
                        if (e) {
                            let t = r.filename;
                            0 === t.indexOf(e) && (r.filename = t.replace(e, a));
                        }
                    } else if (_ || o) {
                        let t = _ ? r.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : r.filename,
                            o = e ? (0, n.Gf)(e, t) : (0, n.EZ)(t);
                        r.filename = `${a}${o}`;
                    }
                    return r;
                };
            })({
                isBrowser: _,
                root: e,
                prefix: a
            });
    return {
        name: 'RewriteFrames',
        processEvent(t) {
            let e = t;
            return (
                t.exception &&
                    Array.isArray(t.exception.values) &&
                    (e = (function (t) {
                        try {
                            return {
                                ...t,
                                exception: {
                                    ...t.exception,
                                    values: t.exception.values.map((t) => {
                                        var e;
                                        return {
                                            ...t,
                                            ...(t.stacktrace && {
                                                stacktrace: {
                                                    ...(e = t.stacktrace),
                                                    frames: e && e.frames && e.frames.map((t) => o(t))
                                                }
                                            })
                                        };
                                    })
                                }
                            };
                        } catch (e) {
                            return t;
                        }
                    })(e)),
                e
            );
        }
    };
});
