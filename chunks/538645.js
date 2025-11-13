n.d(t, { Z: () => j }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(951288),
    i = n(647438),
    r = n(120356),
    l = n.n(r),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(53281),
    m = n(281598),
    p = n(365943),
    h = n(25251),
    x = n(373071),
    g = n(782691),
    f = n(558270);
let b = "Make sure you're only uploading text files!",
    v = (e) => {
        var t, n, i;
        let { effect: r, onClick: l } = e,
            { deleteConfig: s } = (0, x.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: f.previewCard,
            onClick: () => {
                l(r);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (i = r.config) || null == (n = i.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: f.previewCardFooter,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: r.name,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), s(r.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function j() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, x.n6)(),
        [r, j] = i.useState(),
        _ = i.useRef(null),
        y = (0, o.Wu)([h.Z], () => h.Z.getAllProfileEffects()),
        [C, S] = i.useState("");
    i.useEffect(() => {
        (0, p.t)(!0);
    }, []);
    let E = i.useMemo(
            () =>
                "" === C
                    ? y
                    : y.filter((e) => {
                          var t, n, a, i;
                          let r = C.toLowerCase(),
                              l = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              s = null != (i = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? i : "";
                          return l.includes(r) || s.includes(r);
                      }),
            [C, y],
        ),
        T = i.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, m.Eo)(b);
                let [a, i] = n.split(",");
                if (!a.includes("text/plain")) return (0, m.Eo)(b);
                let r = JSON.parse(atob(i));
                (r.skuId = (0, s.Z)()), t(r), (0, m.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        O = i.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, m.Eo)("Error uploading file. Try again!");
                (0, m.Kr)(e.currentTarget.files, T, m.Eo);
            },
            [T],
        );
    return (0, a.jsxs)("div", {
        className: f.root,
        children: [
            null == r &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: f.col,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l()(f.section, f.row),
                                    children: [
                                        (0, a.jsx)(c.Heading, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await d.Z.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (n(), (0, m.XA)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: f.customEffectsGrid,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            v,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    j(e);
                                                },
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l()(f.row, f.end, f.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: f.uploadButton,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            ref: _,
                                            onChange: O,
                                            multiple: !1,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({
                                            skuId: (0, s.Z)(),
                                            name: "New Profile Effect",
                                            config: { effects: [] },
                                        });
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsxs)("div", {
                            className: f.section,
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: "heading-xl/bold",
                                    children: "All Effects",
                                }),
                                (0, a.jsx)(c.oil, {
                                    value: C,
                                    onChange: (e) => {
                                        S(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: f.pfxGrid,
                                    children: E.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: f.pfxListItem,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    j({
                                                        skuId: e.skuId,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: { effects: e.config.effects },
                                                    });
                                                },
                                                children: (0, a.jsx)("div", {
                                                    className: f.pfxListItemFooter,
                                                    children: (0, a.jsx)(c.Text, {
                                                        variant: "text-md/normal",
                                                        color: "always-white",
                                                        children: e.config.title,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            null != r && (0, a.jsx)(g.Z, { effect: r }),
        ],
    });
}
