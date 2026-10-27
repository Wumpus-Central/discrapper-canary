n.d(t, { $: () => _ });
var r = n(477900);
function i(e, t) {
    if (null == e) throw Error(`Attempted to render "${t}" but no renderer was provided`);
}
function o({ node: e, renderers: t, ...n }) {
    let a = t[e.type];
    if ((i(a, e.type), Array.isArray(e.value)))
        return (0, r.jsx)(a, { node: e, ...n, children: (0, r.jsx)(_, { nodes: e.value, renderers: t }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, r.jsx)(a, { node: e, ...e.value, ...n });
        case "link": {
            let { text: i, url: o } = e.value;
            return (0, r.jsx)(a, {
                node: e,
                ...e.value,
                ...n,
                children: i ? (0, r.jsx)(_, { nodes: i, renderers: t }) : o,
            });
        }
        case "text":
        case "code":
            return (0, r.jsx)(a, { node: e, ...n, children: e.value });
        case "heading":
            return (0, r.jsx)(a, {
                node: e,
                level: e.value.level,
                ...n,
                children: (0, r.jsx)(_, { nodes: e.value.content, renderers: t }),
            });
        case "spoiler":
            return (0, r.jsx)(a, {
                node: e,
                id: e.value.id,
                ...n,
                children: (0, r.jsx)(_, { nodes: e.value.content, renderers: t }),
            });
        case "list": {
            let o = t.listItem;
            return (
                i(o, "listItem"),
                (0, r.jsx)(a, {
                    node: e,
                    ...e.value,
                    ...n,
                    children: e.value.items.map((n, i) =>
                        (0, r.jsx)(
                            o,
                            {
                                node: n,
                                siblings: e.value.items,
                                index: i,
                                children: (0, r.jsx)(_, { nodes: n.content, renderers: t }),
                            },
                            i,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, r.jsx)(a, { ...n });
        case "small":
            return (0, r.jsx)(a, { node: e, ...n, children: (0, r.jsx)(_, { nodes: e.value.content, renderers: t }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function _({ nodes: e, renderers: t }) {
    return (0, r.jsx)(r.Fragment, {
        children: e.map((n, i) => (0, r.jsx)(o, { node: n, renderers: t, siblings: e, index: i }, i)),
    });
}
