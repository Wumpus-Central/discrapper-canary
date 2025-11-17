n.d(t, { N: () => o });
var r = n(54381),
    i = n(473749),
    a = n(481060);
function o(e) {
    let { groups: t, selectedStory: n, onStorySelect: o } = e;
    return (0, r.jsx)(a.njP, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && o(e);
        },
        children: t.map((e, s) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(a.njP.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, r.jsx)(
                                a.njP.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    onItemSelect: () => {
                                        o(e.id);
                                    },
                                    children: e.name,
                                },
                                e.id,
                            ),
                        ),
                        s < t.length - 1 && (0, r.jsx)(a.njP.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
