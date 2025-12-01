n.d(t, { E: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(594174);
let c = {
    title: "TagGroup",
    stories: [
        {
            name: "TagGroup",
            id: "tag-group",
            component: function (e) {
                let { selectionMode: t, removeable: n, layout: c } = e,
                    u = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
                    d = i.useMemo(() => {
                        var e;
                        return [
                            {
                                id: "strength",
                                label: "Strength",
                                icon: s.z0B,
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
                    m = i.useCallback(() => {
                        p(d);
                    }, [d]),
                    h = (0, r.jsx)(a.QSK, {
                        label: "Categories",
                        selectionMode: t,
                        layout: c,
                        items: f,
                        onRemove: n ? _ : void 0,
                    }),
                    g =
                        n &&
                        (0, r.jsx)(s.Button, {
                            disabled: f.length === d.length,
                            text: "Reset",
                            onClick: m,
                        });
                return "inline" === c
                    ? (0, r.jsxs)(s.Kqy, {
                          gap: 24,
                          children: [
                              (0, r.jsx)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 4,
                                  },
                                  children: h,
                              }),
                              g,
                          ],
                      })
                    : (0, r.jsxs)(s.Kqy, {
                          gap: 24,
                          children: [h, g],
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
