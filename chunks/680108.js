n.d(t, { A: () => y }), n(896048), n(228524), n(747238), n(801460), n(508300), n(650828);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(835245),
    o = n(311907),
    c = n(397927),
    d = n(157559),
    u = n(817363),
    m = n(315949),
    p = n(559474),
    h = n(259248),
    f = n(43708),
    x = n(14752),
    b = n(103748),
    g = n(553622);
let v = "Make sure you're only uploading text files!",
    j = (e) => {
        var t, n, l;
        let { effect: i, onClick: r } = e,
            { deleteConfig: s } = (0, f.wu)();
        return (0, a.jsxs)(c.DUT, {
            className: g.B0,
            onClick: () => {
                r(i);
            },
            children: [
                (0, a.jsx)("div", {
                    className: g.yV,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (l = i.config) || null == (n = l.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, a.jsxs)("div", {
                    className: g.eL,
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
    let { profileEffects: e, upsertConfig: t, clearAll: n } = (0, f.wu)(),
        [i, y] = l.useState(),
        _ = l.useRef(null),
        A = (0, o.yK)([h.A], () => h.A.getAllProfileEffects());
    (0, m.A)();
    let [C, S] = l.useState(""),
        O = l.useMemo(
            () =>
                "" === C
                    ? A
                    : A.filter((e) => {
                          var t, n, a, l;
                          let i = C.toLowerCase(),
                              r = null != (t = null == (a = e.config.title) ? void 0 : a.toLowerCase()) ? t : "",
                              s = null != (n = null == (l = e.config.description) ? void 0 : l.toLowerCase()) ? n : "";
                          return r.includes(i) || s.includes(i);
                      }),
            [C, A],
        ),
        E = l.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, p.Ni)(v);
                let [a, l] = n.split(",");
                if (!a.includes("text/plain")) return (0, p.Ni)(v);
                let i = JSON.parse(atob(l));
                (i.skuId = (0, s.A)()), t(i), (0, p.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        N = l.useCallback(
            (e) => {
                var t;
                (null == (t = e.currentTarget) ? void 0 : t.files) == null
                    ? (0, p.Ni)("Error uploading file. Try again!")
                    : (0, p.KE)(e.currentTarget.files, E, p.Ni);
            },
            [E],
        );
    return (0, a.jsxs)("div", {
        className: g.zr,
        children: [
            null == i &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: g.nz,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: r()(g.uW, g.nM),
                                    children: [
                                        (0, a.jsx)(c.Heading, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await d.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (n(), (0, p.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: g.Iv,
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
                            className: r()(g.nM, g._N, g.uW),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: g.au,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, a.jsx)(u.A, {
                                            ref: _,
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
                                            skuId: (0, s.A)(),
                                            name: "New Profile Effect",
                                            config: { effects: [] },
                                        });
                                    },
                                }),
                            ],
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsxs)("div", {
                            className: g.uW,
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: "heading-xl/bold",
                                    children: "All Effects",
                                }),
                                (0, a.jsx)(c.ksK, {
                                    value: C,
                                    onChange: (e) => {
                                        S(e);
                                    },
                                }),
                                (0, a.jsx)("div", {
                                    className: g.xm,
                                    children: O.map((e) =>
                                        (0, a.jsx)(
                                            c.DUT,
                                            {
                                                className: g.S5,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    let t = {
                                                        [x.qH.THUMBNAIL]:
                                                            null != e.config.thumbnailPreviewSrc &&
                                                            "" !== e.config.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.config.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [x.qH.STATIC]:
                                                            null != e.config.staticFrameSrc &&
                                                            "" !== e.config.staticFrameSrc
                                                                ? {
                                                                      src: e.config.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [x.qH.REDUCED_MOTION]:
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
                                                    className: g.Hd,
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
            null != i && (0, a.jsx)(b.A, { effect: i }),
        ],
    });
}
