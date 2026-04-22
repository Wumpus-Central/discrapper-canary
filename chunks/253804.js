a.d(t, { A: () => f });
var n = a(627968),
    l = a(64700),
    i = a(18051),
    s = a(573613),
    r = a(331322),
    o = a(534514),
    d = a(834730),
    c = a(289873),
    u = a(243721),
    m = a(821609),
    h = a(827734),
    p = a(408278),
    x = a(653887),
    g = a(292666),
    v = a(783878),
    b = a(799226),
    _ = a(241326);
function f() {
    let e = Object.keys(i).map((e) => (0, n.jsx)(y, { riveName: e }, e));
    return (0, n.jsx)(s.Ar, {
        style: { maxHeight: "100%" },
        children: (0, n.jsxs)(r.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, n.jsx)(o.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, n.jsx)(d.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, n.jsx)(j, {}),
                (0, n.jsx)(o.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, n.jsx)(d.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function j() {
    let [e, t] = l.useState(null),
        [a, i] = l.useState(null),
        [s, d] = l.useState(null),
        [u, m] = l.useState([]),
        h = l.useRef(null),
        [p, v] = l.useState(400),
        [b, _] = l.useState(400),
        f = l.useCallback(() => {
            setTimeout(() => {
                d(h.current?.getProperties() ?? {}), m(h.current?.getArtboards() ?? []), i({});
            }, 1e3);
        }, []),
        j = l.useCallback(
            (e, t) => {
                null != a && i((a) => ({ ...a, [e]: { type: s?.[e]?.type, value: t } }));
            },
            [s, a],
        ),
        C = l.useCallback((e) => {
            d(null), i(null), t(e);
        }, []);
    return (0, n.jsxs)(r.B, {
        gap: 16,
        children: [
            (0, n.jsx)(y, { riveName: "Rive inspector", onRiveLoad: C }),
            null != e &&
                (0, n.jsx)("div", {
                    style: { width: p, height: b },
                    children: (0, n.jsx)(x._, { src: e, ref: h, onLoad: f, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, n.jsx)(c.y, {}) : null,
            null != a &&
                (0, n.jsxs)(r.B, {
                    children: [
                        (0, n.jsxs)(r.B, {
                            gap: 8,
                            children: [
                                (0, n.jsx)(o.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, n.jsx)(g.k, {
                                    type: "number",
                                    label: "width",
                                    value: p.toString(),
                                    onChange: (e) => v(parseInt(e)),
                                }),
                                (0, n.jsx)(g.k, {
                                    type: "number",
                                    label: "height",
                                    value: b.toString(),
                                    onChange: (e) => _(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(r.B, {
                            gap: 8,
                            children: [
                                (0, n.jsx)(o.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(s ?? {}).map((e) =>
                                    (0, n.jsx)(
                                        A,
                                        {
                                            property: e,
                                            type: s?.[e]?.type,
                                            value: a?.[e]?.value ?? s?.[e]?.value,
                                            onChange: (t) => j(e, t),
                                            artboards: u,
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
function A(e) {
    let { property: t, type: a, value: l, onChange: i, artboards: s } = e;
    return "string" === a
        ? (0, n.jsx)(g.k, { label: t, value: l, onChange: (e) => i(e) })
        : "number" === a
          ? (0, n.jsx)(g.k, { type: "number", label: t, value: l, onChange: (e) => i(parseInt(e)) })
          : "boolean" === a
            ? (0, n.jsx)(u.d, { label: t, checked: l, onChange: (e) => i(e) })
            : "trigger" === a
              ? (0, n.jsx)(m.$, { text: `Trigger ${t}`, onClick: () => i(Number.isSafeInteger(l) ? l + 1 : 1) })
              : "image" === a
                ? (0, n.jsx)(g.k, { label: t, value: l, onChange: (e) => i(e) })
                : "color" === a
                  ? (0, n.jsx)(v.Z, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => i(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(h.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, n.jsx)(v.Z, {
                          selectionMode: "single",
                          label: t,
                          value: l,
                          onSelectionChange: (e) => i(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function y(e) {
    let { riveName: t, onRiveLoad: a } = e,
        s = i[t]?.riveSrc,
        o = null == s,
        d = l.useRef(null),
        c = (0, b.Gy)(s);
    return (0, n.jsxs)(
        r.B,
        {
            gap: 8,
            children: [
                (0, n.jsx)("label", { children: t }),
                (0, n.jsxs)(r.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, n.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let n = new FileReader();
                                (n.onload = (e) => {
                                    let t = e.target?.result;
                                    null != s && (0, b.DS)(s, t), a?.(t);
                                }),
                                    n.readAsArrayBuffer(t);
                            },
                            ref: d,
                        }),
                        (0, n.jsx)(p.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != d.current && (d.current.value = ""), null != s && (0, b.DS)(s, null), a?.(null);
                            },
                            icon: _.u,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == c && !o,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
