n.d(t, { Z: () => y }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(53281),
    m = n(267097),
    p = n(281598),
    h = n(25251),
    f = n(373071),
    b = n(489495),
    x = n(782691),
    g = n(75266);
let v = "Make sure you're only uploading text files!",
    j = (e) => {
        var t, n, r;
        let { effect: i, onClick: l } = e,
            { deleteConfig: s } = (0, f.n6)();
        return (0, a.jsxs)(c.P3F, {
            className: g.previewCard,
            onClick: () => {
                l(i);
            },
            children: [
                (0, a.jsx)("div", {
                    className: g.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (r = i.config) || null == (n = r.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: g.previewCardFooter,
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
function y() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, f.n6)(),
        [i, y] = r.useState(),
        C = r.useRef(null),
        _ = (0, o.Wu)([h.Z], () => h.Z.getAllProfileEffects());
    (0, m.Z)();
    let [S, E] = r.useState(""),
        T = r.useMemo(
            () =>
                "" === S
                    ? _
                    : _.filter((e) => {
                          var t, n, a, r;
                          let i = S.toLowerCase(),
                              l = null != (a = null == (t = e.config.title) ? void 0 : t.toLowerCase()) ? a : "",
                              s = null != (r = null == (n = e.config.description) ? void 0 : n.toLowerCase()) ? r : "";
                          return l.includes(i) || s.includes(i);
                      }),
            [S, _],
        ),
        O = r.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, p.Eo)(v);
                let [a, r] = n.split(",");
                if (!a.includes("text/plain")) return (0, p.Eo)(v);
                let i = JSON.parse(atob(r));
                (i.skuId = (0, s.Z)()), t(i), (0, p.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        N = r.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, p.Eo)("Error uploading file. Try again!");
                (0, p.Kr)(e.currentTarget.files, O, p.Eo);
            },
            [O],
        );
    return (0, a.jsxs)("div", {
        className: g.root,
        children: [
            null == i &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: g.col,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l()(g.section, g.row),
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
                                    className: g.customEffectsGrid,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            j,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    y(e);
                                                },
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l()(g.row, g.end, g.section),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: g.uploadButton,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            ref: C,
                                            onChange: N,
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
                                    value: S,
                                    onChange: (e) => {
                                        E(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: g.pfxGrid,
                                    children: T.map((e) =>
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                className: g.pfxListItem,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    let t = {
                                                        [b.cq.THUMBNAIL]:
                                                            null != e.config.thumbnailPreviewSrc &&
                                                            "" !== e.config.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.config.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [b.cq.STATIC]:
                                                            null != e.config.staticFrameSrc &&
                                                            "" !== e.config.staticFrameSrc
                                                                ? {
                                                                      src: e.config.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [b.cq.REDUCED_MOTION]:
                                                            null != e.config.reducedMotionSrc &&
                                                            "" !== e.config.reducedMotionSrc
                                                                ? {
                                                                      src: e.config.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    y({
                                                        skuId: e.skuId,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: {
                                                            effects: e.config.effects,
                                                            stillFrames: t,
                                                        },
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
            null != i && (0, a.jsx)(x.Z, { effect: i }),
        ],
    });
}
