s.d(i, { $: () => n });
var t = s(477900);
function r(e, i) {
    if (null == e) throw Error(`Attempted to render "${i}" but no renderer was provided`);
}
function a({ node: e, renderers: i, ...s }) {
    let h = i[e.type];
    if ((r(h, e.type), Array.isArray(e.value)))
        return (0, t.jsx)(h, { node: e, ...s, children: (0, t.jsx)(n, { nodes: e.value, renderers: i }) });
    switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
            return (0, t.jsx)(h, { node: e, ...e.value, ...s });
        case "link": {
            let { text: r, url: a } = e.value;
            return (0, t.jsx)(h, {
                node: e,
                ...e.value,
                ...s,
                children: r ? (0, t.jsx)(n, { nodes: r, renderers: i }) : a,
            });
        }
        case "text":
        case "code":
            return (0, t.jsx)(h, { node: e, ...s, children: e.value });
        case "heading":
            return (0, t.jsx)(h, {
                node: e,
                level: e.value.level,
                ...s,
                children: (0, t.jsx)(n, { nodes: e.value.content, renderers: i }),
            });
        case "spoiler":
            return (0, t.jsx)(h, {
                node: e,
                id: e.value.id,
                ...s,
                children: (0, t.jsx)(n, { nodes: e.value.content, renderers: i }),
            });
        case "list": {
            let a = i.listItem;
            return (
                r(a, "listItem"),
                (0, t.jsx)(h, {
                    node: e,
                    ...e.value,
                    ...s,
                    children: e.value.items.map((s, r) =>
                        (0, t.jsx)(
                            a,
                            {
                                node: s,
                                siblings: e.value.items,
                                index: r,
                                children: (0, t.jsx)(n, { nodes: s.content, renderers: i }),
                            },
                            r,
                        ),
                    ),
                })
            );
        }
        case "empty":
            return (0, t.jsx)(h, { ...s });
        case "small":
            return (0, t.jsx)(h, { node: e, ...s, children: (0, t.jsx)(n, { nodes: e.value.content, renderers: i }) });
        default:
            throw TypeError(`Unknown node type "${e.type}"`);
    }
}
function n({ nodes: e, renderers: i }) {
    return (0, t.jsx)(t.Fragment, {
        children: e.map((s, r) => (0, t.jsx)(a, { node: s, renderers: i, siblings: e, index: r }, r)),
    });
}
