n.d(t, { N: () => o });
var r = n(255367),
    i = n(73800),
    a = n(706898);
function o(e) {
    let { groups: t, selectedStory: n, onStorySelect: o } = e;
    return (0, r.jsx)(a.n, {
        selectedItem: n,
        orientation: 'vertical',
        onItemSelect: (e) => {
            null != e && o(e);
        },
        children: t.map((e, s) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(a.n.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, r.jsx)(
                                a.n.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    onItemSelect: () => {
                                        o(e.id);
                                    },
                                    children: e.name
                                },
                                e.id
                            )
                        ),
                        s < t.length - 1 && (0, r.jsx)(a.n.Separator, {})
                    ]
                },
                e.title
            )
        )
    });
}
