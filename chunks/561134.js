n.d(t, { N: () => l });
var r = n(951288),
    i = n(647438),
    o = n(481060);
function l(e) {
    let { groups: t, selectedStory: n, onStorySelect: l } = e;
    return (0, r.jsx)(o.njP, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && l(e);
        },
        children: t.map((e, s) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(o.njP.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, r.jsx)(
                                o.njP.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    onItemSelect: () => {
                                        l(e.id);
                                    },
                                    children: e.name,
                                },
                                e.id,
                            ),
                        ),
                        s < t.length - 1 && (0, r.jsx)(o.njP.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
