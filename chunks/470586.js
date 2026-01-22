n.d(t, {
    _: () => s,
});
var r = n(627968),
    i = n(64700),
    a = n(397927);

function s(e) {
    let { groups: t, selectedStory: n, onStorySelect: s } = e;
    return (0, r.jsx)(a.VQ0, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && s(e);
        },
        children: t.map((e, o) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(a.VQ0.Header, {
                            children: e.title,
                        }),
                        e.stories.map((e) =>
                            (0, r.jsx)(
                                a.VQ0.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    onItemSelect: () => {
                                        s(e.id);
                                    },
                                    children: e.name,
                                },
                                e.id,
                            ),
                        ),
                        o < t.length - 1 && (0, r.jsx)(a.VQ0.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
