"use strict";
n.d(t, { _: () => a });
var i = n(627968),
    r = n(64700),
    s = n(761508);
function a(e) {
    let { groups: t, selectedStory: n, onStorySelect: a } = e;
    return (0, i.jsx)(s.V, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && a(e);
        },
        children: t.map((e, o) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(s.V.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, i.jsx)(
                                s.V.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    "aria-label": e.name,
                                    onItemSelect: () => {
                                        a(e.id);
                                    },
                                    children: (0, i.jsx)("span", {
                                        "data-testid": `playground-story-${e.id}`,
                                        children: e.name,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                        o < t.length - 1 && (0, i.jsx)(s.V.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
