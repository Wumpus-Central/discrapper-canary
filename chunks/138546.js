t.a(e, async function (e, r) {
    try {
        t.d(n, { ZP: () => a });
        var l = t(859995),
            i = t(192379),
            u = e([l]);
        function o(e, n) {
            if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
        }
        l = (u.then ? (await u)() : u)[0];
        let d = new Set(['bold', 'italic', 'underline', 'strikethrough', 'spoiler', 'emoji', 'timestamp', 'mention', 'link', 'code', 'codeblock', 'heading', 'list', 'quote', 'small']);
        function c({ node: e, renderers: n, state: t }) {
            let r = n[e.type];
            if ((o(r, e.type), Array.isArray(e.value)))
                return i.createElement(
                    r,
                    null,
                    i.createElement(s, {
                        nodes: e.value,
                        renderers: n,
                        state: t
                    })
                );
            switch (e.type) {
                case 'mention':
                case 'timestamp':
                case 'emoji':
                    return i.createElement(r, e.value);
                case 'link':
                    let l = e.value,
                        u = null;
                    if ('normal' === l.type) {
                        let {
                            value: { text: e, url: r }
                        } = l;
                        u = e
                            ? i.createElement(s, {
                                  nodes: e,
                                  renderers: n,
                                  state: t
                              })
                            : r;
                    }
                    return i.createElement(r, e.value, u);
                case 'quote':
                    let c = n.paragraph;
                    return (
                        o(c, 'paragraph'),
                        i.createElement(
                            r,
                            null,
                            e.value.lines.map((e) =>
                                i.createElement(
                                    c,
                                    {
                                        key: e,
                                        value: e,
                                        renderers: n,
                                        state: t
                                    },
                                    i.createElement(s, {
                                        nodes: e,
                                        renderers: n,
                                        state: t
                                    })
                                )
                            )
                        )
                    );
                case 'text':
                case 'code':
                    return i.createElement(r, null, e.value);
                case 'heading':
                    return i.createElement(
                        r,
                        { level: e.value.level },
                        i.createElement(s, {
                            nodes: e.value.content,
                            renderers: n,
                            state: t
                        })
                    );
                case 'list':
                    let a = n.listItem ?? 'li';
                    return i.createElement(
                        r,
                        e.value,
                        e.value.items.map((e, r) =>
                            i.createElement(
                                a,
                                { key: r },
                                i.createElement(s, {
                                    nodes: e.content,
                                    renderers: n,
                                    state: t
                                })
                            )
                        )
                    );
                case 'codeblock':
                    return i.createElement(r, { language: e.value.language }, e.value.content);
                case 'empty':
                    return i.createElement(r, null);
                case 'small':
                    return i.createElement(
                        r,
                        null,
                        i.createElement(s, {
                            nodes: e.value.content,
                            renderers: n,
                            state: t
                        })
                    );
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }
        let s = (0, i.memo)(function ({ nodes: e, renderers: n, state: t }) {
            return i.createElement(
                i.Fragment,
                null,
                e.map((e, r) =>
                    i.createElement(c, {
                        key: r,
                        node: e,
                        renderers: n,
                        state: t
                    })
                )
            );
        });
        function a({ content: e, renderers: n, state: t }) {
            let r = (0, i.useMemo)(() => {
                    let e = Object.keys(n).filter((e) => d.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                u = (0, i.useMemo)(() => (0, l.Q)(e, r), [e, r]);
            return i.createElement(s, {
                nodes: u,
                renderers: n,
                state: t
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
