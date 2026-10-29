t.d(r, { $: () => l });
var n = t(477900);
function s(e, r) {
    if (null == e) throw Error(`Attempted to render "${r}" but no renderer was provided`);
}
function o({ node: e, renderers: r, ...t }) {
    let i = r[e.type];
    if ((s(i, e.type), Array.isArray(e.value)))
        return (0, n.jsx)(i, { node: e, ...t, children: (0, n.jsx)(l, { nodes: e.value, renderers: r }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, n.jsx)(i, { node: e, ...e.value, ...t });
        case "link": {
            let { text: s, url: o } = e.value;
            return (0, n.jsx)(i, {
                node: e,
                ...e.value,
                ...t,
                children: s ? (0, n.jsx)(l, { nodes: s, renderers: r }) : o,
            });
        }
        case "text":
        case "code":
            return (0, n.jsx)(i, { node: e, ...t, children: e.value });
        case "heading":
            return (0, n.jsx)(i, {
                node: e,
                level: e.value.level,
                ...t,
                children: (0, n.jsx)(l, { nodes: e.value.content, renderers: r }),
            });
        case "spoiler":
            return (0, n.jsx)(i, {
                node: e,
                id: e.value.id,
                ...t,
                children: (0, n.jsx)(l, { nodes: e.value.content, renderers: r }),
            });
        case "list": {
            let o = r.listItem;
            return (
                s(o, "listItem"),
                (0, n.jsx)(i, {
                    node: e,
                    ...e.value,
                    ...t,
                    children: e.value.items.map((t, s) =>
                        (0, n.jsx)(
                            o,
                            {
                                node: t,
                                siblings: e.value.items,
                                index: s,
                                children: (0, n.jsx)(l, { nodes: t.content, renderers: r }),
                            },
                            s,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, n.jsx)(i, { ...t });
        case "small":
            return (0, n.jsx)(i, { node: e, ...t, children: (0, n.jsx)(l, { nodes: e.value.content, renderers: r }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function l({ nodes: e, renderers: r }) {
    return (0, n.jsx)(n.Fragment, {
        children: e.map((t, s) => (0, n.jsx)(o, { node: t, renderers: r, siblings: e, index: s }, s)),
    });
}
