a.d(t, { A: () => C }), a(508300);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(835245),
    o = a(939249),
    d = a(834730),
    c = a(821609),
    u = a(534514),
    m = a(292666),
    h = a(157559),
    p = a(817363),
    x = a(993408),
    g = a(315949),
    v = a(559474),
    b = a(816866),
    _ = a(87558),
    f = a(918550),
    j = a(314485);
let A = "Make sure you're only uploading text files!",
    y = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: l } = (0, b.wu)();
        return (0, n.jsxs)(o.D, {
            className: j.B0,
            onClick: a,
            children: [
                (0, n.jsx)("div", { className: j.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, n.jsxs)("div", {
                    className: j.eL,
                    children: [
                        (0, n.jsx)(d.E, { variant: "text-md/bold", children: t.name }),
                        (0, n.jsx)(c.$, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), l(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function C() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, b.wu)(),
        [i, C] = l.useState(),
        E = l.useRef(null),
        { categories: S } = (0, g.A)(),
        N = l.useMemo(() => (0, x.Wj)(S), [S]),
        [k, I] = l.useState(""),
        D = l.useMemo(
            () =>
                "" === k
                    ? N
                    : N.filter((e) => {
                          let t = k.toLowerCase(),
                              a = e.title?.toLowerCase() ?? "",
                              n = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || n.includes(t);
                      }),
            [k, N],
        ),
        T = l.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, v.Ni)(A);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, v.Ni)(A);
                let i = JSON.parse(atob(l));
                (i.skuId = (0, r.A)()), t(i), (0, v.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        w = l.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, v.Ni)("Error uploading file. Try again!")
                    : (0, v.KE)(e.currentTarget.files, T, v.Ni);
            },
            [T],
        );
    return (0, n.jsxs)("div", {
        className: j.zr,
        children: [
            null == i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: j.nz,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: s()(j.uW, j.nM),
                                    children: [
                                        (0, n.jsx)(u.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, n.jsx)(c.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await h.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, v.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: j.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, n.jsx)(y, { profileEffect: e, onClick: () => C(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(j.nM, j._N, j.uW),
                            children: [
                                (0, n.jsxs)("div", {
                                    className: j.au,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, n.jsx)(p.A, { ref: E, onChange: w, multiple: !1 }),
                                    ],
                                }),
                                (0, n.jsx)(c.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, r.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, n.jsx)("hr", {}),
                        (0, n.jsxs)("div", {
                            className: j.uW,
                            children: [
                                (0, n.jsx)(u.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, n.jsx)(m.k, {
                                    value: k,
                                    onChange: (e) => {
                                        I(e);
                                    },
                                }),
                                (0, n.jsx)("div", {
                                    className: j.xm,
                                    children: D.map((e) =>
                                        (0, n.jsx)(
                                            o.D,
                                            {
                                                className: j.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [_.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [_.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [_.qH.REDUCED_MOTION]:
                                                            null != e.reducedMotionSrc && "" !== e.reducedMotionSrc
                                                                ? {
                                                                      src: e.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    C({
                                                        skuId: e.skuId,
                                                        name: e.title,
                                                        effects: e.effects,
                                                        stillFrames: t,
                                                        readonly: !0,
                                                    });
                                                },
                                                children: (0, n.jsx)("div", {
                                                    className: j.Hd,
                                                    children: (0, n.jsx)(d.E, {
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
            null != i && (0, n.jsx)(f.A, { profileEffect: i }),
        ],
    });
}
