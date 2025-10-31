n.d(t, { Z: () => v }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(281598),
    m = n(365943),
    p = n(25251),
    h = n(373071),
    x = n(782691),
    g = n(558270);
let f = "Make sure you're only uploading text files!",
    b = (e) => {
        var t, n, i;
        let { effect: l, onClick: r } = e,
            { deleteConfig: s } = (0, h.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: g.previewCard,
            onClick: () => {
                r(l);
            },
            children: [
                (0, a.jsx)("div", {
                    className: g.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (i = l.config) || null == (n = i.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: g.previewCardFooter,
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
function v() {
    let { profileEffects: e, upsertConfig: t } = (0, h.n6)(),
        [n, l] = i.useState(),
        v = i.useRef(null),
        j = (0, o.Wu)([p.Z], () => p.Z.getAllProfileEffects()),
        [_, y] = i.useState("");
    i.useEffect(() => {
        (0, m.t)(!0);
    }, []);
    let C = i.useMemo(
            () =>
                "" === _
                    ? j
                    : j.filter((e) => {
                          var t, n, a, i;
                          let l = _.toLowerCase(),
                              r = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              s = null != (i = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? i : "";
                          return r.includes(l) || s.includes(l);
                      }),
            [_, j],
        ),
        S = i.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(f);
                let [a, i] = n.split(",");
                if (!a.includes("text/plain")) return (0, u.Eo)(f);
                let l = JSON.parse(atob(i));
                (l.skuId = (0, s.Z)()), t(l), (0, u.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        E = i.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, u.Eo)("Error uploading file. Try again!");
                (0, u.Kr)(e.currentTarget.files, S, u.Eo);
            },
            [S],
        );
    return (0, a.jsxs)("div", {
        className: g.root,
        children: [
            null == n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: g.col,
                            children: [
                                (0, a.jsx)("div", {
                                    className: g.section,
                                    children: (0, a.jsx)(c.Heading, {
                                        variant: "heading-xl/bold",
                                        children: "Custom Profile Effects",
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: g.customEffectsGrid,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            b,
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
                            className: r()(g.row, g.end, g.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: g.uploadButton,
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
                            className: g.section,
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
                                    className: g.pfxGrid,
                                    children: C.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: g.pfxListItem,
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
                                                    className: g.pfxListItemFooter,
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
