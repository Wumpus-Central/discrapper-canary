t.a(e, async function (e, r) {
    try {
        t.d(n, {
            Ay: () => a,
            ER: () => c,
        });
        var i = t(627968),
            o = t(207495),
            u = t(64700),
            _ = e([o]);
        o = (_.then ? (await _)() : _)[0];
        let d = (0, u.createContext)(null);

        function c() {
            return (0, u.useContext)(d);
        }
        let b = new Set([
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
                return (0, i.jsx)(r, {
                    node: e,
                    ...t,
                    children: (0, i.jsx)(f, {
                        nodes: e.value,
                        renderers: n,
                    }),
                });
            switch (e.type) {
                case "mention":
                case "timestamp":
                case "emoji":
                case "code_block":
                    return (0, i.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                    });
                case "link": {
                    let o = e.value,
                        u = null;
                    if ("normal" === o.type) {
                        let {
                            value: { text: e, url: t },
                        } = o;
                        u = e
                            ? (0, i.jsx)(f, {
                                  nodes: e,
                                  renderers: n,
                              })
                            : t;
                    }
                    return (0, i.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: u,
                    });
                }
                case "text":
                case "code":
                    return (0, i.jsx)(r, {
                        node: e,
                        ...t,
                        children: e.value,
                    });
                case "heading":
                    return (0, i.jsx)(r, {
                        node: e,
                        level: e.value.level,
                        ...t,
                        children: (0, i.jsx)(f, {
                            nodes: e.value.content,
                            renderers: n,
                        }),
                    });
                case "list": {
                    let o = n.listItem ?? "li";
                    return (0, i.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: e.value.items.map((t, r) =>
                            (0, i.jsx)(
                                o,
                                {
                                    node: t,
                                    siblings: e.value.items,
                                    index: r,
                                    children: (0, i.jsx)(f, {
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
                    return (0, i.jsx)(r, {
                        ...t,
                    });
                case "small":
                    return (0, i.jsx)(r, {
                        node: e,
                        ...t,
                        children: (0, i.jsx)(f, {
                            nodes: e.value.content,
                            renderers: n,
                        }),
                    });
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }

        function f({ nodes: e, renderers: n }) {
            return (0, i.jsx)(i.Fragment, {
                children: e.map((t, r) =>
                    (0, i.jsx)(
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
                    let e = Object.keys(n).filter((e) => b.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                r = (0, u.useMemo)(() => (0, o.q)(e, t), [e, t]);
            return (0, i.jsx)(d.Provider, {
                value: r,
                children: (0, i.jsx)(f, {
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
