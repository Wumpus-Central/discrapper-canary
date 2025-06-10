a.d(e, { v: () => n });
var r = a(899517),
    _ = a(679179);
let n = (0, a(151122)._I)((t = {}) => {
    let e = t.root,
        a = t.prefix || 'app:///',
        n = 'window' in r.n && void 0 !== r.n.window,
        o =
            t.iteratee ||
            (function ({ isBrowser: t, root: e, prefix: a }) {
                return (r) => {
                    if (!r.filename) return r;
                    let n = /^[a-zA-Z]:\\/.test(r.filename) || (r.filename.includes('\\') && !r.filename.includes('/')),
                        o = /^\//.test(r.filename);
                    if (t) {
                        if (e) {
                            let t = r.filename;
                            0 === t.indexOf(e) && (r.filename = t.replace(e, a));
                        }
                    } else if (n || o) {
                        let t = n ? r.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : r.filename,
                            o = e ? (0, _.Gf)(e, t) : (0, _.EZ)(t);
                        r.filename = `${a}${o}`;
                    }
                    return r;
                };
            })({
                isBrowser: n,
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
