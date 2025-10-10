n.d(t, { Z: () => g }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(281598),
    m = n(25251),
    p = n(373071),
    h = n(782691),
    x = n(558270);
let f = "Make sure you're only uploading text files!",
    b = (e) => {
        var t, n, r;
        let { effect: i, onClick: l } = e,
            { deleteConfig: s } = (0, p.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: x.previewCard,
            onClick: () => {
                l(i);
            },
            children: [
                (0, a.jsx)("div", {
                    className: x.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (r = i.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: x.previewCardFooter,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: i.name,
                        }),
                        (0, a.jsx)(c.zxk, {
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
function g() {
    let { profileEffects: e, upsertConfig: t } = (0, p.n6)(),
        [n, i] = r.useState(),
        g = r.useRef(null),
        v = (0, o.Wu)([m.Z], () => m.Z.getAllProfileEffects()),
        [j, _] = r.useState(""),
        y = r.useMemo(
            () =>
                "" === j
                    ? v
                    : v.filter((e) => {
                          let t = j.toLowerCase();
                          return (
                              e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t)
                          );
                      }),
            [j, v],
        ),
        C = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(f);
                let [a, r] = n.split(",");
                if (!a.includes("text/plain")) return (0, u.Eo)(f);
                let i = JSON.parse(atob(r));
                (i.skuId = (0, s.Z)()), t(i), (0, u.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        E = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, u.Eo)("Error uploading file. Try again!");
                (0, u.Kr)(e.currentTarget.files, C, u.Eo);
            },
            [C],
        );
    return (0, a.jsxs)("div", {
        className: x.root,
        children: [
            null == n &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: x.col,
                            children: [
                                (0, a.jsx)("div", {
                                    className: x.section,
                                    children: (0, a.jsx)(c.X6q, {
                                        variant: "heading-xl/bold",
                                        children: "Custom Profile Effects",
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: x.customEffectsGrid,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            b,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    i(e);
                                                },
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l()(x.row, x.end, x.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: x.uploadButton,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(d.Z, {
                                            ref: g,
                                            onChange: E,
                                            multiple: !1,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.zxk, {
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
                            className: x.section,
                            children: [
                                (0, a.jsx)(c.X6q, {
                                    variant: "heading-xl/bold",
                                    children: "All Effects",
                                }),
                                (0, a.jsx)(c.oil, {
                                    value: j,
                                    onChange: (e) => {
                                        _(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: x.pfxGrid,
                                    children: y.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: x.pfxListItem,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    i({
                                                        skuId: e.skuId,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: { effects: e.config.effects },
                                                    });
                                                },
                                                children: (0, a.jsx)("div", {
                                                    className: x.pfxListItemFooter,
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
            null != n && (0, a.jsx)(h.Z, { effect: n }),
        ],
    });
}
