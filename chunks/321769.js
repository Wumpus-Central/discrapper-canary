n.d(t, { E: () => l }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(753450);
let s = [
        {
            id: "strength",
            label: "Strength",
        },
        {
            id: "dexterity",
            label: "Dexterity",
            isDisabled: !0,
        },
        {
            id: "wisdom",
            label: "Wisdom",
        },
        {
            id: "charisma",
            label: "Charisma",
        },
    ],
    l = {
        title: "TagGroup",
        stories: [
            {
                name: "TagGroup",
                id: "tag-group",
                component: function (e) {
                    let { selectionMode: t, removeable: n } = e,
                        [l, c] = i.useState(s),
                        u = i.useCallback(
                            (e) => {
                                c(l.filter((t) => !e.has(t.id)));
                            },
                            [l],
                        ),
                        d = i.useCallback(() => {
                            c(s);
                        }, []);
                    return (0, r.jsx)(a.Kqy, {
                        gap: 24,
                        children: (0, r.jsx)(o.Q, {
                            label: "Categories",
                            selectionMode: t,
                            items: l,
                            disabledKeys: ["dexterity"],
                            onRemove: n ? u : void 0,
                            children:
                                n &&
                                (0, r.jsx)(a.zxk, {
                                    disabled: l.length === s.length,
                                    text: "Reset",
                                    onClick: d,
                                }),
                        }),
                    });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        defaultValue: "multiple",
                        options: [
                            {
                                label: "None",
                                value: "none",
                            },
                            {
                                label: "Single",
                                value: "single",
                            },
                            {
                                label: "Multiple",
                                value: "multiple",
                            },
                        ],
                    },
                    removeable: {
                        label: "Removeable",
                        type: "boolean",
                        defaultValue: !1,
                    },
                },
            },
        ],
    };
