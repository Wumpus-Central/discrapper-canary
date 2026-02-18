a.d(l, { f: () => d });
var t = a(627968),
    o = a(64700),
    n = a(158954),
    i = a(311907),
    s = a(397927),
    r = a(287809);
let d = {
    title: "TagGroup",
    stories: [
        {
            name: "TagGroup",
            id: "tag-group",
            component: function (e) {
                let { selectionMode: l, removeable: a, layout: d } = e,
                    u = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
                    c = o.useMemo(
                        () => [
                            { id: "strength", label: "Strength", icon: s.rYc },
                            { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                            {
                                id: "wisdom",
                                label: "Wisdom",
                                icon: { type: "avatar", src: u?.getAvatarURL(void 0, 16) ?? "" },
                            },
                            { id: "charisma", label: "Charisma" },
                        ],
                        [u],
                    ),
                    [b, p] = o.useState(c),
                    m = o.useCallback(
                        (e) => {
                            p(b.filter((l) => !e.has(l.id)));
                        },
                        [b],
                    ),
                    x = o.useCallback(() => {
                        p(c);
                    }, [c]),
                    v = (0, t.jsx)(n.CR_, {
                        label: "Categories",
                        selectionMode: l,
                        layout: d,
                        items: b,
                        onRemove: a ? m : void 0,
                    }),
                    h = a && (0, t.jsx)(s.Button, { disabled: b.length === c.length, text: "Reset", onClick: x });
                return "inline" === d
                    ? (0, t.jsxs)(s.BJc, {
                          gap: 24,
                          children: [(0, t.jsx)("div", { style: { display: "flex", gap: 4 }, children: v }), h],
                      })
                    : (0, t.jsxs)(s.BJc, { gap: 24, children: [v, h] });
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
