n.d(t, { Z: () => v }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(772848),
    s = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(281598),
    m = n(365943),
    p = n(25251),
    h = n(373071),
    x = n(782691),
    f = n(558270);
let b = "Make sure you're only uploading text files!",
    g = (e) => {
        var t, n, r;
        let { effect: l, onClick: i } = e,
            { deleteConfig: o } = (0, h.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: f.previewCard,
            onClick: () => {
                i(l);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (r = l.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: f.previewCardFooter,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: l.name,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), o(l.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function v() {
    let { profileEffects: e, upsertConfig: t } = (0, h.n6)(),
        [n, l] = r.useState(),
        v = r.useRef(null),
        j = (0, s.Wu)([p.Z], () => p.Z.getAllProfileEffects()),
        [_, y] = r.useState("");
    r.useEffect(() => {
        (0, m.t)(!0);
    }, []);
    let C = r.useMemo(
            () =>
                "" === _
                    ? j
                    : j.filter((e) => {
                          var t, n, a, r;
                          let l = _.toLowerCase(),
                              i = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              o = null != (r = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? r : "";
                          return i.includes(l) || o.includes(l);
                      }),
            [_, j],
        ),
        S = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(b);
                let [a, r] = n.split(",");
                if (!a.includes("text/plain")) return (0, u.Eo)(b);
                let l = JSON.parse(atob(r));
                (l.skuId = (0, o.Z)()), t(l), (0, u.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        E = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, u.Eo)("Error uploading file. Try again!");
                (0, u.Kr)(e.currentTarget.files, S, u.Eo);
            },
            [S],
        );
    return (0, a.jsxs)("div", {
        className: f.root,
        children: [
            null == n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: f.col,
                            children: [
                                (0, a.jsx)("div", {
                                    className: f.section,
                                    children: (0, a.jsx)(c.Heading, {
                                        variant: "heading-xl/bold",
                                        children: "Custom Profile Effects",
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: f.customEffectsGrid,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            g,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    l(e);
                                                },
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: i()(f.row, f.end, f.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: f.uploadButton,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(d.Z, {
                                            ref: v,
                                            onChange: E,
                                            multiple: !1,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({
                                            skuId: (0, o.Z)(),
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
                                    value: _,
                                    onChange: (e) => {
                                        y(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: f.pfxGrid,
                                    children: C.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: f.pfxListItem,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    l({
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
            null != n && (0, a.jsx)(x.Z, { effect: n }),
        ],
    });
}
