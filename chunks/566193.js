"use strict";
n.d(t, { f: () => u });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(287809);
let u = {
    title: "TagGroup",
    stories: [
        {
            name: "TagGroup",
            id: "tag-group",
            component: function (e) {
                let { selectionMode: t, removeable: n, layout: u } = e,
                    c = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
                    d = i.useMemo(
                        () => [
                            { id: "strength", label: "Strength", icon: o.rYc },
                            { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                            {
                                id: "wisdom",
                                label: "Wisdom",
                                icon: { type: "avatar", src: c?.getAvatarURL(void 0, 16) ?? "" },
                            },
                            { id: "charisma", label: "Charisma" },
                        ],
                        [c],
                    ),
                    [_, f] = i.useState(d),
                    p = i.useCallback(
                        (e) => {
                            f(_.filter((t) => !e.has(t.id)));
                        },
                        [_],
                    ),
                    h = i.useCallback(() => {
                        f(d);
                    }, [d]),
                    m = (0, r.jsx)(a.CR_, {
                        label: "Categories",
                        selectionMode: t,
                        layout: u,
                        items: _,
                        onRemove: n ? p : void 0,
                    }),
                    g = n && (0, r.jsx)(o.Button, { disabled: _.length === d.length, text: "Reset", onClick: h });
                return "inline" === u
                    ? (0, r.jsxs)(o.BJc, {
                          gap: 24,
                          children: [(0, r.jsx)("div", { style: { display: "flex", gap: 4 }, children: m }), g],
                      })
                    : (0, r.jsxs)(o.BJc, { gap: 24, children: [m, g] });
            },
            controls: {
                selectionMode: {
                    label: "Selection Mode",
                    type: "select",
                    defaultValue: "multiple",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Single", value: "single" },
                        { label: "Multiple", value: "multiple" },
                    ],
                },
                removeable: { label: "Removeable", type: "boolean", defaultValue: !1 },
                layout: {
                    label: "Layout",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Inline", value: "inline" },
                    ],
                },
            },
        },
    ],
};
