n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(397927),
    r = n(73153),
    o = n(37962),
    d = n(881520),
    c = n(670455),
    u = n(901647);
let m = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function h() {
    let [e, t] = s.useState(null),
        [n, h] = s.useState(0),
        [x, p] = s.useState(1e3),
        [g, _] = s.useState(0),
        f = (0, i.bG)([d.A], () => (null === e ? null : (d.A.getFeedbackConfig(c.MW[e]) ?? o.u[c.MW[e]]))),
        v = Object.entries(c.MW),
        b = v.slice(v.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        j = s.useMemo(() => null != e && g >= 0 && g <= 100 && n >= 0, [e, g, n]);
    return (0, a.jsx)("div", {
        className: u.kL,
        children: (0, a.jsxs)(l.BJc, {
            gap: 32,
            children: [
                (0, a.jsx)(l.l6P, {
                    label: "Feedback Survey",
                    options: b,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, a.jsxs)(l.nVY, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != f &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: `${f.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: `${f.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: `${f.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: `${f.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, a.jsxs)(l.BJc, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, a.jsx)(l.ksK, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: n.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => h(parseFloat(e)),
                                }),
                                (0, a.jsx)(l.l6P, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: m,
                                    value: x,
                                    onSelectionChange: p,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(l.cGx, {}),
                (0, a.jsx)(l.nVY, {
                    label: "Override Survey Chance",
                    children: (0, a.jsx)(l.ksK, {
                        label: "Override chance",
                        description: null != f ? `Current chance: ${100 * f.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: g.toString(),
                        type: "number",
                        onChange: (e) => _(parseFloat(e)),
                    }),
                }),
                (0, a.jsxs)(l.ButtonGroup, {
                    children: [
                        (0, a.jsx)(l.Button, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != f &&
                                    r.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: f.feedbackType })
                                ),
                            disabled: !j,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != f &&
                                    r.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: f.feedbackType,
                                        cooldown: n * x,
                                        chance: g / 100,
                                    })
                                ),
                            disabled: !j,
                        }),
                    ],
                }),
                null == e &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(n >= 0) &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(g >= 0 && g <= 100) &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
