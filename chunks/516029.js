var n = t(477900);
function s(e, r) {
    if (null == e) throw Error(`Attempted to render "${r}" but no renderer was provided`);
}
function a({ node: e, renderers: r, ...t }) {
    let o = r[e.type];
    if ((s(o, e.type), Array.isArray(e.value)))
        return (0, n.jsx)(o, { node: e, ...t, children: (0, n.jsx)(i, { nodes: e.value, renderers: r }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, n.jsx)(o, { node: e, ...e.value, ...t });
        case "link": {
            let { text: s, url: a } = e.value;
            return (0, n.jsx)(o, {
                node: e,
                ...e.value,
                ...t,
                children: s ? (0, n.jsx)(i, { nodes: s, renderers: r }) : a,
            });
        }
        case "text":
        case "code":
            return (0, n.jsx)(o, { node: e, ...t, children: e.value });
        case "heading":
            return (0, n.jsx)(o, {
                node: e,
                level: e.value.level,
                ...t,
                children: (0, n.jsx)(i, { nodes: e.value.content, renderers: r }),
            });
        case "spoiler":
            return (0, n.jsx)(o, {
                node: e,
                id: e.value.id,
                ...t,
                children: (0, n.jsx)(i, { nodes: e.value.content, renderers: r }),
            });
        case "list": {
            let a = r.listItem;
            return (
                s(a, "listItem"),
                (0, n.jsx)(o, {
                    node: e,
                    ...e.value,
                    ...t,
                    children: e.value.items.map((t, s) =>
                        (0, n.jsx)(
                            a,
                            {
                                node: t,
                                siblings: e.value.items,
                                index: s,
                                children: (0, n.jsx)(i, { nodes: t.content, renderers: r }),
                            },
                            s,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, n.jsx)(o, { ...t });
        case "small":
            return (0, n.jsx)(o, { node: e, ...t, children: (0, n.jsx)(i, { nodes: e.value.content, renderers: r }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function i({ nodes: e, renderers: r }) {
    return (0, n.jsx)(n.Fragment, {
        children: e.map((t, s) => (0, n.jsx)(a, { node: t, renderers: r, siblings: e, index: s }, s)),
    });
}
t.d(r, {}, { $: i });
