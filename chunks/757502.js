r.d(t, { v: () => i });
var n = r(899517),
    a = r(679179);
let i = (0, r(151122)._I)((e = {}) => {
    let t = e.root,
        r = e.prefix || "app:///",
        i = "window" in n.n && void 0 !== n.n.window,
        o =
            e.iteratee ||
            (function ({ isBrowser: e, root: t, prefix: r }) {
                return (n) => {
                    if (!n.filename) return n;
                    let i = /^[a-zA-Z]:\\/.test(n.filename) || (n.filename.includes("\\") && !n.filename.includes("/")),
                        o = /^\//.test(n.filename);
                    if (e) {
                        if (t) {
                            let e = n.filename;
                            0 === e.indexOf(t) && (n.filename = e.replace(t, r));
                        }
                    } else if (i || o) {
                        let e = i ? n.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : n.filename,
                            o = t ? (0, a.Gf)(t, e) : (0, a.EZ)(e);
                        n.filename = `${r}${o}`;
                    }
                    return n;
                };
            })({
                isBrowser: i,
                root: t,
                prefix: r,
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
