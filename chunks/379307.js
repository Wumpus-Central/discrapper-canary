n.d(t, { A: () => f });
var s = n(477900),
    i = n(582128),
    l = n(834730),
    a = n(691885),
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
function g(e) {
    let { title: t, modelChoices: n, thinkingChoices: r, value: o, disabled: c, onChange: g } = e,
        f = i.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p[e.provider] })), [n]),
        x = i.useMemo(() => r.map((e) => ({ id: e, label: m[e] ?? e, value: e })), [r]);
    return (0, s.jsxs)("div", {
        className: h.uW,
        children: [
            (0, s.jsx)(l.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, s.jsx)(a.l, {
                label: u.intl.string(d.default["9FRudW"]),
                options: f,
                value: o.model,
                onSelectionChange: (e) => g({ ...o, model: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
            (0, s.jsx)(a.l, {
                label: u.intl.string(d.default["4AsQHS"]),
                options: x,
                value: o.thinking,
                onSelectionChange: (e) => g({ ...o, thinking: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
        ],
    });
}
function f(e) {
    let { settings: t, choices: n, disabled: a, onChange: m } = e,
        p = i.useRef(null),
        [f, x] = i.useState(null),
        [v, k] = i.useState(t);
    t !== v && (k(t), x(null));
    let j = f ?? t,
        b = i.useCallback(
            (e) => {
                x(e), m(e);
            },
            [m],
        );
    return (0, s.jsx)(r.Y, {
        targetElementRef: p,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, s.jsxs)("div", {
                className: h.nd,
                role: "dialog",
                "aria-label": u.intl.string(d.default["2NWMqY"]),
                children: [
                    (0, s.jsx)(g, {
                        title: u.intl.string(d.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: j.main,
                        disabled: a,
                        onChange: (e) => b({ ...j, main: e }),
                    }),
                    (0, s.jsx)(g, {
                        title: u.intl.string(d.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: j.subagent,
                        disabled: a,
                        onChange: (e) => b({ ...j, subagent: e }),
                    }),
                    (0, s.jsx)(l.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: u.intl.string(d.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, s.jsx)(o.D, {
                innerRef: p,
                className: h.hZ,
                "aria-label": u.intl.string(d.default.COVYeS),
                ...e,
                children: (0, s.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
