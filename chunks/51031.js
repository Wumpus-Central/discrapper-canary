l.d(t, { bU: () => p });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(687021),
    o = l(487233),
    s = l(230635),
    d = l(473219),
    c = l(287809);
let u = { value: "", label: "No Guild (main profile)" },
    p = {
        title: "Editable Tile Button Examples",
        stories: [
            {
                name: "Avatar Button",
                component: function (e) {
                    let [t, l] = n.useState(""),
                        s = (0, r.bG)([c.default], () => c.default.getCurrentUser());
                    return null == s
                        ? null
                        : (0, a.jsxs)("div", {
                              style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
                              children: [
                                  (0, a.jsx)(i.v, {
                                      guildId: t,
                                      onChange: (e) => {
                                          l(e?.id ?? "");
                                      },
                                      globalOption: u,
                                  }),
                                  (0, a.jsx)(o.A, { user: s, guildId: "" === t ? null : t }),
                              ],
                          });
                },
                id: "avatar-button",
            },
            {
                name: "Avatar Decoration Button",
                component: function (e) {
                    let [t, l] = n.useState(""),
                        o = (0, r.bG)([c.default], () => c.default.getCurrentUser());
                    return null == o
                        ? null
                        : (0, a.jsxs)("div", {
                              style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
                              children: [
                                  (0, a.jsx)(i.v, {
                                      guildId: t,
                                      onChange: (e) => {
                                          l(e?.id ?? "");
                                      },
                                      globalOption: u,
                                  }),
                                  (0, a.jsx)(s.A, { user: o, guildId: "" === t ? null : t }),
                              ],
                          });
                },
                id: "avatar-decoration-button",
            },
            {
                name: "Nameplate Button",
                component: function (e) {
                    let [t, l] = n.useState(""),
                        o = (0, r.bG)([c.default], () => c.default.getCurrentUser());
                    return null == o
                        ? null
                        : (0, a.jsxs)("div", {
                              style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
                              children: [
                                  (0, a.jsx)(i.v, {
                                      guildId: t,
                                      onChange: (e) => {
                                          l(e?.id ?? "");
                                      },
                                      globalOption: u,
                                  }),
                                  (0, a.jsx)(d.A, { user: o, guildId: "" === t ? null : t }),
                              ],
                          });
                },
                id: "nameplate-button",
            },
        ],
    };
