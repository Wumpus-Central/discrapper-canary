n.d(t, { A: () => x });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    s = n(691885),
    r = n(922016),
    o = n(866665),
    u = n(939249),
    c = n(783977);
let d = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    h = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
var m = n(295813),
    f = n(375708),
    p = n(752065);
function g(e) {
    let { title: t, modelChoices: n, thinkingChoices: r, value: o, disabled: u, onChange: c } = e,
        g = a.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: h[e.provider] })), [n]),
        x = a.useMemo(() => r.map((e) => ({ id: e, label: d[e] ?? e, value: e })), [r]);
    return (0, l.jsxs)("div", {
        className: p.uW,
        children: [
            (0, l.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(s.l, {
                label: f.intl.string(m.default["9FRudW"]),
                options: g,
                value: o.model,
                onSelectionChange: (e) => c({ ...o, model: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, l.jsx)(s.l, {
                label: f.intl.string(m.default["4AsQHS"]),
                options: x,
                value: o.thinking,
                onSelectionChange: (e) => c({ ...o, thinking: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
        ],
    });
}
function x(e) {
    let { settings: t, choices: n, disabled: s, onChange: d, className: h, icon: x } = e,
        v = a.useRef(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(t);
    t !== y && (k(t), j(null));
    let w = b ?? t,
        A = a.useCallback(
            (e) => {
                j(e), d(e);
            },
            [d],
        );
    return (0, l.jsx)(r.Y, {
        targetElementRef: v,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, l.jsxs)("div", {
                className: p.nd,
                role: "dialog",
                "aria-label": f.intl.string(m.default["2NWMqY"]),
                children: [
                    (0, l.jsx)(g, {
                        title: f.intl.string(m.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: w.main,
                        disabled: s,
                        onChange: (e) => A({ ...w, main: e }),
                    }),
                    (0, l.jsx)(g, {
                        title: f.intl.string(m.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: w.subagent,
                        disabled: s,
                        onChange: (e) => A({ ...w, subagent: e }),
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.string(m.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, l.jsx)(o.m, {
                text: f.intl.string(m.default.COVYeS),
                ariaHidden: !0,
                children: (0, l.jsx)(u.D, {
                    innerRef: v,
                    className: h ?? p.hZ,
                    "aria-label": f.intl.string(m.default.COVYeS),
                    ...e,
                    children: x ?? (0, l.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
