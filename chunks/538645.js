n.d(t, { Z: () => j }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
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
        var t, n, l;
        let { effect: i, onClick: r } = e,
            { deleteConfig: s } = (0, x.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: f.previewCard,
            onClick: () => {
                r(i);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (l = i.config) || null == (n = l.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: f.previewCardFooter,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: i.name,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), s(i.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function j() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, x.n6)(),
        [i, j] = l.useState(),
        _ = l.useRef(null),
        y = (0, o.Wu)([h.Z], () => h.Z.getAllProfileEffects()),
        [C, S] = l.useState("");
    l.useEffect(() => {
        (0, p.t)(!0);
    }, []);
    let E = l.useMemo(
            () =>
                "" === C
                    ? y
                    : y.filter((e) => {
                          var t, n, a, l;
                          let i = C.toLowerCase(),
                              r = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              s = null != (l = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? l : "";
                          return r.includes(i) || s.includes(i);
                      }),
            [C, y],
        ),
        N = l.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, m.Eo)(b);
                let [a, l] = n.split(",");
                if (!a.includes("text/plain")) return (0, m.Eo)(b);
                let i = JSON.parse(atob(l));
                (i.skuId = (0, s.Z)()), t(i), (0, m.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        T = l.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, m.Eo)("Error uploading file. Try again!");
                (0, m.Kr)(e.currentTarget.files, N, m.Eo);
            },
            [N],
        );
    return (0, a.jsxs)("div", {
        className: f.root,
        children: [
            null == i &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: f.col,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: r()(f.section, f.row),
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
                            className: r()(f.row, f.end, f.section),
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
                                            onChange: T,
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
            null != i && (0, a.jsx)(g.Z, { effect: i }),
        ],
    });
}
