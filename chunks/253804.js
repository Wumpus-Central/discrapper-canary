n.d(t, { A: () => c }), n(508300), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var a = n(627968),
    s = n(64700),
    i = n(18051),
    l = n(158954),
    r = n(827734),
    o = n(732955),
    d = n(397927);
function c() {
    let e = Object.keys(i).map((e) => (0, a.jsx)(h, { riveName: e }, e));
    return (0, a.jsx)(l.ArX, {
        style: { maxHeight: "100%" },
        children: (0, a.jsxs)(l.BJc, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, a.jsx)(l.DZT, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, a.jsx)(l.EYj, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, a.jsx)(u, {}),
                (0, a.jsx)(l.DZT, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, a.jsx)(l.EYj, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function u() {
    let [e, t] = s.useState(null),
        [n, i] = s.useState(null),
        [r, o] = s.useState(null),
        [c, u] = s.useState([]),
        x = s.useRef(null),
        [p, g] = s.useState(400),
        [_, f] = s.useState(400),
        v = s.useCallback(() => {
            setTimeout(() => {
                o(x.current?.getProperties() ?? {}), u(x.current?.getArtboards() ?? []), i({});
            }, 1e3);
        }, []),
        b = s.useCallback(
            (e, t) => {
                null != n && i((n) => ({ ...n, [e]: { type: r?.[e]?.type, value: t } }));
            },
            [r, n],
        ),
        j = s.useCallback((e) => {
            o(null), i(null), t(e);
        }, []);
    return (0, a.jsxs)(l.BJc, {
        gap: 16,
        children: [
            (0, a.jsx)(h, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, a.jsx)("div", {
                    style: { width: p, height: _ },
                    children: (0, a.jsx)(d._7m, { src: e, ref: x, onLoad: v, dynamicDataBinding: n ?? {} }),
                }),
            null != e && null == n ? (0, a.jsx)(l.y$y, {}) : null,
            null != n &&
                (0, a.jsxs)(l.BJc, {
                    children: [
                        (0, a.jsxs)(l.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(l.DZT, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, a.jsx)(d.ksK, {
                                    type: "number",
                                    label: "width",
                                    value: p.toString(),
                                    onChange: (e) => g(parseInt(e)),
                                }),
                                (0, a.jsx)(d.ksK, {
                                    type: "number",
                                    label: "height",
                                    value: _.toString(),
                                    onChange: (e) => f(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(l.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(l.DZT, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(r ?? {}).map((e) =>
                                    (0, a.jsx)(
                                        m,
                                        {
                                            property: e,
                                            type: r?.[e]?.type,
                                            value: n?.[e]?.value ?? r?.[e]?.value,
                                            onChange: (t) => b(e, t),
                                            artboards: c,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function m(e) {
    let { property: t, type: n, value: s, onChange: i, artboards: o } = e;
    return "string" === n
        ? (0, a.jsx)(d.ksK, { label: t, value: s, onChange: (e) => i(e) })
        : "number" === n
          ? (0, a.jsx)(d.ksK, { type: "number", label: t, value: s, onChange: (e) => i(parseInt(e)) })
          : "boolean" === n
            ? (0, a.jsx)(l.dOG, { label: t, checked: s, onChange: (e) => i(e) })
            : "trigger" === n
              ? (0, a.jsx)(l.$nd, { text: `Trigger ${t}`, onClick: () => i(Number.isSafeInteger(s) ? s + 1 : 1) })
              : "image" === n
                ? (0, a.jsx)(d.ksK, { label: t, value: s, onChange: (e) => i(e) })
                : "color" === n
                  ? (0, a.jsx)(d.ZiE, {
                        selectionMode: "single",
                        label: t,
                        value: s,
                        onSelectionChange: (e) => i(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(r.A.colors).map((e) => {
                            let [t, n] = e;
                            return { label: t, value: n, id: t };
                        }),
                    })
                  : "artboard" === n
                    ? (0, a.jsx)(d.ZiE, {
                          selectionMode: "single",
                          label: t,
                          value: s,
                          onSelectionChange: (e) => i(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: o.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function h(e) {
    let { riveName: t, onRiveLoad: n } = e,
        r = i[t]?.riveSrc,
        c = null == r,
        u = s.useRef(null),
        m = (0, d.GyQ)(r);
    return (0, a.jsxs)(
        l.BJc,
        {
            gap: 8,
            children: [
                (0, a.jsx)("label", { children: t }),
                (0, a.jsxs)(l.BJc, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, a.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let a = new FileReader();
                                (a.onload = (e) => {
                                    let t = e.target?.result;
                                    null != r && (0, d.DSP)(r, t),
                                        n?.(
                                            `data:application/octet-stream;base64,${btoa(new Uint8Array(t).reduce((e, t) => e + String.fromCharCode(t), ""))}`,
                                        );
                                }),
                                    a.readAsArrayBuffer(t);
                            },
                            ref: u,
                        }),
                        (0, a.jsx)(o.K0, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != u.current && (u.current.value = ""),
                                    null != r && (0, d.DSP)(r, null),
                                    n?.(null);
                            },
                            icon: d.ucK,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == m && !c,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
