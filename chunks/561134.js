n.d(t, { N: () => a });
var r = n(255367),
    i = n(73800),
    o = n(706898);
function a(e) {
    let { groups: t, selectedStory: n, onStorySelect: a } = e;
    return (0, r.jsx)(o.n, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && a(e);
        },
        children: t.map((e, s) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(o.n.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, r.jsx)(
                                o.n.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    onItemSelect: () => {
                                        a(e.id);
                                    },
                                    children: e.name,
                                },
                                e.id,
                            ),
                        ),
                        s < t.length - 1 && (0, r.jsx)(o.n.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
