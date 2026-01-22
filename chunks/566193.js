n.d(t, {
    f: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(287809);
let c = {
    title: "TagGroup",
    stories: [
        {
            name: "TagGroup",
            id: "tag-group",
            component: function (e) {
                let { selectionMode: t, removeable: n, layout: c } = e,
                    u = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
                    d = i.useMemo(() => {
                        var e;
                        return [
                            {
                                id: "strength",
                                label: "Strength",
                                icon: o.rYc,
                            },
                            {
                                id: "dexterity",
                                label: "Dexterity",
                                icon: {
                                    type: "role",
                                    color: "#ff44aa",
                                },
                            },
                            {
                                id: "wisdom",
                                label: "Wisdom",
                                icon: {
                                    type: "avatar",
                                    src: null != (e = null == u ? void 0 : u.getAvatarURL(void 0, 16)) ? e : "",
                                },
                            },
                            {
                                id: "charisma",
                                label: "Charisma",
                            },
                        ];
                    }, [u]),
                    [f, p] = i.useState(d),
                    _ = i.useCallback(
                        (e) => {
                            p(f.filter((t) => !e.has(t.id)));
                        },
                        [f],
                    ),
                    h = i.useCallback(() => {
                        p(d);
                    }, [d]),
                    m = (0, r.jsx)(a.CR_, {
                        label: "Categories",
                        selectionMode: t,
                        layout: c,
                        items: f,
                        onRemove: n ? _ : void 0,
                    }),
                    g =
                        n &&
                        (0, r.jsx)(o.Button, {
                            disabled: f.length === d.length,
                            text: "Reset",
                            onClick: h,
                        });
                return "inline" === c
                    ? (0, r.jsxs)(o.BJc, {
                          gap: 24,
                          children: [
                              (0, r.jsx)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 4,
                                  },
                                  children: m,
                              }),
                              g,
                          ],
                      })
                    : (0, r.jsxs)(o.BJc, {
                          gap: 24,
                          children: [m, g],
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
                layout: {
                    label: "Layout",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        {
                            label: "Default",
                            value: "default",
                        },
                        {
                            label: "Inline",
                            value: "inline",
                        },
                    ],
                },
            },
        },
    ],
};
