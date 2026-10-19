t.d(n, { $: () => s });
var r = t(477900);
function i(e, n) {
    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
}
function o({ node: e, renderers: n, ...t }) {
    let u = n[e.type];
    if ((i(u, e.type), Array.isArray(e.value)))
        return (0, r.jsx)(u, { node: e, ...t, children: (0, r.jsx)(s, { nodes: e.value, renderers: n }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, r.jsx)(u, { node: e, ...e.value, ...t });
        case "link": {
            let { text: i, url: o } = e.value;
            return (0, r.jsx)(u, {
                node: e,
                ...e.value,
                ...t,
                children: i ? (0, r.jsx)(s, { nodes: i, renderers: n }) : o,
            });
        }
        case "text":
        case "code":
            return (0, r.jsx)(u, { node: e, ...t, children: e.value });
        case "heading":
            return (0, r.jsx)(u, {
                node: e,
                level: e.value.level,
                ...t,
                children: (0, r.jsx)(s, { nodes: e.value.content, renderers: n }),
            });
        case "list": {
            let o = n.listItem;
            return (
                i(o, "listItem"),
                (0, r.jsx)(u, {
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
                                children: (0, r.jsx)(s, { nodes: t.content, renderers: n }),
                            },
                            i,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, r.jsx)(u, { ...t });
        case "small":
            return (0, r.jsx)(u, { node: e, ...t, children: (0, r.jsx)(s, { nodes: e.value.content, renderers: n }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function s({ nodes: e, renderers: n }) {
    return (0, r.jsx)(r.Fragment, {
        children: e.map((t, i) => (0, r.jsx)(o, { node: t, renderers: n, siblings: e, index: i }, i)),
    });
}
