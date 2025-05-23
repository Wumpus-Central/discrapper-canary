t.a(e, async function (e, r) {
    try {
        t.d(n, {
            Kq: () => c,
            ZP: () => d
        });
        var l = t(255367),
            i = t(430153),
            o = t(73800),
            u = e([i]);
        i = (u.then ? (await u)() : u)[0];
        let s = (0, o.createContext)(null);
        function c() {
            return (0, o.useContext)(s);
        }
        let f = new Set(['bold', 'italic', 'underline', 'strikethrough', 'spoiler', 'emoji', 'timestamp', 'mention', 'link', 'code', 'code_block', 'heading', 'list', 'quote', 'small']);
        function a({ node: e, renderers: n }) {
            let t = n[e.type];
            if (
                (!(function (e, n) {
                    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
                })(t, e.type),
                Array.isArray(e.value))
            )
                return (0, l.jsx)(t, {
                    children: (0, l.jsx)(_, {
                        nodes: e.value,
                        renderers: n
                    })
                });
            switch (e.type) {
                case 'mention':
                case 'timestamp':
                case 'emoji':
                case 'code_block':
                    return (0, l.jsx)(t, { ...e.value });
                case 'link':
                    let r = e.value,
                        i = null;
                    if ('normal' === r.type) {
                        let {
                            value: { text: e, url: t }
                        } = r;
                        i = e
                            ? (0, l.jsx)(_, {
                                  nodes: e,
                                  renderers: n
                              })
                            : t;
                    }
                    return (0, l.jsx)(t, {
                        ...e.value,
                        children: i
                    });
                case 'text':
                case 'code':
                    return (0, l.jsx)(t, { children: e.value });
                case 'heading':
                    return (0, l.jsx)(t, {
                        level: e.value.level,
                        children: (0, l.jsx)(_, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    });
                case 'list':
                    let o = n.listItem ?? 'li';
                    return (0, l.jsx)(t, {
                        ...e.value,
                        children: e.value.items.map((e, t) =>
                            (0, l.jsx)(
                                o,
                                {
                                    children: (0, l.jsx)(_, {
                                        nodes: e.content,
                                        renderers: n
                                    })
                                },
                                t
                            )
                        )
                    });
                case 'empty':
                    return (0, l.jsx)(t, {});
                case 'small':
                    return (0, l.jsx)(t, {
                        children: (0, l.jsx)(_, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    });
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }
        let _ = (0, o.memo)(function ({ nodes: e, renderers: n }) {
            return (0, l.jsx)(l.Fragment, {
                children: e.map((e, t) =>
                    (0, l.jsx)(
                        a,
                        {
                            node: e,
                            renderers: n
                        },
                        t
                    )
                )
            });
        });
        function d({ content: e, renderers: n }) {
            let t = (0, o.useMemo)(() => {
                    let e = Object.keys(n).filter((e) => f.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                r = (0, o.useMemo)(() => (0, i.Q)(e, t), [e, t]);
            return (0, l.jsx)(s.Provider, {
                value: r,
                children: (0, l.jsx)(_, {
                    nodes: r,
                    renderers: n
                })
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
