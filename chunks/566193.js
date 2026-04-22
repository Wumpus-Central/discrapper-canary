a.d(l, { f: () => c });
var t = a(627968),
    n = a(64700),
    o = a(866711),
    i = a(311907),
    r = a(11779),
    s = a(821609),
    d = a(331322),
    u = a(287809);
let c = {
    title: "TagGroup",
    stories: [
        {
            name: "TagGroup",
            id: "tag-group",
            component: function (e) {
                let { selectionMode: l, removeable: a, layout: c } = e,
                    b = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
                    p = n.useMemo(
                        () => [
                            { id: "strength", label: "Strength", icon: r.r },
                            { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                            {
                                id: "wisdom",
                                label: "Wisdom",
                                icon: { type: "avatar", src: b?.getAvatarURL(void 0, 16) ?? "" },
                            },
                            { id: "charisma", label: "Charisma" },
                        ],
                        [b],
                    ),
                    [m, h] = n.useState(p),
                    x = n.useCallback(
                        (e) => {
                            h(m.filter((l) => !e.has(l.id)));
                        },
                        [m],
                    ),
                    g = n.useCallback(() => {
                        h(p);
                    }, [p]),
                    f = (0, t.jsx)(o.C, {
                        label: "Categories",
                        selectionMode: l,
                        layout: c,
                        items: m,
                        onRemove: a ? x : void 0,
                    }),
                    v = a && (0, t.jsx)(s.$, { disabled: m.length === p.length, text: "Reset", onClick: g });
                return "inline" === c
                    ? (0, t.jsxs)(d.B, {
                          gap: 24,
                          children: [(0, t.jsx)("div", { style: { display: "flex", gap: 4 }, children: f }), v],
                      })
                    : (0, t.jsxs)(d.B, { gap: 24, children: [f, v] });
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
