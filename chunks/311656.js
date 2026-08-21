n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    s = n(691885),
    r = n(922016),
    o = n(939249),
    c = n(783977);
let d = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    u = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
var h = n(459864),
    m = n(375708),
    f = n(752065);
function p(e) {
    let { title: t, modelChoices: n, thinkingChoices: r, value: o, disabled: c, onChange: p } = e,
        g = a.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: u[e.provider] })), [n]),
        x = a.useMemo(() => r.map((e) => ({ id: e, label: d[e] ?? e, value: e })), [r]);
    return (0, l.jsxs)("div", {
        className: f.uW,
        children: [
            (0, l.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(s.l, {
                label: m.intl.string(h.default["9FRudW"]),
                options: g,
                value: o.model,
                onSelectionChange: (e) => p({ ...o, model: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
            (0, l.jsx)(s.l, {
                label: m.intl.string(h.default["4AsQHS"]),
                options: x,
                value: o.thinking,
                onSelectionChange: (e) => p({ ...o, thinking: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
        ],
    });
}
function g(e) {
    let { settings: t, choices: n, disabled: s, onChange: d, className: u, icon: g } = e,
        x = a.useRef(null),
        [v, b] = a.useState(null),
        [j, y] = a.useState(t);
    t !== j && (y(t), b(null));
    let k = v ?? t,
        w = a.useCallback(
            (e) => {
                b(e), d(e);
            },
            [d],
        );
    return (0, l.jsx)(r.Y, {
        targetElementRef: x,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, l.jsxs)("div", {
                className: f.nd,
                role: "dialog",
                "aria-label": m.intl.string(h.default["2NWMqY"]),
                children: [
                    (0, l.jsx)(p, {
                        title: m.intl.string(h.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: k.main,
                        disabled: s,
                        onChange: (e) => w({ ...k, main: e }),
                    }),
                    (0, l.jsx)(p, {
                        title: m.intl.string(h.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: k.subagent,
                        disabled: s,
                        onChange: (e) => w({ ...k, subagent: e }),
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: m.intl.string(h.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, l.jsx)(o.D, {
                innerRef: x,
                className: u ?? f.hZ,
                "aria-label": m.intl.string(h.default.COVYeS),
                ...e,
                children: g ?? (0, l.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
