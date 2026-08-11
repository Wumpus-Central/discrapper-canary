n.d(t, { A: () => f });
var l = n(477900),
    i = n(582128),
    s = n(834730),
    a = n(691885),
    r = n(922016),
    o = n(939249),
    c = n(783977),
    d = n(818085),
    u = n(375708),
    h = n(786472);
let p = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    m = { anthropic: "Anthropic", openai: "OpenAI", "workers-ai": "Workers AI (dev)" };
function g(e) {
    let { title: t, modelChoices: n, thinkingChoices: r, value: o, disabled: c, onChange: g } = e,
        f = i.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: m[e.provider] })), [n]),
        x = i.useMemo(() => r.map((e) => ({ id: e, label: p[e] ?? e, value: e })), [r]);
    return (0, l.jsxs)("div", {
        className: h.uW,
        children: [
            (0, l.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(a.l, {
                label: u.intl.string(d.default["9FRudW"]),
                options: f,
                value: o.model,
                onSelectionChange: (e) => g({ ...o, model: e }),
                selectionMode: "single",
                disabled: c,
                fullWidth: !0,
            }),
            (0, l.jsx)(a.l, {
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
    let { settings: t, choices: n, disabled: a, onChange: p } = e,
        m = i.useRef(null),
        [f, x] = i.useState(null),
        [v, j] = i.useState(t);
    t !== v && (j(t), x(null));
    let _ = f ?? t,
        b = i.useCallback(
            (e) => {
                x(e), p(e);
            },
            [p],
        );
    return (0, l.jsx)(r.Y, {
        targetElementRef: m,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, l.jsxs)("div", {
                className: h.nd,
                role: "dialog",
                "aria-label": u.intl.string(d.default["2NWMqY"]),
                children: [
                    (0, l.jsx)(g, {
                        title: u.intl.string(d.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: _.main,
                        disabled: a,
                        onChange: (e) => b({ ..._, main: e }),
                    }),
                    (0, l.jsx)(g, {
                        title: u.intl.string(d.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: _.subagent,
                        disabled: a,
                        onChange: (e) => b({ ..._, subagent: e }),
                    }),
                    (0, l.jsx)(s.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: u.intl.string(d.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, l.jsx)(o.D, {
                innerRef: m,
                className: h.hZ,
                "aria-label": u.intl.string(d.default.COVYeS),
                ...e,
                children: (0, l.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
