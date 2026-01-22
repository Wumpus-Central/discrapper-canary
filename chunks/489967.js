n.d(t, { A: () => p }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(73153),
    o = n(37962),
    c = n(881520),
    d = n(670455),
    u = n(901647);
let m = [
    {
        id: "seconds",
        label: "second(s)",
        value: 1000,
    },
    {
        id: "minutes",
        label: "minute(s)",
        value: 60000,
    },
    {
        id: "hours",
        label: "hour(s)",
        value: 3600000,
    },
    {
        id: "days",
        label: "day(s)",
        value: 86400000,
    },
];
function p() {
    let [e, t] = l.useState(null),
        [n, p] = l.useState(0),
        [h, f] = l.useState(1000),
        [x, b] = l.useState(0),
        g = (0, i.bG)([c.A], () => {
            var t;
            return null === e ? null : null != (t = c.A.getFeedbackConfig(d.MW[e])) ? t : o.u[d.MW[e]];
        }),
        v = Object.entries(d.MW),
        j = v.slice(v.length / 2).map((e) => {
            let [t] = e;
            return {
                id: t,
                label: t,
                value: t,
            };
        }),
        y = l.useMemo(() => null != e && x >= 0 && x <= 100 && n >= 0, [e, x, n]);
    return (0, a.jsx)("div", {
        className: u.kL,
        children: (0, a.jsxs)(r.BJc, {
            gap: 32,
            children: [
                (0, a.jsx)(r.l6P, {
                    label: "Feedback Survey",
                    options: j,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, a.jsxs)(r.nVY, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != g &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/semibold",
                                        children: "Current cooldown",
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 1000, " second(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 60000, " minute(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 3600000, " hour(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 86400000, " day(s)"),
                                    }),
                                ],
                            }),
                        (0, a.jsxs)(r.BJc, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, a.jsx)(r.ksK, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: n.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => p(parseFloat(e)),
                                }),
                                (0, a.jsx)(r.l6P, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: m,
                                    value: h,
                                    onSelectionChange: f,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(r.cGx, {}),
                (0, a.jsx)(r.nVY, {
                    label: "Override Survey Chance",
                    children: (0, a.jsx)(r.ksK, {
                        label: "Override chance",
                        description: null != g ? "Current chance: ".concat(100 * g.chance, "%") : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: x.toString(),
                        type: "number",
                        onChange: (e) => b(parseFloat(e)),
                    }),
                }),
                (0, a.jsxs)(r.ButtonGroup, {
                    children: [
                        (0, a.jsx)(r.Button, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != g &&
                                    s.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_CLEAR",
                                        feedbackType: g.feedbackType,
                                    })
                                ),
                            disabled: !y,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != g &&
                                    s.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: g.feedbackType,
                                        cooldown: n * h,
                                        chance: x / 100,
                                    })
                                ),
                            disabled: !y,
                        }),
                    ],
                }),
                null == e &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(n >= 0) &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(x >= 0 && x <= 100) &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
