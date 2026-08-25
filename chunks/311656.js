n.d(t, { A: () => p });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    r = n(691885),
    s = n(922016),
    o = n(866665),
    u = n(939249),
    d = n(783977);
let c = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    m = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
var h = n(295813),
    f = n(375708),
    g = n(752065);
function x(e) {
    let { title: t, modelChoices: n, thinkingChoices: s, value: o, disabled: u, onChange: d } = e,
        x = a.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: m[e.provider] })), [n]),
        p = a.useMemo(() => s.map((e) => ({ id: e, label: c[e] ?? e, value: e })), [s]);
    return (0, l.jsxs)("div", {
        className: g.uW,
        children: [
            (0, l.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(r.l, {
                label: f.intl.string(h.default["9FRudW"]),
                options: x,
                value: o.model,
                onSelectionChange: (e) => d({ ...o, model: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, l.jsx)(r.l, {
                label: f.intl.string(h.default["4AsQHS"]),
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
    let { settings: t, choices: n, disabled: r, onChange: c, className: m, icon: p } = e,
        v = a.useRef(null),
        [j, b] = a.useState(null),
        [y, k] = a.useState(t);
    t !== y && (k(t), b(null));
    let A = j ?? t,
        w = a.useCallback(
            (e) => {
                b(e), c(e);
            },
            [c],
        );
    return (0, l.jsx)(s.Y, {
        targetElementRef: v,
        position: "top",
        align: "right",
        renderPopout: () =>
            (0, l.jsxs)("div", {
                className: g.nd,
                role: "dialog",
                "aria-label": f.intl.string(h.default["2NWMqY"]),
                children: [
                    (0, l.jsx)(x, {
                        title: f.intl.string(h.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: A.main,
                        disabled: r,
                        onChange: (e) => w({ ...A, main: e }),
                    }),
                    (0, l.jsx)(x, {
                        title: f.intl.string(h.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: A.subagent,
                        disabled: r,
                        onChange: (e) => w({ ...A, subagent: e }),
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.string(h.default.ICU5aW),
                    }),
                ],
            }),
        children: (e) =>
            (0, l.jsx)(o.m, {
                text: f.intl.string(h.default.COVYeS),
                ariaHidden: !0,
                children: (0, l.jsx)(u.D, {
                    innerRef: v,
                    className: m ?? g.hZ,
                    "aria-label": f.intl.string(h.default.COVYeS),
                    ...e,
                    children: p ?? (0, l.jsx)(d.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
