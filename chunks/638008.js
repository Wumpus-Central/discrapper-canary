n.d(t, { v: () => a });
var r = n(606093),
    i = n(381426);
let a = (0, n(688560)._I)((e = {}) => {
    let t = e.root,
        n = e.prefix || "app:///",
        a = "window" in r.n && void 0 !== r.n.window,
        o =
            e.iteratee ||
            (function ({ isBrowser: e, root: t, prefix: n }) {
                return (r) => {
                    if (!r.filename) return r;
                    let a = /^[a-zA-Z]:\\/.test(r.filename) || (r.filename.includes("\\") && !r.filename.includes("/")),
                        o = /^\//.test(r.filename);
                    if (e) {
                        if (t) {
                            let e = r.filename;
                            0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                        }
                    } else if (a || o) {
                        let e = a ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                            o = t ? (0, i.Gf)(t, e) : (0, i.EZ)(e);
                        r.filename = `${n}${o}`;
                    }
                    return r;
                };
            })({
                isBrowser: a,
                root: t,
                prefix: n,
            });
    return {
        name: "RewriteFrames",
        processEvent(e) {
            let t = e;
            return (
                e.exception &&
                    Array.isArray(e.exception.values) &&
                    (t = (function (e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map((e) => {
                                        var t;
                                        return {
                                            ...e,
                                            ...(e.stacktrace && {
                                                stacktrace: {
                                                    ...(t = e.stacktrace),
                                                    frames: t && t.frames && t.frames.map((e) => o(e)),
                                                },
                                            }),
                                        };
                                    }),
                                },
                            };
                        } catch (t) {
                            return e;
                        }
                    })(t)),
                t
            );
        },
    };
});
