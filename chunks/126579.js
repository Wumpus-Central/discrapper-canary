t.a(e, async function (e, r) {
    try {
        t.d(n, {
            Kq: () => _,
            ZP: () => a,
        });
        var o = t(54381),
            i = t(31675),
            u = t(473749),
            c = e([i]);
        i = (c.then ? (await c)() : c)[0];
        let d = (0, u.createContext)(null);
        function _() {
            return (0, u.useContext)(d);
        }
        let s = new Set([
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "spoiler",
            "emoji",
            "timestamp",
            "mention",
            "link",
            "code",
            "code_block",
            "heading",
            "list",
            "quote",
            "small",
        ]);
        function l({ node: e, renderers: n, ...t }) {
            let r = n[e.type];
            if (
                (!(function (e, n) {
                    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
                })(r, e.type),
                Array.isArray(e.value))
            )
                return (0, o.jsx)(r, {
                    node: e,
                    ...t,
                    children: (0, o.jsx)(f, {
                        nodes: e.value,
                        renderers: n,
                    }),
                });
            switch (e.type) {
                case "mention":
                case "timestamp":
                case "emoji":
                case "code_block":
                    return (0, o.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                    });
                case "link": {
                    let i = e.value,
                        u = null;
                    if ("normal" === i.type) {
                        let {
                            value: { text: e, url: t },
                        } = i;
                        u = e
                            ? (0, o.jsx)(f, {
                                  nodes: e,
                                  renderers: n,
                              })
                            : t;
                    }
                    return (0, o.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: u,
                    });
                }
                case "text":
                case "code":
                    return (0, o.jsx)(r, {
                        node: e,
                        ...t,
                        children: e.value,
                    });
                case "heading":
                    return (0, o.jsx)(r, {
                        node: e,
                        level: e.value.level,
                        ...t,
                        children: (0, o.jsx)(f, {
                            nodes: e.value.content,
                            renderers: n,
                        }),
                    });
                case "list": {
                    let i = n.listItem ?? "li";
                    return (0, o.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: e.value.items.map((t, r) =>
                            (0, o.jsx)(
                                i,
                                {
                                    node: t,
                                    siblings: e.value.items,
                                    index: r,
                                    children: (0, o.jsx)(f, {
                                        nodes: t.content,
                                        renderers: n,
                                    }),
                                },
                                r,
                            ),
                        ),
                    });
                }
                case "empty":
                    return (0, o.jsx)(r, { ...t });
                case "small":
                    return (0, o.jsx)(r, {
                        node: e,
                        ...t,
                        children: (0, o.jsx)(f, {
                            nodes: e.value.content,
                            renderers: n,
                        }),
                    });
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }
        function f({ nodes: e, renderers: n }) {
            return (0, o.jsx)(o.Fragment, {
                children: e.map((t, r) =>
                    (0, o.jsx)(
                        l,
                        {
                            node: t,
                            renderers: n,
                            siblings: e,
                            index: r,
                        },
                        r,
                    ),
                ),
            });
        }
        function a({ content: e, renderers: n }) {
            let t = (0, u.useMemo)(() => {
                    let e = Object.keys(n).filter((e) => s.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                r = (0, u.useMemo)(() => (0, i.Q)(e, t), [e, t]);
            return (0, o.jsx)(d.Provider, {
                value: r,
                children: (0, o.jsx)(f, {
                    nodes: r,
                    renderers: n,
                }),
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
