n.d(t, { A: () => b }), n(508300);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(835245),
    o = n(397927),
    d = n(157559),
    c = n(817363),
    u = n(993408),
    m = n(315949),
    h = n(559474),
    x = n(816866),
    p = n(87558),
    g = n(918550),
    _ = n(525221);
let f = "Make sure you're only uploading text files!",
    v = (e) => {
        let { effect: t, onClick: n } = e,
            { deleteConfig: i } = (0, x.wu)();
        return (0, a.jsxs)(o.DUT, {
            className: _.B0,
            onClick: () => {
                n(t);
            },
            children: [
                (0, a.jsx)("div", {
                    className: _.yV,
                    style: { backgroundImage: `url(${t.config?.effects?.[0]?.base64})` },
                }),
                (0, a.jsxs)("div", {
                    className: _.eL,
                    children: [
                        (0, a.jsx)(o.Text, { variant: "text-md/bold", children: t.name }),
                        (0, a.jsx)(o.Button, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), i(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function b() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, x.wu)(),
        [s, b] = i.useState(),
        j = i.useRef(null),
        { categories: A } = (0, m.A)(),
        C = i.useMemo(() => (0, u.Wj)(A), [A]),
        [y, E] = i.useState(""),
        S = i.useMemo(
            () =>
                "" === y
                    ? C
                    : C.filter((e) => {
                          let t = y.toLowerCase(),
                              n = e.title?.toLowerCase() ?? "",
                              a = e.description?.toLowerCase() ?? "";
                          return n.includes(t) || a.includes(t);
                      }),
            [y, C],
        ),
        T = i.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, h.Ni)(f);
                let [a, i] = n.split(",");
                if (!a.includes("text/plain")) return (0, h.Ni)(f);
                let s = JSON.parse(atob(i));
                (s.skuId = (0, r.A)()), t(s), (0, h.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        N = i.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, h.Ni)("Error uploading file. Try again!")
                    : (0, h.KE)(e.currentTarget.files, T, h.Ni);
            },
            [T],
        );
    return (0, a.jsxs)("div", {
        className: _.zr,
        children: [
            null == s &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: _.nz,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l()(_.uW, _.nM),
                                    children: [
                                        (0, a.jsx)(o.Heading, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, a.jsx)(o.Button, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await d.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (n(), (0, h.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: _.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            v,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    b(e);
                                                },
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l()(_.nM, _._N, _.uW),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: _.au,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(c.A, { ref: j, onChange: N, multiple: !1 }),
                                    ],
                                }),
                                (0, a.jsx)(o.Button, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, r.A)(), name: "New Profile Effect", config: { effects: [] } });
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsxs)("div", {
                            className: _.uW,
                            children: [
                                (0, a.jsx)(o.Heading, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, a.jsx)(o.ksK, {
                                    value: y,
                                    onChange: (e) => {
                                        E(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: _.xm,
                                    children: S.map((e) =>
                                        (0, a.jsx)(
                                            o.DUT,
                                            {
                                                className: _.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [p.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [p.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [p.qH.REDUCED_MOTION]:
                                                            null != e.reducedMotionSrc && "" !== e.reducedMotionSrc
                                                                ? {
                                                                      src: e.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    b({
                                                        skuId: e.skuId,
                                                        name: e.title,
                                                        readonly: !0,
                                                        config: { effects: e.effects, stillFrames: t },
                                                    });
                                                },
                                                children: (0, a.jsx)("div", {
                                                    className: _.Hd,
                                                    children: (0, a.jsx)(o.Text, {
                                                        variant: "text-md/normal",
                                                        color: "always-white",
                                                        children: e.title,
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
            null != s && (0, a.jsx)(g.A, { effect: s }),
        ],
    });
}
