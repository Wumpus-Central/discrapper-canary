n.d(t, { A: () => j }), n(508300);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(835245),
    o = n(311907),
    d = n(397927),
    c = n(157559),
    u = n(817363),
    m = n(315949),
    h = n(559474),
    x = n(920394),
    p = n(816866),
    g = n(87558),
    _ = n(918550),
    f = n(525221);
let v = "Make sure you're only uploading text files!",
    b = (e) => {
        let { effect: t, onClick: n } = e,
            { deleteConfig: i } = (0, p.wu)();
        return (0, a.jsxs)(d.DUT, {
            className: f.B0,
            onClick: () => {
                n(t);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.yV,
                    style: { backgroundImage: `url(${t.config?.effects?.[0]?.base64})` },
                }),
                (0, a.jsxs)("div", {
                    className: f.eL,
                    children: [
                        (0, a.jsx)(d.Text, { variant: "text-md/bold", children: t.name }),
                        (0, a.jsx)(d.Button, {
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
function j() {
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, p.wu)(),
        [s, j] = i.useState(),
        A = i.useRef(null),
        C = (0, o.yK)([x.A], () => x.A.getAllProfileEffects());
    (0, m.A)();
    let [y, T] = i.useState(""),
        S = i.useMemo(
            () =>
                "" === y
                    ? C
                    : C.filter((e) => {
                          let t = y.toLowerCase(),
                              n = e.config.title?.toLowerCase() ?? "",
                              a = e.config.description?.toLowerCase() ?? "";
                          return n.includes(t) || a.includes(t);
                      }),
            [y, C],
        ),
        E = i.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, h.Ni)(v);
                let [a, i] = n.split(",");
                if (!a.includes("text/plain")) return (0, h.Ni)(v);
                let s = JSON.parse(atob(i));
                (s.skuId = (0, r.A)()), t(s), (0, h.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        N = i.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, h.Ni)("Error uploading file. Try again!")
                    : (0, h.KE)(e.currentTarget.files, E, h.Ni);
            },
            [E],
        );
    return (0, a.jsxs)("div", {
        className: f.zr,
        children: [
            null == s &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: f.nz,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l()(f.uW, f.nM),
                                    children: [
                                        (0, a.jsx)(d.Heading, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, a.jsx)(d.Button, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await c.A.confirm({
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
                                    className: f.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, a.jsx)(
                                            b,
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
                            className: l()(f.nM, f._N, f.uW),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: f.au,
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(u.A, { ref: A, onChange: N, multiple: !1 }),
                                    ],
                                }),
                                (0, a.jsx)(d.Button, {
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
                            className: f.uW,
                            children: [
                                (0, a.jsx)(d.Heading, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, a.jsx)(d.ksK, {
                                    value: y,
                                    onChange: (e) => {
                                        T(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: f.xm,
                                    children: S.map((e) =>
                                        (0, a.jsx)(
                                            d.DUT,
                                            {
                                                className: f.S5,
                                                style: { backgroundImage: `url(${e.config.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [g.qH.THUMBNAIL]:
                                                            null != e.config.thumbnailPreviewSrc &&
                                                            "" !== e.config.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.config.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [g.qH.STATIC]:
                                                            null != e.config.staticFrameSrc &&
                                                            "" !== e.config.staticFrameSrc
                                                                ? {
                                                                      src: e.config.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [g.qH.REDUCED_MOTION]:
                                                            null != e.config.reducedMotionSrc &&
                                                            "" !== e.config.reducedMotionSrc
                                                                ? {
                                                                      src: e.config.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    j({
                                                        skuId: e.skuId,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: { effects: e.config.effects, stillFrames: t },
                                                    });
                                                },
                                                children: (0, a.jsx)("div", {
                                                    className: f.Hd,
                                                    children: (0, a.jsx)(d.Text, {
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
            null != s && (0, a.jsx)(_.A, { effect: s }),
        ],
    });
}
