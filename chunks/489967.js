a.d(t, { A: () => f });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(331322),
    r = a(691885),
    o = a(270003),
    d = a(834730),
    c = a(292666),
    u = a(404778),
    m = a(825484),
    h = a(821609),
    p = a(73153),
    x = a(37962),
    g = a(881520),
    v = a(670455),
    b = a(861160);
let _ = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function f() {
    let [e, t] = l.useState(null),
        [a, f] = l.useState(0),
        [j, A] = l.useState(1e3),
        [y, C] = l.useState(0),
        E = (0, i.bG)([g.A], () => (null === e ? null : (g.A.getFeedbackConfig(v.MW[e]) ?? x.u[v.MW[e]]))),
        S = Object.entries(v.MW),
        N = S.slice(S.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        k = l.useMemo(() => null != e && y >= 0 && y <= 100 && a >= 0, [e, y, a]);
    return (0, n.jsx)("div", {
        className: b.kL,
        children: (0, n.jsxs)(s.B, {
            gap: 32,
            children: [
                (0, n.jsx)(r.l, {
                    label: "Feedback Survey",
                    options: N,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, n.jsxs)(o.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != E &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/normal",
                                        children: `${E.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/normal",
                                        children: `${E.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/normal",
                                        children: `${E.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/normal",
                                        children: `${E.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, n.jsxs)(s.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, n.jsx)(c.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => f(parseFloat(e)),
                                }),
                                (0, n.jsx)(r.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: _,
                                    value: j,
                                    onSelectionChange: A,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(u.c, {}),
                (0, n.jsx)(o.n, {
                    label: "Override Survey Chance",
                    children: (0, n.jsx)(c.k, {
                        label: "Override chance",
                        description: null != E ? `Current chance: ${100 * E.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: y.toString(),
                        type: "number",
                        onChange: (e) => C(parseFloat(e)),
                    }),
                }),
                (0, n.jsxs)(m.e, {
                    children: [
                        (0, n.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != E &&
                                    p.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: E.feedbackType })
                                ),
                            disabled: !k,
                        }),
                        (0, n.jsx)(h.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != E &&
                                    p.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: E.feedbackType,
                                        cooldown: a * j,
                                        chance: y / 100,
                                    })
                                ),
                            disabled: !k,
                        }),
                    ],
                }),
                null == e &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(y >= 0 && y <= 100) &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
