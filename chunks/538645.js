n.d(t, { Z: () => j }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(53281),
    m = n(267097),
    p = n(281598),
    h = n(25251),
    f = n(373071),
    x = n(782691),
    b = n(75266);
let g = "Make sure you're only uploading text files!",
    v = (e) => {
        var t, n, r;
        let { effect: l, onClick: i } = e,
            { deleteConfig: s } = (0, f.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: b.previewCard,
            onClick: () => {
                i(l);
            },
            children: [
                (0, a.jsx)("div", {
                    className: b.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (r = l.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: b.previewCardFooter,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: l.name,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), s(l.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function j() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, f.n6)(),
        [l, j] = r.useState(),
        y = r.useRef(null),
        C = (0, o.Wu)([h.Z], () => h.Z.getAllProfileEffects());
    (0, m.Z)();
    let [_, S] = r.useState(""),
        E = r.useMemo(
            () =>
                "" === _
                    ? C
                    : C.filter((e) => {
                          var t, n, a, r;
                          let l = _.toLowerCase(),
                              i = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              s = null != (r = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? r : "";
                          return i.includes(l) || s.includes(l);
                      }),
            [_, C],
        ),
        T = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, p.Eo)(g);
                let [a, r] = n.split(",");
                if (!a.includes("text/plain")) return (0, p.Eo)(g);
                let l = JSON.parse(atob(r));
                (l.skuId = (0, s.Z)()), t(l), (0, p.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        O = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, p.Eo)("Error uploading file. Try again!");
                (0, p.Kr)(e.currentTarget.files, T, p.Eo);
            },
            [T],
        );
    return (0, a.jsxs)("div", {
        className: b.root,
        children: [
            null == l &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: b.col,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: i()(b.section, b.row),
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
                                                })) && (n(), (0, p.XA)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: b.customEffectsGrid,
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
                            className: i()(b.row, b.end, b.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: b.uploadButton,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            ref: y,
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
                            className: b.section,
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: "heading-xl/bold",
                                    children: "All Effects",
                                }),
                                (0, a.jsx)(c.oil, {
                                    value: _,
                                    onChange: (e) => {
                                        S(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: b.pfxGrid,
                                    children: E.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: b.pfxListItem,
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
                                                    className: b.pfxListItemFooter,
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
            null != l && (0, a.jsx)(x.Z, { effect: l }),
        ],
    });
}
