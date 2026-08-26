n.d(t, { A: () => x });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    r = n(691885),
    s = n(922016),
    o = n(866665),
    u = n(939249),
    c = n(783977);
let d = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
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
function p(e) {
    let { title: t, modelChoices: n, thinkingChoices: s, value: o, disabled: u, onChange: c } = e,
        p = a.useMemo(() => n.map((e) => ({ id: e.id, label: e.label, value: e.id, description: m[e.provider] })), [n]),
        x = a.useMemo(() => s.map((e) => ({ id: e, label: d[e] ?? e, value: e })), [s]);
    return (0, l.jsxs)("div", {
        className: g.uW,
        children: [
            (0, l.jsx)(i.E, { variant: "text-sm/semibold", color: "text-default", children: t }),
            (0, l.jsx)(r.l, {
                label: f.intl.string(h.default["9FRudW"]),
                options: p,
                value: o.model,
                onSelectionChange: (e) => c({ ...o, model: e }),
                selectionMode: "single",
                disabled: u,
                fullWidth: !0,
            }),
            (0, l.jsx)(r.l, {
                label: f.intl.string(h.default["4AsQHS"]),
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
    let { settings: t, choices: n, disabled: r, onChange: d, className: m, icon: x } = e,
        v = a.useRef(null),
        [j, b] = a.useState(null),
        [y, A] = a.useState(t);
    t !== y && (A(t), b(null));
    let k = j ?? t,
        w = a.useCallback(
            (e) => {
                b(e), d(e);
            },
            [d],
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
                    (0, l.jsx)(p, {
                        title: f.intl.string(h.default.ISmynF),
                        modelChoices: n.main,
                        thinkingChoices: n.thinking,
                        value: k.main,
                        disabled: r,
                        onChange: (e) => w({ ...k, main: e }),
                    }),
                    (0, l.jsx)(p, {
                        title: f.intl.string(h.default.hdt1ph),
                        modelChoices: n.subagent,
                        thinkingChoices: n.thinking,
                        value: k.subagent,
                        disabled: r,
                        onChange: (e) => w({ ...k, subagent: e }),
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
                    children: x ?? (0, l.jsx)(c.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
