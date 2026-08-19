n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    s = n(691885),
    r = n(922016),
    o = n(939249),
    c = n(783977),
    d = n(818085),
    u = n(375708),
    h = n(786472);
let m = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    p = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
function f(e) {
    let { title: t, modelChoices: n, thinkingChoices: r, value: o, disabled: c, onChange: f } = e,
        g = a.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p[e.provider] })), [n]),
        x = a.useMemo(() => r.map((e) => ({ id: e, label: m[e] ?? e, value: e })), [r]);
    return (0, l.jsxs)("div", {
        className: h.uW,
        children: [
            (0, l.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(s.l, {
                label: u.intl.string(d.default["9FRudW"]),
                options: g,
                value: o.model,
                onSelectionChange: (e) => f({ ...o, model: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
            (0, l.jsx)(s.l, {
                label: u.intl.string(d.default["4AsQHS"]),
                options: x,
                value: o.thinking,
                onSelectionChange: (e) => f({ ...o, thinking: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
        ],
    });
}
function g(e) {
    let { settings: t, choices: n, disabled: s, onChange: m } = e,
        p = a.useRef(null),
        [g, x] = a.useState(null),
        [v, b] = a.useState(t);
    t !== v && (b(t), x(null));
    let k = g ?? t,
        j = a.useCallback(
            (e) => {
                x(e), m(e);
            },
            [m],
        );
    return (0, l.jsx)(r.Y, {
        targetElementRef: p,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, l.jsxs)("div", {
                className: h.nd,
                role: "dialog",
                "aria-label": u.intl.string(d.default["2NWMqY"]),
                children: [
                    (0, l.jsx)(f, {
                        title: u.intl.string(d.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: k.main,
                        disabled: s,
                        onChange: (e) => j({ ...k, main: e }),
                    }),
                    (0, l.jsx)(f, {
                        title: u.intl.string(d.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: k.subagent,
                        disabled: s,
                        onChange: (e) => j({ ...k, subagent: e }),
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: u.intl.string(d.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, l.jsx)(o.D, {
                innerRef: p,
                className: h.hZ,
                "aria-label": u.intl.string(d.default.COVYeS),
                ...e,
                children: (0, l.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
