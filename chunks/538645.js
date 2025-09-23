n.d(t, { Z: () => v }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(281598),
    m = n(365943),
    p = n(25251),
    h = n(373071),
    x = n(782691),
    f = n(664046);
let b = "Make sure you're only uploading text files!",
    g = (e) => {
        var t, n, r;
        let { effect: i, onClick: l } = e,
            { deleteConfig: s } = (0, h.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: f.previewCard,
            onClick: () => {
                l(i);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (r = i.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64,
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
                        (0, a.jsx)(c.zxk, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), s(i.id);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function v() {
    let { profileEffects: e, upsertConfig: t } = (0, h.n6)(),
        [n, i] = r.useState(),
        v = r.useRef(null),
        j = (0, o.Wu)([p.Z], () => p.Z.getAllProfileEffects()),
        [_, y] = r.useState("");
    r.useEffect(() => {
        (0, m.t)();
    }, []);
    let C = r.useMemo(
            () =>
                "" === _
                    ? j
                    : j.filter((e) => {
                          let t = _.toLowerCase();
                          return (
                              e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t)
                          );
                      }),
            [_, j],
        ),
        E = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(b);
                let [a, r] = n.split(",");
                if (!a.includes("text/plain")) return (0, u.Eo)(b);
                let i = JSON.parse(atob(r));
                (i.id = (0, s.Z)()), t(i), (0, u.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        N = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, u.Eo)("Error uploading file. Try again!");
                (0, u.Kr)(e.currentTarget.files, E, u.Eo);
            },
            [E],
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
                                    children: (0, a.jsx)(c.X6q, {
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
                                                    i(e);
                                                },
                                            },
                                            e.id,
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
                                        (0, a.jsx)(d.Z, {
                                            ref: v,
                                            onChange: N,
                                            multiple: !1,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({
                                            id: (0, s.Z)(),
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
                                (0, a.jsx)(c.X6q, {
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
                                                    i({
                                                        id: e.id,
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
                                            e.id,
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
