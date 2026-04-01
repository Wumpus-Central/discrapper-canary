l.d(t, { bU: () => u });
var a = l(627968),
    n = l(64700),
    r = l(687021),
    i = l(487233),
    o = l(230635);
let s = { value: "", label: "No Guild (main profile)" },
    u = {
        title: "Editable Tile Button Examples",
        stories: [
            {
                name: "Avatar Button",
                component: function (e) {
                    let [t, l] = n.useState("");
                    return (0, a.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
                        children: [
                            (0, a.jsx)(r.v, {
                                guildId: t,
                                onChange: (e) => {
                                    l(e?.id ?? "");
                                },
                                globalOption: s,
                            }),
                            (0, a.jsx)(i.m, { guildId: "" === t ? null : t }),
                        ],
                    });
                },
                id: "avatar-button",
            },
            {
                name: "Avatar Decoration Button",
                component: function (e) {
                    let [t, l] = n.useState("");
                    return (0, a.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
                        children: [
                            (0, a.jsx)(r.v, {
                                guildId: t,
                                onChange: (e) => {
                                    l(e?.id ?? "");
                                },
                                globalOption: s,
                            }),
                            (0, a.jsx)(o.W, { guildId: "" === t ? null : t }),
                        ],
                    });
                },
                id: "avatar-decoration-button",
            },
        ],
    };
