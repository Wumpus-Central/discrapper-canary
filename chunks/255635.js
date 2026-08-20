t.d(n, { $: () => _ });
var r = t(477900);
function i(e, n) {
    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
}
function o({ node: e, renderers: n, ...t }) {
    let a = n[e.type];
    if ((i(a, e.type), Array.isArray(e.value)))
        return (0, r.jsx)(a, { node: e, ...t, children: (0, r.jsx)(_, { nodes: e.value, renderers: n }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, r.jsx)(a, { node: e, ...e.value, ...t });
        case "link": {
            let i = e.value,
                o = null;
            if ("normal" === i.type) {
                let {
                    value: { text: e, url: t },
                } = i;
                o = e ? (0, r.jsx)(_, { nodes: e, renderers: n }) : t;
            }
            return (0, r.jsx)(a, { node: e, ...e.value, ...t, children: o });
        }
        case "text":
        case "code":
            return (0, r.jsx)(a, { node: e, ...t, children: e.value });
        case "heading":
            return (0, r.jsx)(a, {
                node: e,
                level: e.value.level,
                ...t,
                children: (0, r.jsx)(_, { nodes: e.value.content, renderers: n }),
            });
        case "list": {
            let o = n.listItem;
            return (
                i(o, "listItem"),
                (0, r.jsx)(a, {
                    node: e,
                    ...e.value,
                    ...t,
                    children: e.value.items.map((t, i) =>
                        (0, r.jsx)(
                            o,
                            {
                                node: t,
                                siblings: e.value.items,
                                index: i,
                                children: (0, r.jsx)(_, { nodes: t.content, renderers: n }),
                            },
                            i,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, r.jsx)(a, { ...t });
        case "small":
            return (0, r.jsx)(a, { node: e, ...t, children: (0, r.jsx)(_, { nodes: e.value.content, renderers: n }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function _({ nodes: e, renderers: n }) {
    return (0, r.jsx)(r.Fragment, {
        children: e.map((t, i) => (0, r.jsx)(o, { node: t, renderers: n, siblings: e, index: i }, i)),
    });
}
