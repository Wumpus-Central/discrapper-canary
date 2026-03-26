l.d(t, { b: () => s });
var a = l(627968),
    n = l(64700),
    r = l(687021),
    i = l(230635);
let o = { value: "", label: "No Guild (main profile)" },
    s = {
        title: "Editable Tile Button Examples",
        stories: [
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
                                globalOption: o,
                            }),
                            (0, a.jsx)(i.W, { guildId: "" === t ? null : t }),
                        ],
                    });
                },
                id: "avatar-decoration-button",
            },
        ],
    };
