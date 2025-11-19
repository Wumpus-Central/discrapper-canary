_.d(e, { v: () => n });
var a = _(899517),
    r = _(679179);
let n = (0, _(151122)._I)((t = {}) => {
    let e = t.root,
        _ = t.prefix || "app:///",
        n = "window" in a.n && void 0 !== a.n.window,
        o =
            t.iteratee ||
            (function ({ isBrowser: t, root: e, prefix: _ }) {
                return (a) => {
                    if (!a.filename) return a;
                    let n = /^[a-zA-Z]:\\/.test(a.filename) || (a.filename.includes("\\") && !a.filename.includes("/")),
                        o = /^\//.test(a.filename);
                    if (t) {
                        if (e) {
                            let t = a.filename;
                            0 === t.indexOf(e) && (a.filename = t.replace(e, _));
                        }
                    } else if (n || o) {
                        let t = n ? a.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : a.filename,
                            o = e ? (0, r.Gf)(e, t) : (0, r.EZ)(t);
                        a.filename = `${_}${o}`;
                    }
                    return a;
                };
            })({
                isBrowser: n,
                root: e,
                prefix: _,
            });
    return {
        name: "RewriteFrames",
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
                                                    frames: e && e.frames && e.frames.map((t) => o(t)),
                                                },
                                            }),
                                        };
                                    }),
                                },
                            };
                        } catch (e) {
                            return t;
                        }
                    })(e)),
                e
            );
        },
    };
});
