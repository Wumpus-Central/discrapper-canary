l.d(t, { A: () => p });
var n = l(477900),
    a = l(582128),
    i = l(834730),
    r = l(691885),
    s = l(922016),
    o = l(866665),
    u = l(939249),
    d = l(783977);
let c = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    m = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
var f = l(295813),
    h = l(375708),
    g = l(752065);
function x(e) {
    let { title: t, modelChoices: l, thinkingChoices: s, value: o, disabled: u, onChange: d } = e,
        x = a.useMemo(() => l.map((e) => ({ id: e.id, label: e.label, value: e.id, description: m[e.provider] })), [l]),
        p = a.useMemo(() => s.map((e) => ({ id: e, label: c[e] ?? e, value: e })), [s]);
    return (0, n.jsxs)("div", {
        className: g.uW,
        children: [
            (0, n.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, n.jsx)(r.l, {
                label: h.intl.string(f.default["9FRudW"]),
                options: x,
                value: o.model,
                onSelectionChange: (e) => d({ ...o, model: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, n.jsx)(r.l, {
                label: h.intl.string(f.default["4AsQHS"]),
                options: p,
                value: o.thinking,
                onSelectionChange: (e) => d({ ...o, thinking: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
        ],
    });
}
function p(e) {
    let { settings: t, choices: l, disabled: r, onChange: c, className: m, icon: p } = e,
        v = a.useRef(null),
        [j, b] = a.useState(null),
        [y, A] = a.useState(t);
    t !== y && (A(t), b(null));
    let k = j ?? t,
        N = a.useCallback(
            (e) => {
                b(e), c(e);
            },
            [c],
        );
    return (0, n.jsx)(s.Y, {
        targetElementRef: v,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, n.jsxs)("div", {
                className: g.nd,
                role: "dialog",
                "aria-label": h.intl.string(f.default["2NWMqY"]),
                children: [
                    (0, n.jsx)(x, {
                        title: h.intl.string(f.default.ISmynF),
                        modelChoices: l.main,
                        thinkingChoices: l.thinking,
                        value: k.main,
                        disabled: r,
                        onChange: (e) => N({ ...k, main: e }),
                    }),
                    (0, n.jsx)(x, {
                        title: h.intl.string(f.default.hdt1ph),
                        modelChoices: l.subagent,
                        thinkingChoices: l.thinking,
                        value: k.subagent,
                        disabled: r,
                        onChange: (e) => N({ ...k, subagent: e }),
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: h.intl.string(f.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, n.jsx)(o.m, {
                text: h.intl.string(f.default.COVYeS),
                ariaHidden: !0,
                children: (0, n.jsx)(u.D, {
                    innerRef: v,
                    className: m ?? g.hZ,
                    "aria-label": h.intl.string(f.default.COVYeS),
                    ...e,
                    children: p ?? (0, n.jsx)(d.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
